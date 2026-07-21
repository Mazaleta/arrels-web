# Arrels Web

Web pública de Arrels construida como una aplicación React + TypeScript de una sola página. La implementación es independiente de OpenProject y está organizada en componentes reutilizables para poder sustituir imágenes, textos, enlaces y el videojuego sin rehacer la estructura.

## Incluye

- hero inmersivo y navegación por scroll;
- secciones Visión, El Sueño, Universo, Puzle mensual, Arrels Lab, Arrels Studio y Contacto;
- partículas ambientales lentas, decorativas y desactivables mediante `prefers-reduced-motion`;
- valenciano, castellano e inglés desde `src/content.ts`;
- navegación responsive y operable con teclado;
- módulo de cookies accesible en todo momento mediante la rama fija;
- política de cookies dentro de la propia interfaz;
- zona de integración para un videojuego WebGL propio o alojado externamente;
- formulario de contacto mediante endpoint o `mailto:` como respaldo;
- recursos visuales provisionales reemplazables por nombre de archivo.

## Requisitos

- Node.js 20.19+, 22.12+ o 24+
- pnpm 11

## Desarrollo

```powershell
pnpm install
Copy-Item .env.example .env
pnpm dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173`.

Comprobaciones disponibles:

```powershell
pnpm typecheck
pnpm test
pnpm build
pnpm preview
```

## Configuración

Las variables públicas se documentan en `.env.example`:

- `VITE_GAME_URL`: URL o ruta del videojuego web;
- `VITE_STEAM_URL`: página de Steam de El Sueño;
- `VITE_DEVELOPMENT_URL`: diario o red de desarrollo;
- `VITE_CONTACT_ENDPOINT`: endpoint `POST` del formulario;
- `VITE_CONTACT_EMAIL`: correo usado si no hay endpoint.

No se debe guardar ningún secreto en variables `VITE_*`: Vite las incorpora al JavaScript que recibe el navegador.

## Cambiar contenido o imágenes

Los textos de los tres idiomas viven en `src/content.ts`. Los nombres de producto, como `El Sueño`, `Arrels Lab` y `Arrels Studio`, permanecen iguales en todos los idiomas.

Los assets activos están en `public/images`. Para sustituir una imagen sin tocar React, se puede conservar el mismo nombre y proporción aproximada:

- `hero-world.webp` — 16:9;
- `dream-greenhouse.webp` — 16:9;
- `universe-tree.webp` — 3:2 con sujeto centrado;
- `monthly-puzzle-lab.webp` — 16:9.

Al reemplazarlos hay que revisar también los textos alternativos en los tres idiomas. Las capturas originales de dirección artística están preservadas en `docs/references` y los detalles de los assets provisionales en `docs/VISUAL_ASSETS.md`.

## Videojuego

La web no presupone motor. Puede alojar una exportación WebGL propia bajo `/game/` o embeber una URL externa. El procedimiento, seguridad, consentimiento y lista de comprobación están en [docs/GAME_INTEGRATION.md](docs/GAME_INTEGRATION.md).

## Cookies y privacidad

La versión actual no instala analítica ni publicidad. Guarda en `localStorage`:

- `arrels-cookie-preferences`, siempre, para recordar la decisión;
- `arrels-language`, solo si se aceptan preferencias.

Los juegos y vídeos externos no se cargan hasta aceptar la categoría de contenido externo. La rama de la interfaz permite modificar la elección o leer la política en cualquier momento.

## Accesibilidad

La base sigue WCAG 2.2 AA como objetivo: estructura semántica, enlace para saltar al contenido, etiquetas reales, foco visible, objetivos táctiles, contraste reforzado, navegación por teclado y respeto a reducción de movimiento y aumento de contraste. `pnpm test` ejecuta además una inspección con axe-core.

Toda imagen nueva necesita un propósito definido y texto alternativo localizado. Si una decisión visual futura impide cumplir contraste, teclado, reducción de movimiento o comprensión del contenido, debe resolverse antes de publicarla o documentarse y consultarse expresamente.

## Planificación anterior

`docs/OPENPROJECT_TASKS.md` y `docs/BACKLOG.md` se conservan únicamente como contexto histórico. Ya no controlan la construcción de esta web.
