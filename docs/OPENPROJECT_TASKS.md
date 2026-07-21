# Tareas históricas de OpenProject para construir Arrels Web

> Documento archivado como contexto. OpenProject ya no controla la implementación actual de `arrels-web`.

Este documento es la fuente para crear las tareas de demostracion. La web comenzara con un esqueleto tecnico; cada seccion visual se implementara al pasar su tarea a `En curso`.

## Plantilla de descripcion

Copiar este bloque en la descripcion de cada paquete de trabajo y sustituir sus valores:

```yaml
office:
  type: web_feature
  repository: Mazaleta/arrels-web
  base_branch: main
  area: hero
```

```text
OBJETIVO
Explicar en una frase que debe conseguir la tarea.

REFERENCIA VISUAL
Adjuntar las imagenes directamente a esta tarea.

REQUISITOS
- Requisito observable 1.
- Requisito observable 2.

CRITERIOS DE ACEPTACION
- Se puede comprobar el resultado en escritorio y movil.
- No se rompen las secciones existentes.
- Las pruebas y comprobaciones del repositorio pasan.

FUERA DE ALCANCE
Indicar expresamente lo que no debe cambiarse.
```

El bloque `office` debe estar presente para que la oficina reconozca la tarea. Las imagenes se adjuntan una vez a la tarea; no se pegan tambien dentro de comentarios salvo que sean una revision diferente.

## Backlog inicial

| ID sugerido | Asunto en OpenProject | Tipo `office.type` | Area | Resultado esperado |
|---|---|---|---|---|
| WEB-01 | Inicializar la aplicacion web Arrels | `web_feature` | `foundation` | Next.js, TypeScript, lint, test y estructura base |
| WEB-02 | Crear sistema visual de Arrels | `ux_ui` | `design-system` | Colores, tipografias, espaciado, botones y superficies |
| WEB-03 | Crear cabecera y navegacion | `web_feature` | `navigation` | Navegacion responsive a todas las secciones |
| WEB-04 | Crear hero inmersivo de Arrels | `web_feature` | `hero` | Portada inspirada en la referencia, no una copia literal |
| WEB-05 | Crear seccion Vision | `web_feature` | `vision` | Propuesta de valor clara y visual |
| WEB-06 | Crear seccion El Sueno | `web_feature` | `dream` | Narrativa de la experiencia Arrels |
| WEB-07 | Crear Universe y experiencias | `web_feature` | `universe` | Catalogo visual ampliable de mundos y juegos |
| WEB-08 | Crear Puzzle mensual | `web_feature` | `puzzle` | Puzzle destacado con estado y llamada a la accion |
| WEB-09 | Crear Lab y Team | `web_feature` | `lab-team` | Proceso creativo y presentacion del equipo |
| WEB-10 | Crear contacto | `web_feature` | `contact` | Formulario validado y accesible |
| WEB-11 | Incorporar animaciones ambientales | `ux_ui` | `motion` | Movimiento sutil con respeto a `prefers-reduced-motion` |
| WEB-12 | Adaptar toda la web a movil | `web_fix` | `responsive` | Sin desbordamientos y con navegacion util |
| WEB-13 | Mejorar accesibilidad, SEO y rendimiento | `web_fix` | `quality` | Metadatos, semantica, teclado y objetivos medibles |
| WEB-14 | Preparar despliegue y previews de PR | `web_feature` | `delivery` | Cada PR ofrece una URL revisable |

## Primera tarea recomendada

Crear primero `WEB-01`. No adjunta una referencia visual porque solo prepara los cimientos. Para `WEB-02` y `WEB-04`, adjuntar la captura de la pagina Arrels que servira como direccion artistica.

## Correcciones

Las correcciones se escriben como comentarios en la misma tarea:

```text
REVISION 1
- Reducir el contraste del fondo del hero.
- Mantener el boton principal visible a 390 px de ancho.
- No modificar la navegacion.
```

La oficina debe tratar cada comentario nuevo como una revision de la tarea ya vinculada a su pull request, no como una tarea nueva.
