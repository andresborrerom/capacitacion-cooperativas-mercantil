# Capacitación financiera para cooperativas panameñas

Curso de 4 sesiones × 2 horas, dirigido a miembros de cooperativas en Panamá. Busca entregar educación financiera genuina con enfoque práctico y lenguaje cercano, respetando la inteligencia de una audiencia profesional no-técnica en finanzas.

## Mapa del repositorio

| Carpeta / archivo | Qué es |
|---|---|
| **`indice.html`** | **Navegador visual del proyecto.** |
| **`servir.bat`** | **Doble-click para arrancar servidor local + abrir navegador.** |
| `servir.ps1` | Script PowerShell que hace el trabajo real (invocado por el .bat). |
| `ABOUT-ME.md` | Perfil del usuario y mandato estratégico del proyecto. |
| `INSTRUCCIONES.md` | Reglas de trabajo, pedagogía, stack, supuestos pendientes. |
| `avances.md` | Bitácora cronológica de avances. |
| `diseno/` | Decisiones transversales: arco narrativo, audiencia, metáforas, voz, stack. |
| `referencias/` | Benchmarks de capacitaciones referentes + fuentes Panamá. |
| `sesiones/` | Una carpeta por sesión, con guion, PDF previo, slides, herramientas, ejercicios. |
| `evaluacion/` | Pre/post-test, caso integrador, feedback final. |
| `assets/` | CSS/JS compartidos por slides y herramientas. |
| `instructivo-facilitador/` | Documento maestro para el profesor: HTML imprimible a PDF + fuente markdown. |
| `scripts/` | Utilidades operativas (generador de QR). |
| `DESPLIEGUE.md` | Guía paso a paso para publicar el curso (GitHub Pages). |

## Punto de entrada recomendado

**Doble-click a `servir.bat`** en la carpeta del proyecto. Arranca un servidor local y te abre el navegador en `indice.html` automáticamente. No requiere instalar nada — usa PowerShell nativo de Windows.

Alternativas si no usas el `.bat`:
- Abrir `indice.html` directamente con **Firefox** (sin servidor).
- Si tienes Python: `python -m http.server 8000` desde esta carpeta, luego `http://localhost:8000/indice.html`.

El `indice.html` es el navegador visual de todo el contenido: desde ahí puedes leer cualquier `.md` renderizado y abrir las herramientas/slides en pestaña nueva.

## Cómo navegar (manual, si no usas el índice)

1. Si buscas **cómo dictar el curso paso a paso** → `instructivo-facilitador/instructivo.html` (o PDF generado de él).
2. Si buscas **el diseño global del curso** → `diseno/`.
3. Si buscas **una sesión específica** → `sesiones/sesion-N-.../`.
4. Si buscas **qué se ha hecho y qué sigue** → `avances.md`.
5. Si buscas **cómo trabajar en este repo** → `INSTRUCCIONES.md`.
6. Si buscas **cómo publicar el curso** → `DESPLIEGUE.md`.

## Estado
**Primera versión completa (2026-04-21).** Curso completo: diseño, investigación, 4 sesiones (objetivos, previo, guion, slides, herramienta, material, evaluación), evaluación transversal, instructivo del facilitador, generador de QR, guía de despliegue. Pendiente: decisiones del usuario sobre metáfora madre, arquetipos, co-facilitador, y despliegue final a GitHub Pages.
