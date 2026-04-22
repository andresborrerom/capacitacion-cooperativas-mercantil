# Sesión 2 — Plan de sesión (esqueleto)

> Este archivo es el **plan a nivel de bloques** (no minuto-a-minuto). El guion detallado se escribirá al llegar la semana de la Sesión 2, siguiendo el modelo ya probado en Sesión 1.

## Estructura de 120 min (anatomía repetida del curso)

| Bloque | Duración | Qué pasa |
|---|---|---|
| **0. Apertura con pregunta incómoda** | 5 min | *"¿Cómo se ve en los números el momento 60 días antes de que una cooperativa quiebre?"* |
| **1. Retomar El Paraíso** | 10 min | Ahora con el flujo de caja proyectado de sus últimos meses. El dato ahí, no leído. |
| **2. Concepto pegajoso — "Foto miente; película no"** | 15 min | Las 4 parejas (ingreso/cobro, gasto/pago, utilidad/disponible, recurrente/extraordinario). |
| **3. Herramienta en vivo #1 — Mi película del mes** | 15 min | Cada participante proyecta un año simple desde su celular. Detecta el mes rojo. |
| **4. Profundización: los 3 momentos del año** | 15 min | Aguinaldo, inicio de clases, retiros concentrados. Patrones predecibles. |
| **5. Break activo** | 5 min | Poll abierto. |
| **6. Herramienta en vivo #2 — caso real** | 20 min | Re-abrir El Paraíso. Proyectar. Ver el mes donde los semáforos entraron en amarillo. |
| **7. Mini-debate** | 15 min | *"¿Cuál es el indicador de flujo que pedirías mensual en tu próxima junta?"* |
| **8. Cierre — checklist + micro-tarea** | 20 min | Checklist de 4 preguntas sobre flujo. Tarea: listar productos donde la cooperativa/tú tienen plata hoy. |

## Herramienta interactiva: "Mi película del mes"

### Propósito
Proyectar entradas y salidas de 12 meses, ver saldo acumulado, detectar automáticamente los meses donde el saldo entra en rojo.

### Funcionalidad mínima
- 12 filas (una por mes). Cada fila: entradas recurrentes, salidas recurrentes, flujos extraordinarios (entrada y salida), saldo inicial (solo mes 1), saldo del mes, saldo acumulado.
- Presets: "cargar perfil típico de cooperativa panameña" para empezar con algo ya puesto y modificar.
- Presets específicos: aguinaldo automático en diciembre (salida extraordinaria), inicio de clases en enero (salida extraordinaria).
- Visualización: **gráfica de saldo acumulado** con línea de alerta (cuando saldo < 0 → rojo; cuando saldo < 20% del pico → amarillo).
- Semáforos: cobertura mínima del año, meses en rojo, volatilidad.
- Persistencia local (localStorage).

### Modos
- **Modo personal:** un flujo mensual personal simplificado.
- **Modo cooperativa:** con las categorías típicas del sector (intereses de cartera cobrados, comisiones, retiros netos, aportes netos, gastos operativos, aguinaldo, etc.).

### Wireframe (conceptual)
```
┌─ Saldo inicial: [___]
┌─ Mes ─ Entradas recur ─ Salidas recur ─ Extra(+) ─ Extra(−) ─ Saldo mes ─ Saldo acum ─
│  Ene     [___]           [___]           [___]     [___]      calc.       calc.
│  Feb     ...
│  ...
└─
┌─ Gráfica de saldo acumulado ─────────────────────────┐
│                                    ╱╲                │
│                                  ╱    ╲              │
│                   ╱╲___________╱        ╲__          │
│  ───────── LÍNEA CERO ───────────────────────        │
│              ▼                                       │
│          ALERTA: saldo negativo en Ago               │
└──────────────────────────────────────────────────────┘

[Semáforos KPI]  Cobertura mínima | Meses rojos | Volatilidad
```

### Pendiente de construir cuando se arranque Sesión 2
- HTML + CSS + JS vanilla (o Alpine.js + Chart.js por CDN para la gráfica).
- Archivo en `sesiones/sesion-2-flujo-caja/herramientas/mi-pelicula-del-mes/index.html`.

## Concepto pegajoso
**"Foto miente; película no."** Queda en slide, se repite 2 veces, se vuelve micro-lema del curso.

## Checklist imprimible (borrador)
**4 preguntas sobre flujo antes de aprobar cualquier inversión importante en junta:**
1. ¿Cómo se verá el saldo de caja los próximos 90 días si no hacemos nada?
2. ¿Cuánto de los depósitos de la cooperativa son a la vista o a plazo < 90 días?
3. ¿Qué gastos extraordinarios tenemos agendados en los próximos 6 meses?
4. ¿Cómo cambia nuestra caja si la mora sube 2 puntos porcentuales?

## Evaluación (borrador — alineada con objetivos)
- Pregunta cerrada: *"Una cooperativa reporta utilidad de B/. 200k en el mes. ¿Significa que tiene B/. 200k de caja nueva?"* (No, explicación.)
- Pregunta aplicada: cargar un mini-flujo y preguntar en qué mes entra en rojo.
- Likert: *"Ahora distingo entre utilidad y disponible con más confianza."*
- NPS.
