# avances.md — Bitácora del proyecto

Registro cronológico. Claude actualiza esta bitácora al completar cada unidad significativa de trabajo.

---

## 2026-04-21 — Día 1, checkpoint inicial

### Contexto recibido
- Usuario entregó esqueleto de 4 sesiones con objetivos y contenidos por sesión.
- Acordado: **2 h por sesión**, techo duro 2 h 30 min.
- Acordado: **trabajo autónomo** de Claude con **3 checkpoints por día**.
- Acordado: **curso listo en ~2 días**.
- Acordado: entregables por sesión → PDF previo, slides HTML, herramientas interactivas, ejercicios móviles, material de participante, evaluación.
- Foco estratégico del usuario: wealth management profesional como alternativa para cooperativas panameñas.

### Hecho
- [x] `ABOUT-ME.md` creado.
- [x] `INSTRUCCIONES.md` creado (incluye supuestos pendientes).
- [x] `avances.md` creado (este archivo).
- [x] `README.md` del root creado como mapa de navegación.
- [x] Arquitectura de carpetas y archivos stub creada:
  - `diseno/` — decisiones transversales del curso.
  - `referencias/` — investigación y fuentes.
  - `sesiones/sesion-1-estados-financieros/` a `sesion-4-financiamiento/`.
  - `evaluacion/` — instrumentos transversales.
  - `assets/` — CSS/JS compartidos.

### Supuestos operando por defecto (ver `INSTRUCCIONES.md`)
1. Cooperativas de ahorro y crédito, mixto.
2. Grupo 15–30, presencial, con smartphones y wifi.
3. Marca: paleta neutra profesional hasta que usuario confirme.
4. Hosting: herramientas autocontenidas, decisión de hosting al final.

### Próximos pasos propuestos (esperan OK del usuario)
1. **Investigar referencias** de capacitaciones de alto rating en finanzas personales (benchmarks).
2. Desarrollar **`diseno/00-arco-narrativo.md`** — la historia que conecta las 4 sesiones como un solo viaje, no como temas sueltos.
3. Establecer **metáforas base reutilizables** (Waze, velocímetro, etc.) en `diseno/02-metaforas-base.md`.
4. Definir **voz y estilo** concretos (`diseno/03-voz-y-estilo.md`) con ejemplos "así sí / así no".
5. Confirmar **stack técnico** en `diseno/04-stack-tecnico.md`.
6. Arrancar **Sesión 1**: guion con tiempos, PDF previo, slides, herramienta interactiva de balance, ejercicios, evaluación.

### Preguntas abiertas para el próximo checkpoint
Ver sección "Supuestos pendientes de confirmar" en `INSTRUCCIONES.md`.

---

## 2026-04-21 — Día 1, checkpoint 2

### Decisiones recibidas del usuario
1. **Tipo de cooperativa:** cooperativas financieras (ahorro y crédito). Audiencia: gerentes generales, gerentes financieros, juntas directivas. Incluye profesionales de otras áreas (médicos, etc.) en cargos fiduciarios.
2. **Formato:** virtual, 100 personas por sesión.
3. **Hosting:** elegido por Claude — **GitHub Pages**. URL estable, QR en slides.
4. **Marca:** Mercantil Servicios de Inversión (mercantilsi.com.pa). Paleta azul `#003DA5` + naranja `#F47B20`.
5. **Timeline:** evento en mayo de 2026. **Primera versión muy buena esta semana.**

### Implicaciones absorbidas
- **Audiencia es alta dirigencia**, no cooperativista de a pie → arquetipos rehechos (Dra. Vega / Lic. Mendoza / Ing. Álvarez).
- **Doble capa de profundidad** (accesible + acento técnico opcional) para respetar tanto al no-financiero como al con trayectoria.
- **Virtual × 100** → micro-interacciones cada 7-10 min; herramientas individuales por celular; QR sobre slide; chat + polls como dinámica principal.
- **Apuesta estratégica más alta:** esta audiencia decide sobre excedentes/reservas de cooperativa. Mercantil SI es opción real para ellos, no tema futuro.

### Hecho en este checkpoint
- [x] `INSTRUCCIONES.md` reescrito con supuestos resueltos, formato virtual, timeline, marca.
- [x] `ABOUT-ME.md` actualizado con afiliación Mercantil SI y audiencia real.
- [x] `diseno/01-audiencia.md` reescrito completamente con perfil real y arquetipos actualizados.
- [x] `diseno/04-stack-tecnico.md` cerrado: reveal.js + vanilla JS + GitHub Pages + paleta Mercantil.
- [x] `assets/css/base.css` reescrito con paleta Mercantil SI, componentes corporativos + soporte "acento técnico".
- [x] 2 subagentes lanzados en background: benchmarks y contexto Panamá.
- [x] Tareas creadas en el tracker (9).

### En curso
- [ ] Subagente 1 — `referencias/benchmarks.md` (background).
- [ ] Subagente 2 — `referencias/fuentes-panama.md` (background).
- [ ] Arco narrativo global refinado.
- [ ] Metáforas madre candidatas (2-3) para decisión del usuario.
- [ ] Sesión 1 — entregable clave de la semana.

### Próximos pasos inmediatos
1. Refinar `diseno/00-arco-narrativo.md` a la luz de la audiencia real.
2. Proponer 2-3 metáforas madre con tradeoffs.
3. Arrancar paquete de Sesión 1 (objetivos, guion con tiempos, previo.md, primera herramienta interactiva).

### Pendientes para futuros checkpoints
- Validar arquetipos Vega / Mendoza / Álvarez.
- Elegir metáfora madre (cuando Claude proponga).
- Confirmar tipografía oficial de Mercantil SI (por ahora Inter).
- Definir repo GitHub concreto y acceso para despliegue.

---

## 2026-04-21 — Día 1, checkpoint 3 (autónomo completado)

