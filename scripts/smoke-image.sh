#!/usr/bin/env bash
set -euo pipefail

fail() {
    printf 'ERROR: %s\n' "$*" >&2
    exit 1
}

image="${1:-}"
[[ -n "$image" ]] || fail 'Uso: bash scripts/smoke-image.sh IMAGE_REF'
command -v docker >/dev/null 2>&1 || fail 'Falta el comando requerido: docker.'
command -v curl >/dev/null 2>&1 || fail 'Falta el comando requerido: curl.'

container_name="powerful-web-smoke-$$-${RANDOM}"
body_file="$(mktemp)"

cleanup() {
    docker rm --force "$container_name" >/dev/null 2>&1 || true
    rm -f -- "$body_file"
}
trap cleanup EXIT

docker run --detach --name "$container_name" --publish 127.0.0.1::8080 "$image" >/dev/null \
    || fail "No se pudo iniciar la imagen $image."

host_port="$(docker port "$container_name" 8080/tcp | awk -F: '$1 == "127.0.0.1" { print $NF; exit }')"
[[ "$host_port" =~ ^[0-9]+$ ]] || fail 'No se pudo obtener el puerto local asignado al contenedor.'
base_url="http://127.0.0.1:$host_port"

health_status=''
for _ in {1..30}; do
    health_status="$(curl --silent --show-error --connect-timeout 2 --max-time 5 \
        --output /dev/null --write-out '%{http_code}' "$base_url/healthz" 2>/dev/null || true)"
    [[ "$health_status" == '200' ]] && break
    sleep 1
done
[[ "$health_status" == '200' ]] || fail "El contenedor no respondió 200 en /healthz (HTTP ${health_status:-sin respuesta})."
printf 'OK HTTP 200 %s/healthz\n' "$base_url"

expect_status() {
    local expected="$1" path="$2" actual
    actual="$(curl --silent --show-error --connect-timeout 3 --max-time 10 \
        --output /dev/null --write-out '%{http_code}' "$base_url$path")" \
        || fail "Sin respuesta HTTP: $base_url$path"
    [[ "$actual" == "$expected" ]] || fail "$base_url$path devolvió $actual; se esperaba $expected."
    printf 'OK HTTP %s %s\n' "$actual" "$path"
}

expect_status 200 /
expect_status 200 /brand/powerful-master.png

missing_path='/__ci_smoke_missing_7c1d9a__/'
missing_status="$(curl --silent --show-error --connect-timeout 3 --max-time 10 \
    --output "$body_file" --write-out '%{http_code}' "$base_url$missing_path")" \
    || fail "Sin respuesta HTTP: $base_url$missing_path"
[[ "$missing_status" == '404' ]] \
    || fail "$base_url$missing_path devolvió $missing_status; se esperaba 404."
grep --fixed-strings --quiet '404 / NO ENCONTRADO' "$body_file" \
    || fail "$base_url$missing_path no contiene la página 404 de POWERFUL."
printf 'OK página 404 de POWERFUL y HTTP 404 %s\n' "$missing_path"

printf 'Smoke de imagen completado para %s.\n' "$image"
