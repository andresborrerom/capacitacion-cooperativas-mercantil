# Fuentes · Bibliografía del benchmark

> Toda referencia citada en el business case se registra acá con URL, fecha de consulta, autor cuando aplique, y nivel de confianza.
> Última actualización: 2026-05-07 (investigación de mercado WM Panamá).

## Formato

```
[Categoría] [Título del documento o fuente]
- Autor / Institución: ...
- URL: ...
- Fecha de consulta: YYYY-MM-DD
- Nivel de confianza: alto / medio / bajo
- Aplicado en: 03-comisiones-mercado.md (fila X) / 04-productos-cooperativas.md / etc.
- Notas: ...
```

---

## Fuentes consultadas en investigación 2026-05-07

### Reguladores oficiales

**[1] Superintendencia del Mercado de Valores (SMV) Panamá — Información general casas de valores**
- URL: https://supervalores.gob.pa/informacion-de-personas-juridicas-o-entes-regulados/informacion-general-casas-de-valores/
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: 03-comisiones-mercado.md (referencia general listado SMV)
- Notas: SMV regula 6 bancos con licencia casa de valores, 13 casas de valores subsidiarias de bancos, ~40 casas independientes. Listado oficial accesible vía PDF (binarios no extraíbles automatizado).

**[2] Tarifarios públicos de casas de valores · SMV**
- URL: https://supervalores.gob.pa/files/Sociedades/Tarifas/
- Fecha consulta: 2026-05-07
- Confianza: alto (fuente regulada)
- Aplicado en: filas 4 (Tower), 11 (BAC Valores), 12 (Banistmo), 17 (Casa Real), 18 (Lafise), 19 (Global Valores), 3 (BG Valores)
- Notas: La SMV publica los tarifarios oficiales. Limitación: muchos PDFs son imágenes escaneadas o con compresión que el WebFetch automatizado no extrae como texto. Se requiere descarga manual y OCR para varios.

**[3] Superintendencia de Bancos de Panamá (SBP)**
- URL: https://www.superbancos.gob.pa/
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: validación cruzada bancos (Banesco, BAC, Banistmo, etc.)
- Notas: Listado oficial bancos con licencia general. No es fuente directa de fees AM/WM.

### Tarifarios e institucionales — datos verificables aplicados

**[4] Tarifario corporativo MMG Bank · Sept 2024**
- URL: https://www.mmgbank.com/Repository/Tarifario/Tarifas_servicios_inversion_CORP.pdf
- Página fees: https://www.mmgbank.com/fees/
- Investment Solutions: https://www.mmgbank.com/investment-solutions/
- Fecha consulta: 2026-05-07
- Confianza: alto (web oficial)
- Aplicado en: 03-comisiones-mercado.md fila 2
- Notas: PDF tarifario binario; datos extraídos de búsquedas y página de fees. MMG no publica fee % AUM gestión discrecional. AUM total >USD 3,000M (70% RF Latam).

**[5] Tarifario Tower Securities · SMV**
- URL: https://supervalores.gob.pa/files/Sociedades/Tarifas/Tower%20Securities.pdf
- Towerbank Tarifario: https://www.towerbank.com/en/tarifario
- Towerbank Investments: https://www.towerbank.com/en/investments
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: 03-comisiones-mercado.md fila 4
- Notas: Datos completos extraídos vía web (NO del PDF). Comisiones por transacción 0.5%–3%, mantenimiento USD 150/año, mínimo USD 10,000.

**[6] Tarifa BG Valores · SMV + Banco General**
- URL SMV: https://supervalores.gob.pa/files/Sociedades/Tarifas/BG%20Valores%20-%20Cuenta%20de%20Inversion%20Local.pdf
- BG Valores: https://www.bgeneral.com/personas/bg-valores/
- Cuentas de inversión: https://www.bgeneral.com/personas/cuentas-de-inversion/
- Alianza BlackRock (La Prensa): https://www.prensa.com/contenido-patrocinado/bg-valores-subsidiaria-de-banco-general-firma-alianza-con-blackrock/
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: 03-comisiones-mercado.md fila 3
- Notas: Custodia hasta 0.01%, mantenimiento USD 214 confirmados. Mínimo apertura USD 100,000 confirmado. Fee gestión discrecional BlackRock NP públicamente.