### Investigación completada
- [x] `referencias/benchmarks.md` — 10 referencias (Shiller, Finance for Non-Financial, Sethi, Macías, Benartzi, Planet Money, Khan, Crash Course, Duolingo, IDEO U) + 7 principios destilados + 7 anti-principios.
- [x] `referencias/fuentes-panama.md` — marco IPACOOP (Ley 17/1997), SBP, SMV, tasas de referencia 2025, sector cooperativo panameño (973 coops, ≈129 de ahorro y crédito, grandes: COOPEDUC/CACSA/COOPROFESIONALES/COOPEVE), distribución obligatoria de excedentes, macro.

### Diseño transversal completado
- [x] `diseno/00-arco-narrativo.md` — arco + 8 palancas conceptuales del curso + anatomía repetida de 120 min por sesión + conceptos pegajosos por sesión + micro-contacto inter-sesión.
- [x] `diseno/02-metaforas-base.md` — 3 candidatas metáfora madre (tablero+GPS / Waze / hospital) con tradeoffs + recomendación explícita (tablero+GPS) + banco de metáforas auxiliares. **Pendiente decisión del usuario.**

### Sesión 1 completada (primera versión)
- [x] `objetivos.md` — 5 objetivos SMART + criterios de éxito medibles.
- [x] `previo.md` — lectura anticipadora 10 min para PDF previo.
- [x] `guion.md` — guion completo con tiempos minuto-a-minuto, 8 bloques de 120 min, co-facilitación alternada cada ≤7 min, 5 polls, contingencias.
- [x] `herramientas/mi-foto-financiera/index.html` — herramienta interactiva autocontenida con dos modos (personal + cooperativa), semáforos, localStorage, mobile-first, paleta Mercantil SI.
- [x] `material-participante.md` — guía de referencia post-sesión + checklist imprimible de 5 preguntas.
- [x] `evaluacion.md` — pre-test corto (5 preguntas conocimiento + aplicada + Likert + NPS + abiertas).

### Pendientes inmediatos (próximo bloque autónomo)
- [ ] Slides reveal.js de Sesión 1 (`slides/index.html`).
- [ ] Datos del caso "El Paraíso" formalizados para slides (`datos/el-paraiso.md`).
- [ ] QR generados para URLs de herramienta cuando se defina hosting concreto.
- [ ] Arrancar Sesiones 2-4 al menos en esqueleto (objetivos + previo + herramienta propuesta).
- [ ] Evaluación transversal (pre-test, post-test, caso integrador, feedback NPS).

### Decisiones pendientes de usuario (no bloqueantes hasta aquí)
1. **Metáfora madre:** recomendación = tablero+GPS. Confirmar o cambiar.
2. **Arquetipos:** Dra. Vega / Lic. Mendoza / Ing. Álvarez. Confirmar o aterrizar con nombres más representativos.
3. **Tipografía Mercantil oficial:** por ahora Inter. Si Mercantil SI usa otra, proveerla.
4. **Repo GitHub** concreto y acceso para despliegue.
5. **Co-facilitador:** ¿lo tienes identificado? El guion asume un perfil práctico/cooperativo que complementa al técnico del usuario.

---

## 2026-04-21 — Día 1, checkpoint 4 (bloque autónomo 2 completado)

### Sesión 1 al 100% de primera versión
- [x] `slides/index.html` — reveal.js completo, 27 slides, paleta Mercantil SI, placeholder de QR.
- [x] `datos/el-paraiso.md` — ficha formal del caso con balance, P&L, indicadores derivados, moraleja.

### Sesiones 2, 3, 4 esqueletadas
- [x] `sesion-2-flujo-caja/objetivos.md` + `previo.md` + `plan-sesion.md` (estructura de bloques + wireframe de herramienta "Mi película del mes").
- [x] `sesion-3-productos-financieros/objetivos.md` + `previo.md` + `plan-sesion.md` (estructura + wireframe de "Mi caja de herramientas" + protocolo anti-pitch para sesión sensible).
- [x] `sesion-4-financiamiento/objetivos.md` + `previo.md` + `plan-sesion.md` (estructura + wireframe de "Costo real del crédito" + ritual de cierre del curso).

### Evaluación transversal completada
- [x] `evaluacion/pre-test.md` — 18 preguntas (conocimiento + Likert + contexto), ~10 min, con emparejamiento a post-test.
- [x] `evaluacion/post-test.md` — 27 preguntas espejadas + aplicación + experiencia + NPS + abiertas.
- [x] `evaluacion/caso-integrador.md` — caso Esfuerzo Unido R.L. con 3 opciones de financiamiento, rúbrica de 8 palancas, cierre narrativo del curso.
- [x] `evaluacion/feedback-nps.md` — versión corta + extendida a 30 días, 6 métricas núcleo con objetivos cuantitativos.

### Herramientas operativas
- [x] `scripts/generar-qr.html` — generador local standalone (qrcode.js CDN). Pegas URL, descargas PNG, embebes en slides.
- [x] `DESPLIEGUE.md` — guía paso a paso GitHub Pages + alternativa Netlify + contingencia local + checklist de pruebas 48 h antes.

### Estado tasks
1-11 completadas salvo las que quedaron abiertas para iteración (p.ej. construcción final de las 3 herramientas restantes — Mi película del mes, Mi caja de herramientas, Costo real del crédito).

### Lo que sigue (prioridad para próximo bloque)
- [ ] **Build de las 3 herramientas HTML restantes** (Sesiones 2, 3, 4) — siguiendo el patrón de Mi foto financiera.
- [ ] **Guiones minuto-a-minuto** de Sesiones 2, 3, 4 (ya están los esqueletos por bloques).
- [ ] **Slides de Sesiones 2, 3, 4** siguiendo la plantilla visual de Sesión 1.
- [ ] **Material de participante** y **evaluación específica** de Sesiones 2, 3, 4.
- [ ] **Datos del caso integrador** (Esfuerzo Unido) formalizados en archivo separado.

