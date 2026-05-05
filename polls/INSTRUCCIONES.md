# Sistema de polls del curso

Sistema casero (sin Mentimeter / Slido) para los polls de las 4 sesiones. Funciona en presencial y en Teams indistintamente — los participantes escanean el QR único de la sesión y votan desde su celular. El facilitador proyecta la vista de resultados en vivo.

## Componentes

```
polls/
├── polls.json              # Catálogo de los 20 polls del curso
├── config.js               # URL del backend + token admin (a llenar)
├── index.html              # Vista participante: ?id=POLL_ID
├── facilitador.html        # Vista facilitador: ?id=POLL_ID&token=XXX
├── apps-script/Code.gs     # Backend Google Apps Script
└── INSTRUCCIONES.md        # Este archivo
```

## Despliegue del backend (una sola vez · ~15 minutos)

### 1. Crear el Google Sheet

1. Abre <https://sheets.google.com/> con la cuenta `andres.borrerom@gmail.com`.
2. Crea una hoja nueva — nombre sugerido: `Polls Mercantil SI Cooperativas 2026`.
3. Copia el **ID del sheet** desde la URL: `https://docs.google.com/spreadsheets/d/`**`<ID-aquí>`**`/edit`.

### 2. Crear el proyecto Apps Script

1. Abre <https://script.google.com/> con la misma cuenta.
2. **Nuevo proyecto** → nombre `polls-mercantil`.
3. Borra el contenido por defecto. Pega el contenido completo de `polls/apps-script/Code.gs`.
4. En las primeras líneas:
   - Reemplaza `PEGAR_AQUI_EL_ID_DEL_GOOGLE_SHEET` por el ID del paso 1.
   - Cambia `ADMIN_TOKEN` por un valor secreto a tu gusto (recuerda este valor — lo usarás en `config.js`).
5. Guarda (Ctrl+S).

### 3. Implementar como Web App

1. Botón **Implementar** (arriba derecha) → **Nueva implementación**.
2. Engrane → tipo **Aplicación web**.
3. Configuración:
   - **Descripción:** `polls v1`
   - **Ejecutar como:** `Yo (andres.borrerom@gmail.com)`
   - **Quién tiene acceso:** `Cualquier usuario`
4. **Implementar** → autoriza permisos cuando pida.
5. Copia la **URL de la aplicación web** que termina en `/exec`.

### 4. Conectar el frontend

Edita `polls/config.js`:

```js
const POLLS_API_URL = "https://script.google.com/macros/s/.../exec";
const POLLS_ADMIN_TOKEN = "el-mismo-token-que-pusiste-en-Code.gs";
```

Commit + push a GitHub. GitHub Pages re-despliega y los polls quedan operativos.

### 5. Probar

1. Abre desde el celular: `https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/polls/?id=s2-p1-60dias`
2. Vota una opción.
3. Abre desde la laptop (vista facilitador):
   `https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/polls/facilitador.html?id=s2-p1-60dias&token=el-token`
4. Deberías ver el voto en barras.

Si no ves los resultados, abre el sheet y verifica que se haya creado una hoja con el ID del poll y registrado la fila.

## URLs útiles

### Para participantes
Se acceden desde la **landing por sesión** (QR único) — no se comparten directo. Las URLs base son:

- `polls/?id=s2-p1-60dias` (Sesión 2 · Poll #1)
- `polls/?id=s3-p4-mas-riesgosa` (Sesión 3 · Poll #4)
- … etc. Ver IDs en `polls.json`.

### Para facilitador (proyectable)
- Vista única: `polls/facilitador.html?id=POLL_ID&token=XXX`
- Vista con selector: `polls/facilitador.html?token=XXX` (selector arriba para cambiar entre polls).

## Operativa durante la sesión

1. El facilitador proyecta `facilitador.html` en una pestaña separada de la presentación.
2. Cuando llega el momento del poll en el guion, el facilitador:
   - En la vista facilitador, selecciona el poll del dropdown.
   - Avisa: *"Abran la pestaña Polls del QR de la sesión y voten."*
   - La vista facilitador refresca cada 3 segundos.
3. Tras suficientes votos, comenta resultados.

**Reset:** si haces pruebas previas, antes de la sesión real abre la vista facilitador → botón rojo `Reset` para borrar votos de prueba. (Requiere token.)

## Catálogo de polls

Total: 20 polls (5 por sesión).

| Sesión | Poll | ID | Tipo |
|---|---|---|---|
| 1 | #1 | `s1-p1-paraiso` | single |
| 1 | #2 | `s1-p2-patrimonio` | single |
| 1 | #3 | `s1-p3-indicador` | single |
| 1 | #4 | `s1-p4-numero` | single |
| 1 | #5 | `s1-p5-pulso` | wordcloud |
| 2 | #1 | `s2-p1-60dias` | single |
| 2 | #2 | `s2-p2-mes-rojo` | single |
| 2 | #3 | `s2-p3-flujo-juntas` | single |
| 2 | #4 | `s2-p4-indicador-flujo` | single |
| 2 | #5 | `s2-p5-pulso` | wordcloud |
| 3 | #1 | `s3-p1-pregunta-asesor` | single |
| 3 | #2 | `s3-p2-misma-gaveta` | single |
| 3 | #3 | `s3-p3-mismatch` | single |
| 3 | #4 | `s3-p4-mas-riesgosa` | single |
| 3 | #5 | `s3-p5-pulso` | wordcloud |
| 4 | #1 | `s4-p1-antes-firmar` | multiple |
| 4 | #2 | `s4-p2-flujo-calza` | single |
| 4 | #3 | `s4-p3-senal-oida` | single |
| 4 | #4 | `s4-p4-esfuerzo-unido` | single |
| 4 | #5 | `s4-p5-pulso` | wordcloud |

## Modificar un poll (cambiar pregunta u opciones)

Edita `polls/polls.json`. Commit + push. GitHub Pages re-despliega automáticamente. Los votos previos se conservan (no afecta el sheet).

## Privacidad

- Los votos individuales se guardan en tu Google Sheet sólo con timestamp y opción elegida — sin nombre ni identificador del participante.
- Cada participante guarda en su `localStorage` que ya votó un poll, para evitar votar de nuevo desde el mismo dispositivo. Esto es solo en su celular; no se transmite.

## Limitaciones conocidas

- **Apps Script tiene límite de cuota diaria** (~20 000 ejecuciones/día por cuenta gratuita). Para 100 participantes × 5 polls × 4 sesiones = 2 000 votos. Sobra margen.
- **Latencia ~1-2s** en el `appendRow`. Aceptable para esta UX.
- **Sin contraseña de poll** — cualquiera con el ID y la URL pública puede votar. No es problema dada la audiencia.

Si en algún momento decides migrar a Mentimeter o Slido, el frontend se puede adaptar; el config (polls.json) se queda como referencia.
