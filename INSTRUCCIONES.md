# INSTRUCCIONES.md — Reglas de trabajo con Claude

## Meta general
Generar una **experiencia muy agradable** para los participantes, llevando temas técnicos de finanzas e inversiones a un **lenguaje muy claro**, sin perder rigor. No buscamos un curso más: buscamos algo **bueno e innovador**.

## Audiencia real (confirmado 2026-04-21)
- **Quiénes asisten:** gerentes generales, gerentes financieros y miembros de junta directiva de **cooperativas financieras** (préstamos y captaciones) de Panamá.
- **Rol fiduciario:** toman decisiones sobre dinero de los asociados. El curso debe dignificar ese rol, no subestimarlo.
- **Heterogeneidad:** muchos juntadirectivos provienen de otras profesiones (p. ej. médicos). Son **muy inteligentes pero no-financieros**. El diseño debe permitir al no-financiero seguir sin que el financiero se aburra.

## Pedagogía y estilo

- **Metáforas de la cotidianidad.** Waze, WhatsApp, el velocímetro del carro, el inventario del minisúper, la receta de cocina — herramientas robustas que la audiencia ya usa sin saber que son robustas. Las metáforas se **co-construyen con el usuario**; Claude propone, el usuario cura.
- **Complementar, no reemplazar** el esqueleto inicial de las 4 sesiones. Mejorar contenido, agregar estructura, integrar dinámicas — pero respetar la intención original.
- **Respetar la inteligencia de la audiencia.** Son directivos y fiduciarios. No condescender. Trabajar a buen ritmo.
- **Doble capa de profundidad:** cada concepto se entrega en versión accesible para el no-financiero, con un "acento técnico" opcional (recuadro, pie de slide, lectura opcional) para el que quiera ir un paso más allá.
- **Lenguaje:** español panameño / latinoamericano neutro. Moneda: `USD` y `B/.` (en Panamá circulan ambos; documentos típicamente en `B/.`). Evitar anglicismos sin definir.
- **Tono:** cálido, cercano, con humor amable. No corporativo acartonado; profesionalmente serio pero humano.

## Entregables por sesión
Para cada una de las 4 sesiones:

1. **PDF previo** — lectura anticipadora de 3–5 páginas.
2. **Slides de presentación** — web-based (HTML), proyectables en Zoom/Teams y navegables desde móvil.
3. **Herramientas dinámicas HTML** — interactivas; cada participante puede abrirlas desde su celular y "jugar" con ellas en vivo.
4. **Ejercicios en sala** — realizables desde el celular del participante (formato virtual con 100 personas).
5. **Material del participante** — guía de referencia post-sesión.
6. **Evaluación** — pre/post + feedback.

## Formato de entrega
- **Virtual**, 100 participantes por sesión.
- Implica: herramientas individuales por participante (no breakouts), polls en vivo + chat como dinámicas principales, QR con link al herramienta del momento proyectado en la slide.
- Implica: ritmo con más "micro-interacciones" (cada 7-10 min una acción del participante) para evitar fatiga de Zoom.

## Duración
- **Meta:** 2 horas por sesión.
- **Techo duro:** 2 horas 30 minutos. No pasar de ahí.
- **Total curso:** ~8–10 horas repartidas en 4 sesiones.

## Timeline
- **Hoy:** 2026-04-21 (martes).
- **Esta semana:** entregar primera versión muy buena (al menos Sesión 1 completa + arco global + muestras del resto).
- **Evento:** mayo de 2026.

## Modo de trabajo con Claude

- **Autonomía:** Claude trabaja solo la mayor parte del tiempo.
- **Checkpoints: 3 al día.** En esos momentos Claude presenta avances, recibe dirección, recibe datos pendientes.
- **Entre checkpoints:** Claude avanza sin pedir OK constantemente.
- **Sí pedir OK** cuando:
  - Una decisión cambia el **arco del curso** (no solo un detalle).
  - Se entra a un tema donde faltan **datos del usuario** (cifras reales, ejemplos personales, productos específicos de Mercantil SI).
  - Una **duda bloquea** el trabajo.
- **Actualizar `INSTRUCCIONES.md`** cuando Claude descubra algo clave que debe preservarse en sesiones futuras.
- **Actualizar `avances.md`** al completar cada unidad de trabajo significativa.

## Marca (confirmada 2026-04-21)
- **Empresa del usuario:** Mercantil Servicios de Inversión (mercantilsi.com.pa).
- **Paleta:** azul corporativo `#003DA5` + naranja `#F47B20` del logo. Fondo blanco.
- **Tipografía:** sans-serif corporativa. Default de trabajo: Inter (Google Fonts) hasta confirmar tipo de marca oficial.
- **Aplicar con sobriedad.** Es curso educativo, no folleto publicitario. Marca presente en portadas y pie; contenido no debe parecer pitch.

## Stack técnico (ver `diseno/04-stack-tecnico.md`)
- **Slides:** `reveal.js` como default. Revisar alternativa si queda muy genérico.
- **Herramientas interactivas:** HTML + CSS + JS vanilla, autocontenido.
- **PDFs previos:** fuente en Markdown, exportados a PDF.
- **Hosting:** **GitHub Pages** (decidido 2026-04-21). URL estable, gratis, actualizable. QR directo a la herramienta del momento en las slides.

## Investigación y referencias
- Subagentes corriendo: `benchmarks.md` y `fuentes-panama.md`.
- Extraer principios de diseño, no copiar contenido.

## Instructivo del facilitador

El profesor del curso cuenta con un documento maestro en `instructivo-facilitador/`:

- **`instructivo.html`** — diseñado para abrirse en navegador e imprimir a PDF (botón azul arriba a la derecha o `Ctrl+P`). Incluye portada, TOC, 11 capítulos con flujo minuto-a-minuto por sesión.
- **`instructivo.md`** — fuente en markdown para lectura en editor o edición.
- **`README.md`** — instrucciones de uso y generación de PDF.

**Cuándo actualizarlo:**
- Tras la primera cohorte, incorporar aprendizajes.
- Si cambia duración, estructura o metáfora madre del curso.
- Si cambia algún `guion.md` de sesión, revisar coherencia con el flujo resumido del instructivo.
- Si algún nombre de archivo / ruta cambia, actualizar el "Mapa de archivos del repositorio" del capítulo 11.

**Principio:** el instructivo es el mapa; los `guion.md` son la letra. El instructivo no repite el guion — lo resume y agrega lo que un facilitador necesita alrededor (preparación, contingencias, post-curso, frases literales clave).

## Navegador del proyecto

El archivo `indice.html` en la raíz es un navegador visual que:

- Lista todos los archivos del proyecto organizados por categoría (raíz, diseño, investigación, 4 sesiones, evaluación, instructivo, operación).
- Renderiza cada `.md` con marked.js (tablas, checklists, blockquotes, tipografía limpia estilo Mercantil).
- Abre los `.html` (slides, herramientas, instructivo) y el PDF en pestaña nueva.

**Servir localmente (3 opciones, en orden de preferencia):**
1. **Doble-click a `servir.bat`** (recomendado para Windows sin dependencias). Usa PowerShell nativo + .NET. No requiere admin. Abre navegador automáticamente.
2. **Firefox** abriendo `indice.html` directo (sin servidor; Firefox permite `file://` leer archivos locales).
3. `python -m http.server 8000` si tienes Python (se instala en 1 click desde Microsoft Store tecleando `python` en PowerShell).

**Cuándo actualizar el índice:** si se agrega un archivo `.md` nuevo, se renombra una ruta, o se agrega una herramienta, incluirlo en la sección correspondiente del sidebar del `indice.html`.