### Lo que queda genuinamente bloqueado (no puedo avanzar sin el usuario)
- **Decisión metáfora madre** (recomendación: tablero+GPS) — afecta frases concretas en guiones futuros.
- **Validación de arquetipos** Vega/Mendoza/Álvarez.
- **Co-facilitador:** si no hay, reescribo guiones a voz única.
- **Repo GitHub + URL real** para generar QR definitivos y actualizar placeholders en slides.
- **Tipografía oficial Mercantil SI** si existe una distinta a Inter.
- **Uso de casos reales** (anonimizados) en lugar de los ficticios (El Paraíso, Esfuerzo Unido).

---

## 2026-04-21 — Día 1, checkpoint 5 (bloque autónomo 3 completado)

### Herramientas HTML completadas (las 4 del curso)

- [x] `sesion-1/herramientas/mi-foto-financiera/index.html` (ya estaba).
- [x] `sesion-2/herramientas/mi-pelicula-del-mes/index.html` — 12 filas mensuales editables, preset personal y **caso El Paraíso** (con aguinaldo, XIII, retiros anticipados), gráfica SVG de saldo acumulado con zona roja bajo cero, KPIs (saldo mínimo, meses en rojo, volatilidad / cambio neto).
- [x] `sesion-3/herramientas/mi-caja-herramientas/index.html` — inventario dinámico de productos, clasificación automática en 4 gavetas por plazo, comparador vs. necesidades declaradas, alertas de mismatch (gaveta baja, gaveta en exceso, concentración >85%).
- [x] `sesion-4/herramientas/costo-real-credito/index.html` — comparador lado-a-lado de dos ofertas con cálculo de cuota (francés), TEA aproximada, intereses + comisiones, gráfica SVG de amortización mes a mes con áreas capital/interés superpuestas. Veredicto automático.

### Estado actual del proyecto

| Componente | Estado | Notas |
|---|---|---|
| Diseño transversal | 100% | Arco, 8 palancas, metáforas, voz, stack, audiencia, paleta Mercantil. |
| Investigación | 100% | Benchmarks (10) + fuentes Panamá (IPACOOP/SBP/SMV/tasas/Ley17). |
| Sesión 1 | 100% | Slides + guion + previo + herramienta + material + evaluación + caso. |
| Sesión 2 | 65% | Objetivos + previo + plan-sesion + **herramienta HTML lista**. Faltan: guion, slides, material, evaluación. |
| Sesión 3 | 65% | Objetivos + previo + plan-sesion + **herramienta HTML lista**. Faltan: guion, slides, material, evaluación. |
| Sesión 4 | 65% | Objetivos + previo + plan-sesion + **herramienta HTML lista**. Faltan: guion, slides, material, evaluación. |
| Evaluación transversal | 100% | Pre-test, post-test, caso integrador, feedback NPS. |
| Operación | 100% | Generador QR + guía despliegue GitHub Pages. |

### Lo que sigue (prioridad)
1. Sesión 2 paquete completo (guion minuto-a-minuto + slides + material + evaluación específica).
2. Sesión 3 paquete completo (con sensibilidad anti-pitch explícita).
3. Sesión 4 paquete completo (con ritual de cierre del curso).
4. Datos del caso integrador Esfuerzo Unido R.L. en archivo separado.

### Sigue sin bloquear pero recomendable para cerrar v1.0
- Decisión del usuario sobre: metáfora madre, arquetipos, co-facilitador, repo GitHub, caso real vs. ficticio.
- Al confirmar repo GitHub: reemplazar placeholder QR en slides por PNGs reales generados con `scripts/generar-qr.html`.

---

## 2026-04-21 — Día 1, checkpoint 6 (bloque autónomo 4 completado)

### Curso completo al 100% de primera versión

**Sesión 2 completa:**
- [x] `guion.md` — minuto-a-minuto 120 min, datos formales del flujo mensual de El Paraíso en tabla.
- [x] `material-participante.md` — referencia con 4 parejas, 3 momentos, checklist 4 preguntas.
- [x] `evaluacion.md` — 12 preguntas.
- [x] `slides/index.html` — reveal.js ~20 slides con tabla mensual de El Paraíso y visualización de Oct-Nov en rojo.

**Sesión 3 completa:**
- [x] `guion.md` — minuto-a-minuto con **protocolo anti-pitch explícito al inicio**, caso del DPF roto, las 4 gavetas con errores típicos, 3 palabras no-sinónimas (ahorrar/invertir/especular), 5 preguntas al asesor.
- [x] `material-participante.md` — guía permanente con checklist de 5 preguntas.
- [x] `evaluacion.md` — 12 preguntas incluyendo clasificación aplicada.
- [x] `slides/index.html` — reveal.js ~18 slides con 4 gavetas visuales coloreadas, 4 dimensiones, caso del DPF.

**Sesión 4 completa (CIERRE DEL CURSO):**
- [x] `guion.md` — minuto-a-minuto con caso de dos ofertas, caso integrador Esfuerzo Unido, ritual de cierre con mapa completo de 8 palancas y frase final.
- [x] `material-participante.md` — la más completa, incluye tabla resumen de las 8 palancas + inventario de las 4 herramientas permanentes del curso.
- [x] `evaluacion.md` — 8 preguntas específicas + integración con post-test transversal.
- [x] `slides/index.html` — reveal.js ~22 slides con comparador de ofertas, amortización, 7 señales de buena decisión, mapa completo de palancas, frase de cierre de Mercantil SI.

### Estado final del proyecto

| Componente | Estado |
|---|---|
| Diseño transversal (arco, palancas, metáforas, voz, stack, audiencia) | 100% |
| Investigación (benchmarks + fuentes Panamá) | 100% |
| Sesión 1 — paquete completo | 100% |
| Sesión 2 — paquete completo | 100% |
| Sesión 3 — paquete completo | 100% |
| Sesión 4 — paquete completo | 100% |
| Herramientas HTML interactivas (4) | 100% |
| Evaluación transversal | 100% |
| Operación (generador QR + guía despliegue) | 100% |

