# POWERFUL — web corporativa

Portada en Astro y TypeScript para la representación empresarial en Perú. Lanzamiento en español, con contenido mantenido en el proyecto y preparado para traducción futura. Sin CMS.

## Desarrollo local

Requiere Node.js >= 22.22 y npm >= 9.6.5. Entorno verificado: WSL Ubuntu 24.04 con Node 24.16.0.

```sh
npm ci
npm run dev
```

La aplicación escucha en `http://localhost:4321`. Dentro del WSL de este proyecto, si Node no está en PATH:

```sh
export PATH=/home/jony/.nvm/versions/node/v24.16.0/bin:$PATH
```

## Verificación

```sh
npm run check
npm run build
npm run preview
```

TDD estricto desactivado por decisión explícita del usuario; se realizan chequeos funcionales y revisión real de navegador. El modo de review nativo está disabled/unmanaged.

## Alcance y marca

El sitio aún no recibe consultas ni conecta proveedores de correo o almacenamiento. No hay despliegue autorizado. El expediente original está en `Powerful/` y queda fuera de Git; no se altera ni se sustituye. `public/brand/powerful-master.png` es la copia exacta del maestro V1.2 aprobado (SHA256 `762f5883c7218d45b4df0ab0f11b20eec1c931b4536f2cc8df7684227e74bbc4`).

`PRODUCT.md` recoge los hechos confirmados; `odd/tasks/portada-powerful.md` registra alcance, tareas, comprobaciones y pendientes. Hosting, contacto corporativo, datos legales y pruebas de trayectoria siguen pendientes de confirmación.
