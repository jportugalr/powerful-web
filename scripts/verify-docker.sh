#!/usr/bin/env bash
set -euo pipefail

fail() {
    printf 'ERROR: %s\n' "$*" >&2
    exit 1
}

for tool in docker curl sha256sum; do
    command -v "$tool" >/dev/null 2>&1 || fail "Falta el comando requerido: $tool."
done

repo_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"
dev_compose=(docker compose -f compose.yaml)
web_compose=(docker compose -f compose.production.yaml)

docker info >/dev/null 2>&1 || fail 'Docker no responde; inicia el daemon local.'
"${dev_compose[@]}" config --quiet || fail 'Configuración Compose de desarrollo inválida.'
"${web_compose[@]}" config --quiet || fail 'Configuración Compose de producción inválida.'

dev_id="$("${dev_compose[@]}" ps --status running -q dev)" || fail 'No se pudo consultar desarrollo.'
web_id="$("${web_compose[@]}" ps --status running -q web)" || fail 'No se pudo consultar producción.'
[[ -n "$dev_id" ]] || fail 'El servicio dev no está arriba. Ejecuta: docker compose up -d --build'
[[ -n "$web_id" ]] || fail 'El servicio web no está arriba. Ejecuta: docker compose -f compose.production.yaml up -d --build'

dev_endpoint="$("${dev_compose[@]}" port dev 4321)" || fail 'No se pudo obtener el puerto de dev.'
web_endpoint="$("${web_compose[@]}" port web 8080)" || fail 'No se pudo obtener el puerto de web.'
[[ "$dev_endpoint" =~ ^127\.0\.0\.1:[0-9]+$ ]] || fail "Dev debe publicar solo en loopback: $dev_endpoint"
[[ "$web_endpoint" =~ ^127\.0\.0\.1:[0-9]+$ ]] || fail "Web debe publicar solo en loopback: $web_endpoint"

expect_status() {
    local expected="$1" url="$2" actual
    actual="$(curl --silent --show-error --connect-timeout 5 --max-time 10 \
        --output /dev/null --write-out '%{http_code}' "$url")" || fail "Sin respuesta HTTP: $url"
    [[ "$actual" == "$expected" ]] || fail "$url devolvió $actual; se esperaba $expected."
    printf 'OK HTTP %s %s\n' "$actual" "$url"
}

expect_custom_404() {
    local url="$1" response status body
    response="$(curl --silent --show-error --connect-timeout 5 --max-time 10 \
        --write-out '\n%{http_code}' "$url")" || fail "Sin respuesta HTTP: $url"
    status="${response##*$'\n'}"
    body="${response%$'\n'*}"
    [[ "$status" == 404 ]] || fail "$url devolvió $status; se esperaba 404."
    [[ "$body" == *'404 / NO ENCONTRADO'* ]] \
        || fail "$url no contiene la página 404 de POWERFUL."
    printf 'OK página 404 de POWERFUL y HTTP 404 %s\n' "$url"
}

expect_status 200 "http://$dev_endpoint/@vite/client"
expect_status 200 "http://$web_endpoint/healthz"
expect_status 200 "http://$web_endpoint/404.html"
expect_custom_404 "http://$web_endpoint/__docker_smoke_missing_7c1d9a__/"

local_hash="$(sha256sum public/brand/powerful-master.png)"
local_hash="${local_hash%% *}"
for endpoint in "$dev_endpoint" "$web_endpoint"; do
    served_hash="$(curl --fail --silent --show-error --connect-timeout 5 --max-time 10 \
        "http://$endpoint/brand/powerful-master.png" | sha256sum)" || fail "No se pudo descargar el logo de $endpoint."
    served_hash="${served_hash%% *}"
    [[ "$served_hash" == "$local_hash" ]] || fail "El logo servido por $endpoint difiere del original público."
    printf 'OK logo SHA256 %s en %s\n' "$served_hash" "$endpoint"
done

runtime_uid="$("${web_compose[@]}" exec -T web id -u)" || fail 'No se pudo consultar el usuario de Nginx.'
[[ "$runtime_uid" =~ ^[0-9]+$ && "$runtime_uid" != 0 ]] || fail "Runtime debe ejecutarse sin root; UID=$runtime_uid"
"${web_compose[@]}" exec -T web sh -c \
    'if command -v node >/dev/null 2>&1 || command -v nodejs >/dev/null 2>&1; then exit 1; fi' \
    || fail 'El runtime contiene Node o no se pudo inspeccionar.'

printf 'OK runtime UID=%s, sin Node; ambos puertos en loopback.\n' "$runtime_uid"
printf 'Smoke Docker completado. No se modificaron ni detuvieron servicios.\n'