### Entrega total de la semana

- **27 archivos markdown** de contenido (guiones, previos, material, evaluación, diseño, investigación).
- **5 archivos HTML** de slides (1 por sesión + generador QR).
- **4 archivos HTML** de herramientas interactivas (1 por sesión).
- **1 CSS + 1 JS compartidos** (`assets/base.css`, `shared.js`).
- **3 archivos de operación** (ABOUT-ME, INSTRUCCIONES, avances, README, DESPLIEGUE).

### Lo que queda genuinamente pendiente

**Bloqueado por input del usuario:**
- Decisión metáfora madre (recomendación activa: tablero + GPS).
- Validación arquetipos.
- Co-facilitador (guiones asumen dos voces).
- Repo GitHub + URL real → generar QR definitivos → reemplazar placeholders en 4 archivos de slides.
- Si hay tipografía oficial Mercantil SI distinta a Inter, reemplazar en base.css.
- Reemplazar casos ficticios por reales anonimizados si el usuario los tiene.

**Iteraciones posibles (no bloqueantes):**
- Ajuste de redacción según feedback del usuario.
- Integración con plataforma (Zoom/Teams) para polls específicos por herramienta de la plataforma.
- Versión imprimible de los PDFs previos (CSS print optimizado).
- Grabación / ensayo del facilitador con el guion.

### Próximo checkpoint sugerido
El usuario revisa, decide metáforas/arquetipos/repo, y Claude itera sobre feedback concreto.

---

## 2026-04-21 — Día 1, checkpoint 7 (instructivo del facilitador)

### Entregado
- [x] `instructivo-facilitador/instructivo.html` — documento maestro de ~30 páginas impresas, diseñado para "Imprimir / Guardar como PDF" desde navegador. 11 capítulos: preparación pre-curso, ritual pre-sesión, flujo minuto-a-minuto por sesión (con tablas de polls, frases literales, qué proyectar), post-curso, ensayo recomendado, contingencias, referencias rápidas.
- [x] `instructivo-facilitador/instructivo.md` — fuente markdown equivalente para edición y otras conversiones.
- [x] `instructivo-facilitador/README.md` — guía rápida + 3 opciones de generación de PDF.

### Actualizaciones de documentos base
- [x] `INSTRUCCIONES.md` — nueva sección "Instructivo del facilitador" con reglas de mantenimiento.
- [x] `README.md` raíz — pointer al instructivo en tabla de navegación + sección "Estado" actualizada a "primera versión completa".

### Características del instructivo
- **Portada corporativa Mercantil** con gradiente azul.
- **Page-breaks forzados** entre capítulos para impresión limpia.
- **Print CSS** optimizado (A4, márgenes 18/16mm, colores preservados).
- **Botón de imprimir** visible en pantalla pero no imprime (`.no-print`).
- Cada sesión tiene su capítulo autónomo con: archivos a abrir, frase del día, tabla de flujo de 120 min, tabla de polls preconfigurados, contingencias específicas, post-sesión.
- Sesión 3 con **protocolo anti-pitch destacado** en recuadros de alerta.
- Sesión 4 con **ritual de cierre del curso** paso a paso.
- Capítulo final con **mapa de archivos** del repositorio.

### Estado final del proyecto (tras 7 checkpoints)

| Componente | Estado |
|---|---|
| Diseño transversal | 100% |
| Investigación | 100% |
| Sesiones 1-4 (paquete completo cada una) | 100% |
| Herramientas HTML interactivas (4) | 100% |
| Evaluación transversal | 100% |
| Operación (generador QR + DESPLIEGUE.md) | 100% |
| **Instructivo del facilitador (HTML + MD)** | **100%** |

### Pendiente (solo input del usuario)
- Metáfora madre, arquetipos, co-facilitador, repo GitHub, casos reales.

### PDF del instructivo generado
- [x] `instructivo-facilitador/instructivo-facilitador.pdf` (~1.3 MB) generado con Edge headless (`msedge.exe --headless --print-to-pdf`).
- Si el usuario edita el HTML o MD y quiere regenerarlo, el comando exacto está en `instructivo-facilitador/README.md`.

---

## 2026-04-22 — Día 2, checkpoint 11 (Google Forms + audit + fix)

### Google Forms integradas
- [x] Usuario ejecutó `evaluacion/crear-formularios.gs` → 6 formularios creados en Google Drive.
- [x] `evaluacion/URLS.md` — referencia central con 6 URLs cortos, URLs edición, flujo de distribución.
- [x] QR generados para 4 de los 6 formularios (pre-test y feedback-30d se distribuyen por correo, no en slide).
- [x] Slide de evaluación agregado antes del "Gracias" en cada una de las 4 sesiones (tiempo ~[1:55]).
- [x] Guiones de las 4 sesiones actualizados con paso [1:55] "Evaluación de la sesión" — mostrar slide + pegar link en chat.
- [x] Instructivo (MD + HTML) actualizado con sección "Los 6 formularios de evaluación" en preparación y referencia.

### Audit guion vs slides (subagente)
Detectó polls con opciones no visibles en los slides:
- **S1:** OK (solo detalle de Mora que ya se había fijado).
- **S2:** POLL #2 (mes más cerca del rojo) faltaba → AGREGADO como slide dedicado.
- **S3:** POLL #4 (cuál frase más riesgosa) faltaba → AGREGADO como slide dedicado con 4 opciones.
- **S4:** POLL #1 (apertura, marca todas) sin opciones visibles → ACTUALIZADO slide de apertura.
- **S4:** POLL #4 (qué recomiendas Esfuerzo Unido) faltaba → AGREGADO slide dedicado con 4 opciones incluyendo B+C combinada.

