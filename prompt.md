# Prompt para arrancar nueva sesión · 2026-05-08+

> **Pega esto en una sesión nueva de Claude Code** (en la carpeta `C:\Users\pocho\onedrive\mercantil_cooperativas`) para retomar el trabajo sin perder contexto.

---

## Contexto en 30 segundos

Estoy trabajando en el proyecto `mercantil_cooperativas` que tiene **dos componentes hermanos** dentro del mismo repo:

1. **Curso de capacitación financiera para cooperativas panameñas** (`sesiones/`) — 4 sesiones × 2 h, v1.3 desplegada en GitHub Pages, evento mayo 2026.
2. **Business case interno** (`business-case/`) — pitch para que Mercantil A&WM apruebe entrar al segmento cooperativas con servicio diferenciado (CFO/CIO virtual). 2 pitches HTML construidos.

Soy CFA-like / wealth manager técnico que trabaja en Mercantil A&WM. Ambos proyectos están conectados: el curso es la **puerta comercial** del business case (especialmente S3).

---

## Lo primero que debes hacer al arrancar

1. **Lee tu memoria persistente** (la cargas automático), específicamente:
   - `MEMORY.md` (índice)
   - `project_capacitacion_cooperativas.md` (curso)
   - `project_business_case_mercantil.md` (business case)
   - `feedback_modo_trabajo.md` (autonomía con checkpoints)
   - `feedback_entorno_windows.md` (Git + Edge + PowerShell, sin Python ni node)

2. **Lee las 2 últimas entradas de** `avances.md` para ver el estado al cierre 2026-05-07:
   - Sesión 2026-05-06: cierre v1.3 del curso.
   - Sesión 2026-05-07: business case completo (2 pitches construidos).

3. **Confirma que el repo está limpio** con `git status` y que no hay nada sin commitear.

4. **Pregúntame qué quiero hacer hoy** antes de proponer trabajo. Hay varias direcciones posibles (ver "Pendientes" abajo).

---

## Estado al cierre 2026-05-07

### Curso · v1.3 desplegada
- 4 sesiones completas, 5 herramientas interactivas.
- Conos de rentabilidad integrado en S3 como cierre del Bloque 3.
- Caso del edificio S3 con cálculo Opción B (8.6%, defendible número por número).
- URL pública: `https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/`

### Business case · 2 pitches construidos
- **Pitch interno (presidente Mercantil)** — `business-case/pitch/index.html` · 16 slides
- **Pitch a cooperativas** — `business-case/pitch/cooperativas/index.html` · 12 slides
- Benchmark global con 15 fuentes verificables (ESMA, ICI, FCA, Morningstar, Cerulli, Kitces, ANBIMA, etc.)
- Tipología cooperativas Panamá (5 subtipos × 4 gavetas) con datos verificados.
- Caso COACECSS real documentado (5ª cooperativa A&C de Panamá, intervenida 2013).
- Indice raíz: sección renombrada **"Trabajemos juntos"** (no "Pitch al Presidente" — el indice puede ser visible en la reunión).

### Datos clave que tengo memorizados (NO los re-investigues — están verificados)

**Posicionamiento Mercantil 1.4%:**
- −10 bps debajo del all-in US típico (1.50%, Kitces+Morningstar 2024)
- −14 bps debajo de Brasil RV (1.54%, ANBIMA sep-2024)
- +29 bps arriba de UCITS RV activa retail UE (1.11%, ICI/ESMA 2024) — justificable por wrap
- +7.5 bps vs único punto local público (BG Fondo General 1.3125%)
- Percentil ~60-75 global. Dentro de mercado.

**Sector cooperativas:**
- 973 cooperativas activas Panamá (2025, +103% vs 2019)
- 131 son A&C según directorio IPACOOP
- Top 4 A&C combinadas: >USD 800M
- **67.8% cartera A&C cobra por descuento de planilla** (IPACOOP 2021) — DATO ICÓNICO
- Cooperativa Profesionales R.L. = sector SALUD (no profesionales libres genéricos), ~$500M activos
- COACECSS: 33% morosidad, edificio comprado $6.7M vendido $2.5M (-63%), cita textual IPACOOP

