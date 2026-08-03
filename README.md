# 👨‍💻 Portafolio — Paul Heredia (React)

Portafolio profesional de **Paul Heredia**, Ingeniero en Software y desarrollador Full Stack (Front-End & Back-End), estudiante en la ESPE 🇪🇨.

> **v2.0** — Migrado de HTML/CSS/JS estático a **React + Vite** con estilos **Tailwind CSS** (estética Skeleton UI).

## 🛠️ Stack

- ⚛️ **React 18** + **Vite 6**
- 🎨 **Tailwind CSS v4** con sistema de temas claro/oscuro (paleta Skeleton UI)
- 🌐 i18n ES/EN con `localStorage`
- 📱 100% responsive

## ✨ Características

- 🌙/☀️ Toggle de tema claro-oscuro (guardado en localStorage)
- 🌐 Toggle de idioma Español/Inglés (todo el sitio traducido)
- 📸 Foto de perfil + terminal decorativa animada
- 💼 Línea de tiempo de experiencia laboral (EQR, Kaizen, Royal Flowers)
- 🏷️ Habilidades con pestañas por categoría y logos oficiales
- 🗂️ 6 proyectos con capturas reales y **modal con galería** (flechas ‹ ›, contador, teclas ← →)
- ✉️ Contacto con WhatsApp, GitHub, LinkedIn, correo (abre Gmail + copia) y ubicación

## 📁 Estructura

```
portafolio-paul-heredia/
├── index.html              # Entrada de Vite
├── vite.config.js          # Configuración Vite + Tailwind
├── package.json
├── public/
│   └── img/                # Fotos y capturas de proyectos
│       └── proyectos/<proyecto>/
├── src/
│   ├── main.jsx            # Punto de entrada
│   ├── App.jsx             # Composición de secciones
│   ├── index.css           # Temas Skeleton UI (dark/light) + utilidades
│   ├── context/
│   │   └── AppContext.jsx  # Estado global (tema, idioma, menú)
│   ├── data/
│   │   └── i18n.js         # Traducciones ES/EN + datos (proyectos, skills, experiencia)
│   └── components/
│       ├── Navbar.jsx      # Navegación + toggles tema/idioma
│       ├── Hero.jsx        # Foto, terminal, redes
│       ├── About.jsx       # Sobre mí (10 puntos)
│       ├── Experience.jsx  # Timeline laboral
│       ├── Skills.jsx      # Pestañas + tarjetas
│       ├── Projects.jsx    # Tarjetas de proyectos
│       ├── ProjectModal.jsx# Modal con galería
│       ├── Contact.jsx     # Tarjetas de contacto + toast
│       └── Footer.jsx
└── legacy-html/            # Versión HTML original (respaldo)
```

## 🚀 Desarrollo y despliegue

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # compilar a producción (dist/)
npm run preview    # previsualizar build
```

### Publicar en GitHub Pages

```bash
npm run build
git init && git add . && git commit -m "Portafolio React v2"
git branch -M main
git remote add origin https://github.com/IgniaDragnel/portafolio-paul-heredia.git
git push -u origin main
```

Luego activa **GitHub Pages** en *Settings → Pages* (branch `main`, carpeta `/root`).

> ⚠️ Nota: `vite.config.js` ya usa `base: './'` para rutas relativas, compatible con GitHub Pages.

## ✏️ Personalizar

| ¿Qué quieres cambiar? | ¿Dónde? |
|---|---|
| Textos y traducciones | `src/data/i18n.js` |
| Proyectos (descripciones, imágenes, enlaces) | `src/data/i18n.js` → `projects` |
| Habilidades | `src/data/i18n.js` → `skills` |
| Experiencia | `src/data/i18n.js` → `exp.items` |
| Contactos (teléfono, correo, redes) | `src/data/i18n.js` → `CONTACT` |
| Colores del tema | `src/index.css` → variables CSS |
| Capturas de proyectos | `public/img/proyectos/<proyecto>/` |

## 📄 Licencia

Libre para uso personal. Hecho con 💙 y código.
