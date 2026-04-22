# 04 — Stack técnico

> **Propósito:** fijar las decisiones técnicas para que todos los materiales del curso se desarrollen consistentemente.

## Slides

**Decisión:** `reveal.js` servido desde GitHub Pages.

- HTML puro, se ve bien en proyector/Zoom y en celular.
- Soporta embeds de herramientas interactivas en línea.
- No requiere build step.
- Alternativa si queda muy genérico: plantilla HTML custom con mismo stack, pero reveal.js trae navegación y teclas gratis.

## Herramientas interactivas

**Decisión:** HTML + CSS + JavaScript **vanilla**, cero dependencias de build.

- Cada herramienta = una carpeta autocontenida con `index.html`, `style.css`, `script.js`.
- Sin frameworks pesados. Si un caso lo pide, se usa `alpine.js` por CDN (3 KB, declarativo).
- **Mobile-first** — la audiencia las abrirá mayoritariamente desde el celular durante una videollamada.
- **Sin backend** — todo corre en el navegador. Persistencia local con `localStorage`.
- **Sin datos sensibles en red** — las herramientas no envían datos a ningún servidor. Los números del participante se quedan en su dispositivo. Esto se comunica explícitamente.

## PDFs previos

- Fuente en **Markdown** dentro de cada carpeta de sesión (`previo.md`).
- Exportación a PDF con `pandoc` + plantilla, o con el comando "imprimir a PDF" del navegador aplicando el CSS de print.
- Diseño A4, legible en pantalla y en papel.

## Estilos compartidos

- `assets/css/base.css` — paleta, tipografía, componentes comunes (card, callout, botón, tabla, semáforo).
- `assets/js/shared.js` — helpers (formato de moneda, porcentajes, localStorage).

## Paleta Mercantil Servicios de Inversión (confirmada 2026-04-21)

```
--color-primario:        #003DA5   /* azul Mercantil */
--color-primario-oscuro: #002868
--color-primario-claro:  #E6EDF7
--color-acento:          #F47B20   /* naranja logo Mercantil */
--color-acento-claro:    #FDE9D7
--color-fondo:           #FFFFFF
--color-fondo-sutil:     #F5F7FA
--color-texto:           #1A1A1A
--color-texto-sutil:     #5A6375
--color-borde:           #E2E6EE
--color-positivo:        #2E7D55
--color-alerta:          #B4312E
--color-aviso:           #B78A00
```

Tipografía:

```
--font-cuerpo:  "Inter", system-ui, -apple-system, "Segoe UI", sans-serif
--font-titulos: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif  /* mismo stack, pesos 600/700 */
--font-mono:    "JetBrains Mono", ui-monospace, monospace
```

Decisión: **mismo stack tipográfico** para cuerpo y títulos (solo cambia peso). Corporativo, limpio, fácil de leer en Zoom. Si el usuario nos provee la tipografía oficial de Mercantil SI en checkpoint futuro, se reemplaza sin impacto en layouts.

## Hosting (confirmado 2026-04-21)

**Decisión: GitHub Pages.**

- URL estable (pattern: `https://<usuario>.github.io/<repo>/`).
- Gratis. Sin límites de visitas relevantes para 100 participantes.
- Fácil actualizar: push al branch main, publicación automática.
- **Para proyectar una herramienta en vivo:** slide muestra un **código QR** que apunta a la URL + URL legible como fallback. Cada participante escanea con su celular.

**Configuración pendiente (para cuando arranquemos despliegue):**
- Crear repo GitHub público o privado con Pages habilitado.
- Definir estructura de URLs: `/slides/sesion-1/`, `/herramientas/mi-foto-financiera/`, etc.
- Decidir si todo el curso va en un solo repo o se separa el material público (herramientas que participantes usan) del privado (guion del facilitador).

**Contingencia:** todo el material funciona también servido localmente con `python -m http.server` o `npx serve`. Si por algún motivo GitHub Pages no es viable el día del evento, el facilitador sirve desde laptop + comparte URL de su IP local en hotspot.

## Convenciones

- **Rutas relativas** para todos los assets dentro de cada carpeta de sesión/herramienta.
- **Assets compartidos** (`/assets/css/base.css`, `/assets/js/shared.js`) cargados por ruta relativa con `..`.
- **Nombres de archivo en kebab-case**: `mi-foto-financiera.html`, no `MiFotoFinanciera.html`.
- **Idioma de código comentarios: español**, consistente con la audiencia y el contenido.

## QR en slides

Cada slide que dispare una herramienta interactiva mostrará:

1. QR grande (centro/esquina) — apunta a la URL de la herramienta.
2. URL textual debajo (fallback si el QR falla).
3. Instrucción breve: *"Abre la herramienta desde tu celular en 1 minuto."*

Generación de QR: `qrcode.js` por CDN, o pre-generados al desplegar. Decisión operativa — usamos pre-generados PNG embebidos para no depender de red al mostrar el slide.
