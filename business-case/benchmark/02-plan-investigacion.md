# 02 · Plan de investigación de benchmark

## Hipótesis a validar

H1. **El rango de comisiones AWM en Panamá para portafolios institucionales** está en 0.6% – 1.5% AUM/año.
H2. **Las cooperativas hoy NO contratan AWM profesional.** La mayoría usan DPF + cuenta de ahorro + algún fondo retail.
H3. **No existe en Panamá una oferta integrada** caja + ALM + inversión + CFO virtual para cooperativas. Si hay, viene de bancos grandes (Banistmo, BAC, BG) pero sin diferenciación pedagógica ni motor algorítmico.
H4. **El mercado de cooperativas con AUM > B/. 3M en Panamá** son ~50-100 instituciones según IPACOOP. Mercado total potencial: B/. 200-500M AUM.

## Fuentes priorizadas

### Tier 1 — Datos primarios (lo más fuerte)

1. **IPACOOP** (Instituto Panameño Autónomo Cooperativo) — reportes anuales, listado de cooperativas activas, AUM agregados.
2. **Superintendencia de Bancos de Panamá (SBP)** — circulares sobre fondos mutuos, normativa de gestión de patrimonios.
3. **Superintendencia del Mercado de Valores (SMV)** — registros de gestoras de inversión autorizadas, prospectos de fondos.
4. **Hojas de tarifas públicas** de bancos panameños:
   - Banistmo (banistmo.com)
   - BAC Credomatic (baccredomatic.com)
   - Banco General (bgeneral.com)
   - MMG Bank (mmgbank.com)
   - Prival Bank (prival.com)
   - Capital Bank (capital-bank.com)
   - Davivienda Panamá
   - Global Bank
   - Multibank
5. **Casas de valores y administradoras de fondos en Panamá:** Insignia Financial Advisors, MMG Asset Management, Banesco Capital, Towerbank.

### Tier 2 — Reportes de industria

1. **Cerulli Associates** — Latam Wealth Management Report (suele costar — buscar versión gratuita o resumen en prensa).
2. **McKinsey Global Wealth Management** — informe anual, gratis.
3. **Greenwich Associates** — institutional asset management.
4. **PwC Asset Management 2025** — reportes globales con foco regional.
5. **Mercer / WTW** — institutional fee benchmarks.

### Tier 3 — Prensa y cobertura local

1. **La Estrella de Panamá**, **La Prensa**, **Capital Financiero** — artículos sobre fees de gestión, productos cooperativos.
2. **Forbes Panamá** — entrevistas a líderes de banca privada.
3. **LinkedIn** — perfiles de portfolio managers locales (señales de qué productos venden).

## Preguntas concretas que cada fuente debe responder

Para cada institución competidora, llenar:

| Campo | Detalle |
|---|---|
| Nombre | |
| Tipo | Banco · Casa de valores · Gestora especializada |
| Fee anual | % AUM o tier |
| AUM mínimo | B/. para acceder |
| Productos ofrecidos | Conservador · Moderado · Crecimiento |
| Custodia | Incluida · Aparte |
| Reporte | Mensual · Trimestral · Anual |
| Asesor dedicado | Sí · No |
| Plataforma digital | Sí · No |
| Fees adicionales | Trading, performance fee, transferencias |
| Fuente | URL + fecha de consulta |

## Preguntas estratégicas que el benchmark debe poder responder

1. ¿Cuál es el **fee promedio** del mercado AWM panameño para institucional?
2. ¿Qué institución cobra **menos que 1.4%** y qué OFRECE? (¿es solo custodia? ¿incluye gestión activa?)
3. ¿Qué institución cobra **más que 1.4%** y qué ofrece a cambio?
4. ¿Hay una **brecha en el mercado** entre fee bajo (DPF/cuenta) y fee alto (banca privada para >B/. 1M)? Esa brecha es nuestra ventana.
5. ¿Existe una **oferta integrada caja + ALM + LP** para cooperativas? Si sí, ¿de quién?
6. ¿Cuántas cooperativas en Panamá tienen AUM > B/. 3M? (Mercado direccionable.)

## Output esperado del trabajo de investigación

Cuando se complete la fase 1:

- [ ] [`03-comisiones-mercado.md`](03-comisiones-mercado.md) con tabla de 8-12 instituciones llena.
- [ ] [`04-productos-cooperativas.md`](04-productos-cooperativas.md) con descripción de qué tienen las cooperativas hoy.
- [ ] [`fuentes.md`](fuentes.md) con bibliografía completa (URL, fecha de consulta, autor cuando aplique).
- [ ] **Insight resumen**: 1 página con las 3 conclusiones clave del mercado para usar en el pitch.

## Cómo se hace la búsqueda autónoma (si se aprueba)

**Sesión 1 (activa, contigo):** definir las 8-12 instituciones objetivo y la estructura exacta de la tabla.

**Loop nocturno (si se configura):**
- Para cada institución, prompt: *"Busca en su sitio web público las tarifas de gestión de portafolios institucionales. Si no están públicas, busca en prensa o reportes oficiales. Llena la fila correspondiente en `03-comisiones-mercado.md`. Cita fuente con URL."*
- Ejecuta una vez por noche.
- Reporta al día siguiente qué encontró y qué quedó pendiente.

**Sesión 2 (activa, contigo):** revisar lo encontrado, ajustar fuentes faltantes, y validar números antes del pitch.
