# 👨‍💻 Portafolio — Paul Heredia

Portafolio profesional de **Paul Heredia**, Ingeniero en Software y desarrollador Full Stack (Front-End & Back-End), estudiante en la ESPE 🇪🇨.

![Tecnologías](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Características

- 🎨 Diseño moderno en **modo oscuro** con acentos azul/cian
- 📱 100% **responsive** (móvil, tablet y escritorio)
- ⌨️ Efecto máquina de escribir en el hero
- 📦 Terminal decorativa animada
- 🧩 Animaciones de entrada con scroll (IntersectionObserver)
- 🗂️ Proyectos reales enlazados a tu GitHub
- ♿ Accesible (ARIA, navegación por teclado, `prefers-reduced-motion`)

## 📁 Estructura

```
portafolio-paul-heredia/
├── index.html        # Página principal
├── css/
│   └── styles.css    # Estilos (tema oscuro)
├── js/
│   └── main.js       # Interactividad + datos de proyectos
├── img/              # Imágenes: perfil + capturas por proyecto en img/proyectos/
└── README.md
```

> 💡 Las tarjetas de proyectos se generan desde `js/main.js` (array `projects`). Ahí puedes editar descripciones, enlaces, etiquetas e imágenes.

## 🚀 Cómo publicarlo en GitHub Pages

### Opción 1: Desde VS Code (recomendada)

1. **Inicia sesión en GitHub** en VS Code (icono de personas en la barra lateral → *Sign in*).
2. Abre el panel de **Control de código fuente** (icono de rama `Ctrl+Shift+G`).
3. Haz clic en **Publicar en GitHub** (rama `main`).
4. En GitHub, ve a **Settings → Pages**.
5. En *Source* selecciona **Deploy from a branch** → rama **main** → carpeta **/ (root)** → **Save**.
6. Espera 1-2 minutos y visita: `https://igniadragnel.github.io/portafolio-paul-heredia/`

### Opción 2: Desde la terminal

```bash
git init
git add .
git commit -m "Primera versión del portafolio"
git branch -M main
git remote add origin https://github.com/IgniaDragnel/portafolio-paul-heredia.git
git push -u origin main
```

Luego activa **GitHub Pages** en *Settings → Pages* de tu repositorio.

## ✏️ Personalizar

| ¿Qué quieres cambiar? | ¿Dónde? |
|---|---|
| Nombre, descripción | `index.html` → sección `hero` |
| Experiencia laboral | `index.html` → sección `experiencia` |
| Contactos (WhatsApp, correo) | `index.html` → sección `contacto` |
| Texto "Sobre mí" | `index.html` → sección `sobre-mi` |
| Habilidades | `index.html` → sección `habilidades` |
| Proyectos (detalles, enlaces, imágenes) | `js/main.js` → array `projects` (campo `images` = capturas del modal) |
| Capturas de los proyectos | `img/proyectos/<proyecto>/` — optimizadas en JPG |
| Colores del tema | `css/styles.css` → variables `:root` |

## 📄 Licencia

Libre para uso personal. Hecho con 💙 y código.