**[7] Mercantil Servicios de Inversión · Tarifas y Comisiones**
- URL: https://www.mercantilsi.com.pa/enlaces_interes/tarifas.html
- Cuenta inversión: https://www.mercantilsi.com.pa/enlaces_interes/cuenta_inversion.html
- Fecha consulta: 2026-05-07
- Confianza: alto (web oficial)
- Aplicado en: 03-comisiones-mercado.md fila 1
- Notas: Tarifario completo extraído. Comisiones por transacción y custodia USD 250/año. NO publica fee gestión discrecional %AUM.

**[8] Fondo General de Inversiones · Banco General**
- URL: https://www.bgeneral.com/personas/fondo-general-inversiones/
- Prospecto: https://www.bgeneral.com/wp-content/uploads/2018/07/banca-prospecto-fondo-general-inversiones.pdf
- Reporte Nov 2025: https://www.bgeneral.com/wp-content/uploads/2025/12/FGIN%20Noviembre%202025.pdf
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: tabla secundaria fondos (FGIN) + análisis posicionamiento (1.3125% vs 1.4% Mercantil)
- Notas: **Dato crítico extraído:** comisión gestión hasta **1.25% anual** + custodia hasta **0.0625% anual** = 1.3125% all-in. Calculado mensual sobre valor neto, pagadero trimestral.

**[9] Tarifas DPF BAC Panamá · enero 2025**
- URL: https://www.baccredomatic.com/sites/default/files/2025-01/Pan_Tarifas_DPFv2_Enero2025.pdf
- BAC Private Banking: https://www.baccredomatic.com/es-pa/private-banking
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: tabla terciaria DPF
- Notas: Tasas DPF BAC: 1m 3.000%, 3m 3.500%, 6m 4.000%, 1a 4.750%, 5a 5.000%.

### Sitios institucionales sin tarifa pública (consultadas, NP de fee)

**[10] Geneva Asset Management / GenAsset**
- URL: https://www.genasset.com/
- Geneva Asset & Wealth Management SA: https://geneva-am.com.pa/
- Fecha consulta: 2026-05-07
- Confianza: medio (datos de AUM y servicios verificables; fees NP)
- Aplicado en: 03-comisiones-mercado.md fila 5
- Notas: AUM >USD 2,500M, 900+ clientes, 3 fondos. Fee % AUM no publicado. Fundadores ex-Merrill Lynch, 25 años de trayectoria.

**[11] Multibank — Multi Securities + Banca Privada Aurum**
- URL: https://www.multibank.com.pa/es/personas/multisecurities
- Banca privada: http://www.multibank.com.pa/es/privada/inversiones-privada
- Tarifario: https://www.multibank.com.pa/es/personas/tarifario-multibank
- Fecha consulta: 2026-05-07
- Confianza: medio (servicios documentados, fees en PDF descargable no extraíble)
- Aplicado en: 03-comisiones-mercado.md fila 6
- Notas: Multibank ahora respaldado por BAC desde marzo 2026. PDFs `tarifario-mb-es-032026.pdf` referenciados pero no extraíbles vía fetch automatizado.

**[12] Prival Bank Panamá Banca Privada**
- URL: https://pa.prival.com/en/banca-privada/
- Portafolios Administrados: https://www.prival.com/panama/banca-privada/productos-servicios/manejo-de-patrimonio/portafolios-administrados
- Fecha consulta: 2026-05-07
- Confianza: medio (programa documentado, fee único confirmado pero no monto)
- Aplicado en: 03-comisiones-mercado.md fila 7
- Notas: Confirma "single fee rate, sin costos de transacción". Monto exacto NP en sitio público.

