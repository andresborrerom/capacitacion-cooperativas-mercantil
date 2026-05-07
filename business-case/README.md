# Business case · Mercantil A&WM × Cooperativas Panamá

**Audiencia objetivo:** Presidente de Mercantil Asset & Wealth Management.

**Ask:** Aprobar la entrada al segmento cooperativas financieras panameñas con un modelo de servicio diferenciado (CFO/CIO virtual) que justifica la comisión 1.4% AUM y mantiene márgenes saludables gracias a apalancamiento Claude Code.

## Resumen ejecutivo en 4 frases

1. **1.4% AUM es caro** vs. opciones de inversión que las cooperativas tienen hoy en Panamá (DPF, fondos retail, cuentas de ahorro institucional).
2. **Pero la oferta no es comisión, es servicio:** caja transaccional + ALM mediano plazo + inversión de largo plazo en un solo paquete diversificado al que NO acceden si van solas.
3. **Si se suma CFO/CIO virtual** que toma estados financieros mes a mes y rota fondos según necesidades reales, la comisión deja de ser cara — pasa a ser barata vs. contratar un equipo financiero interno.
4. **El margen lo permite Claude Code:** el usuario (experto financiero, programador, matemático) construye el motor de decisión; los costos marginales por cooperativa atendida son cercanos a cero. Margen escalable.

## Mapa del business case

| Archivo | Qué resuelve |
|---|---|
| [00-briefing.md](00-briefing.md) | Contexto, audiencia, criterios de éxito del pitch |
| [01-narrativa-central.md](01-narrativa-central.md) | El argumento conectado (4 puntos hilados) |
| [benchmark/02-plan-investigacion.md](benchmark/02-plan-investigacion.md) | Qué buscar, fuentes, hipótesis a validar |
| [benchmark/03-comisiones-mercado.md](benchmark/03-comisiones-mercado.md) | Tabla maestra de comisiones AWM Panamá |
| [benchmark/04-productos-cooperativas.md](benchmark/04-productos-cooperativas.md) | Qué tienen hoy las cooperativas (DPF, fondos retail, etc.) |
| [propuesta/05-tres-servicios.md](propuesta/05-tres-servicios.md) | Cajón corto · ALM mediano · Inversión largo plazo |
| [propuesta/06-diferenciacion.md](propuesta/06-diferenciacion.md) | Lo que las cooperativas NO consiguen yendo solas |
| [propuesta/07-cfo-cio-virtual.md](propuesta/07-cfo-cio-virtual.md) | La oferta premium: rotación entre fondos basada en estados financieros |
| [modelo-economico/08-cuando-1.4-es-caro.md](modelo-economico/08-cuando-1.4-es-caro.md) | Análisis sin servicio premium |
| [modelo-economico/09-cuando-1.4-es-barato.md](modelo-economico/09-cuando-1.4-es-barato.md) | Análisis con CFO/CIO virtual |
| [modelo-economico/10-margen-con-claude.md](modelo-economico/10-margen-con-claude.md) | Cómo Claude cambia la economía |
| [pitch/11-speech-presidente.md](pitch/11-speech-presidente.md) | Guion del pitch (10-15 min) |
| [pitch/12-presentacion.md](pitch/12-presentacion.md) | Outline de slides |
| [apendices/conexion-curso-S3.md](apendices/conexion-curso-S3.md) | Cómo el curso es la puerta comercial |

## Plan de fases

### Fase 0 · Arquitectura (HECHA)
Carpetas + `.md` esqueleto creados. Define qué hay que llenar.

### Fase 1 · Investigación de benchmark (PENDIENTE — requiere WebSearch)

**Objetivo:** llenar `benchmark/03-comisiones-mercado.md` y `04-productos-cooperativas.md` con datos verificables.

**Qué buscar (priorizado):**
1. Tarifas de comisión por administración de portafolios en Panamá: Banistmo, BAC Credomatic, Banco General, MMG Bank, Prival, Capital Bank, Davivienda, Global Bank, Multibank.
2. Comisiones de fondos mutuos y de inversión en Panamá (entrada, salida, gestión anual).
3. Comisiones de DPF típicas (no aplica comisión, pero rendimiento neto compite con fee de gestión).
4. Reportes IPACOOP / Superintendencia de Bancos sobre productos disponibles para cooperativas.
5. Estudios de la industria AWM Latam (Cerulli Associates, McKinsey, Greenwich Associates) — comparar Panamá con benchmark regional.

**Output esperado:** tabla con 8-12 instituciones, sus tarifas por nivel de riesgo, AUM mínimo, y servicios incluidos.

### Fase 2 · Modelo económico (puedo hacerlo solo, sin internet)

**Objetivo:** llenar los 3 archivos de `modelo-economico/`.

**Qué hacer:** análisis cuantitativo asumiendo cooperativa promedio (B/. 5M AUM), comparando:
- Pago de 1.4% solo por administración: B/. 70k/año.
- Costo de un CFO interno: B/. 60-90k/año (salario + cargas).
- Costo de un comité de inversión part-time: B/. 30-50k/año.
- Costo de oportunidad por mala asignación de gavetas (dato del curso S3: ejemplo del DPF roto = ~8.6% del principal en un solo evento).

### Fase 3 · Pitch + Presentación (sesión activa contigo)

**Objetivo:** convertir lo investigado y modelado en un pitch de 10-15 min al presidente.

**Estructura propuesta:**
1. Slide 1-2 — el problema de las cooperativas (cita datos del curso)
2. Slide 3-4 — el mercado actual (1.4% es caro vs. comisiones puras)
3. Slide 5-7 — la oferta diferenciada (3 servicios + CFO virtual)
4. Slide 8-9 — la economía (cuándo 1.4% es barato)
5. Slide 10 — el moat (Claude Code + experticia del usuario)
6. Slide 11-12 — el ask (presupuesto piloto, mercado objetivo, KPIs)

### Fase 4 · Construcción CFO/CIO virtual (post-aprobación, NO en este proyecto)

Si el presidente aprueba, ESE proyecto se construye en otro repo con Claude Code.

## Trabajo autónomo nocturno — viabilidad

**Lo que necesito para trabajar de noche:**
- Tu PC encendida con Claude Code activo (no en suspensión).
- Acceso a herramientas WebSearch / WebFetch (pendiente confirmar que estén habilitadas).
- Cron job o loop con instrucciones específicas (no abiertas).

**Recomendación:** una sesión activa de 30-45 min para definir las búsquedas EXACTAS, y de ahí lanzar un loop nocturno que solo busca lo que ya acordamos. Evita búsquedas perdidas que no aporten al pitch.

## Estado actual

- Carpetas y `.md` esqueleto creados.
- Conexión narrativa con S3 del curso documentada en `apendices/conexion-curso-S3.md`.
- Pendiente: investigación de benchmark (Fase 1) + modelo económico (Fase 2) + pitch (Fase 3).
