# Portafolio de Edgar Lara

Portafolio académico de una sola página, construido con HTML semántico, CSS propio y JavaScript sin dependencias. Presenta la formación, intereses, habilidades y dos proyectos de Edgar Lara.

## Ejecutar en local

1. Clona este repositorio o descarga sus archivos.
2. Abre una terminal en la carpeta del proyecto.
3. Inicia un servidor estático:

   ```powershell
   py -m http.server 8002
   ```

4. Visita <http://127.0.0.1:8002>.

## Tecnologías e interacciones

- HTML5 semántico: encabezado, navegación, secciones, artículos, figuras, formulario y pie de página.
- CSS3: variables personalizadas, Grid, Flexbox, media queries, estados de foco y soporte para movimiento reducido.
- JavaScript: navegación móvil, tema claro/oscuro con `localStorage`, filtro de proyectos, ficha modal y validación local del formulario.
- Git y GitHub para control de versiones y publicación.

## Proyectos

1. **CacaoDetect** — prototipo académico para apoyar la identificación de mazorcas sanas, Monilia y Phytophthora. El repositorio emplea YOLOv5 y Python/Django junto con HTML y CSS.
2. **Seiko Insignia** — landing page académica construida con HTML y CSS. La navegación lleva a secciones; el formulario de reserva es demostrativo y no envía ni almacena datos.

La inferencia de CacaoDetect requiere los pesos del modelo, que no están incluidos en el repositorio descargado. Las capturas documentan la interfaz disponible; no se presentan como resultados de detección.

## Capturas

- [Portafolio en escritorio](assets/capturas/portafolio-escritorio.png)
- [Portafolio en móvil](assets/capturas/portafolio-movil.png)
- [Capturas de CacaoDetect](assets/capturas/cacaodetect/)
- [Capturas de Seiko Insignia](assets/capturas/seiko/)

## Publicación en GitHub Pages

El sitio está preparado para publicarse desde la raíz de la rama `main`. Después de subir el repositorio, en GitHub abre **Settings → Pages**, elige **Deploy from a branch**, selecciona `main` y `/(root)`, y guarda. La dirección del sitio será:

<https://elaray2.github.io/edgar-portfolio/>

GitHub puede tardar unos minutos en publicar la primera versión. Comprueba luego la URL pública en una ventana privada y revisa navegación, tema, filtros, fichas, formulario local, imágenes y vista móvil.

## Historial de Git

El proyecto ya cuenta con commits separados por etapas. Para revisar el historial:

```powershell
git log --oneline
```

Para registrar un cambio nuevo:

```powershell
git status
git add index.html styles.css script.js README.md
git commit -m "feat: describe el cambio realizado"
git push
```

El repositorio público previsto para este portafolio es <https://github.com/elaray2/edgar-portfolio>.