**[13] Insignia Financial Advisors / IFG**
- URL: https://insigniafa.com/en/
- IFG Real Estate Fund: https://insigniafa.com/en/services-ifg/real-estate-fund
- Who we are: https://insigniafa.com/en/who-we-are
- Fecha consulta: 2026-05-07
- Confianza: medio
- Aplicado en: 03-comisiones-mercado.md fila 8
- Notas: Empresa principalmente M&A advisory, no portafolios discrecionales líquidos. Tiene fondo inmobiliario listado en LATINEX.

**[14] Singular Wealth Management**
- URL: https://singularwm.com/en/cuenta-de-inversion/
- Fecha consulta: 2026-05-07
- Confianza: medio
- Aplicado en: 03-comisiones-mercado.md fila 9
- Notas: 4 cuentas (Advisory, Discretionary, Institutional, Trading DIY). 20+ mercados, 39+ monedas. Resolución CNV 219-2005. Fees NP.

**[15] PKB Wealth Management Panamá**
- URL: https://pkb.com.pa/en/
- Private Banking: https://pkb.com.pa/en/private-banking/
- Fecha consulta: 2026-05-07
- Confianza: medio
- Aplicado en: 03-comisiones-mercado.md fila 10
- Notas: Única banca suiza con licencia bancaria en Panamá. Modelo multi-custodian. PKB Latam ~CHF 1,000M AUM regional, mayoritariamente Panamá. Fees NP.

**[16] BAC Valores · SMV**
- URL: https://supervalores.gob.pa/files/Sociedades/Tarifas/Bac_Valores.pdf
- BAC Private Banking: https://www.baccredomatic.com/es-pa/private-banking
- Fecha consulta: 2026-05-07
- Confianza: bajo (PDF binario no extraíble; documento referencia 2014)
- Aplicado en: 03-comisiones-mercado.md fila 11
- Notas: Tarifario actual no extraíble. Requiere consulta directa.

**[17] Banistmo Securities · SMV + Banca Privada**
- URL Securities: https://supervalores.gob.pa/files/Sociedades/Tarifas/Securities_Banistmo.pdf
- Banca Privada: https://www.banistmo.com/wps/portal/banistmo/personas/productos-y-servicios/banca-privada
- Tarifario consolidado 2026 PA (Bancolombia): https://media.ffycdn.net/us/grupo-bancolombia-arquitectura-y-contenidos/fsQMcgXd6qL7tjdrTGfH.pdf
- Fecha consulta: 2026-05-07
- Confianza: bajo (PDFs binarios no extraíbles)
- Aplicado en: 03-comisiones-mercado.md fila 12
- Notas: Banca Privada Banistmo enfocada en cuentas + tarjetas premium, no se encontró producto AM/WM con fee discrecional público.

**[18] BCT Securities**
- URL: https://www.bctsecurities.com.pa/
- Fecha consulta: 2026-05-07
- Confianza: bajo (datos institucionales, fees no publicados)
- Aplicado en: 03-comisiones-mercado.md fila 13

**[19] Citi Panamá**
- URL: https://www.citibank.com/icg/sa/latam/panama/
- Fecha consulta: 2026-05-07
- Confianza: bajo
- Aplicado en: 03-comisiones-mercado.md fila 14
- Notas: Citi vendió retail Panamá en 2016 a Scotiabank. Mantiene operaciones institucional/wealth pero sin oferta pública panameña dedicada de banca privada con sitio local específico.

**[20] Capital Bank Panamá**
- URL: https://www.capitalbank.com.pa/
- Fecha consulta: 2026-05-07
- Confianza: bajo
- Aplicado en: 03-comisiones-mercado.md fila 15
- Notas: No se localizó división WM separada con tarifario.

**[21] Credicorp Bank Banca Privada**
- URL servicios: https://www.credicorpbank.com/en/banca-privada/servicios/
- Tarifario: https://www.credicorpbank.com/en/tarifario-del-banco/
- Fecha consulta: 2026-05-07
- Confianza: bajo (servicios listados, fees AM/WM no publicados)
- Aplicado en: 03-comisiones-mercado.md fila 16

