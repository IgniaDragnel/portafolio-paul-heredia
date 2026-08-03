/* ============================================================
   PORTFOLIO PAUL HEREDIA — Interactividad
   ============================================================ */

/* ============================================================
   TRADUCCIONES (ES / EN)
   ============================================================ */
const i18n = {
  es: {
    'nav.inicio': 'Inicio',
    'nav.sobre': 'Sobre mí',
    'nav.exp': 'Experiencia',
    'nav.hab': 'Habilidades',
    'nav.proy': 'Proyectos',
    'nav.cont': 'Contacto',
    'hero.greeting': '<Hola mundo! 👋 Soy>',
    'hero.role': 'Ingeniero en Software',
    'hero.desc': 'Desarrollador Full Stack especializado en Front-End y Back-End. Creo aplicaciones web y de escritorio funcionales, seguras y con interfaces limpias. Estudiante en la ESPE 🚀',
    'hero.btn1': 'Ver mis proyectos',
    'hero.btn2': 'Contáctame',
    'term.whoami': 'Paul Heredia — Ingeniero en Software',
    'term.status': '✓ disponible para nuevos proyectos',
    'sec.sobre': '<01 / sobre-mi>',
    'sec.exp': '<02 / experiencia>',
    'sec.hab': '<03 / habilidades>',
    'sec.proy': '<04 / proyectos>',
    'sec.cont': '<05 / contacto>',
    'sobre.titulo': 'Sobre mí',
    'sobre.q1': '👨‍💻 ¿Quién soy?',
    'sobre.p1': 'Soy <strong>Paul Heredia</strong>, estudiante de Ingeniería en Software en la <strong>ESPE</strong> y desarrollador Full Stack con <strong>más de 3 años de experiencia</strong> construyendo aplicaciones de <strong>Front-End</strong> y <strong>Back-End</strong> para empresas como Royal Flowers, Kaizen Software y EQR.',
    'sobre.p2': 'Me apasiona transformar ideas en soluciones reales: desde sistemas de autenticación y registro de usuarios, hasta aplicaciones de escritorio para optimizar procesos cotidianos. Disfruto trabajar con bases de datos, APIs y construir interfaces limpias y funcionales.',
    'sobre.p3': 'Siempre estoy aprendiendo nuevas tecnologías y buscando retos que me permitan crecer como profesional.',
    'sobre.q2': '🎯 ¿Qué hago?',
    'sobre.i1': 'Desarrollo de aplicaciones web Full Stack (Front-End y Back-End)',
    'sobre.i2': 'Diseño e implementación de APIs REST seguras y escalables, así como integración con servicios y APIs de terceros',
    'sobre.i3': 'Desarrollo de sistemas empresariales para Recursos Humanos, Administración, Compras, Mantenimiento y Soporte',
    'sobre.i4': 'Implementación de autenticación, gestión de usuarios, roles y permisos',
    'sobre.i5': 'Diseño y administración de bases de datos relacionales y NoSQL',
    'sobre.i6': 'Desarrollo de aplicaciones con comunicación en tiempo real mediante WebSockets y notificaciones push',
    'sobre.i7': 'Automatización e integración de procesos mediante servicios como Firebase Cloud Messaging, WhatsApp Business API y correo electrónico',
    'sobre.i8': 'Desarrollo de interfaces web modernas, responsivas y optimizadas para una mejor experiencia de usuario',
    'sobre.i9': 'Desarrollo de aplicaciones móviles multiplataforma',
    'sobre.i10': 'Control de versiones, trabajo colaborativo y despliegue de aplicaciones',
    'exp.titulo': 'Experiencia laboral',
    'hab.titulo': 'Habilidades técnicas',
    'hab.sub': 'Las herramientas y lenguajes que uso para dar vida a las ideas.',
    'hab.tabs': ['Todo', 'Lenguajes', 'Front-End', 'Back-End', 'Móvil', 'Bases de datos', 'Herramientas'],
    skills: [
      { name: 'PHP', cat: 'backend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: 'Java', cat: 'lenguajes', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'C#', cat: 'lenguajes', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
      { name: 'JavaScript', cat: 'frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Dart', cat: 'movil', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
      { name: 'SQL', cat: 'bases', emoji: '🗄️' },
      { name: 'HTML', cat: 'frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS', cat: 'frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'Laravel', cat: 'backend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'Node.js', cat: 'backend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'API REST', cat: 'backend', emoji: '🔗' },
      { name: 'Autenticación', cat: 'backend', emoji: '🔐' },
      { name: 'CRUD', cat: 'backend', emoji: '📝' },
      { name: 'React', cat: 'frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Vite', cat: 'frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg' },
      { name: 'Flutter', cat: 'movil', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'React Native', cat: 'movil', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'MySQL', cat: 'bases', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', cat: 'bases', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'phpMyAdmin', cat: 'bases', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: 'Git', cat: 'herramientas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', cat: 'herramientas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
      { name: 'VS Code', cat: 'herramientas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Visual Studio', cat: 'herramientas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg' },
      { name: 'NetBeans', cat: 'herramientas', emoji: '🛠️' },
      { name: 'XAMPP', cat: 'herramientas', emoji: '🚀' }
    ],
    'hab.leng': 'Lenguajes',
    'hab.bd': 'Bases de datos',
    'hab.back': 'Back-End & APIs',
    'hab.front': 'Front-End & Escritorio',
    'hab.herram': 'Herramientas',
    'hab.soft': 'Soft Skills',
    'hab.soft1': 'Trabajo en equipo',
    'hab.soft2': 'Resolución de problemas',
    'hab.soft3': 'Aprendizaje continuo',
    'hab.soft4': 'Comunicación',
    'proy.titulo': 'Proyectos destacados',
    'proy.sub': 'Sistemas reales que he construido, disponibles en mi <a href="https://github.com/IgniaDragnel?tab=repositories" target="_blank" rel="noopener">GitHub</a>.',
    'proy.ver': 'Ver todos en GitHub →',
    'cont.titulo': '¿Trabajamos juntos?',
    'cont.sub': '¿Tienes un proyecto en mente, una oportunidad laboral o quieres saludar? Mi bandeja de entrada está siempre abierta. 🚀',
    'cont.website': 'Sitio web',
    'cont.linkedin': 'LinkedIn',
    'cont.email': 'Correo',
    'cont.ubic': 'Ubicación',
    'foot.msg': 'echo "Gracias por visitar mi portafolio"',
    'foot.copy': 'Hecho con 💙 y código',
    'copied': '✉️ Abriendo tu correo… copiado al portapapeles',
    'verDetalles': 'Ver detalles',
    'title': 'Paul Heredia | Ingeniero en Software',
    roles: ['Desarrollador Full Stack', 'Back-End Developer', 'Front-End Developer', 'Estudiante ESPE 🎓'],
    projects: [
      {
        title: 'Login & Registro MongoDB',
        short: 'Autenticación con API local y MongoDB',
        desc: 'Sistema completo de login y registro de usuarios desarrollado en Dart, que consume una API local para registrar y autenticar usuarios almacenando la información en una base de datos MongoDB.',
        image: 'img/proyectos/login-mongodb/login-mongodb-1.jpg',
        images: ['img/proyectos/login-mongodb/login-mongodb-1.jpg', 'img/proyectos/login-mongodb/login-mongodb-2.jpg', 'img/proyectos/login-mongodb/login-mongodb-3.jpg', 'img/proyectos/login-mongodb/login-mongodb-4.jpg', 'img/proyectos/login-mongodb/login-mongodb-5.jpg'],
        tags: ['Dart', 'MongoDB', 'API REST', 'Authentication'],
        github: 'https://github.com/IgniaDragnel/Login_Registro_MongoDB',
        highlights: ['Registro de nuevos usuarios', 'Inicio de sesión con validación de credenciales', 'Consumo de API REST local', 'Persistencia de datos en MongoDB', 'Interfaz limpia y funcional']
      },
      {
        title: 'Roles de Usuario (C#)',
        short: 'Usuarios con roles y permisos',
        desc: 'Aplicación de registro de usuarios con sistema de roles y permisos construida en C#. Permite crear cuentas, asignar roles y controlar el acceso a las funcionalidades según el nivel de permisos de cada usuario.',
        image: 'img/proyectos/roles-usuario/roles-usuario-1.jpg',
        images: ['img/proyectos/roles-usuario/roles-usuario-1.jpg', 'img/proyectos/roles-usuario/roles-usuario-2.jpg', 'img/proyectos/roles-usuario/roles-usuario-3.jpg'],
        tags: ['C#', '.NET', 'Roles', 'Permissions'],
        github: 'https://github.com/IgniaDragnel/Roles_Usuario-C-',
        highlights: ['Registro de usuarios con roles', 'Control de acceso por nivel de permisos', 'Gestión de cuentas de usuario', 'Aplicación de escritorio en C#']
      },
      {
        title: 'Registro de Trabajadores',
        short: 'Control de almuerzos de trabajadores',
        desc: 'Aplicación de escritorio desarrollada en C# para registrar los almuerzos de los trabajadores. Optimiza el control diario de consumo, permitiendo llevar un registro ordenado y consultable de cada trabajador.',
        image: 'img/proyectos/registro-trabajadores/registro-trabajadores-1.jpg',
        images: ['img/proyectos/registro-trabajadores/registro-trabajadores-1.jpg', 'img/proyectos/registro-trabajadores/registro-trabajadores-2.jpg', 'img/proyectos/registro-trabajadores/registro-trabajadores-3.jpg'],
        tags: ['C#', 'Desktop', 'Records'],
        github: 'https://github.com/IgniaDragnel/Registro_Trabajadores',
        highlights: ['Registro diario de almuerzos', 'Gestión de trabajadores', 'Consulta de registros almacenados', 'Aplicación de escritorio en C#']
      },
      {
        title: 'Formulario de Registro (PHP)',
        short: 'Formulario PHP con validaciones',
        desc: 'Formulario de registro en PHP con validaciones de campos, tanto en el front-end como en el back-end. Controla la entrada de datos —formato de correo, longitud de contraseñas y campos requeridos— y mejora la seguridad del formulario.',
        image: 'img/proyectos/formulario-registro/formulario-registro-1.jpg',
        images: ['img/proyectos/formulario-registro/formulario-registro-1.jpg', 'img/proyectos/formulario-registro/formulario-registro-2.jpg', 'img/proyectos/formulario-registro/formulario-registro-3.jpg'],
        tags: ['PHP', 'HTML', 'Validations', 'Forms'],
        github: 'https://github.com/IgniaDragnel/Formulario_Registro',
        highlights: ['Validación de campos requeridos', 'Control de formato (correo, contraseña)', 'Diseño con HTML y CSS', 'Lógica de validación en PHP']
      },
      {
        title: 'Registro de Estudiantes',
        short: 'CRUD de estudiantes con MySQL',
        desc: 'Sistema de registro de estudiantes desarrollado en Java con conexión a una base de datos MySQL. Permite almacenar, consultar y gestionar la información de los estudiantes de forma ordenada y confiable.',
        image: 'img/proyectos/registro-estudiantes/registro-estudiantes-1.jpg',
        images: ['img/proyectos/registro-estudiantes/registro-estudiantes-1.jpg', 'img/proyectos/registro-estudiantes/registro-estudiantes-2.jpg', 'img/proyectos/registro-estudiantes/registro-estudiantes-3.jpg', 'img/proyectos/registro-estudiantes/registro-estudiantes-4.jpg'],
        tags: ['Java', 'MySQL', 'CRUD'],
        github: 'https://github.com/IgniaDragnel/Registro_Estudiantes',
        highlights: ['Registro y gestión de estudiantes', 'Conexión a base de datos MySQL', 'Consultas y manipulación de datos (CRUD)', 'Aplicación desarrollada en Java']
      },
      {
        title: 'Login & Registro (PHP)',
        short: 'Login y registro con sesiones PHP',
        desc: 'Sistema de login y registro de usuarios desarrollado en PHP con gestión de sesiones. Permite a los usuarios crear sus cuentas e iniciar sesión de forma segura, manteniendo su estado de autenticación durante la navegación.',
        image: 'img/proyectos/login-php/login-php-1.jpg',
        images: ['img/proyectos/login-php/login-php-1.jpg', 'img/proyectos/login-php/login-php-2.jpg', 'img/proyectos/login-php/login-php-3.jpg'],
        tags: ['PHP', 'Sessions', 'Authentication'],
        github: 'https://github.com/IgniaDragnel/Login_Registro',
        highlights: ['Registro de nuevos usuarios', 'Inicio de sesión con sesiones PHP', 'Almacenamiento de credenciales', 'Interfaz sencilla y funcional']
      }
    ],
    experience: [
      {
        role: 'Desarrollador Full Stack',
        company: 'EQR – Ecuadorian Quality Roses',
        date: 'Feb 2026 – Jul 2026 · 6 meses',
        items: [
          'Desarrollo de un sistema de Recursos Humanos: generación de carnets, traspaso de empleados entre fincas, roles y permisos, e integración con un sistema externo para sincronizar usuarios.',
          'Módulo de Salud Ocupacional con gestión de citas médicas mediante calendarios, historiales clínicos y seguimiento de exámenes ocupacionales pendientes.',
          'Notificaciones automáticas por WhatsApp para los procesos de Recursos Humanos.',
          'Sistema de Administración Empresarial: módulos de Compras, Mantenimiento, Configuración de Usuarios (roles, permisos e historial de auditoría) y Soporte.',
          'Integración de APIs externas para sincronizar artículos y proveedores, y automatización del envío de cotizaciones por correo en procesos de licitación.',
          'Módulo de soporte con gestión de tickets, chat en tiempo real mediante WebSockets y notificaciones con Firebase Cloud Messaging (FCM).',
          'APIs REST seguras y escalables con Laravel 12, e interfaces web modernas y responsivas con React.js y Vite.'
        ],
        tags: ['Laravel', 'React', 'Vite', 'Firebase', 'API REST', 'WhatsApp', 'WebSockets']
      },
      {
        role: 'Desarrollador de Software Full Stack',
        company: 'KAIZEN SOFTWARE',
        date: 'Abr 2024 – Ene 2026 · 2 años',
        items: [
          'Desarrollo de aplicaciones móviles para iOS y Android con Flutter y React Native, creando interfaces más rápidas y con más funciones.',
          'Integración eficiente entre servicios frontend y backend mediante llamadas a APIs REST documentadas con Swagger.',
          'Despliegue de aplicaciones en Google Play Store, garantizando lanzamientos estables y funciones listas para producción.',
          'Optimización del rendimiento de las aplicaciones y resolución de errores técnicos, mejorando la experiencia de usuario y la estabilidad del sistema.'
        ],
        tags: ['Flutter', 'React Native', 'API REST', 'Swagger', 'Google Play Store']
      },
      {
        role: 'Auxiliar en Sistemas',
        company: 'Royal Flowers',
        date: 'Mar 2023 – May 2023 · 3 meses',
        items: [
          'Desarrollo de aplicaciones web para la automatización de procesos internos de la empresa.',
          'Diseño e implementación de un sistema de gestión de timbrajes de trabajadores mediante códigos de barras, integrado con una base de datos SQL.',
          'Soporte técnico y mantenimiento de la infraestructura tecnológica de la organización.'
        ],
        tags: ['Web', 'SQL', 'Barcodes', 'Support']
      }
    ]
  },

  en: {
    'nav.inicio': 'Home',
    'nav.sobre': 'About',
    'nav.exp': 'Experience',
    'nav.hab': 'Skills',
    'nav.proy': 'Projects',
    'nav.cont': 'Contact',
    'hero.greeting': '<Hello world! 👋 I\'m>',
    'hero.role': 'Software Engineer',
    'hero.desc': 'Full Stack developer specialized in Front-End and Back-End. I build functional, secure web and desktop applications with clean interfaces. Student at ESPE 🚀',
    'hero.btn1': 'See my projects',
    'hero.btn2': 'Contact me',
    'term.whoami': 'Paul Heredia — Software Engineer',
    'term.status': '✓ available for new projects',
    'sec.sobre': '<01 / about-me>',
    'sec.exp': '<02 / experience>',
    'sec.hab': '<03 / skills>',
    'sec.proy': '<04 / projects>',
    'sec.cont': '<05 / contact>',
    'sobre.titulo': 'About me',
    'sobre.q1': '👨‍💻 Who I am',
    'sobre.p1': 'I am <strong>Paul Heredia</strong>, a Software Engineering student at <strong>ESPE</strong> and a Full Stack developer with <strong>more than 3 years of experience</strong> building <strong>Front-End</strong> and <strong>Back-End</strong> applications for companies like Royal Flowers, Kaizen Software and EQR.',
    'sobre.p2': 'I am passionate about turning ideas into real solutions: from authentication and user registration systems to desktop applications that optimize everyday processes. I enjoy working with databases, APIs and building clean, functional interfaces.',
    'sobre.p3': 'I am always learning new technologies and looking for challenges that let me grow as a professional.',
    'sobre.q2': '🎯 What I do',
    'sobre.i1': 'Full Stack web application development (Front-End and Back-End)',
    'sobre.i2': 'Design and implementation of secure, scalable REST APIs, as well as integration with third-party services and APIs',
    'sobre.i3': 'Development of enterprise systems for Human Resources, Administration, Purchasing, Maintenance and Support',
    'sobre.i4': 'Implementation of authentication, user management, roles and permissions',
    'sobre.i5': 'Design and administration of relational and NoSQL databases',
    'sobre.i6': 'Development of applications with real-time communication using WebSockets and push notifications',
    'sobre.i7': 'Process automation and integration using services like Firebase Cloud Messaging, WhatsApp Business API and email',
    'sobre.i8': 'Development of modern, responsive, optimized web interfaces for a better user experience',
    'sobre.i9': 'Cross-platform mobile application development',
    'sobre.i10': 'Version control, collaborative work and application deployment',
    'exp.titulo': 'Work experience',
    'hab.titulo': 'Technical skills',
    'hab.sub': 'The tools and languages I use to bring ideas to life.',
    'hab.tabs': ['All', 'Languages', 'Front-End', 'Back-End', 'Mobile', 'Databases', 'Tools'],
    skills: [
      { name: 'PHP', cat: 'backend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: 'Java', cat: 'lenguajes', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'C#', cat: 'lenguajes', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
      { name: 'JavaScript', cat: 'frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Dart', cat: 'movil', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
      { name: 'SQL', cat: 'bases', emoji: '🗄️' },
      { name: 'HTML', cat: 'frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS', cat: 'frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'Laravel', cat: 'backend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'Node.js', cat: 'backend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'API REST', cat: 'backend', emoji: '🔗' },
      { name: 'Authentication', cat: 'backend', emoji: '🔐' },
      { name: 'CRUD', cat: 'backend', emoji: '📝' },
      { name: 'React', cat: 'frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Vite', cat: 'frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg' },
      { name: 'Flutter', cat: 'movil', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'React Native', cat: 'movil', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'MySQL', cat: 'bases', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', cat: 'bases', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'phpMyAdmin', cat: 'bases', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: 'Git', cat: 'herramientas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', cat: 'herramientas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
      { name: 'VS Code', cat: 'herramientas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Visual Studio', cat: 'herramientas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg' },
      { name: 'NetBeans', cat: 'herramientas', emoji: '🛠️' },
      { name: 'XAMPP', cat: 'herramientas', emoji: '🚀' }
    ],
    'hab.leng': 'Languages',
    'hab.bd': 'Databases',
    'hab.back': 'Back-End & APIs',
    'hab.front': 'Front-End & Desktop',
    'hab.herram': 'Tools',
    'hab.soft': 'Soft Skills',
    'hab.soft1': 'Teamwork',
    'hab.soft2': 'Problem solving',
    'hab.soft3': 'Continuous learning',
    'hab.soft4': 'Communication',
    'proy.titulo': 'Featured projects',
    'proy.sub': 'Real systems I have built, available on my <a href="https://github.com/IgniaDragnel?tab=repositories" target="_blank" rel="noopener">GitHub</a>.',
    'proy.ver': 'See all on GitHub →',
    'cont.titulo': 'Let\'s work together?',
    'cont.sub': 'Do you have a project in mind, a job opportunity or just want to say hi? My inbox is always open. 🚀',
    'cont.website': 'Website',
    'cont.linkedin': 'LinkedIn',
    'cont.email': 'Email',
    'cont.ubic': 'Location',
    'foot.msg': 'echo "Thanks for visiting my portfolio"',
    'foot.copy': 'Made with 💙 and code',
    'copied': '✉️ Opening your email… copied to clipboard',
    'verDetalles': 'View details',
    'title': 'Paul Heredia | Software Engineer',
    roles: ['Full Stack Developer', 'Back-End Developer', 'Front-End Developer', 'ESPE Student 🎓'],
    projects: [
      {
        title: 'Login & Registration MongoDB',
        short: 'Authentication with local API and MongoDB',
        desc: 'Complete login and user registration system developed in Dart, which consumes a local API to register and authenticate users storing the information in a MongoDB database.',
        image: 'img/proyectos/login-mongodb/login-mongodb-1.jpg',
        images: ['img/proyectos/login-mongodb/login-mongodb-1.jpg', 'img/proyectos/login-mongodb/login-mongodb-2.jpg', 'img/proyectos/login-mongodb/login-mongodb-3.jpg', 'img/proyectos/login-mongodb/login-mongodb-4.jpg', 'img/proyectos/login-mongodb/login-mongodb-5.jpg'],
        tags: ['Dart', 'MongoDB', 'API REST', 'Authentication'],
        github: 'https://github.com/IgniaDragnel/Login_Registro_MongoDB',
        highlights: ['New user registration', 'Login with credential validation', 'Local REST API consumption', 'Data persistence in MongoDB', 'Clean and functional interface']
      },
      {
        title: 'User Roles (C#)',
        short: 'Users with roles and permissions',
        desc: 'User registration application with a roles and permissions system built in C#. It allows creating accounts, assigning roles and controlling access to features according to each user\'s permission level.',
        image: 'img/proyectos/roles-usuario/roles-usuario-1.jpg',
        images: ['img/proyectos/roles-usuario/roles-usuario-1.jpg', 'img/proyectos/roles-usuario/roles-usuario-2.jpg', 'img/proyectos/roles-usuario/roles-usuario-3.jpg'],
        tags: ['C#', '.NET', 'Roles', 'Permissions'],
        github: 'https://github.com/IgniaDragnel/Roles_Usuario-C-',
        highlights: ['User registration with roles', 'Access control by permission level', 'User account management', 'Desktop application in C#']
      },
      {
        title: 'Workers Registration',
        short: 'Worker meal tracking',
        desc: 'Desktop application developed in C# to register workers\' meals. It optimizes daily consumption control, allowing an organized and searchable record of each worker.',
        image: 'img/proyectos/registro-trabajadores/registro-trabajadores-1.jpg',
        images: ['img/proyectos/registro-trabajadores/registro-trabajadores-1.jpg', 'img/proyectos/registro-trabajadores/registro-trabajadores-2.jpg', 'img/proyectos/registro-trabajadores/registro-trabajadores-3.jpg'],
        tags: ['C#', 'Desktop', 'Records'],
        github: 'https://github.com/IgniaDragnel/Registro_Trabajadores',
        highlights: ['Daily meal registration', 'Worker management', 'Stored record queries', 'Desktop application in C#']
      },
      {
        title: 'Registration Form (PHP)',
        short: 'PHP form with validations',
        desc: 'Registration form in PHP with field validations, both front-end and back-end. It controls data input —email format, password length and required fields— and improves form security.',
        image: 'img/proyectos/formulario-registro/formulario-registro-1.jpg',
        images: ['img/proyectos/formulario-registro/formulario-registro-1.jpg', 'img/proyectos/formulario-registro/formulario-registro-2.jpg', 'img/proyectos/formulario-registro/formulario-registro-3.jpg'],
        tags: ['PHP', 'HTML', 'Validations', 'Forms'],
        github: 'https://github.com/IgniaDragnel/Formulario_Registro',
        highlights: ['Required field validation', 'Format control (email, password)', 'Design with HTML and CSS', 'Validation logic in PHP']
      },
      {
        title: 'Student Registration',
        short: 'Student CRUD with MySQL',
        desc: 'Student registration system developed in Java with a MySQL database connection. It allows storing, querying and managing student information in an organized and reliable way.',
        image: 'img/proyectos/registro-estudiantes/registro-estudiantes-1.jpg',
        images: ['img/proyectos/registro-estudiantes/registro-estudiantes-1.jpg', 'img/proyectos/registro-estudiantes/registro-estudiantes-2.jpg', 'img/proyectos/registro-estudiantes/registro-estudiantes-3.jpg', 'img/proyectos/registro-estudiantes/registro-estudiantes-4.jpg'],
        tags: ['Java', 'MySQL', 'CRUD'],
        github: 'https://github.com/IgniaDragnel/Registro_Estudiantes',
        highlights: ['Student registration and management', 'MySQL database connection', 'Data queries and manipulation (CRUD)', 'Application developed in Java']
      },
      {
        title: 'Login & Registration (PHP)',
        short: 'Login and registration with PHP sessions',
        desc: 'User login and registration system developed in PHP with session management. It allows users to create accounts and log in securely, keeping their authentication state during navigation.',
        image: 'img/proyectos/login-php/login-php-1.jpg',
        images: ['img/proyectos/login-php/login-php-1.jpg', 'img/proyectos/login-php/login-php-2.jpg', 'img/proyectos/login-php/login-php-3.jpg'],
        tags: ['PHP', 'Sessions', 'Authentication'],
        github: 'https://github.com/IgniaDragnel/Login_Registro',
        highlights: ['New user registration', 'Login with PHP sessions', 'Credential storage', 'Simple and functional interface']
      }
    ],
    experience: [
      {
        role: 'Full Stack Developer',
        company: 'EQR – Ecuadorian Quality Roses',
        date: 'Feb 2026 – Jul 2026 · 6 months',
        items: [
          'Developed an HR system: ID card generation, employee transfers between farms, roles and permissions, and integration with an external system for user synchronization.',
          'Occupational Health module with medical appointment management using calendars, clinical histories and tracking of pending occupational exams.',
          'Implemented automatic WhatsApp notifications for HR system processes.',
          'Designed and developed a Business Administration system: Purchasing, Maintenance, User Configuration (roles, permissions and audit history) and Support modules.',
          'Integrated external APIs to synchronize items and suppliers, and automated sending quotes by email in bidding processes.',
          'Support module with ticket management, real-time chat using WebSockets and Firebase Cloud Messaging (FCM) notifications.',
          'Built secure and scalable REST APIs with Laravel 12, and modern responsive web interfaces with React.js and Vite.'
        ],
        tags: ['Laravel', 'React', 'Vite', 'Firebase', 'API REST', 'WhatsApp', 'WebSockets']
      },
      {
        role: 'Full Stack Software Developer',
        company: 'KAIZEN SOFTWARE',
        date: 'Apr 2024 – Jan 2026 · 2 years',
        items: [
          'Developed mobile applications for iOS and Android with Flutter and React Native, creating faster interfaces with more features.',
          'Efficient integration between frontend and backend services using REST API calls documented with Swagger.',
          'Deployed applications to Google Play Store, ensuring stable releases and production-ready deployment features.',
          'Optimized application performance and resolved technical errors, significantly improving user experience and overall system stability.'
        ],
        tags: ['Flutter', 'React Native', 'API REST', 'Swagger', 'Google Play Store']
      },
      {
        role: 'Systems Assistant',
        company: 'Royal Flowers',
        date: 'Mar 2023 – May 2023 · 3 months',
        items: [
          'Collaborated on web application development to automate internal company processes.',
          'Designed and implemented a worker clock-in management system using barcode scanning, integrated with a SQL database for attendance recording and queries.',
          'Participated in feature development, database integration and process optimization, as well as providing technical support and maintenance to the organization\'s IT infrastructure.'
        ],
        tags: ['Web', 'SQL', 'Barcodes', 'Support']
      }
    ]
  }
};

/* Estado actual de idioma y tema */
let currentLang = document.documentElement.lang || 'es';
let currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';

/* ---------- Navbar: sombra al hacer scroll ---------- */
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

function onScroll() {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
    backToTop.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    backToTop.classList.remove('visible');
  }
  highlightNav();
}

window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- Menú móvil ---------- */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

function closeMenu() {
  navLinks.classList.remove('open');
  menuToggle.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
  if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    closeMenu();
  }
});

/* ---------- Enlace activo según la sección visible ---------- */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function highlightNav() {
  const scrollPos = window.scrollY + 120;
  let currentId = 'inicio';

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navItems.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
}

/* ---------- Botón volver arriba ---------- */
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   PROYECTOS Y EXPERIENCIA — iconos, render y modal
   ============================================================ */
/* ---------- Iconos de tecnologías para los tags de proyectos ---------- */
const techIcons = {
  Dart: { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
  MongoDB: { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  'C#': { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
  '.NET': { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
  PHP: { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  HTML: { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  Java: { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  MySQL: { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  Laravel: { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  React: { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  'React Native': { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  Vite: { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg' },
  Firebase: { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  Flutter: { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  'API REST': { emoji: '🔗' },
  Authentication: { emoji: '🔐' },
  Autenticación: { emoji: '🔐' },
  Roles: { emoji: '👥' },
  Permissions: { emoji: '🔒' },
  Permisos: { emoji: '🔒' },
  Desktop: { emoji: '🖥️' },
  Escritorio: { emoji: '🖥️' },
  Records: { emoji: '📋' },
  Registro: { emoji: '📋' },
  Validations: { emoji: '✅' },
  Validaciones: { emoji: '✅' },
  Forms: { emoji: '📝' },
  Formularios: { emoji: '📝' },
  CRUD: { emoji: '📝' },
  Sessions: { emoji: '🔑' },
  Sesiones: { emoji: '🔑' },
  Swagger: { emoji: '📚' },
  'Google Play Store': { emoji: '📱' },
  WebSockets: { emoji: '🔌' },
  WhatsApp: { emoji: '💬' },
  Web: { emoji: '🖥️' },
  SQL: { emoji: '🗄️' },
  Barcodes: { emoji: '🔖' },
  'Códigos de barras': { emoji: '🔖' },
  Support: { emoji: '🛠️' },
  'Soporte técnico': { emoji: '🛠️' }
};

function renderTags(tags) {
  return tags
    .map((tag) => {
      const icon = techIcons[tag];
      if (!icon) return `<span class="project-tag-icon">${tag}</span>`;
      const inner = icon.img
        ? `<img src="${icon.img}" alt="${tag}" loading="lazy">`
        : `<span class="tag-emoji">${icon.emoji}</span>`;
      return `<span class="project-tag-icon" title="${tag}">${inner}</span>`;
    })
    .join('');
}

const projectsGrid = document.getElementById('projectsGrid');
const timelineContainer = document.getElementById('timelineContainer');

/* ---------- Render de proyectos (según idioma) ---------- */
function renderProjects() {
  const projects = i18n[currentLang].projects;
  projectsGrid.innerHTML = '';
  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${i18n[currentLang]['verDetalles']}: ${project.title}`);
    card.innerHTML = `
      <div class="project-img-wrap">
        <img src="${project.images && project.images.length ? project.images[0] : project.image}" alt="${project.title}" loading="lazy">
        <div class="project-overlay"><span>${i18n[currentLang]['verDetalles']}</span></div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.short}</p>
        <div class="project-tags">${renderTags(project.tags)}</div>
      </div>`;
    card.addEventListener('click', () => openModal(project));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(project);
      }
    });
    projectsGrid.appendChild(card);
  });
}

/* ---------- Render de experiencia (según idioma) ---------- */
function renderTimeline() {
  const experience = i18n[currentLang].experience;
  timelineContainer.innerHTML = experience
    .map(
      (item) => `
      <div class="timeline-item reveal">
        <div class="timeline-dot" aria-hidden="true"></div>
        <div class="timeline-card">
          <div class="timeline-head">
            <div>
              <h3>${item.role}</h3>
              <p class="timeline-company">${item.company}</p>
            </div>
            <span class="timeline-date">${item.date}</span>
          </div>
          <ul class="timeline-list">
            ${item.items.map((t) => `<li><span class="check">✓</span>${t}</li>`).join('')}
          </ul>
          <div class="project-tags">${renderTags(item.tags)}</div>
        </div>
      </div>`
    )
    .join('');
}

/* ---------- Render de habilidades (pestañas + tarjetas) ---------- */
const skillTabs = document.getElementById('skillTabs');
const skillsGrid = document.getElementById('skillsGrid');
let activeSkillCat = 'todo';

function renderSkills() {
  const tabs = i18n[currentLang]['hab.tabs'];
  const cats = ['todo', 'lenguajes', 'frontend', 'backend', 'movil', 'bases', 'herramientas'];

  skillTabs.innerHTML = tabs
    .map(
      (label, i) => `
      <button class="skill-tab ${cats[i] === activeSkillCat ? 'active' : ''}" data-cat="${cats[i]}" role="tab" aria-selected="${cats[i] === activeSkillCat}">
        ${label}
      </button>`
    )
    .join('');

  skillTabs.querySelectorAll('.skill-tab').forEach((tab) => {
    tab.addEventListener('click', () => filterSkills(tab.dataset.cat));
  });

  filterSkills(activeSkillCat);
}

function filterSkills(cat) {
  activeSkillCat = cat;
  skillTabs.querySelectorAll('.skill-tab').forEach((tab) => {
    const active = tab.dataset.cat === cat;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });

  const all = i18n[currentLang].skills;
  const list = cat === 'todo' ? all : all.filter((s) => s.cat === cat);

  skillsGrid.innerHTML = list
    .map(
      (skill) => `
      <div class="skill-card reveal">
        <div class="skill-logo${skill.invert ? ' invert' : ''}">
          ${skill.img ? `<img src="${skill.img}" alt="${skill.name}" loading="lazy">` : `<span class="tag-emoji">${skill.emoji}</span>`}
        </div>
        <h3 class="skill-name">${skill.name}</h3>
      </div>`
    )
    .join('');

  setupReveal();
}

/* ---------- Modal de proyecto ---------- */
const modalOverlay = document.getElementById('projectModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalTags = document.getElementById('modalTags');
const modalDesc = document.getElementById('modalDesc');
const modalHighlights = document.getElementById('modalHighlights');
const modalGithub = document.getElementById('modalGithub');
const modalClose = document.getElementById('modalClose');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');
const modalCounter = document.getElementById('modalCounter');

let modalImages = [];
let modalIndex = 0;

function updateModalImage() {
  modalImg.src = modalImages[modalIndex];
  modalImg.alt = `${modalTitle.textContent} — imagen ${modalIndex + 1}`;
  modalCounter.textContent = `${modalIndex + 1} / ${modalImages.length}`;
  const multi = modalImages.length > 1;
  modalPrev.style.display = multi ? '' : 'none';
  modalNext.style.display = multi ? '' : 'none';
  modalCounter.style.display = multi ? '' : 'none';
}

function openModal(project) {
  modalImages = project.images && project.images.length ? project.images : [project.image];
  modalIndex = 0;
  updateModalImage();
  modalTitle.textContent = project.title;
  modalTags.innerHTML = renderTags(project.tags);
  modalDesc.textContent = project.desc;
  modalHighlights.innerHTML = project.highlights
    .map((item) => `<li><span class="check">✓</span>${item}</li>`)
    .join('');
  modalGithub.href = project.github;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

modalPrev.addEventListener('click', (event) => {
  event.stopPropagation();
  modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length;
  updateModalImage();
});

modalNext.addEventListener('click', (event) => {
  event.stopPropagation();
  modalIndex = (modalIndex + 1) % modalImages.length;
  updateModalImage();
});

/* ---------- Animaciones reveal al hacer scroll ---------- */
let revealObserver = null;

function setupReveal() {
  if (revealObserver) revealObserver.disconnect();

  const els = document.querySelectorAll('.reveal');
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach((el, index) => {
    // Pequeño retraso escalonado para tarjetas en cuadrícula
    const parent = el.closest('.projects-grid, .skills-grid, .about-grid, .contact-grid, .timeline');
    if (parent) {
      const children = [...parent.children];
      const i = children.indexOf(el);
      el.style.transitionDelay = `${Math.min(i * 70, 420)}ms`;
    }
    revealObserver.observe(el);
  });
}

/* ---------- Efecto máquina de escribir (roles) ---------- */
const typedElement = document.getElementById('typed');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
let typingTimer = null;

function typeEffect() {
  const roles = i18n[currentLang].roles;
  const current = roles[roleIndex];

  if (!deleting) {
    typedElement.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      typingTimer = setTimeout(typeEffect, 2000);
      return;
    }
    typingTimer = setTimeout(typeEffect, 75);
  } else {
    typedElement.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingTimer = setTimeout(typeEffect, 350);
      return;
    }
    typingTimer = setTimeout(typeEffect, 40);
  }
}

function restartTyped() {
  clearTimeout(typingTimer);
  roleIndex = 0;
  charIndex = 0;
  deleting = false;
  typingTimer = setTimeout(typeEffect, 400);
}

/* ---------- Año dinámico en el footer ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Botón de correo: copiar + aviso ---------- */
const toast = document.getElementById('toast');
let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// Enlaces de correo: abren Gmail (o el cliente configurado) y copian el correo como respaldo
const emailLinks = document.querySelectorAll('.email-link');

emailLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const email = 'paulheredia02@gmail.com';

  // Copiar el correo al portapapeles (fallback para navegadores sin clipboard API)
  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(email);
    }
    const temp = document.createElement('textarea');
    temp.value = email;
    temp.style.position = 'fixed';
    temp.style.opacity = '0';
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    return Promise.resolve();
  };

  copyToClipboard()
    .then(() => showToast(i18n[currentLang]['copied']))
    .catch(() => showToast(`✉️ ${email}`));

  // El enlace mailto sigue funcionando como respaldo en navegadores normales
  // (en el navegador embebido de VS Code no hay cliente de correo, por eso se copia)
  });
});

/* ============================================================
   TEMA CLARO / OSCURO
   ============================================================ */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  try {
    localStorage.setItem('ph-theme', theme);
  } catch (e) {}
}

themeToggle.addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

/* ============================================================
   IDIOMA ES / EN
   ============================================================ */
const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
  document.title = i18n[lang]['title'];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = i18n[lang][key];
    if (value === undefined) return;
    if (el.dataset.i18nHtml === 'true') {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  renderProjects();
  renderTimeline();
  renderSkills();
  setupReveal();
  restartTyped();

  try {
    localStorage.setItem('ph-lang', lang);
  } catch (e) {}
}

langToggle.addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

/* ---------- Inicialización ---------- */
applyTheme(currentTheme);
applyLang(currentLang);

/* ---------- Teclado: Escape cierra menú y modal; flechas navegan galería ---------- */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
    closeModal();
  }
  if (modalOverlay.classList.contains('open')) {
    if (e.key === 'ArrowLeft') modalPrev.click();
    if (e.key === 'ArrowRight') modalNext.click();
  }
});
