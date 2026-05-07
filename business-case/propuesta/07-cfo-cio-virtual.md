# 07 · CFO/CIO virtual — la diferenciación dura

## La idea en una frase

> *"Convertimos los estados financieros mensuales/trimestrales de la cooperativa en decisiones de rebalanceo entre las 3 gavetas, sin necesidad de que la cooperativa contrate un CFO en planilla."*

## Cómo funciona el flujo (visión cliente)

```
┌────────────────────────────┐
│  Cooperativa entrega:       │
│  - Estados financieros      │
│    mensuales/trimestrales   │
│  - Proyección de flujos     │
│  - Política de riesgo       │
└────────────┬───────────────┘
             │
             ▼
┌────────────────────────────┐
│  Motor CFO/CIO virtual      │
│  (Claude Code + experticia) │
│                             │
│  Calcula:                   │
│  - Necesidad caja G1-2      │
│  - Calce ALM G2-3           │
│  - Capacidad LP G4          │
│  - Rebalanceo recomendado   │
└────────────┬───────────────┘
             │
             ▼
┌────────────────────────────┐
│  PM senior Mercantil A&WM   │
│  - Revisa recomendación     │
│  - Ajusta si necesario      │
│  - Firma decisión           │
└────────────┬───────────────┘
             │
             ▼
┌────────────────────────────┐
│  Ejecución + Reporte        │
│  - Trades a custodia        │
│  - Reporte trazable a junta │
│  - Métricas mensuales       │
└────────────────────────────┘
```

## Componentes del motor

### Input estructurado (cooperativa lo envía)
- Balance auditado mensual o trimestral.
- Estado de resultados con detalle de cobros vs. devengado.
- Flujo de caja proyectado a 12 meses (si la cooperativa lo construye con la herramienta del curso "Mi película del mes").
- Política de riesgo escrita: política mínimo operativo, % máximo por contraparte, tolerancia al drawdown.

### Procesamiento algorítmico (Claude Code en PC del usuario)
- **Modelo de necesidad de caja:** dada proyección de flujo + reservas, calcula G1+G2 óptimo.
- **Modelo ALM:** dado calendario de pasivos exigibles, propone calce de instrumentos en G2+G3.
- **Modelo de optimización LP:** dado horizonte institucional declarado, propone asignación G4 según frontera eficiente y tolerancia al riesgo.
- **Detección de mismatches:** compara distribución actual vs. óptima, marca alertas (gaveta inflada, gaveta vacía, concentración por contraparte).
- **Recomendación de rebalanceo:** lista de movimientos concretos (vender X, comprar Y, mantener Z) con magnitud y razón.

### Decisión humana (PM senior Mercantil)
- Revisa recomendación.
- Valida supuestos del motor.
- Ajusta si hay contexto que el motor no ve (oportunidad de mercado, evento extraordinario).
- Firma.

> **Importante:** el motor es asistente, no decisor final. La firma profesional es de Mercantil. Esto es regulatoriamente seguro y opera dentro del marco fiduciario del custodio.

### Ejecución y reporte
- Trades ejecutados por mesa de trading Mercantil.
- Reporte automático a la cooperativa: qué se movió, por qué, cuál es la posición resultante.
- Reporte trimestral a la junta directiva con KPIs: rendimiento vs. benchmark, cumplimiento de política, mismatches detectados y resueltos.

## Por qué esto es valor para la cooperativa

### Vs. comité de inversión voluntario
- Decisiones consistentes (motor) vs. ad-hoc (comité).
- Cero sesgo emocional.
- Documentación trazable que protege a la junta.
- Disponibilidad mensual vs. trimestral o ad-hoc.

### Vs. CFO interno
- Costo: 1.4% AUM (~B/. 70k para B/. 5M) vs. salario CFO B/. 60-90k + cargas.
- Acceso a productos institucionales (PE, RF larga, equity global) que un CFO interno NO podría comprar individualmente.
- Cero costo fijo si la cooperativa achicara AUM.
- Transparencia de la lógica del motor — no depende del expertise de una persona.

### Vs. asesor externo part-time
- Compromiso continuo (no 3-5 horas/mes).
- Vista del flujo real (no solo del balance).
- Capacidad de ejecución (no solo recomendación).

## Por qué esto es escalable para Mercantil A&WM

**El motor se construye una vez. Atender la cooperativa #2 cuesta marginalmente lo mismo que atender la #20.**

- Costos fijos: construcción del motor (proyecto técnico, ver Fase 4).
- Costos variables por cooperativa: revisión PM senior (30-60 min/mes) + reporte (auto-generado).
- Margen objetivo: 60-70% una vez que >10 cooperativas estén activas.

Ver [`modelo-economico/10-margen-con-claude.md`](../modelo-economico/10-margen-con-claude.md) para el detalle.

## Riesgos y mitigantes

### Riesgo regulatorio
- **Riesgo:** ¿Puede una cooperativa delegar decisiones de inversión?
- **Mitigante:** sí, dentro de un marco contractual donde el comité de inversiones de la cooperativa aprueba los lineamientos (asset allocation strategic, política de riesgo) y Mercantil ejecuta dentro de ese marco. La firma final puede seguir siendo del comité; el motor solo prepara la decisión.

### Riesgo del modelo
- **Riesgo:** ¿qué pasa si el motor recomienda algo que pierde plata?
- **Mitigante:** revisión humana antes de ejecución. El motor es asistente. La cooperativa firma escenarios de tolerancia al drawdown y nunca se pasa de ahí.

### Riesgo reputacional
- **Riesgo:** ¿qué pasa si las decisiones del motor son cuestionadas?
- **Mitigante:** trazabilidad completa. Cada recomendación queda guardada con sus inputs y razones. Si una decisión genera pérdida, se puede auditar el porqué.

### Riesgo técnico
- **Riesgo:** ¿qué pasa si el motor falla técnicamente?
- **Mitigante:** la decisión NO es 100% del motor. Hay PM senior firmando. El motor puede caer una semana y el servicio sigue funcionando manualmente (con menor velocidad).

## Lo que requiere el cliente para acceder a este servicio

**Pre-requisitos no negociables:**
1. Estados financieros producidos contablemente, con frecuencia mínima trimestral.
2. Auditados o auditables (firma o auditor externo, aunque sea revisión limitada).
3. Comité de inversiones formal con política de riesgo escrita y aprobada.
4. Disposición a recibir reporte mensual y reaccionar.

**Razón:** sin estos pre-requisitos, el motor no tiene input válido. Esto también filtra el mercado objetivo: cooperativas medianas (B/. 3-15M) con cierta madurez de gobernanza.

## Conexión con el curso de capacitación

El curso ya creado (`sesiones/`) es la **puerta comercial natural** porque:
1. Enseña a las cooperativas a producir buenos estados financieros (S1, S2).
2. Les muestra el concepto de las 4 gavetas que el motor opera (S3).
3. Les hace consciente del costo de la gobernanza débil (S2 política mínimo operativo, S3 caso DPF roto).
4. Les muestra los conos de rentabilidad — la justificación del Servicio C.

**Cooperativa que toma el curso → cooperativa que entiende el problema → cooperativa que está lista para contratar la solución.**

Ver [`apendices/conexion-curso-S3.md`](../apendices/conexion-curso-S3.md).