**[22] Casa Real de Valores · Lafise · Global Valores · Aliada Casa de Valores**
- URLs (todos PDF SMV):
  - https://supervalores.gob.pa/files/Sociedades/Tarifas/Casa%20Real%20de%20Valores,%20S.A.pdf
  - https://supervalores.gob.pa/files/Sociedades/Tarifas/Lafise%20Valores%20de%20Panama,%20S.A.pdf
  - https://supervalores.gob.pa/files/Sociedades/Tarifas/Global_Valores_SA.pdf
  - https://supervalores.gob.pa/files/Sociedades/Tarifas/Aliada%20Casa%20de%20Valores.pdf
- Fecha consulta: 2026-05-07
- Confianza: bajo (PDFs binarios no extraíbles vía fetch)
- Aplicado en: 03-comisiones-mercado.md filas 17, 18, 19
- Notas: PDFs existen y están en sitio oficial SMV. Requieren OCR/descarga manual.

**[23] Banesco Panamá**
- URL: https://www.banesco.com.pa/somos-banesco-panama/
- Banesco INA SMV: https://supervalores.gob.pa/wp-content/uploads/2021/03/Banesco-INA-2016.pdf
- Fecha consulta: 2026-05-07
- Confianza: bajo
- Aplicado en: 03-comisiones-mercado.md fila 20

### Cooperativas y entorno

**[24] IPACOOP**
- URL: https://ipacoop.gob.pa/
- Directorio: https://ipacoop.gob.pa/directorio-de-cooperativas/
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: contexto general (479 cooperativas activas, 26.9% A&C = 129)
- Notas: Datos de Q2 2019; verificar última edición.

**[25] Coopeduc · DPF**
- URL: https://www.coopeduc.com/en/saving-plans/fixed-terms-saving-account/
- Fecha consulta: 2026-05-07 (devolvió HTTP 404)
- Confianza: NP
- Aplicado en: tabla terciaria DPF (NP)
- Notas: Página devuelve 404. Re-verificar URL.

### Reportes globales y contexto sectorial

**[26] Mercado Wealth Panamá · FlexFunds**
- URL: https://flexfunds.com/trends-numbers/panama-a-strategic-market-for-investors/
- Fecha consulta: 2026-05-07
- Confianza: medio (publicación corporativa)
- Aplicado en: contexto análisis preliminar
- Notas: Panamá USD 149,000M en activos bajo administración (cifra agregada).

**[27] EY Wealth & Asset Management Outlook 2025**
- URL: https://www.ey.com/es_ce/insights/wealth-asset-management/2025-global-wealth-asset-management-outlook
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: contexto global

**[28] UBS · Panamá 2026**
- URL: https://www.ubs.com/global/es/wealthmanagement/latamaccess/market-updates/articles/panama-2026-trends-risks-opportunities.html
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: contexto

**[29] SENACYT Cuaderno Sectorial Servicios Financieros**
- URL: https://www.senacyt.gob.pa/wp-content/uploads/2025/04/5-PENCYT-2025-2029_Cuaderno-finanzas.pdf
- Fecha consulta: 2026-05-07
- Confianza: alto (publicación oficial)
- Aplicado en: contexto sectorial
- Notas: Sector financiero 6.3% PIB, expansión 45% últimos 10 años.

**[30] Benchmark global AUM fees**
- Kitces: https://www.kitces.com/blog/independent-financial-advisor-fees-comparison-typical-aum-wealth-management-fee/
- SmartAsset: https://smartasset.com/financial-advisor/asset-based-fee
- AdvisorFinder: https://www.advisorfinder.com/resources-for-clients/about-advisors/aum
- Fecha consulta: 2026-05-07
- Confianza: medio (fuentes EE.UU., no Panamá específico)
- Aplicado en: análisis preliminar (rango 0.5%–2%, mediana global ~1.0%)

---

## Fuentes globales / extra-Panamá (investigación 2026-05-07, archivo 05-benchmark-global-wm-fees.md)

### Reguladores con publicación obligatoria (Tier 1)

