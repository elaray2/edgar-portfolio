# Portafolio de Edgar Lara

Portafolio académico de una sola página, construido con HTML semántico, CSS propio y JavaScript sin dependencias. Presenta la formación, intereses, habilidades y dos proyectos de Edgar Lara.

## Ejecutar en local

1. Descarga o clona este proyecto.
2. Abre una terminal en la carpeta `edgar-portfolio`.
3. Ejecuta un servidor estático:

   ```powershell
   py -m http.server 8002
   ```

4. Visita <http://127.0.0.1:8002>.

También puedes abrir `index.html` directamente, aunque un servidor local reproduce mejor el entorno de publicación.

## Tecnologías

- HTML5 semántico: encabezado, navegación, secciones, artículos, figuras, formulario y pie de página.
- CSS3: variables personalizadas, Grid, Flexbox, media queries, estados de foco y soporte para movimiento reducido.
- JavaScript: navegación móvil, tema claro/oscuro con `localStorage`, filtro de proyectos, ficha modal y validación local del formulario.
- Git y GitHub: recomendado para versionar y publicar el proyecto.

## Capturas locales

- [Portafolio en escritorio](assets/capturas/portafolio-escritorio.png)
- [Portafolio en móvil](assets/capturas/portafolio-movil.png)
- [Inicio de sesión de CacaoDetect](assets/capturas/cacaodetect-inicio-sesion.png)
- [Registro de CacaoDetect](assets/capturas/cacaodetect-registro.png)
- [Portada Seiko Insignia](assets/capturas/seiko-insignia-inicio.png)

La captura de CacaoDetect muestra la pantalla de acceso. La inferencia de imágenes requiere los pesos del modelo, que no están incluidos en el repositorio descargado. No se presenta una detección como si fuera un resultado real.

## Proyectos incluidos

1. **CacaoDetect** — prototipo académico para apoyar la identificación de mazorcas sanas, Monilia y Phytophthora. El repositorio emplea YOLOv5 y Python/Django junto con HTML y CSS.
2. **Seiko Insignia** — landing page académica construida con HTML y CSS. La navegación lleva a secciones; el formulario de reserva es demostrativo y no envía ni almacena datos.

El enunciado de la asignatura solicita mínimo tres proyectos. Esta versión documenta los dos proyectos disponibles; añade un tercer trabajo propio antes de entregar si la rúbrica se aplica literalmente.

## Publicar en GitHub Pages

1. Crea un repositorio público para este portafolio y sube los archivos de esta carpeta.
2. En la configuración del repositorio, abre **Pages** y elige publicar desde la rama `main` y la carpeta raíz (`/`).
3. Espera a que GitHub Pages indique la URL publicada.
4. Abre esa URL en una ventana privada y revisa navegación, tema, filtros, fichas, formulario local, imágenes y vista móvil.

Como los enlaces y recursos usan rutas relativas, la página puede publicarse tanto desde la raíz como desde un subdirectorio de GitHub Pages.

## Versionar con varios commits

Haz commits pequeños que describan avances reales. Por ejemplo, dentro de esta carpeta:

```powershell
git init -b main
git add index.html styles.css
git commit -m "feat: crea estructura y sistema visual del portafolio"
git add script.js
git commit -m "feat: agrega interacciones y validación local"
git add README.md assets
git commit -m "docs: agrega guía y capturas de proyectos"
```

Después conecta el repositorio remoto que hayas creado y publica los commits. Revisa tu configuración de Git antes del primer commit para que el autor quede asociado a la cuenta correcta.

## Decisiones de contacto

No se inventó un correo ni se publicó información personal sensible. El perfil de GitHub es el único enlace de contacto público en esta versión. El formulario demuestra estructura y validación front-end, pero informa que no transmite datos.