Polls menores (durante herramienta o en break) quedaron como referencia en guion; facilitador lee opciones en voz. No bloquean dinámica.

### Commits pendientes de push (6 total)

| # | Hash | Descripción |
|---|---|---|
| 1 | ce3ed2b | root `index.html` redirigiendo a `indice.html` |
| 2 | e708d8d | S1 bloque 6 — desglose caso mediano + botón preset |
| 3 | 0d801d7 | `.nojekyll` — desactivar Jekyll |
| 4 | bee44fd | Apps Script `crear-formularios.gs` |
| 5 | 048da39 | Integración Google Forms en slides/guiones/instructivo + fix Mora S1 |
| 6 | 5ca171e | Fix polls — opciones visibles en slides S2/S3/S4 |

### Para pushear

```bash
cd "C:/users/pocho/onedrive/mercantil_cooperativas"
git push
```

Después del push: esperar 1-2 min, recargar las páginas en GitHub Pages, verificar que:
1. La URL raíz carga (gracias a `index.html` y `indice.html`).
2. Los `.md` cargan en el navegador (gracias a `.nojekyll`).
3. Los QR de evaluación aparecen en el penúltimo slide de cada sesión.
4. Los polls #4 de S3 y S4 se ven con opciones.

---

## 2026-04-23 — Checkpoint 12 · Cierre de sesión · Estado final v1.0

### Confirmado
- [x] Push completado. `origin/main` está en `369af09` (checkpoint 11). No hay commits locales pendientes.
- [x] Sitio LIVE en `https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/`.
- [x] Los 6 Google Forms creados en el Drive del usuario, URLs cortos integrados en slides + guiones + instructivo.
- [x] `.nojekyll` activo — los `.md` se sirven como texto plano (el navegador `indice.html` los renderiza con marked.js).

### Entregable v1.0 — composición

| Componente | Archivo / ubicación | Estado |
|---|---|---|
| Diseño transversal | `diseno/` (5 archivos) | ✓ |
| Investigación | `referencias/` (2 archivos) | ✓ |
| Sesión 1 | `sesiones/sesion-1-estados-financieros/` | ✓ |
| Sesión 2 | `sesiones/sesion-2-flujo-caja/` | ✓ |
| Sesión 3 | `sesiones/sesion-3-productos-financieros/` | ✓ |
| Sesión 4 | `sesiones/sesion-4-financiamiento/` | ✓ |
| Evaluaciones transversales | `evaluacion/` | ✓ |
| Google Forms (6) | Drive del usuario + `evaluacion/URLS.md` | ✓ |
| Instructivo del facilitador | `instructivo-facilitador/` (HTML + MD + PDF) | ✓ |
| Navegador del proyecto | `indice.html` + `servir.bat` + `servir.ps1` | ✓ |
| Generador de QR | `scripts/generar-qr.html` | ✓ |
| Guía de despliegue | `DESPLIEGUE.md` | ✓ |

### Decisiones del usuario que siguen abiertas (no-bloqueantes)
- **Metáfora madre:** default tablero + GPS. No confirmada formalmente pero activa en materiales.
- **Arquetipos:** default Dra. Vega / Lic. Mendoza / Ing. Álvarez. Puede aterrizar con nombres más representativos.
- **Co-facilitador:** guiones asumen 2 voces. Si va solo, reescribir alternancia.
- **Casos reales vs ficticios:** actualmente ficticios (El Paraíso, Esfuerzo Unido). Si el usuario tiene casos reales anonimizados, reemplazar.
- **Plataforma de video / polls:** usuario iba a confirmar si Teams tiene polls integrados o se usa Mentimeter/Slido. Pendiente decisión.

### Pendientes operativos (si se abre nueva sesión)
- Generar PDFs de los `previo.md` de cada sesión (para enviar por correo a participantes 1 semana antes). Actualmente son markdown fuente.
- Ensayo técnico del facilitador antes de Sesión 1 (guía en capítulo 9 del instructivo).
- Verificar en un celular real que los QR de las slides llevan a las URLs correctas y que las páginas destino cargan.

### Memoria actualizada para continuidad
Archivos en `C:\Users\pocho\.claude\projects\...\memory\`:
- `MEMORY.md` (índice)
- `project_capacitacion_cooperativas.md` (estado actual completo)
- `reference_curso_urls.md` (todas las URLs)
- `feedback_entorno_windows.md` (herramientas disponibles/no disponibles en la máquina del usuario)
- `feedback_modo_trabajo.md` (autonomía con checkpoints)
- `user_role.md` (perfil Mercantil SI / wealth management)

### Comandos útiles para la próxima sesión
```bash
cd "C:/users/pocho/onedrive/mercantil_cooperativas"
git status                    # ver si hay cambios sin commitear
git log --oneline -5          # últimos commits
git push                      # subir cambios
```

Servir localmente: doble-click a `servir.bat` (no requiere nada instalado).

---

## 2026-04-22 — Día 2, checkpoint 8 (navegador del proyecto)

### Entregado
- [x] `indice.html` en la raíz — navegador visual de todo el contenido:
  - Sidebar con 9 grupos colapsables (raíz, diseño, investigación, 4 sesiones, evaluación, instructivo, operación).
  - Renderizado de markdown con `marked.js` vía CDN, tipografía Mercantil (Inter + Fraunces).
  - Tablas, blockquotes, checklists, código con sintaxis coloreada.
  - Enlaces a los `.html` (slides, herramientas) y al PDF del instructivo abren en pestaña nueva.
  - Frontmatter YAML removido automáticamente al renderizar (los `previo.md` tienen frontmatter).
  - Pantalla de inicio con 6 cards de acceso rápido y las 4 herramientas destacadas.
  - Hash en URL para deep-linking (`#sesiones/sesion-1-*/guion.md`).
  - Responsive con hamburguesa en móvil.
  - Fallback de error cuando se abre con `file://` explicando las 4 alternativas: `python -m http.server`, `npx serve`, Live Server de VSCode, Firefox.