**[G1] ESMA · Market Report on Costs and Performance of EU Retail Investment Products 2024**
- URL: https://www.esma.europa.eu/sites/default/files/2025-01/ESMA50-524821-3525_ESMA_Market_Report_-_Costs_and_Performance_of_EU_Retail_Investment_Products.pdf
- Press release: https://www.esma.europa.eu/press-news/esma-news/average-cost-retail-investment-products-declines-significant-differences
- Fecha consulta: 2026-05-07
- Confianza: alto (regulador UE)
- Aplicado en: 05-benchmark-global-wm-fees.md fila 1, 3
- Notas: PDF binario no extraíble vía fetch automatizado. Cifras tomadas de press release + cobertura sectorial (CMS Law). Trends 2019–2023: RV -5%, RF -13%, mixtos estables.

**[G2] ESMA · The Scale Factor: Impact of Size on EU Fund Cost Structures (feb-2025)**
- URL: https://www.esma.europa.eu/sites/default/files/2025-02/ESMA50-524821-3575_The_scale_factor_Impact_of_size_on_EU_fund_cost_structures.pdf
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: 05-benchmark-global-wm-fees.md (argumento "fondo pequeño paga más")
- Notas: Total cost UCITS rango 0.5% (RF pasiva) a ~2.0% (RV activa). Average UCITS fund 10x más pequeño que US mutual fund average → economías de escala no exhaustadas en UE. PDF binario, datos de cobertura.

**[G3] ESMA · Report on Total Costs of Investing in UCITS and AIFs (nov-2025)**
- URL: https://www.esma.europa.eu/sites/default/files/2025-11/ESMA50-1949966494-3918_Report_on_total_costs_of_investing_in_UCITS_and_AIFs.pdf
- Cobertura: https://cms.law/en/lux/news-information/newsflash-esma-reports-on-total-costs-of-investing-in-ucits-and-aifs
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: 05-benchmark-global-wm-fees.md fila 3
- Notas: Distribución 48% del costo UCITS / 27% AIFs. Retail paga ~2x institucional. Sample EUR 7.2T UCITS + EUR 2.6T AIFs.

**[G4] ESMA · Costs and Performance of EU Retail Investment Products 2025 (mar-2026)**
- URL: https://www.esma.europa.eu/sites/default/files/2026-03/ESMA50-1949966494-4065_Market_Report_-_Costs_and_Performance_of_EU_Retail_Investment_Products.pdf
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: contexto general 05-benchmark-global-wm-fees.md
- Notas: Reporte más reciente, complementa G1. PDF binario no extraíble.

**[G5] FCA UK · Investment Management Data Annual Report 2020/21**
- URL: https://www.fca.org.uk/data/investment-management-data-annual-report-2020-21
- Fecha consulta: 2026-05-07
- Confianza: alto (regulador UK)
- Aplicado en: 05-benchmark-global-wm-fees.md fila 4
- Notas: UK active funds asset-weighted: 1.08% (2015) → 1.00% (2018) → 0.89% (2020). Pasivos: 0.29% → 0.25% → 0.15%.

**[G6] FCA UK · Asset Management Market Study Final Report (jun-2017)**
- URL: https://www.fca.org.uk/publication/market-studies/ms15-2-3.pdf
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: 05-benchmark-global-wm-fees.md fila 5
- Notas: Active equity OCF 0.90%, pasivo 0.15% (datos 2015). Hallazgo metodológico: no hay correlación fee → performance bruta; correlación negativa fee → retorno neto.

### Industria global (Tier 2)

**[G7] Morningstar · 2024 Annual US Fund Fee Study**
- URL: https://www.morningstar.com/lp/annual-us-fund-fee-study
- Cobertura: https://www.morningstar.com/funds/4-fund-fee-trends-watch-2025
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: 05-benchmark-global-wm-fees.md fila 6
- Notas: Asset-weighted average 0.34% (2024), -5.3% YoY. Active 0.59% (estable); pasivo 0.11%. Active US equity 0.60%.

