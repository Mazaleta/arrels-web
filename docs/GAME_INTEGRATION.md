# Integración del videojuego

La web ya incluye el contenedor, consentimiento y comportamiento responsive necesarios. Para conectarlo solo hace falta una versión del juego ejecutable en navegador y decidir dónde alojarla.

## Opción recomendada: mismo dominio

1. Exportar el juego para WebGL/HTML5 desde su motor.
2. Copiar la exportación completa a `public/game/`, conservando `index.html` y sus carpetas de datos.
3. Configurar en `.env`:

   ```dotenv
   VITE_GAME_URL=/game/index.html
   ```

4. Ejecutar `pnpm build` y comprobar que `dist/game/index.html` y todos sus recursos existen.
5. Servir `dist` con un servidor HTTP; el juego no funcionará correctamente abriendo archivos con `file://`.

Esta opción evita depender de terceros y no requiere consentimiento de contenido externo. El juego se carga únicamente cuando la persona pulsa el botón, para no penalizar la carga inicial.

## Opción externa: itch.io u otro hosting

Asignar la URL embebible completa:

```dotenv
VITE_GAME_URL=https://example.com/embed/game
```

La plataforma debe permitir iframe: no puede bloquearlo mediante `X-Frame-Options` o una política CSP `frame-ancestors`. Al ser otro origen, la web pedirá consentimiento de contenido externo antes de crear el iframe.

No debe usarse la URL pública normal de una tienda si esta no proporciona un modo oficial de embed.

## Contrato del contenedor

El iframe recibe actualmente:

- pantalla completa, gamepad y autoplay como permisos solicitables;
- `sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-popups allow-forms"`;
- carga diferida;
- una altura máxima de 760 px o 75 % del viewport.

Si el juego necesita portapapeles, descargas, micrófono, cámara o comunicación con la página, hay que revisar y añadir exclusivamente el permiso necesario. No retirar `sandbox` de forma general.

## Motores habituales

### Unity

- Usar WebGL y compresión Brotli o Gzip solo si el servidor envía los encabezados `Content-Encoding` correctos.
- Activar decompression fallback cuando el hosting no permita configurar encabezados, aceptando el coste de rendimiento.
- Revisar memoria inicial y compatibilidad móvil; una build de escritorio grande puede no ser viable en iOS.

### Godot

- Exportar a Web y comprobar si la versión usa hilos. Los hilos requieren aislamiento entre orígenes (`COOP`/`COEP`) que puede afectar recursos externos.
- Para máxima compatibilidad inicial, preferir una exportación sin hilos si el proyecto lo permite.

### HTML/Canvas propio

- Usar rutas relativas a `index.html` para scripts, audio, fuentes y texturas.
- Adaptar el canvas con `ResizeObserver`, conservar proporción y ofrecer pantalla completa mediante una acción explícita.

## Comunicación opcional con React

Si más adelante la web necesita recibir eventos como `ready`, `completed` o `score`, usar `window.postMessage` con un origen exacto, nunca `*` para mensajes sensibles. Antes de implementarlo hay que definir:

```ts
type GameEvent =
  | { type: "arrels:ready" }
  | { type: "arrels:completed"; elapsedSeconds: number }
  | { type: "arrels:error"; code: string };
```

La página debe validar tanto `event.origin` como la forma del mensaje. Las estadísticas no deben enviarse a ningún servicio hasta contar con consentimiento y una política actualizada.

## Lista de comprobación antes de publicar

- La carga inicial de la web no descarga el juego.
- Existe estado de carga, error y cierre.
- Teclado y foco pueden entrar y salir del juego.
- Escape no queda capturado permanentemente.
- Pantalla completa se activa solo por interacción.
- Sonido no comienza sin permiso.
- Gamepad y controles táctiles se prueban cuando correspondan.
- El recorte funciona en 390 px, tableta y escritorio.
- El peso de la build, caché y compresión se revisan en el hosting real.
- El juego externo no se carga sin consentimiento.
- La política de cookies refleja cualquier almacenamiento o servicio añadido.

Cuando se conozcan el motor, la plataforma de alojamiento y el tamaño aproximado de la build, esta guía debe concretarse con los ajustes exactos del proyecto.