### Actualizaciones de documentos
- [x] `README.md` — sección "Punto de entrada recomendado" destacando `indice.html` + tabla del mapa actualizada.
- [x] `INSTRUCCIONES.md` — sección "Navegador del proyecto" con instrucciones para servirlo y mantenerlo.

### Uso recomendado
```
cd "C:/users/pocho/onedrive/mercantil_cooperativas"
python -m http.server 8000
# abrir http://localhost:8000/indice.html
```

Alternativa rápida sin servidor: abrir `indice.html` directamente con **Firefox** (permite `file://` para leer otros archivos locales).

---

## 2026-04-22 — Día 2, checkpoint 9 (servidor Windows nativo)

### Problema
Usuario intentó `python -m http.server 8000` en PowerShell y falló porque Python no está instalado. Windows 10 sin Python por defecto.

### Solución
Creado servidor HTTP en PowerShell nativo — no requiere instalar nada en Windows.

### Entregado
- [x] `servir.ps1` — servidor HTTP usando `System.Net.HttpListener` (.NET incluido en Windows). Sirve desde puerto 8000, detecta mime-types comunes, seguridad básica contra path traversal, logs coloreados, abre navegador automáticamente al arrancar.
- [x] `servir.bat` — lanzador con doble-click. Llama a `servir.ps1` con `-ExecutionPolicy Bypass` para evitar bloqueos de política de ejecución.
- [x] Verificado con test: HttpListener bindea en localhost sin permisos de admin.

### Actualizaciones
- [x] `indice.html` — panel de error reordenado: servir.bat como primera opción, luego Firefox, luego instalar Python, luego VS Code Live Server.
- [x] `README.md` — punto de entrada destacando doble-click a servir.bat.
- [x] `INSTRUCCIONES.md` — 3 opciones para servir localmente, en orden de preferencia para Windows.

### Flujo esperado del usuario
1. Descomprime/accede a la carpeta del proyecto.
2. Doble-click a `servir.bat`.
3. Se abre consola negra mostrando "Servidor corriendo en localhost:8000".
4. Automáticamente abre navegador en `http://localhost:8000/indice.html`.
5. Usa el índice normalmente. Cuando termina, cierra la consola con Ctrl+C o la X.

---

## 2026-04-22 — Día 2, checkpoint 10 (despliegue preparado)

### Decisiones del usuario
- Usuario GitHub: `andresborrerom`
- Repo: `capacitacion-cooperativas-mercantil`
- URL base futura: `https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/`

### Ejecutado autónomamente

**QR codes generados** (via QR Server API, 480x480, ECC alta, margin 10):
- [x] `sesiones/sesion-1-estados-financieros/slides/qr/mi-foto-financiera.png`
- [x] `sesiones/sesion-2-flujo-caja/slides/qr/mi-pelicula-del-mes.png`
- [x] `sesiones/sesion-3-productos-financieros/slides/qr/mi-caja-herramientas.png`
- [x] `sesiones/sesion-4-financiamiento/slides/qr/costo-real-credito.png`

**Slides actualizados** (4 archivos):
- Placeholder `<div class="qr-placeholder">[ QR ]...</div>` reemplazado por `<img src="qr/...">`.
- URL textual corregida al repo real (antes era `mercantilsi.github.io/...` placeholder).

**Repo git inicializado:**
- `.gitignore` creado.
- `git init -b main` ejecutado.
- `git config --local user.name "Andres Borrero"` y `user.email "andres.borrerom@gmail.com"` (solo scope del repo).
- 69 archivos en commit inicial (5de928c).
- Remote `origin` configurado a `https://github.com/andresborrerom/capacitacion-cooperativas-mercantil.git`.

### Bloqueado por input del usuario (lo que yo no puedo hacer)
1. **Crear el repo en github.com** (1 min): github.com → "+" → New repository → nombre `capacitacion-cooperativas-mercantil` → Public → NO marcar "Add README" / "Add .gitignore" / "Add LICENSE" → Create.
2. **Autenticar git push con GitHub**: primera vez abrirá un navegador (Git Credential Manager ya viene con Git for Windows).
3. **Push del commit**: `git push -u origin main` desde la carpeta del proyecto.
4. **Activar GitHub Pages**: Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder: `/ (root)` → Save.

### Tiempo estimado para completar
~5 minutos.

### Verificación post-deploy
Tras el push y activación de Pages, en 1-2 minutos las URLs deberían responder:
- Índice raíz: `https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/`
- Slides Sesión 1: `.../sesiones/sesion-1-estados-financieros/slides/`
- Herramienta Sesión 1: `.../sesiones/sesion-1-estados-financieros/herramientas/mi-foto-financiera/`
- Los QR en las slides escaneados deberían llevar a las herramientas.

---

## 2026-04-23 — Checkpoint 13 · Iteración S1 (fuentes, sensibilidades, UX)

### Decisiones del usuario
- **Metáfora madre: tablero + GPS** confirmado.
- **Arquetipos Vega / Mendoza / Álvarez:** correctos, activarlos en el contenido.
- **Co-facilitación:** dos perfiles — uno con conocimiento cooperativo, otro con conocimiento CFA.
- **Casos El Paraíso / Esfuerzo Unido:** mantenerlos como ficticios, mejorar marcado ilustrativo.
- **Plataforma:** Teams nativo por ahora; revisar polls cuando se pruebe.
- **Nombre Mercantil SI:** mantener por ahora (no renombrar a Mercantil Asset & Wealth Management aún).

### Operativos cerrados
- **Ensayo técnico hecho** — salió bien.
- **QR S1** verificados en celular y funcionaron.

