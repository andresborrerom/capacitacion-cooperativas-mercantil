// shared.js — helpers reutilizables por las herramientas interactivas del curso.

const Fmt = {
  moneda(n, divisa = "B/.") {
    if (n === null || n === undefined || isNaN(n)) return "—";
    const abs = Math.abs(n);
    const sign = n < 0 ? "-" : "";
    const str = abs.toLocaleString("es-PA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `${sign}${divisa} ${str}`;
  },

  porcentaje(n, decimales = 1) {
    if (n === null || n === undefined || isNaN(n)) return "—";
    return `${(n * 100).toFixed(decimales)}%`;
  },

  numero(n) {
    if (n === null || n === undefined || isNaN(n)) return "—";
    return n.toLocaleString("es-PA");
  },
};

const Store = {
  guardar(clave, valor) {
    try { localStorage.setItem(clave, JSON.stringify(valor)); } catch (_) { /* ignora quota */ }
  },
  leer(clave, fallback = null) {
    try {
      const raw = localStorage.getItem(clave);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_) { return fallback; }
  },
  borrar(clave) {
    try { localStorage.removeItem(clave); } catch (_) { /* ignora */ }
  },
};

window.Fmt = Fmt;
window.Store = Store;
