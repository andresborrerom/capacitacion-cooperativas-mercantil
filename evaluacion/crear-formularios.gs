// ============================================================
// CREAR TODAS LAS EVALUACIONES DEL CURSO
// Curso finanzas para dirigentes cooperativos · Mercantil SI
// ============================================================
//
// QUÉ HACE ESTE SCRIPT
// Crea 6 formularios de Google Forms de golpe:
//   - Pre-test (antes de Sesión 1)
//   - Evaluación Sesión 1
//   - Evaluación Sesión 2
//   - Evaluación Sesión 3
//   - Post-test + NPS (al cierre de Sesión 4)
//   - Feedback +30 días (opcional, para envío un mes después)
// Imprime las URLs de cada uno en el log para que las copies.
//
// CÓMO USARLO
// 1. Ve a https://script.google.com/home y click "+ New project".
// 2. Borra el código de ejemplo que aparece.
// 3. Pega este archivo entero en el editor.
// 4. Click el botón "Save" (disquete) arriba.
// 5. Click "Run" (botón play). La primera vez pedirá permisos → autoriza.
// 6. Click "View logs" (o View → Execution log). Copias las URLs.
//
// QUÉ PERMISOS PIDE
// - Crear formularios en tu Drive.
// - No accede a otros archivos. Los 6 formularios quedan en tu Drive.
//
// DÓNDE QUEDAN LOS FORMULARIOS
// En tu Google Drive, en la raíz. Puedes moverlos a una carpeta
// "Curso cooperativas" después si quieres orden.
//
// DÓNDE QUEDAN LAS RESPUESTAS
// Cada formulario tiene su pestaña "Respuestas" con una tabla en vivo
// y un botón para exportar a Google Sheets si quieres análisis.
// ============================================================

function crearEvaluaciones() {
  var resultados = [];

  FORMULARIOS.forEach(function(spec) {
    var form = FormApp.create(spec.titulo);
    form.setDescription(spec.descripcion);
    form.setCollectEmail(false);
    form.setShowLinkToRespondAgain(false);
    form.setConfirmationMessage('Gracias por tu respuesta. Tu aporte mejora el curso.');

    spec.preguntas.forEach(function(p) {
      agregarPregunta(form, p);
    });

    resultados.push({
      id: spec.id,
      titulo: spec.titulo,
      publico: form.getPublishedUrl(),
      editar: form.getEditUrl(),
      corto: form.shortenFormUrl(form.getPublishedUrl())
    });
  });

  // Resumen final con todas las URLs
  Logger.log('\n\n===== FORMULARIOS CREADOS =====\n');
  resultados.forEach(function(r) {
    Logger.log('▶ ' + r.titulo);
    Logger.log('  Publico (compartir con participantes): ' + r.publico);
    Logger.log('  Corto: ' + r.corto);
    Logger.log('  Editar: ' + r.editar);
    Logger.log('');
  });
  Logger.log('===== FIN =====');

  // Copia al portapapeles estilo CSV para pegar al facilitador
  var csv = 'id\ttitulo\turl_publico\turl_corto\turl_editar\n';
  resultados.forEach(function(r) {
    csv += r.id + '\t' + r.titulo + '\t' + r.publico + '\t' + r.corto + '\t' + r.editar + '\n';
  });
  Logger.log('\n===== TSV PARA COPIAR =====\n' + csv);

  return resultados;
}