### S1 · cambios aplicados
- Typo `dormirte` → `permitirte dormir` en slide 19, guion y material-participante.
- Herramienta `mi-foto-financiera`: separador de miles en inputs (on focus/blur) + KPI con fondo coloreado según semáforo (hoy verde/amarillo/rojo pastel completo, no solo barra lateral).
- Slide 7 (KPIs "Lo que no se vio"): pie con cálculo explícito del 7%.
- **Slide 9 nuevo:** casos reales SVB 2023 + Metro Bank UK 2019 (WhatsApp rumor) sustituyen el inventado "15% rumor en redes".
- Slide 14 (acento técnico): reformulado — el ≥8% ya no se presenta como umbral legal único sino referencia sectorial. Añadida fuente Ley 17 de 1997 para la reserva 10%.
- Slide 22 (Indicador 3): marcado "caso ilustrativo" el 72% de concentración.
- **Slide 7 nuevo:** cálculos intermedios ("Los mismos números, vistos de otra forma") — 3 cálculos derivados del balance/P&L visibles antes de las conclusiones.
- Slide 25 (caso mediano): nota técnica compacta de dónde vive la mora en los estados financieros + marca de caso ilustrativo.
- **Slides 26 y 27 nuevos:** casos alternos de sensibilidad (plazos de depósito / composición de activos) con A/P/Patrimonio estables y semáforos que cambian entre rojo/amarillo/verde.
- `guion.md` S1 con anotaciones `[SLIDE N]` (37 slides totales después de los inserts).
- `guion.md` S1: orden `frase del día → acento técnico` al cierre del Bloque 2 (alineado con los slides).

### Audit S2/S3/S4 (pendiente de decisión del usuario)
- S2: todos los números del caso El Paraíso son ilustrativos; el "stress test mora +2-3 pp" no tiene fuente regulatoria específica (se recomienda reformular como "buena práctica").
- S3: **punto crítico** — el cálculo de "intereses dejados de cobrar B/. 90k" en el caso del DPF roto no cuadra con la narrativa ("10 meses al 5.2% anual ≈ B/. 43k, no B/. 90k"). La pérdida neta 11% que sostiene la historia depende del 90k. Opciones: (a) corregir narrativa a 10 meses = pérdida ~6.3%; (b) ajustar el caso a 20-24 meses para que 11% cuadre.
- S4: tarjeta 22% es dato real SBP oct-2025 pero no está citado en slide; ofertas A/B de préstamos son ilustrativas; cálculos cuadran.

### Memoria actualizada
- `project_capacitacion_cooperativas.md` — decisiones activas (tablero+GPS confirmado, co-facilitación cooperativas+CFA, casos ficticios mantenidos).

### Siguiente bloque ejecutado tras confirmación del usuario
1. **DPF S3 opción C aplicada.** Slides y guion reescritos a 3 componentes: 20k penalización + 43k intereses devengados perdidos + 47k sobrecosto del crédito puente = 110k ≈ 11%. Marcado como caso ilustrativo.
2. **Audit aplicado:** S2 stress-test reformulado como "buena práctica sectorial" sin citar norma IPACOOP no verificada. S4: fuente SBP oct-2025 añadida al dato tarjeta 22% en `previo.md` y `material-participante.md`; ofertas A/B marcadas como caso ilustrativo en slide y pie.
3. **Tablero + GPS bajado a S1:** slide 19 (los 3 indicadores como "primeros relojes del tablero"), slide 32 (mapa de palancas con mención del GPS en S2), slide 35 (puente a Sesión 2 menciona "entra el GPS"). Guion complementado con frase metafórica.
4. **Arquetipos activados en El Paraíso:** slide 4 (portada oscura) presenta a Vega/Mendoza/Álvarez; slide 10 (moraleja) atribuye la frase a Mendoza; guion Bloque 1 reescrito para que el co-facilitador narre desde la voz de Mendoza; `datos/el-paraiso.md` con sección de personajes.
5. **Bloque T-90 min añadido al instructivo** (MD + HTML). Cubre: speedtest, pestañas listas, polls precargados, textos en portapapeles, co-facilitador, preparación física. `indice.html` ya linkea al instructivo.

### Pendiente
- Usuario revisa en local (`servir.bat`). Si OK → commit + push.

---

## 2026-05-05 — Iteración v1.2 · comentarios S2 y aplicación cruzada a S3/S4 + sistema de polls

### Comentarios del usuario sobre S2 (aplicados a S2 y donde correspondió a S3/S4)

| # | Comentario | Aplicación |
|---|---|---|
| 1 | "Mi película del mes": 2 meses fuera de la visualización | Fix bug SVG (todos los meses visibles) |
| 2 | Guion sin referencia a las diapositivas | Añadido `[Slide N]` por bloque en S2/S3/S4 |
| 3 | Slide 5 no justifica por qué Dic faltó plata | Reforzado con desglose: caja 389k − aguinaldo 120k − proveedores 85k = 184k vs. mínimo 200k = brecha −16k antes de cualquier retiro |
| 4 | Herramienta solo mostraba pareja 4 (recurrente vs extra) | Modo cooperativa ampliado: 4 inputs (cobrado, devengado adicional, pagado, provisión); columnas P&L mes y P&L acumulado en tabla; gráfica con 2 líneas; panel "Las 4 parejas en este caso" con barras comparativas |
| 5 | Inputs recurrentes con 1 sola entrada → 12 meses | Botón "Aplicar a los 12 meses" en modo personal y cooperativa |
| 6 | Min 45 — frase "asegurado" rara | Reescrita: *"Lo que importa no es evitar el evento — no se puede — es tener cobertura de liquidez para absorberlo sin romper"* |
| 7 | Bloque 5 break con "música, cámaras y micros libres" confuso | Reescrito con instrucciones operativas: música stream, cámaras opt-in, contador 5:00, qué hace cada facilitador, aviso a 1 min |
| 8 | Slide 16 Poll #4 sin material de apoyo para el debate | Slide nuevo (#18 en el deck) con tabla por indicador: para qué sirve, cuándo es mejor, sesgo/debilidad. Guion con frases listas para defender cada opción |
| 9 | Slide 20 checklist sin ejemplos | Cada pregunta del checklist con ejemplo numérico concreto |
| 10 | Justificar la "Entidad" en micro-tarea | Slide micro-tarea con bullets (concentración, calidad crediticia, diversificación) + voz facilitador 30 seg + slide nuevo en S3 ("Palanca 7 · La entidad") |

