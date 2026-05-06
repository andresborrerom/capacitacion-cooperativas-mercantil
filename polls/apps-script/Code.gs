/**
 * Backend de polls del curso · Mercantil Asset & Wealth Management
 *
 * Despliegue:
 *   1. Crear un Google Sheet nuevo (vacío). Anotar su ID (de la URL del sheet).
 *   2. script.google.com → Nuevo proyecto → pegar este archivo.
 *   3. Pegar el ID del Sheet en la constante SHEET_ID abajo.
 *   4. Cambiar ADMIN_TOKEN por el mismo valor que pongas en config.js del frontend.
 *   5. Implementar como Web App: Implementar > Nueva implementación > Tipo: Aplicación web.
 *      - Ejecutar como: Yo (tu cuenta).
 *      - Quién tiene acceso: Cualquier usuario.
 *   6. Copiar la URL pública resultante y pegarla en /polls/config.js (POLLS_API_URL).
 *
 * Reset por seguridad: la acción "reset" requiere el token admin.
 *
 * Estructura del Sheet: una hoja por poll, columnas A=timestamp, B=payload (JSON).
 */

const SHEET_ID = "PEGAR_AQUI_EL_ID_DEL_GOOGLE_SHEET";
const ADMIN_TOKEN = "mercantil-2026";

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if (body.action === "vote") return responder({ ok: true, ...registrarVoto(body.poll, body.payload) });
    if (body.action === "reset") {
      if (body.token !== ADMIN_TOKEN) return responder({ ok: false, error: "Token inválido" });
      return responder({ ok: true, ...resetearPoll(body.poll) });
    }
    return responder({ ok: false, error: "Acción desconocida" });
  } catch (err) {
    return responder({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  try {
    const action = e.parameter.action || "results";
    if (action === "results") return responder({ ok: true, ...obtenerResultados(e.parameter.poll) });
    return responder({ ok: false, error: "Acción desconocida" });
  } catch (err) {
    return responder({ ok: false, error: String(err) });
  }
}

function responder(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function obtenerHoja(pollId) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(pollId);
  if (!sheet) {
    sheet = ss.insertSheet(pollId);
    sheet.getRange(1, 1, 1, 2).setValues([["timestamp", "payload"]]);
  }
  return sheet;
}

function registrarVoto(pollId, payload) {
  if (!pollId) throw new Error("Poll ID requerido");
  const sheet = obtenerHoja(pollId);
  sheet.appendRow([new Date(), JSON.stringify(payload)]);
  return { registrado: true };
}

function obtenerResultados(pollId) {
  if (!pollId) throw new Error("Poll ID requerido");
  const sheet = obtenerHoja(pollId);
  const ultimaFila = sheet.getLastRow();
  if (ultimaFila < 2) return { total: 0, counts: [], words: [] };

  const datos = sheet.getRange(2, 2, ultimaFila - 1, 1).getValues();
  const conteo = {};   // por índice de opción (single/multiple)
  const palabras = {}; // por palabra (wordcloud)
  let total = 0;
  let respuestasMultiples = 0;

  datos.forEach(fila => {
    if (!fila[0]) return;
    let payload;
    try { payload = JSON.parse(fila[0]); } catch (e) { return; }

    if (payload.word) {
      const w = String(payload.word).trim().toLowerCase();
      if (!w) return;
      palabras[w] = (palabras[w] || 0) + 1;
      total++;
    } else if (typeof payload.choice === "number") {
      conteo[payload.choice] = (conteo[payload.choice] || 0) + 1;
      total++;
    } else if (Array.isArray(payload.choices)) {
      payload.choices.forEach(idx => {
        conteo[idx] = (conteo[idx] || 0) + 1;
      });
      total++;
      respuestasMultiples++;
    }
  });

  // counts como array (índices 0..n)
  const maxIdx = Object.keys(conteo).length === 0 ? -1 : Math.max(...Object.keys(conteo).map(Number));
  const counts = [];
  for (let i = 0; i <= maxIdx; i++) counts.push(conteo[i] || 0);

  const words = Object.entries(palabras)
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count);

  return { total, counts, words };
}

function resetearPoll(pollId) {
  if (!pollId) throw new Error("Poll ID requerido");
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(pollId);
  if (!sheet) return { reseteado: false, motivo: "Hoja no existía" };
  if (sheet.getLastRow() > 1) {
    sheet.getRange(2, 1, sheet.getLastRow() - 1, 2).clearContent();
  }
  return { reseteado: true };
}
