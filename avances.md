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