### Aplicado a TODAS las sesiones (S1 incluida — único cambio S1 esta iteración)

**QR único por sesión con landing de 4 pestañas:**
- Nueva carpeta `sesiones/sesion-N-*/landing/` × 4 con index.html que tiene tabs: 📊 Polls · 🛠️ Herramienta · 📝 Evaluación/Post-test · 📚 Material.
- Slides actualizadas: el slide del QR de la herramienta ahora muestra el QR único de la landing con 340×340 px y badges de las 4 pestañas. El slide final de evaluación dejó de tener QR repetido (recordatorio "abre la pestaña Evaluación del QR de la sesión").
- Numeración de slides preservada (refs `[Slide N]` siguen válidas).

### Sistema de polls casero (decisión usuario · opción C)

Construido para funcionar tanto en modalidad presencial como vía Teams. Resultados en vivo (incluye wordcloud para preguntas abiertas).

- `polls/polls.json` — catálogo de los 20 polls del curso (5 por sesión).
- `polls/index.html` — vista participante (`?id=POLL_ID`).
- `polls/facilitador.html` — vista facilitador con selector de polls + auto-refresh 3s + reset.
- `polls/apps-script/Code.gs` — backend Google Apps Script (Sheet por poll).
- `polls/config.js` — placeholder para URL del backend (usuario llena tras desplegar).
- `polls/INSTRUCCIONES.md` — guía paso a paso (~15 min de setup).

### Pendiente operativo del usuario

1. **Desplegar Apps Script de polls** siguiendo `polls/INSTRUCCIONES.md`. Pegar URL en `polls/config.js`. ~15 min, una sola vez.
2. **Generar los 4 QR** de las landings con `scripts/generar-qr.html`. Cada uno se guarda como `landing-sesion-N.png` en `sesiones/sesion-N-*/slides/qr/`. ~5 min total.
3. Probar end-to-end: escanear QR → votar poll → ver resultado en vista facilitador.
4. Decidir si se actualiza también el `indice.html` para apuntar a las landings en lugar de a los slides directamente.

### Memoria actualizada
- N/A esta iteración (las decisiones siguen vigentes).

---

## 2026-05-06 — Cierre de sesión · v1.2 desplegada y operativa

### Lo que cerró el usuario en esta sesión

**Sistema de polls — operativo end-to-end:**
- Apps Script desplegado por el usuario en su cuenta `andres.borrerom@gmail.com`. URL pegada en `polls/config.js` (commit `7979af0`). Token admin: `mercantil-2026`.
- Probado: votó desde celular, recibió en Sheet, vista facilitador renderiza barras y wordcloud en vivo. ✅
- Vista facilitador con selector funciona para saltar entre los 20 polls durante la sesión.

**QR únicos por sesión:**
- Generados los 4 PNGs (`landing-sesion-N.png`) directamente vía PowerShell + `api.qrserver.com` a 1000×1000 (commit `5d12ea6`, mejorado a 1000 en `5517071`).
- Contenedor en slides ampliado de 340px → **500px** con borde de 6px (commit `5517071`). Usuario reporta que ahora se escanea bien desde lejos.

**Material para llevar HTML formateado:**
- 4 archivos `material-participante.html` por sesión con marca Mercantil, tablas, blockquotes, checklists imprimibles, hero degradado.
- Botón **📥 Descargar PDF** que dispara `window.print()` con CSS `@media print` optimizado (A4, page-breaks evitados, colores preservados).
- Landings ya apuntan al `.html` (los `.md` originales se conservan como fuente).

**Guion S2 enriquecido para El Paraíso (commit `2908089`):**
- Tabla de inputs precargados con mapeo a parejas.
- Tabla de resultados clave: saldo final 389k, cambio caja −111k, utilidad +192k, **divergencia 303k**.
- Sensibilidad #1: bajar cobrado 180→165 → caja y utilidad caen 180k cada una (la mora pega a ambos).
- Sensibilidad #2: subir provisiones 25→50 → utilidad −300k, caja sin moverse (provisión es contable, no caja).

### Pendientes que quedan al cierre

1. **BUG sin resolver:** la gráfica de "Mi película del mes" muestra título sobrepuesto a Enero. Aplicado fix v1.2 (sin viewBox/preserveAspectRatio, clientWidth real, redibujo en resize/tab change), pero usuario reporta que persiste tras hard-refresh. Iba a enviar screenshot pero la sesión se cerró antes. **Pendiente diagnosticar con la imagen en próxima sesión.**

2. **Comentario S1 pendiente:** el usuario dijo en el primer mensaje de esta sesión que iba a enviar un comentario específico para S1 (aparte del QR único que sí se aplicó). No llegó.

3. **`indice.html` raíz:** sigue apuntando a slides/herramientas/material por separado. Pendiente actualizar para enlazar también las landings y la vista facilitador de polls. Usuario aprobó el cambio en concepto pero no se ejecutó.

### Estado del repo
- Working tree limpio.
- Branch `main` al día con `origin/main` en `2908089`.
- 6 commits añadidos en esta sesión: `3ce378d` → `2908089`.
- Cada landing tiene su QR PNG en `slides/qr/landing-sesion-N.png`.

### Memoria actualizada en esta sesión
- `project_capacitacion_cooperativas.md`: estado v1.2 + pendientes.
- `reference_curso_urls.md`: landings, materiales HTML, comando PowerShell para QR.
- `reference_polls_sistema.md` **(nueva)**: URL Apps Script, token, IDs de polls, mantenimiento.
- `MEMORY.md`: índice actualizado.

