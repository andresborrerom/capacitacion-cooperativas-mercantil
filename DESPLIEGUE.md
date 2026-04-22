# DESPLIEGUE.md — Cómo publicar el curso

Guía mínima para que el curso corra en vivo durante el evento virtual.

## Camino recomendado: GitHub Pages

### Una única vez (setup inicial)

1. **Crea una cuenta GitHub** si no tienes una (gratis en github.com).
2. **Crea un repositorio público** — nombre sugerido: `capacitacion-cooperativas`.
3. **Sube el contenido de este proyecto** al repo:
   - Puedes arrastrar y soltar la carpeta entera desde github.com → "uploading an existing file".
   - O usar GitHub Desktop (más simple que la línea de comandos).
4. En la configuración del repo (`Settings → Pages`):
   - En *Source*, elige **Deploy from branch**.
   - *Branch*: `main`, *Folder*: `/ (root)`.
   - Guarda.
5. **Espera 1-2 minutos.** GitHub te da una URL tipo `https://TUUSUARIO.github.io/capacitacion-cooperativas/`.

### Estructura de URLs resultante

Con la arquitectura actual del proyecto, las URLs quedan así:

```
https://TUUSUARIO.github.io/capacitacion-cooperativas/sesiones/sesion-1-estados-financieros/slides/
https://TUUSUARIO.github.io/capacitacion-cooperativas/sesiones/sesion-1-estados-financieros/herramientas/mi-foto-financiera/
https://TUUSUARIO.github.io/capacitacion-cooperativas/scripts/generar-qr.html
```

### Generar los QR

1. Abre `scripts/generar-qr.html` en tu navegador (localmente o en GitHub Pages).
2. Pega la URL **final** de cada herramienta (una por sesión).
3. Descarga el PNG.
4. Guarda el PNG en la carpeta `slides/qr/` de la sesión correspondiente, con nombre consistente (p. ej. `qr-mi-foto-financiera.png`).
5. En el HTML del slide, reemplaza el placeholder:
   ```html
   <!-- Antes -->
   <div class="qr-placeholder">[ QR ]</div>
   <!-- Después -->
   <img src="qr/qr-mi-foto-financiera.png" alt="QR · Mi foto financiera" style="width: 240px; border: 8px solid #003DA5; border-radius: 8px;">
   ```

Ya con los QR embebidos como imágenes, **los slides no dependen de internet** para mostrarlos. Ideal para un evento virtual donde no quieres sorpresas.

## Alternativa rápida sin GitHub: Netlify Drop

Si prefieres evitar GitHub por completo:

1. Ve a `https://app.netlify.com/drop`.
2. Arrastra la carpeta del proyecto completa.
3. Netlify te da una URL instantánea como `https://abc123.netlify.app`.
4. Listo.

Pros: cero cuenta requerida, URL instantánea.
Contra: URL difícil de compartir (la puedes renombrar si creas cuenta gratis).

## Plan de contingencia en vivo

Si el día del evento GitHub Pages o Netlify tiene problemas:

1. Descarga el repo entero a la laptop del facilitador.
2. En una terminal, navega a la carpeta y ejecuta:
   ```
   python -m http.server 8000
   ```
   (o `npx serve` si tienes Node).
3. Comparte tu IP local con los participantes si hay wifi común, o pégala en el chat.
4. Las herramientas funcionan igual.

Nota: Este plan B sólo sirve si todos están en la misma red física — útil en presencial; **no** útil en virtual. Para virtual, el respaldo es tener **ambas** URLs (GitHub Pages + Netlify) listas.

## Cómo probar antes del evento

Checklist 48 h antes:

- [ ] Abrir cada slide desde computadora del facilitador.
- [ ] Abrir cada herramienta desde **al menos 3 celulares distintos** (iPhone, Android, distintos modelos).
- [ ] Probar que los QR se leen con escáner nativo de ambos sistemas.
- [ ] Probar en Zoom/Teams compartiendo pantalla: ¿se lee el QR desde otro celular apuntando a la pantalla compartida?
- [ ] Validar que `localStorage` persiste entre cierres del navegador (opcional, pero útil si alguien quiere volver a sus datos post-sesión).

## Actualizaciones entre sesiones

Si editas slides o herramientas entre Sesión 1 y Sesión 2:

1. Edita los archivos localmente.
2. Sube los cambios a GitHub (drag-and-drop en el sitio, o `git push` si usas CLI).
3. GitHub Pages republica automáticamente en 1-2 minutos.
4. Las URLs no cambian — los QR previamente generados siguen sirviendo.

## ¿Privacidad?

- Las herramientas HTML **no envían datos a ningún servidor**. Todo corre en el navegador del participante.
- El único dato que puede "viajar" es si el participante decide compartir voluntariamente en chat o micrófono.
- Si el material del curso incluye cifras reales de una cooperativa específica: **no subirlas al repo público**. Mantenerlas solo en el material privado del facilitador.
