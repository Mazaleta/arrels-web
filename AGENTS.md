# AGENTS.md — Arrels Web

## Objetivo

Mantener una landing de Arrels cálida, botánica, pausada y accesible. Es una aplicación React + TypeScript de una sola página; OpenProject no forma parte del flujo activo.

## Comandos obligatorios antes de entregar cambios

```powershell
pnpm typecheck
pnpm test
pnpm build
```

## Mapa del proyecto

- `src/App.tsx`: estado global de idioma, consentimiento y composición de página.
- `src/content.ts`: única fuente de textos en valenciano, castellano e inglés.
- `src/components/Sections.tsx`: secciones narrativas y bloques reutilizables.
- `src/components/Header.tsx`: navegación responsive y selector de idioma.
- `src/components/AmbientParticles.tsx`: capa fija de partículas decorativas con trayectorias aleatorias.
- `src/components/cookies/CookieCenter.tsx`: consentimiento, rama y política.
- `src/components/GameEmbed.tsx`: carga diferida del videojuego.
- `src/components/ContactForm.tsx`: endpoint o respaldo por correo.
- `src/styles.css`: sistema visual, responsive y preferencias de accesibilidad.
- `public/images`: assets activos.
- `docs/references`: capturas originales proporcionadas por la usuaria.
- `docs/GAME_INTEGRATION.md`: contrato de integración del juego.

## Reglas de contenido

1. Todo texto visible nuevo debe existir en `ca`, `es` y `en`.
2. `El Sueño`, `Arrels`, `Arrels Lab`, `Arrels Studio` y `Botanical Escapes` son nombres propios y no se traducen.
3. No inventar cifras, fechas, integrantes, enlaces comerciales o afirmaciones sobre el juego sin confirmación. Las estadísticas actuales son contenido visual provisional.
4. Antes de reemplazar imágenes, pedir o confirmar nombre del recurso, texto alternativo y recorte esperado cuando no estén claros.

## Reglas visuales

- Mantener la paleta marfil, verde salvia/bosque, dorado y acentos cian.
- Tipografía serif para títulos y sans-serif para interfaz y cuerpo.
- Los recursos visuales son sustituibles; no incrustar texto dentro de imágenes.
- Las partículas son decorativas (`aria-hidden`), lentas y sin interacción.
- Evitar que la rama de cookies cubra navegación, formularios o controles en cualquier breakpoint.

## Accesibilidad no negociable

- Objetivo WCAG 2.2 AA.
- Conservar navegación completa por teclado, foco visible y enlace de salto.
- Todo control necesita nombre accesible; no usar solo color para comunicar estado.
- Todo campo tiene etiqueta visible y errores comprensibles.
- Respetar `prefers-reduced-motion` y `prefers-contrast`.
- Imágenes informativas requieren `alt` localizado; las puramente decorativas deben tener `alt=""`.
- Los diálogos deben cerrarse con `Escape`, devolver el foco y no dejar controles inaccesibles.
- Consultar a la usuaria antes de aceptar una decisión visual o funcional que impida cumplir estas reglas.

## Privacidad

- No añadir analítica, marketing o contenido externo sin conectarlo al consentimiento correspondiente.
- Nunca poner secretos en variables `VITE_*`.
- La categoría necesaria solo puede guardar la decisión de privacidad y estado imprescindible.
- Mantener la política sincronizada con el comportamiento real.

## Integración del juego

- Preferir una exportación WebGL en el mismo origen bajo `public/game/`.
- Si `VITE_GAME_URL` apunta a otro origen, exigir consentimiento de contenido externo antes del `iframe`.
- No relajar `sandbox` o permisos del iframe sin documentar el motivo y revisar riesgos.
- Verificar teclado, pantalla completa, gamepad, relación de aspecto, carga, error y móvil.

## Definición de terminado

El cambio compila, pasa pruebas, funciona en escritorio y móvil, no crea desbordamiento horizontal, conserva los tres idiomas y se ha revisado con movimiento reducido. Para cambios visuales, comprobar también la página renderizada en navegador.