**[G8] ICI · Ongoing Charges for UCITS in the European Union, 2024 (dic-2025)**
- URL: https://www.ici.org/files/2025/per31-10.pdf
- News: https://www.ici.org/news-release/ucits-ongoing-charges-decline-across-eu
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: 05-benchmark-global-wm-fees.md filas 1, 2
- Notas: **DATO ESTRELLA: UCITS Equity asset-weighted 1.11% (2024) vs 1.18% (2023). RF 0.68% vs 0.66%.** Lanzamientos 2024 RV 0.76%; salidas 1.01%.

**[G9] ICI · 2025 Investment Company Fact Book**
- URL: https://www.icifactbook.org/pdf/2025-factbook.pdf
- News release: https://www.ici.org/news-release/mutual-fund-and-etf-fees-remained-near-historic-lows-in-2025
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: 05-benchmark-global-wm-fees.md fila 7
- Notas: Equity MF 0.40% (2025) asset-weighted; bond MF 0.36%. **Bond fund percentiles: P10 0.31%, mediana 0.70%, P90 1.55%, simple avg 0.81%.**

**[G10] Kitces · Independent Financial Advisor Fees / Inside Information "Fees In Motion" 2024**
- URL: https://www.kitces.com/blog/independent-financial-advisor-fees-comparison-typical-aum-wealth-management-fee/
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: 05-benchmark-global-wm-fees.md fila 8
- Notas: Mediana 1.00% AUM en USD 1M; 62% advisors cobran ≥1% en USD 1M, 32% en USD 2M.

**[G11] Cerulli Associates · US Advisor Metrics 2024**
- URL: https://www.cerulli.com/reports/us-advisor-metrics-2024
- Cobertura: https://www.thinkadvisor.com/2025/04/30/1--cerulli/
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: 05-benchmark-global-wm-fees.md fila 9
- Notas: Schedule por AUM cliente: USD 100k = 1.25%, USD 10M = 0.67% (proyectado 2026). 77.6% industria fee-based en 2026.

**[G12] PwC · Asset and Wealth Management Revolution 2025**
- URL: https://www.pwc.com/gx/en/issues/transformation/asset-wealth-management/pwc-awm-revolution-2025.pdf
- Cobertura: https://www.ipe.com/pwc-asset-management-costs-to-drop-20-by-2025/10027888.article
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: 05-benchmark-global-wm-fees.md fila 10
- Notas: Mutual fund global asset-weighted mgmt fee proyectado 0.36% (2025), -20% vs. mediados 2010s. Active equity 0.44%; pasivos 0.12%.

**[G13] McKinsey · Asset Management 2025: The Great Convergence**
- URL: https://www.mckinsey.com/industries/financial-services/our-insights/asset-management-2025-the-great-convergence
- Fecha consulta: 2026-05-07
- Confianza: alto
- Aplicado en: 05-benchmark-global-wm-fees.md fila 11
- Notas: AUM global jun-2025 USD 147T. Europa pasivos 13 bps, active equity 42 bps (2024).

### Latam comparable (Tier 3)

**[G14] ANBIMA · Estatísticas Fundos de Investimento (Brasil)**
- URL: https://www.anbima.com.br/pt_br/informar/estatisticas/fundos-de-investimento/fundos-de-investimento.htm
- Insight Economatica: https://insight.economatica.com/perfil-taxa-de-administracao-anbima/
- Fecha consulta: 2026-05-07 (datos sep-2024)
- Confianza: alto
- Aplicado en: 05-benchmark-global-wm-fees.md fila 12
- Notas: **DATO LATAM ESTRELLA: RF 0.62%, Multimercado 0.95%, Ações 1.54% (sep-2024).**

**[G15] AMIB · Asociación Mexicana de Instituciones Bursátiles**
- URL: https://www.amib.com.mx/
- Fecha consulta: 2026-05-07
- Confianza: medio (rango sí publicado, promedio por tipo NP)
- Aplicado en: 05-benchmark-global-wm-fees.md fila 13
- Notas: 636 fondos, AUM USD 210B (ene-2025). Comisiones rango 0.50%–2.00% AUM/año. Promedio detallado por tipo NP en agregado público.