---

## Pendientes para esta sesión (posibles direcciones)

Pregúntame por cuál quiero arrancar — NO asumas:

### Opción A · Refinar voz personal en pitches
Ensayar los pitches con mi voz natural. Identificar slides donde el lenguaje suena muy "consultor McKinsey" y muy poco "yo, Pocho hablando". Ajustar tonal sin cambiar contenido.

### Opción B · Datos adicionales si surgen necesidades
- Calcular ANBIMA balanced ponderado (60/40 = 0.99%) — argumento bonus.
- Mystery shopping a 2-3 competidores (MMG, BG, Prival) para validar fee real.
- Top 10 cooperativas A&C completo (agente trajo top 4-5).
- Cifra agregada cartera A&C 2024-2025 (última pública 2021 = B/. 904M).

### Opción C · Operativo
- Generar PDF de respaldo (~25 pp de los .md) para entregar al presidente.
- Probar ambos pitches end-to-end con conexión real a la herramienta de Conos.

### Opción D · Si presidente ya aprobó (próxima fase)
Construir motor CFO/CIO virtual — proyecto técnico separado:
- Parsing de estados financieros mensuales.
- Modelo ALM por gavetas con detección de mismatches.
- Generación automática de propuesta de rebalanceo.
- Reportería trazable a comité directivo.

### Opción E · Algo más que se me ocurra hoy
Cualquier dirección nueva. Soy bueno detectando inconsistencias matemáticas (caso del edificio fue ejemplo); cuestiona supuestos antes de aceptar números.

---

## Notas operativas

- **PC del usuario:** Windows + PowerShell + Git + Edge. NO tiene Python, pandoc, gh, node.
- **Servidor local:** `servir.bat` doble-click. Ahora prueba puertos 8000→8001→...→9000 automáticamente.
- **Workflow git:** edita archivos → `git add` + `git commit` + `git push` → GitHub Pages re-despliega en 1-2 min.
- **Identidad git:** `Andres Borrero` / `andres.borrerom@gmail.com`
- **Modo de trabajo:** autonomía con checkpoints (3/día); no pedir OK constante; cuestionar supuestos antes de aplicar; reportar al final de cada bloque significativo.

---

## Decisiones del usuario que están activas (no proponer revertir)

1. Mercantil A&WM cobra **1.4% AUM all-in** (no separar en gestión + custodia).
2. Caso edificio S3: **Opción B (8.6%, no 11%)** — números defendibles uno por uno.
3. **Posicionamiento 1.4%:** "precio institucional global con transparencia local" (NO "somos caros pero damos más" — esa es narrativa vieja).
4. **67.8% framing:** complemento al análisis crediticio, NO sustituto. La cooperativa nos da inputs (morosidad, salud asociados); nosotros estresamos ALM con escenarios no previstos.
5. **Subtipo C de cooperativas:** "Sector salud" (Coop. Profesionales = médicos), no "Profesionales libres genéricos".
6. **Indice:** sección "Trabajemos juntos" + item interno "Visión estratégica · interno" (sin mencionar "Presidente").
7. **Workflow del usuario en reunión presidente:** abre con pitch a cooperativas (resultado bonito), después cambia a pitch interno (márgenes y economía).
8. **Dominio mercantilsi.com.pa** se queda — solo referencia de marca, no visible al cliente final.

---

## Pregunta de arranque

Cuando hayas leído todo lo anterior, **pregunta:**

> *"Estoy listo. Veo el repo limpio en commit `b5ff815`. Tengo cargado todo el contexto del business case y del curso. ¿Por dónde quieres arrancar hoy: refinar pitches, datos adicionales, operativo (PDF + ensayo end-to-end), construcción del motor CFO/CIO, o algo nuevo?"*

Y espera mi respuesta antes de proponer trabajo.
