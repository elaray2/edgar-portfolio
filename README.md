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

Las capturas de los proyectos están separadas por carpeta:

### CacaoDetect

- [Panel de administración](assets/capturas/cacaodetect/panel-administracion.png)
- [Vista del detector de humedad](assets/capturas/cacaodetect/detector-humedad.png)
- [Vista de captura de imágenes](assets/capturas/cacaodetect/captura-imagenes.png)
- [Inicio de sesión](assets/capturas/cacaodetect/inicio-sesion.png)

### Seiko Insignia

- [Portada](assets/capturas/seiko/portada.png)
- [Colección](assets/capturas/seiko/coleccion.png)
- [Formulario demostrativo de reserva](assets/capturas/seiko/reserva.png)

La inferencia de CacaoDetect requiere los pesos del modelo, que no están incluidos en el repositorio descargado. Las capturas documentan la interfaz disponible; no se presentan como resultados de detección.

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

## Historial de Git y publicación

Esta carpeta ya tiene un repositorio local en la rama `main` y varios commits que separan la estructura visual, las interacciones y la documentación. Puedes revisarlos con:

```powershell
git log --oneline
```

Para cada cambio nuevo, revisa el diff y crea un commit con un mensaje claro:

```powershell
git status
git add index.html styles.css script.js
git commit -m "feat: describe el cambio realizado"
```

Después de crear un repositorio público vacío en GitHub, conecta su URL y publica esta rama. Sustituye `NOMBRE-DEL-REPOSITORIO` por el nombre que elijas:

```powershell
git remote add origin https://github.com/elaray2/NOMBRE-DEL-REPOSITORIO.git
git push -u origin main
```

Si ya existe `origin`, actualiza su URL con `git remote set-url origin https://github.com/elaray2/NOMBRE-DEL-REPOSITORIO.git`. Revisa la URL antes de publicar.

## Decisiones de contacto

No se inventó un correo ni se publicó información personal sensible. Se usa un avatar de iniciales en lugar de una fotografía personal. El perfil de GitHub es el único enlace de contacto público en esta versión. El formulario demuestra estructura y validación front-end, pero informa que no transmite datos.