**[G16] CMF Chile · Portal Fondos Mutuos**
- URL: https://www.cmfchile.cl/institucional/estadisticas/fm.comision_menu.php
- Tabla Santander 2024: https://banco.santander.cl/uploads/000/051/557/8508b9fa-fc6e-4129-89c5-6a747ad4790e/original/Tabla_Anual_de_Costos_2024.pdf
- Fecha consulta: 2026-05-07
- Confianza: bajo (datos por fondo sí; agregado sectorial NP)
- Aplicado en: 05-benchmark-global-wm-fees.md fila 14
- Notas: Promedio sectorial Chile NP en publicación oficial. Requiere descarga manual + cálculo.

**[G17] Asofiduciarias · Colombia**
- URL: https://www.asofiduciarias.org.co/
- Cobertura: https://www.pulzo.com/economia/inversion-fiduciaria-colombia-aumento-activos-rentabilidad-2024-PP4318606
- Fecha consulta: 2026-05-07
- Confianza: bajo (datos AUM sí; comisión promedio NP)
- Aplicado en: 05-benchmark-global-wm-fees.md fila 15
- Notas: 214 FIC, COP 955B AUM (2024, +5.37% YoY). Promedio comisión NP en publicación.

---

## Pendiente / lo que NO se logró extraer (gaps de la investigación)

> Esto es lo que un siguiente esfuerzo (entrevistas, descarga manual + OCR, llamadas comerciales) debería resolver:

### Tarifarios SMV en PDF binario — requieren descarga manual y OCR

- [ ] **BAC Valores tarifario completo y actualizado 2025/2026** (referencia accesible es 2014)
- [ ] **Securities Banistmo tarifario completo**
- [ ] **Casa Real de Valores tarifario**
- [ ] **Lafise Valores tarifario**
- [ ] **Global Valores (Global Bank) tarifario**
- [ ] **Aliada Casa de Valores tarifario**
- [ ] **MMG Bank tarifario completo de servicios de inversión** (sept 2024 — PDF no extraíble vía fetch)
- [ ] **Multibank tarifario completo** (`tarifario-mb-es-032026.pdf`)
- [ ] **Banco General contrato de custodia y administración discrecional** (`CONTRATO-DE-CUSTODIA-CTA-ADMINISTR-DA_Cuenta.pdf` — sección de tarifas de gestión)
- [ ] **Banco General Plazo Fijo tasas actuales** (vigentes desde 1-nov-2025)
- [ ] **DPF tasas Banistmo, Banco General, Coopeduc, otras cooperativas A&C grandes**

### Fees AUM no publicados — requieren consulta directa o entrevista

- [ ] **MMG Bank — fee gestión discrecional como % AUM** (consulta a wealth_management@mmgbank.com)
- [ ] **BG Valores — fee gestión discrecional alianza BlackRock** (consulta a `blackrock-m-a@bgeneral.com`)
- [ ] **Prival — monto exacto del "single fee rate"** del programa Portafolios Administrados
- [ ] **GenAsset — fee % AUM** (info@genasset.com o teléfono +507 210-1430)
- [ ] **Singular WM — fees por tipo de cuenta** (servicioalcliente@singularwm.com / +507 202-0305)
- [ ] **PKB Wealth Management Panamá — fee multi-custodian, AUM mínimo**
- [ ] **Citi Private Bank Panamá — AUM mínimo y fees Latam-PA-específicos**
- [ ] **Banistmo Banca Privada — confirmación si tienen producto AM discrecional o solo cuentas + tarjetas**

### Cooperativas — datos de tasas DPF y comportamiento de tesorería

- [ ] **Listado completo cooperativas A&C activas IPACOOP** (last update 2025/2026)
- [ ] **Tasas DPF representativas por tamaño** (Coopeduc, Coopaep, Coopeve, UCACEP)
- [ ] **AUM agregado tesorerías cooperativas** (estimación de mercado direccionable)

### Reportes pagos / premium que mejorarían el análisis

- [ ] **Cerulli Latam Wealth Management** (premium)
- [ ] **McKinsey Global Wealth Management Report** edición más reciente
- [ ] **PwC Asset Management 2025**
- [ ] **Greenwich Associates Institutional Investor**