// ============================================================
// AGREGAR PREGUNTA SEGÚN TIPO
// ============================================================
function agregarPregunta(form, p) {
  var item;

  if (p.t === 'section') {
    item = form.addSectionHeaderItem().setTitle(p.titulo);
    if (p.help) item.setHelpText(p.help);
    return;
  }

  if (p.t === 'page') {
    item = form.addPageBreakItem().setTitle(p.titulo || '');
    if (p.help) item.setHelpText(p.help);
    return;
  }

  if (p.t === 'choice') {
    item = form.addMultipleChoiceItem().setTitle(p.titulo);
    item.setChoices(p.opciones.map(function(o) { return item.createChoice(o); }));
  } else if (p.t === 'checkbox') {
    item = form.addCheckboxItem().setTitle(p.titulo);
    item.setChoices(p.opciones.map(function(o) { return item.createChoice(o); }));
  } else if (p.t === 'scale') {
    item = form.addScaleItem().setTitle(p.titulo).setBounds(p.min || 1, p.max || 5);
    if (p.etiquetaIzq) item.setLabels(p.etiquetaIzq, p.etiquetaDer || '');
  } else if (p.t === 'text') {
    item = form.addTextItem().setTitle(p.titulo);
  } else if (p.t === 'paragraph') {
    item = form.addParagraphTextItem().setTitle(p.titulo);
  }

  if (p.help) item.setHelpText(p.help);
  if (p.req) item.setRequired(true);
}

