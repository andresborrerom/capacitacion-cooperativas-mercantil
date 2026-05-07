# 10 · Margen con Claude — la economía interna del segmento

## Tesis del archivo

**Mercantil A&WM puede atender el segmento cooperativas con margen alto** porque el motor de decisión (CFO/CIO virtual) se construye una vez y escala. Los costos marginales por cooperativa atendida son bajos comparados con un servicio tradicional de banca privada.

## Modelo de costos · servicio tradicional vs. servicio con apalancamiento Claude

### Servicio tradicional de banca privada institucional

Para atender una cooperativa típica con servicio profesional sin apalancamiento algorítmico:

| Componente | Costo anual asignable |
|---|---|
| PM senior (10% de un FTE @ B/. 120k) | B/. 12k |
| Analista de portafolios (15% de un FTE @ B/. 60k) | B/. 9k |
| Compliance / operaciones (5% de un FTE @ B/. 80k) | B/. 4k |
| Sistemas, custodia, reportería tradicional | B/. 8k |
| Overhead asignable | B/. 5k |
| **Costo por cooperativa atendida (sin Claude)** | **B/. 38k** |

Sobre B/. 70k de revenue: margen ~46%. Decente pero no espectacular.

### Servicio con apalancamiento Claude Code

El motor CFO/CIO virtual transforma la economía:

| Componente | Costo anual asignable |
|---|---|
| PM senior (3-5% de un FTE — solo revisa y firma) | B/. 4-6k |
| Motor algorítmico (amortizado: B/. 30k construcción + B/. 6k mantenimiento, dividido entre 20 cooperativas) | B/. 1.8k |
| Compliance / operaciones (3% de un FTE) | B/. 2.4k |
| Sistemas, custodia, reportería automatizada | B/. 4k |
| Overhead asignable | B/. 5k |
| **Costo por cooperativa atendida (con Claude)** | **B/. 17-19k** |

Sobre B/. 70k de revenue: **margen ~73-76%**.

## La curva de margen al escalar

| # cooperativas activas | Costo motor amortizado | Costo total por coop | Revenue por coop | Margen |
|---|---|---|---|---|
| 1 | B/. 36,000 | B/. 51,400 | B/. 70,000 | 27% |
| 5 | B/. 7,200 | B/. 22,600 | B/. 70,000 | 68% |
| 10 | B/. 3,600 | B/. 19,000 | B/. 70,000 | 73% |
| 20 | B/. 1,800 | B/. 17,200 | B/. 70,000 | 75% |
| 50 | B/. 720 | B/. 16,120 | B/. 70,000 | 77% |

**Punto de equilibrio:** 1-2 cooperativas firmadas cubren el costo del motor en año 1.

**Ejecución óptima:** 10-20 cooperativas en 24 meses → margen 73-75% sostenido.

> Cifras ilustrativas; modelo a refinar cuando esté el plan financiero detallado del piloto.

## Por qué el motor cambia la ecuación

### Tareas que el motor automatiza (antes manuales)

1. **Lectura de estados financieros mensuales:** parsing automático de PDF/Excel. Antes: 2-4 horas por cooperativa por mes.
2. **Cálculo de necesidad de caja:** modelo matemático. Antes: criterio de PM.
3. **Verificación de cumplimiento de política:** chequeo automático. Antes: revisión manual.
4. **Detección de mismatches:** alertas algorítmicas. Antes: detectado en revisión trimestral si tenía suerte.
5. **Generación de propuesta de rebalanceo:** output del motor. Antes: PM construye desde cero.
6. **Reportería al cliente:** auto-generada. Antes: 1-2 horas de PM por mes.

**Tiempo de PM senior por cooperativa por mes:**
- Sin motor: 6-10 horas.
- Con motor: 1-2 horas (revisar y firmar).

### Tareas que QUEDAN como humanas

- Decisión final del rebalanceo (firma del PM).
- Conversaciones con la cooperativa cuando surge un cambio estratégico.
- Compliance, KYC, due diligence inicial.
- Onboarding de cooperativa nueva.
- Casos atípicos donde el motor no tiene contexto suficiente.

> El motor NO reemplaza al PM senior. Lo apalanca para que pueda atender 5-10× más cooperativas sin perder calidad.

## Costo de construcción del motor (Fase 4 si se aprueba)

Estimación gruesa para conversación con presidente:

| Bloque | Esfuerzo | Costo (si Claude Code lo lleva) |
|---|---|---|
| Diseño del modelo (data dictionary, lógica de gavetas, ALM) | 80 h | B/. 8k |
| Motor de parsing de estados financieros | 60 h | B/. 6k |
| Modelo de optimización por gaveta | 100 h | B/. 10k |
| Integración con custodia / sistema de reporting | 80 h | B/. 8k |
| Reportería automática (PDFs, dashboards) | 60 h | B/. 6k |
| Testing + iteración con piloto | 80 h | B/. 8k |
| **Total construcción motor** | **460 h** | **~B/. 30k** |

Esto es **mucho menos** que construir un sistema institucional tradicional (B/. 200-500k típicos), gracias a:
- Apalancamiento de Claude Code (asistente programador 5-10× más rápido que humano puro).
- Experticia consolidada del usuario en finanzas, portafolios, programación.
- Stack ligero (HTML/JS/Python según necesidad, no infraestructura enterprise).

**Punto crítico:** este número (B/. 30k construcción + B/. 6k mantenimiento) es lo que el presidente debe aprobar como inversión inicial. Recupera con 1 cooperativa firmada.

## Margen objetivo del segmento (3 años)

Año 1 (piloto, 2-3 cooperativas):
- Revenue: B/. 140-210k
- Costo: B/. 70-90k (incluye amortización motor)
- **Margen: 50-65%**

Año 2 (escalando, 8-12 cooperativas):
- Revenue: B/. 560-840k
- Costo: B/. 170-230k
- **Margen: 70-73%**

Año 3 (consolidado, 18-25 cooperativas):
- Revenue: B/. 1.26M-1.75M
- Costo: B/. 320-440k
- **Margen: 74-76%**

## La pregunta que el presidente debe poder responder

> *"¿Tenemos un segmento que paga B/. 1M+ revenue al año 3 con margen 75% y un moat tecnológico que un competidor no replica fácilmente?"*

**Respuesta:** sí, si arrancamos ahora con el piloto y construimos el motor en paralelo. **No, si esperamos** — la ventana de capacitar al mercado vía el curso es ahora; otro competidor puede llegar primero.

## Riesgos del modelo de margen

1. **Fee compresión:** si el mercado AWM Panamá baja fees a 1% en 5 años, nuestro 1.4% queda más expuesto. Mitigante: el moat es el servicio, no el fee — si compre fee a 1% el margen sigue siendo 65%+.
2. **Costo motor mayor a estimado:** B/. 30k podría ser optimista. Buffer de 50% (B/. 45k) sigue siendo bajo vs. alternativas.
3. **Volumen menor a esperado:** 20 cooperativas en 24 meses es ambicioso. Si llegamos a 10, margen sigue siendo >70%.
4. **Pérdida de un PM senior clave:** la diferenciación humana sigue siendo crítica. Mitigante: documentación del motor permite onboarding de PM nuevo en menor tiempo.