### Entrevistas recomendadas (ground truth, no en web)

- [ ] **3 cooperativas A&C medianas** (USD 10M–50M tesorería) — qué fees pagan hoy, a qué institución, qué les molesta
- [ ] **1 ex-asesor de banca privada** (Banistmo, BAC, MMG) — fees reales no publicados
- [ ] **Comité de inversión cooperativa** — proceso de selección de proveedor, criterios de governance

---

## Lista de referencias originales del esqueleto (status)

### Pendiente de consultar (Tier 1)

- [x] **IPACOOP** — Instituto Panameño Autónomo Cooperativo (consultado 2026-05-07; datos básicos extraídos)
- [x] **Superintendencia de Bancos de Panamá** (consultado 2026-05-07)
- [x] **Superintendencia del Mercado de Valores (SMV)** (consultado 2026-05-07; listados extraídos, tarifarios PDF parcialmente extraíbles)
- [x] **Banistmo** (consultado 2026-05-07; banca privada y securities. Tarifario detallado pendiente)
- [x] **BAC Credomatic Panamá** (consultado 2026-05-07; private banking. Tarifario WM AUM no público)
- [x] **Banco General** (consultado 2026-05-07; FGIN extraído con dato verificable 1.3125% all-in)
- [x] **MMG Bank** (consultado 2026-05-07; fees corporate transacciones extraídos; %AUM gestión NP)
- [x] **Prival Bank** (consultado 2026-05-07; programa Portafolios Administrados confirmado, monto NP)
- [x] **Capital Bank** (consultado 2026-05-07; sin división WM separada localizada)
- [ ] **Davivienda Panamá** (no consultado en esta sesión; **excluido** porque no se posicionó como WM; verificar en próxima ronda)
- [x] **Global Bank** (consultado vía Global Valores SMV; tarifario PDF binario)
- [x] **Multibank** (consultado 2026-05-07; Multi Securities y Banca Privada Aurum)
- [x] **Insignia Financial Advisors** (consultado 2026-05-07; principalmente M&A advisory)
- [x] **Banesco Capital** (consultado 2026-05-07; sin tarifario WM público localizado)
- [x] **Towerbank** (consultado 2026-05-07; Tower Securities con tarifario completo extraído)
- [x] **PKB Wealth Management** (consultado 2026-05-07; modelo multi-custodian)
- [x] **Geneva Asset Management / GenAsset** (consultado 2026-05-07)
- [x] **Singular Wealth Management** (consultado 2026-05-07)
- [x] **Credicorp Bank** (consultado 2026-05-07)
- [x] **BCT Securities** (consultado 2026-05-07)

### Reportes de industria (Tier 2)

- [ ] **McKinsey Global Wealth Management Report** — pendiente
- [ ] **PwC Asset Management 2025** — pendiente
- [ ] **Cerulli Latam Wealth Management** — pendiente (premium)
- [ ] **Greenwich Associates Institutional Investor** — pendiente (premium)
- [x] **EY Global WM Outlook 2025** (consultado 2026-05-07)
- [x] **UBS Panamá 2026** (consultado 2026-05-07)
- [x] **SENACYT Cuaderno Sectorial Finanzas** (consultado 2026-05-07)

### Prensa local (Tier 3)

- [ ] **Capital Financiero (Panamá)** — capitalfinanciero.com (búsquedas no devolvieron artículos específicos sobre fees WM)
- [ ] **La Estrella de Panamá** — sección de economía
- [x] **La Prensa** (artículo BG Valores–BlackRock consultado 2026-05-07)
- [ ] **Forbes Panamá** — pendiente

### Datos del proyecto (interno)

- [x] **Curso de capacitación cooperativas** (este repo)
  - Ruta: `sesiones/sesion-3-productos-financieros/`
  - Aplicado en: caso DPF roto (mismatch ~8.6% del principal en un solo evento), datos sobre comportamiento típico de comités de inversión, ejemplos de gavetas mal asignadas.
  - Fecha: 2026-04 hasta 2026-05.
  - Confianza: alta (datos del propio diseño).