// ============================================================
// DEFINICIÓN DE FORMULARIOS
// ============================================================
var FORMULARIOS = [

  // ============================================================
  // 1. PRE-TEST (antes de Sesión 1)
  // ============================================================
  {
    id: 'pre-test',
    titulo: 'Pre-test · Finanzas para dirigentes cooperativos',
    descripcion: 'Mercantil Servicios de Inversión · Antes de la Sesión 1.\n\nEste cuestionario nos ayuda a calibrar el curso a tu conocimiento actual. No es un examen — es un diagnóstico. Responder con honestidad te beneficia directamente.\n\nTiempo estimado: 10 minutos.',
    preguntas: [
      {t: 'section', titulo: 'Parte A · Conocimiento base',
       help: 'No te preocupes si algo no sabes; justo eso vamos a trabajar en el curso.'},

      {t: 'choice', req: true,
       titulo: '1. Una cooperativa reporta utilidad neta de B/. 400,000 en el año. ¿Cuál afirmación es correcta?',
       opciones: [
         'Significa que tiene B/. 400,000 adicionales en su cuenta bancaria.',
         'Puede no tener dinero suficiente para pagar sus obligaciones inmediatas.',
         'Debe distribuir esa cantidad íntegra entre sus asociados.',
         'Ha reducido su pasivo con terceros.'
       ]},

      {t: 'choice', req: true,
       titulo: '2. En el balance de una entidad financiera, la relación que siempre debe cumplirse es:',
       opciones: [
         'Activos + Pasivos = Patrimonio',
         'Activos = Pasivos + Patrimonio',
         'Patrimonio = Utilidad acumulada',
         'Pasivos = Patrimonio + Ingresos'
       ]},

      {t: 'choice', req: true,
       titulo: '3. ¿Cuál es la diferencia entre "ingreso" y "cobro"?',
       opciones: [
         'Son sinónimos en finanzas.',
         'El ingreso se registra cuando se genera; el cobro cuando se recibe efectivamente.',
         'El cobro siempre es mayor al ingreso.',
         'Solo aplica a bancos, no a cooperativas.'
       ]},

      {t: 'choice', req: true,
       titulo: '4. Las 4 dimensiones principales de cualquier producto financiero son:',
       opciones: [
         'Nombre, emisor, país, moneda.',
         'Rentabilidad, riesgo, liquidez, plazo.',
         'Marca, rating, historial, referencias.',
         'Tasa, comisión, seguro, garantía.'
       ]},

      {t: 'choice', req: true,
       titulo: '5. Si un banco te ofrece un crédito al "7% nominal" a 5 años con comisión de apertura del 3%, ¿cuál afirmación es más correcta?',
       opciones: [
         'La tasa efectiva es 7%.',
         'La tasa efectiva es menor a 7% porque el plazo baja el costo.',
         'La tasa efectiva es mayor a 7% porque la comisión se suma al costo real.',
         'Depende del color del asesor.'
       ]},

      {t: 'choice', req: true,
       titulo: '6. "Endeudarse para crecer" es buen endeudamiento cuando:',
       opciones: [
         'La tasa es menor al 8%.',
         'La plata pedida genera flujos superiores al costo del crédito en el mismo horizonte.',
         'El banco es reconocido.',
         'El plazo es largo.'
       ]},

      {t: 'choice', req: true,
       titulo: '7. En una cooperativa de ahorro y crédito panameña, una concentración de cartera del 75% en empleados de una sola empresa significa:',
       opciones: [
         'Es buena señal — hay relación sólida con una institución.',
         'Es neutra si la empresa es grande.',
         'Es un riesgo importante de concentración.',
         'Es obligatorio por Ley 17.'
       ]},

      {t: 'choice', req: true,
       titulo: '8. "Reserva de liquidez" de una cooperativa se refiere a:',
       opciones: [
         'La utilidad acumulada.',
         'Los depósitos de los asociados.',
         'Plata disponible a corto plazo para cubrir imprevistos y retiros inesperados.',
         'El patrimonio total.'
       ]},

      {t: 'section', titulo: 'Parte B · Qué tan cómodo(a) te sientes hoy',
       help: '1 = nada cómodo · 5 = muy cómodo. Sin juicio — es el punto de partida.'},

      {t: 'scale', req: true, min: 1, max: 5, etiquetaIzq: 'Nada', etiquetaDer: 'Mucho',
       titulo: '9. Leer un balance de mi cooperativa y saber si hay algo importante que mirar.'},
      {t: 'scale', req: true, min: 1, max: 5, etiquetaIzq: 'Nada', etiquetaDer: 'Mucho',
       titulo: '10. Leer un estado de resultados y distinguir de dónde viene realmente la utilidad.'},
      {t: 'scale', req: true, min: 1, max: 5, etiquetaIzq: 'Nada', etiquetaDer: 'Mucho',
       titulo: '11. Interpretar un flujo de caja y detectar meses problemáticos.'},
      {t: 'scale', req: true, min: 1, max: 5, etiquetaIzq: 'Nada', etiquetaDer: 'Mucho',
       titulo: '12. Preguntar a un asesor financiero las cosas correctas antes de decidir una inversión.'},
      {t: 'scale', req: true, min: 1, max: 5, etiquetaIzq: 'Nada', etiquetaDer: 'Mucho',
       titulo: '13. Evaluar una oferta de crédito y decidir si conviene.'},

      {t: 'section', titulo: 'Parte C · Contexto'},

      {t: 'choice', req: true,
       titulo: '14. Tu rol principal en la cooperativa',
       opciones: ['Gerente general','Gerente financiero','Miembro de junta directiva','Comité de crédito o inversiones','Consejo de vigilancia','Otro']},

      {t: 'choice', req: true,
       titulo: '15. Tu formación de base',
       opciones: ['Finanzas / contabilidad / administración','Economía','Derecho','Ingeniería','Medicina / salud','Educación','Otra']},

      {t: 'choice', req: true,
       titulo: '16. Años en rol directivo cooperativo',
       opciones: ['Menos de 1','1 a 3','4 a 10','Más de 10']},

      {t: 'paragraph',
       titulo: '17. Una cosa concreta que quiero poder hacer mejor al terminar este curso'},

      {t: 'paragraph',
       titulo: '18. Una pregunta que quiero que el curso me ayude a responder'}
    ]
  },

  // ============================================================
  // 2. EVALUACIÓN SESIÓN 1
  // ============================================================
  {
    id: 'eval-sesion-1',
    titulo: 'Evaluación · Sesión 1 · Estados financieros sin miedo',
    descripcion: 'Al cierre de la sesión. ~5 minutos. Nos ayuda a mejorar la próxima.',
    preguntas: [
      {t: 'section', titulo: 'Parte A · Conocimiento'},

      {t: 'choice', req: true,
       titulo: '1. La ecuación que siempre se cumple en un balance es:',
       opciones: ['Activos + Pasivos = Patrimonio','Activos = Pasivos + Patrimonio','Patrimonio = Pasivos − Activos','Ingresos − Gastos = Patrimonio']},

      {t: 'choice', req: true,
       titulo: '2. Una cooperativa con utilidad neta positiva:',
       opciones: ['Necesariamente tiene dinero en caja para pagar sus obligaciones.','Puede no tener suficiente efectivo para sus pagos inmediatos.','Siempre puede distribuir excedentes a los asociados.','Ha reducido su pasivo con terceros.']},

      {t: 'choice', req: true,
       titulo: '3. Los ingresos por intereses de cartera en el estado de resultados:',
       opciones: ['Son iguales al dinero efectivamente cobrado.','Pueden ser mayores al cobrado por morosidad o prórrogas.','Se calculan solo sobre la cartera saneada.','Son iguales al saldo del activo "cartera de crédito".']},

      {t: 'choice', req: true,
       titulo: '4. La cooperativa Santa Rita tiene activos por B/. 30M y pasivos por B/. 26M. Su patrimonio es:',
       opciones: ['B/. 56M','B/. 30M','B/. 4M','No se puede determinar sin ver el estado de resultados.']},

      {t: 'choice', req: true,
       titulo: '5. Si la adecuación de capital (Patrimonio/Activo) está en 6% y la referencia mínima del sector es 8%:',
       opciones: ['No hay motivo de preocupación; es solo un número más.','Hay baja protección ante pérdidas; el colchón patrimonial es delgado.','Implica que la cooperativa tiene problemas de liquidez.','Significa que está creciendo muy rápido.']},

      {t: 'section', titulo: 'Parte B · Aplicación'},

      {t: 'paragraph', req: true,
       titulo: '6. Escribe una pregunta concreta que ahora sabes que debes hacer sobre el balance de tu cooperativa y antes no hacías.'},

      {t: 'section', titulo: 'Parte C · Experiencia', help: '1 = nada · 5 = mucho.'},

      {t: 'scale', req: true, min: 1, max: 5,
       titulo: '7. Después de esta sesión, me siento más cómodo(a) leyendo un balance.'},
      {t: 'scale', req: true, min: 1, max: 5,
       titulo: '8. El ritmo de la sesión fue apropiado (ni rápido ni lento).'},
      {t: 'scale', req: true, min: 1, max: 5,
       titulo: '9. La herramienta "Mi foto financiera" la usaría de nuevo fuera de la sesión.'},

      {t: 'scale', req: true, min: 0, max: 10, etiquetaIzq: 'No recomendaría', etiquetaDer: 'Definitivamente',
       titulo: '10. ¿Qué tan probable es que recomiendes esta sesión a otro directivo cooperativo?'},

      {t: 'section', titulo: 'Parte D · Abierta (opcional)'},

      {t: 'paragraph', titulo: '11. ¿Qué te llevas de hoy que no tenías al empezar?'},
      {t: 'paragraph', titulo: '12. ¿Qué te quedó sin resolver?'}
    ]
  },

  // ============================================================
  // 3. EVALUACIÓN SESIÓN 2
  // ============================================================
  {
    id: 'eval-sesion-2',
    titulo: 'Evaluación · Sesión 2 · El flujo de caja',
    descripcion: 'Al cierre de la sesión. ~5 minutos.',
    preguntas: [
      {t: 'section', titulo: 'Parte A · Conocimiento'},

      {t: 'choice', req: true,
       titulo: '1. En el estado de resultados, los ingresos por intereses de cartera:',
       opciones: ['Son iguales al dinero que efectivamente entró a la caja ese mes.','Pueden ser mayores al efectivamente cobrado por mora o prórrogas.','Son iguales al saldo del activo cartera.','Solo se reportan cuando los asociados pagan la cuota.']},

      {t: 'choice', req: true,
       titulo: '2. Una cooperativa registra un gasto de B/. 30,000 por provisión de cartera en marzo. Esto significa:',
       opciones: ['Que salieron B/. 30k de la caja ese mes.','Que es un gasto contable; no necesariamente sale efectivo de caja.','Que la cooperativa perdió B/. 30k de sus activos fijos.','Que se castigó la cartera.']},

      {t: 'choice', req: true,
       titulo: '3. "Utilidad" y "dinero disponible en el banco" son:',
       opciones: ['Lo mismo visto desde dos ángulos.','Conceptos que pueden moverse en direcciones opuestas.','Iguales solo cuando no hay deuda.','Iguales si no hay inversiones.']},

      {t: 'choice', req: true,
       titulo: '4. Los 3 momentos típicos de estrés de liquidez en una cooperativa panameña son:',
       opciones: ['Marzo, junio, diciembre.','Aguinaldo, inicio de clases y retiros concentrados.','Solo en crisis económicas.','Depende de la auditoría.']},

      {t: 'choice', req: true,
       titulo: '5. Una cooperativa con utilidad anual B/. 200k y saldo de caja al 31 de diciembre de B/. 50k:',
       opciones: ['No puede existir — la caja debería ser al menos 200k.','Es común y refleja cómo la utilidad no es igual al disponible.','Implica que tiene fraude.','Debe cambiar de contador.']},

      {t: 'section', titulo: 'Parte B · Aplicación'},

      {t: 'choice', req: true,
       titulo: '6. Tu cooperativa proyecta flujo 6 meses. El saldo queda positivo todos los meses pero se acerca a cero en noviembre. ¿Qué haces?',
       opciones: ['Nada; positivo es positivo.','Pido el análisis de sensibilidad: qué pasa si la mora sube 2-3 puntos.','Sugiero distribuir excedentes antes para "acomodar" la caja.','Reemplazo al gerente financiero.']},

      {t: 'paragraph', req: true,
       titulo: '7. Pensando en el caso de El Paraíso, ¿en qué mes concreto y con qué dato alguien atento pudo haber prendido la primera alarma?'},

      {t: 'section', titulo: 'Parte C · Experiencia'},

      {t: 'scale', req: true, min: 1, max: 5,
       titulo: '8. Puedo explicar a un colega la diferencia entre utilidad y disponible.'},
      {t: 'scale', req: true, min: 1, max: 5,
       titulo: '9. Si me entregan el flujo proyectado de mi cooperativa, sé qué mirar primero.'},
      {t: 'scale', req: true, min: 1, max: 5,
       titulo: '10. Esta sesión me ayudó a ver algo que antes no veía.'},

      {t: 'scale', req: true, min: 0, max: 10, etiquetaIzq: 'No recomendaría', etiquetaDer: 'Definitivamente',
       titulo: '11. ¿Recomendarías esta sesión?'},

      {t: 'paragraph', titulo: '12. ¿Qué pregunta harás a tu gerencia esta semana que antes no harías?'},
      {t: 'paragraph', titulo: '13. ¿Qué quedó sin resolver hoy?'}
    ]
  },

  // ============================================================
  // 4. EVALUACIÓN SESIÓN 3
  // ============================================================
  {
    id: 'eval-sesion-3',
    titulo: 'Evaluación · Sesión 3 · Productos financieros',
    descripcion: 'Al cierre de la sesión. ~5 minutos.',
    preguntas: [
      {t: 'section', titulo: 'Parte A · Conocimiento'},

      {t: 'choice', req: true,
       titulo: '1. Las 4 gavetas del dinero se definen principalmente por:',
       opciones: ['Rentabilidad esperada.','Plazo y propósito.','Entidad que lo ofrece.','Riesgo crediticio.']},

      {t: 'choice', req: true,
       titulo: '2. Una cooperativa mantiene su reserva de liquidez en un DPF a 5 años al 5.5%. El error principal es:',
       opciones: ['La tasa es muy baja.','Mismatch de gaveta: plata de cajón 2 en producto de cajón 3.','El banco es pequeño.','No hay error; es una buena estrategia.']},

      {t: 'choice', req: true,
       titulo: '3. Las 4 dimensiones de cualquier producto financiero son:',
       opciones: ['Marca, emisor, país, moneda.','Rentabilidad, riesgo, liquidez, plazo.','Tasa, comisión, seguro, garantía.','Histórico, referencias, tamaño, regulación.']},

      {t: 'choice', req: true,
       titulo: '4. "Invertir" (vs. especular) implica:',
       opciones: ['Plazos muy largos.','Tesis + criterio de salida + riesgo definido y aceptado.','Solo productos de bajo riesgo.','Consultar a un asesor.']},

      {t: 'choice', req: true,
       titulo: '5. Si un asesor te dice "alta rentabilidad, bajo riesgo, liquidez total, sin plazo", debes:',
       opciones: ['Contratar rápido antes de que cambie.','Sospechar — eso rompe la ley de las 4 dimensiones.','Pedir el doble de ese producto.','Consultar con otra sucursal.']},

      {t: 'section', titulo: 'Parte B · Aplicación · Clasifica cada producto en su gaveta (1 a 4)',
       help: '1 = Operación diaria (0-30 días) · 2 = Reserva de liquidez (1-6m) · 3 = Inversión a plazo (6m-5 años) · 4 = Estratégico / largo (5+ años)'},

      {t: 'choice', req: true,
       titulo: '6.a. Cuenta corriente de la cooperativa → gaveta',
       opciones: ['1','2','3','4']},
      {t: 'choice', req: true,
       titulo: '6.b. DPF a 90 días para colchón de liquidez → gaveta',
       opciones: ['1','2','3','4']},
      {t: 'choice', req: true,
       titulo: '6.c. Bono corporativo a 7 años para reserva estratégica → gaveta',
       opciones: ['1','2','3','4']},
      {t: 'choice', req: true,
       titulo: '6.d. Fondo balanceado para excedentes a 3 años → gaveta',
       opciones: ['1','2','3','4']},

      {t: 'paragraph', req: true,
       titulo: '7. Escribe una pregunta que harías ahora a un asesor y no te hubieras atrevido o no se te habría ocurrido antes.'},

      {t: 'section', titulo: 'Parte C · Experiencia'},

      {t: 'scale', req: true, min: 1, max: 5,
       titulo: '8. Puedo clasificar un producto financiero en su gaveta correcta.'},
      {t: 'scale', req: true, min: 1, max: 5,
       titulo: '9. Puedo distinguir una asesoría profesional de una venta disfrazada.'},
      {t: 'scale', req: true, min: 1, max: 5,
       titulo: '10. Sé cuáles son las preguntas clave para hacer a un asesor.'},

      {t: 'scale', req: true, min: 0, max: 10, etiquetaIzq: 'No recomendaría', etiquetaDer: 'Definitivamente',
       titulo: '11. ¿Recomendarías esta sesión?'},

      {t: 'paragraph', titulo: '12. ¿Algún mismatch detectaste hoy en tu cooperativa que no veías antes?'},
      {t: 'paragraph', titulo: '13. ¿Qué quedó sin resolver?'}
    ]
  },

  // ============================================================
  // 5. POST-TEST + NPS (al cierre de Sesión 4 · cierre del curso)
  // ============================================================
  {
    id: 'post-test',
    titulo: 'Post-test · Cierre del curso',
    descripcion: 'Al cierre de la Sesión 4. ~12 minutos. Tu feedback define cómo seguimos.\n\nLas primeras 8 preguntas son las mismas que el pre-test; nos permiten medir cuánto movió el curso tu conocimiento.',
    preguntas: [
      {t: 'section', titulo: 'Parte A · Conocimiento (espejadas con pre-test)'},

      {t: 'choice', req: true,
       titulo: '1. Una cooperativa reporta utilidad neta de B/. 400,000 en el año. ¿Cuál afirmación es correcta?',
       opciones: [
         'Significa que tiene B/. 400,000 adicionales en su cuenta bancaria.',
         'Puede no tener dinero suficiente para pagar sus obligaciones inmediatas.',
         'Debe distribuir esa cantidad íntegra entre sus asociados.',
         'Ha reducido su pasivo con terceros.'
       ]},
      {t: 'choice', req: true,
       titulo: '2. La relación que siempre se cumple en un balance:',
       opciones: ['Activos + Pasivos = Patrimonio','Activos = Pasivos + Patrimonio','Patrimonio = Utilidad acumulada','Pasivos = Patrimonio + Ingresos']},
      {t: 'choice', req: true,
       titulo: '3. ¿Cuál es la diferencia entre "ingreso" y "cobro"?',
       opciones: ['Son sinónimos en finanzas.','El ingreso se registra cuando se genera; el cobro cuando se recibe efectivamente.','El cobro siempre es mayor al ingreso.','Solo aplica a bancos, no a cooperativas.']},
      {t: 'choice', req: true,
       titulo: '4. Las 4 dimensiones principales de cualquier producto financiero:',
       opciones: ['Nombre, emisor, país, moneda.','Rentabilidad, riesgo, liquidez, plazo.','Marca, rating, historial, referencias.','Tasa, comisión, seguro, garantía.']},
      {t: 'choice', req: true,
       titulo: '5. Crédito al "7% nominal" a 5 años con comisión de apertura del 3%:',
       opciones: ['Tasa efectiva es 7%.','Tasa efectiva es menor a 7%.','Tasa efectiva es mayor a 7% porque la comisión se suma al costo real.','Depende del color del asesor.']},
      {t: 'choice', req: true,
       titulo: '6. "Endeudarse para crecer" es buen endeudamiento cuando:',
       opciones: ['La tasa es menor al 8%.','La plata pedida genera flujos superiores al costo del crédito en el mismo horizonte.','El banco es reconocido.','El plazo es largo.']},
      {t: 'choice', req: true,
       titulo: '7. Concentración de cartera del 75% en empleados de una sola empresa:',
       opciones: ['Es buena señal — hay relación sólida.','Es neutra si la empresa es grande.','Es un riesgo importante de concentración.','Es obligatorio por Ley 17.']},
      {t: 'choice', req: true,
       titulo: '8. "Reserva de liquidez" de una cooperativa se refiere a:',
       opciones: ['La utilidad acumulada.','Los depósitos de los asociados.','Plata disponible a corto plazo para cubrir imprevistos y retiros.','El patrimonio total.']},

      {t: 'section', titulo: 'Parte B · Aplicación'},

      {t: 'choice', req: true,
       titulo: '9. Cooperativa con activos B/. 30M, pasivos B/. 27M, utilidad año B/. 500k, caja + inversiones B/. 600k, depósitos exigibles a 90 días B/. 3.2M. Su mayor vulnerabilidad:',
       opciones: ['Utilidad insuficiente.','Patrimonio negativo.','Cobertura de liquidez inmediata muy baja.','Activos muy diversificados.']},

      {t: 'choice', req: true,
       titulo: '10. Dos ofertas mismo monto: A) 8% a 3 años, sin comisiones. B) 6.5% a 7 años, con comisión apertura 2.5% + seguro mensual. Elegir:',
       opciones: ['La B siempre, porque tiene la tasa más baja.','La A siempre, porque no tiene comisiones.','Depende del propósito del crédito y del calce con el flujo que genera.','Cualquiera, son equivalentes.']},

      {t: 'choice', req: true,
       titulo: '11. Tu cooperativa tiene B/. 500k de "reserva de liquidez" en DPF a 5 años al 4%. ¿Qué problema hay?',
       opciones: ['Ninguno, es rentable.','La tasa es muy baja.','La reserva de liquidez no debería estar a 5 años.','El banco es muy pequeño.']},

      {t: 'choice', req: true,
       titulo: '12. Mejor pregunta para un asesor antes de contratarlo:',
       opciones: ['¿Cuánto tiempo llevas en el mercado?','¿Cómo te pagan a ti por venderme este producto?','¿Cuál es tu rentabilidad histórica?','¿Cuántos clientes tienes?']},

      {t: 'section', titulo: 'Parte C · Qué tan cómodo(a) estás ahora (Likert 1-5)'},

      {t: 'scale', req: true, min: 1, max: 5, titulo: '13. Leer un balance de mi cooperativa.'},
      {t: 'scale', req: true, min: 1, max: 5, titulo: '14. Leer un estado de resultados.'},
      {t: 'scale', req: true, min: 1, max: 5, titulo: '15. Interpretar un flujo de caja.'},
      {t: 'scale', req: true, min: 1, max: 5, titulo: '16. Preguntar a un asesor las cosas correctas.'},
      {t: 'scale', req: true, min: 1, max: 5, titulo: '17. Evaluar una oferta de crédito.'},

      {t: 'section', titulo: 'Parte D · Experiencia del curso'},

      {t: 'scale', req: true, min: 1, max: 10, etiquetaIzq: 'Mediocre', etiquetaDer: 'Excelente',
       titulo: '18. El curso como un todo, ¿qué nota le das?'},

      {t: 'scale', req: true, min: 0, max: 10, etiquetaIzq: 'No recomendaría', etiquetaDer: 'Definitivamente',
       titulo: '19. ¿Qué tan probable es que recomiendes el curso a otro directivo cooperativo?'},

      {t: 'scale', req: true, min: 1, max: 5,
       titulo: '20. La combinación facilitador + co-facilitador te pareció:'},

      {t: 'scale', req: true, min: 1, max: 5, etiquetaIzq: 'Poco útiles', etiquetaDer: 'Muy útiles',
       titulo: '21. Las herramientas interactivas te parecieron:'},

      {t: 'choice', req: true,
       titulo: '22. El ritmo del curso fue:',
       opciones: ['Demasiado lento','Correcto','Demasiado rápido']},

      {t: 'choice', req: true,
       titulo: '23. La duración de 2 horas por sesión fue:',
       opciones: ['Insuficiente','Adecuada','Excesiva']},

      {t: 'section', titulo: 'Parte E · Abiertas'},

      {t: 'paragraph', titulo: '24. ¿Qué te llevas del curso que no tenías antes?'},
      {t: 'paragraph', titulo: '25. ¿Qué mejorarías si se dicta nuevamente?'},
      {t: 'paragraph', titulo: '26. ¿Hay algo que quedó sin resolver?'},

      {t: 'choice', req: true,
       titulo: '27. ¿Estarías interesado(a) en una sesión de seguimiento opcional 2 semanas después?',
       opciones: ['Sí','No','Tal vez']}
    ]
  },

  // ============================================================
  // 6. FEEDBACK +30 DÍAS (opcional, envío posterior)
  // ============================================================
  {
    id: 'feedback-30d',
    titulo: 'Feedback +30 días · Curso cooperativas',
    descripcion: 'Un mes después del curso. ~3 minutos. ¿Qué se quedó, qué se aplicó?',
    preguntas: [
      {t: 'checkbox', req: true,
       titulo: '1. ¿Has usado alguna de las herramientas del curso desde que terminó? (marca todas las que apliquen)',
       opciones: ['Mi foto financiera','Mi película del mes','Mi caja de herramientas','Costo real del crédito','No he vuelto a abrir ninguna']},

      {t: 'checkbox', req: true,
       titulo: '2. ¿Aplicaste algo del curso en una conversación real de tu cooperativa?',
       opciones: ['Sí, en junta','Sí, con mi gerente financiero','Sí, informalmente con colegas','No todavía']},

      {t: 'paragraph', titulo: '3. Si respondiste sí en la anterior, cuéntanos brevemente cuál.'},

      {t: 'choice', req: true,
       titulo: '4. La checklist de preguntas que te llevaste, ¿la has usado?',
       opciones: ['Sí, la tengo a la mano.','La recuerdo pero no la he usado.','No la uso.']},

      {t: 'choice', req: true,
       titulo: '5. 30 días después, ¿cuál sesión te resultó más útil?',
       opciones: ['Sesión 1 · Estados financieros','Sesión 2 · Flujo de caja','Sesión 3 · Productos financieros','Sesión 4 · Financiamiento y deuda']},

      {t: 'paragraph', titulo: '6. Si pudieras cambiar UNA cosa del curso:'},

      {t: 'scale', req: true, min: 0, max: 10, etiquetaIzq: 'No recomendaría', etiquetaDer: 'Definitivamente',
       titulo: '7. ¿Recomendarías el curso a otro directivo cooperativo ahora?'},

      {t: 'choice', req: true,
       titulo: '8. ¿Te interesa una sesión de seguimiento para resolver dudas que hayan surgido?',
       opciones: ['Sí, definitivamente','Tal vez, depende del día','No']}
    ]
  }

];
