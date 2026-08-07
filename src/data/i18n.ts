// ============================================================
// Datos del portafolio — i18n ES/EN (TypeScript)
// ============================================================

export type Lang = 'es' | 'en';

export interface TagIcon {
  img?: string;
  emoji?: string;
  text?: string;
  label: string;
}

export interface Skill {
  name: string;
  cat: 'lenguajes' | 'frontend' | 'backend' | 'movil' | 'bases' | 'herramientas';
  img?: string;
  emoji?: string;
  invert?: boolean;
}

export interface Project {
  title: string;
  short: string;
  desc: string;
  images: string[];
  tags: string[];
  github: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  items: string[];
  tags: string[];
}

export interface HeroData {
  greeting: string;
  role: string;
  desc: string;
  btn1: string;
  btn2: string;
  btnCv: string;
  roles: string[];
}

export interface TermData {
  whoami: string;
  status: string;
}

export interface SobreData {
  titulo: string;
  q1: string;
  p1: string;
  p2: string;
  p3: string;
  q2: string;
  items: string[];
}

export interface ExpData {
  titulo: string;
  items: ExperienceItem[];
}

export interface HabData {
  titulo: string;
  sub: string;
  tabs: string[];
}

export interface ProyData {
  titulo: string;
  sub: string;
  ver: string;
  verDetalles: string;
}

export interface ContData {
  titulo: string;
  sub: string;
  whatsapp: string;
  website: string;
  linkedin: string;
  email: string;
  ubic: string;
  copied: string;
}

export interface FootData {
  msg: string;
  copy: string;
}

export interface Translation {
  nav: string[];
  hero: HeroData;
  term: TermData;
  sec: string[];
  sobre: SobreData;
  exp: ExpData;
  hab: HabData;
  skills: Skill[];
  proy: ProyData;
  projects: Project[];
  cont: ContData;
  foot: FootData;
  title: string;
}

export const techIcons: Record<string, string> = {
  Dart: 'img/icons/dart-original.svg',
  MongoDB: 'img/icons/mongodb-original.svg',
  'C#': 'img/icons/csharp-original.svg',
  '.NET': 'img/icons/dotnetcore-original.svg',
  PHP: 'img/icons/php-original.svg',
  HTML: 'img/icons/html5-original.svg',
  Java: 'img/icons/java-original.svg',
  MySQL: 'img/icons/mysql-original.svg',
  Laravel: 'img/icons/laravel-original.svg',
  React: 'img/icons/react-original.svg',
  'React Native': 'img/icons/react-original.svg',
  Vite: 'img/icons/vite-original.svg',
  Firebase: 'img/icons/firebase-original.svg',
  Flutter: 'img/icons/flutter-original.svg'
};

export const techEmojis: Record<string, string> = {
  'API REST': '🔗',
  Authentication: '🔐',
  Autenticación: '🔐',
  Roles: '👥',
  Permissions: '🔒',
  Permisos: '🔒',
  Desktop: '🖥️',
  Escritorio: '🖥️',
  Records: '📋',
  Registro: '📋',
  Validations: '✅',
  Validaciones: '✅',
  Forms: '📝',
  Formularios: '📝',
  CRUD: '📝',
  Sessions: '🔑',
  Sesiones: '🔑',
  Swagger: '📚',
  'Google Play Store': '📱',
  WebSockets: '🔌',
  WhatsApp: '💬',
  Web: '🖥️',
  SQL: '🗄️',
  Barcodes: '🔖',
  'Códigos de barras': '🔖',
  Support: '🛠️',
  'Soporte técnico': '🛠️',
  NetBeans: '🛠️',
  XAMPP: '🚀'
};

// Icono SVG para tecnologías con logo devicon (o emoji si no hay)
export function tagIcon(name: string): TagIcon {
  const img = techIcons[name];
  if (img) return { img, label: name };
  const emoji = techEmojis[name];
  if (emoji) return { emoji, label: name };
  return { text: name, label: name };
}

export const i18n: Record<Lang, Translation> = {
  es: {
    nav: ['Inicio', 'Sobre mí', 'Experiencia', 'Habilidades', 'Proyectos', 'Contacto'],
    hero: {
      greeting: '<Hola mundo! 👋 Soy>',
      role: 'Ingeniero en Software',
      desc: 'Desarrollador Full Stack especializado en Front-End y Back-End. Creo aplicaciones web, móviles y de escritorio funcionales, seguras y con interfaces limpias. Estudiante en la ESPE 🚀',
      btn1: 'Ver mis proyectos',
      btn2: 'Contáctame',
      btnCv: 'Descargar CV',
      roles: ['Desarrollador Full Stack', 'Back-End Developer', 'Front-End Developer', 'Estudiante ESPE 🎓']
    },
    term: {
      whoami: 'Paul Heredia — Ingeniero en Software',
      status: '✓ disponible para nuevos proyectos'
    },
    sec: ['<01 / sobre-mi>', '<02 / experiencia>', '<03 / habilidades>', '<04 / proyectos>', '<05 / contacto>'],
    sobre: {
      titulo: 'Sobre mí',
      q1: '👨‍💻 ¿Quién soy?',
      p1: 'Soy <strong>Paul Heredia</strong>, estudiante de Ingeniería en Software en la <strong>ESPE</strong> y desarrollador Full Stack con <strong>más de 3 años de experiencia</strong> construyendo aplicaciones de <strong>Front-End</strong> y <strong>Back-End</strong> para empresas como Royal Flowers, Kaizen Software y EQR.',
      p2: 'Me apasiona transformar ideas en soluciones reales: desde sistemas de autenticación y registro de usuarios, hasta aplicaciones de escritorio para optimizar procesos cotidianos. Disfruto trabajar con bases de datos, APIs y construir interfaces limpias y funcionales.',
      p3: 'Siempre estoy aprendiendo nuevas tecnologías y buscando retos que me permitan crecer como profesional.',
      q2: '🎯 ¿Qué hago?',
      items: [
        'Desarrollo de aplicaciones web Full Stack (Front-End y Back-End)',
        'Diseño e implementación de APIs REST seguras y escalables, así como integración con servicios y APIs de terceros',
        'Desarrollo de sistemas empresariales para Recursos Humanos, Administración, Compras, Mantenimiento y Soporte',
        'Implementación de autenticación, gestión de usuarios, roles y permisos',
        'Diseño y administración de bases de datos relacionales y NoSQL',
        'Desarrollo de aplicaciones con comunicación en tiempo real mediante WebSockets y notificaciones push',
        'Automatización e integración de procesos mediante servicios como Firebase Cloud Messaging, WhatsApp Business API y correo electrónico',
        'Desarrollo de interfaces web modernas, responsivas y optimizadas para una mejor experiencia de usuario',
        'Desarrollo de aplicaciones móviles multiplataforma',
        'Control de versiones, trabajo colaborativo y despliegue de aplicaciones'
      ]
    },
    exp: {
      titulo: 'Experiencia laboral',
      items: [
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
    hab: {
      titulo: 'Habilidades técnicas',
      sub: 'Las herramientas y lenguajes que uso para dar vida a las ideas.',
      tabs: ['Todo', 'Lenguajes', 'Front-End', 'Back-End', 'Móvil', 'Bases de datos', 'Herramientas']
    },
    skills: [
      { name: 'PHP', cat: 'backend', img: 'img/icons/php-original.svg' },
      { name: 'Java', cat: 'lenguajes', img: 'img/icons/java-original.svg' },
      { name: 'C#', cat: 'lenguajes', img: 'img/icons/csharp-original.svg' },
      { name: 'JavaScript', cat: 'frontend', img: 'img/icons/javascript-original.svg' },
      { name: 'TypeScript', cat: 'frontend', img: 'img/icons/typescript-original.svg' },
      { name: 'Dart', cat: 'movil', img: 'img/icons/dart-original.svg' },
      { name: 'SQL', cat: 'bases', emoji: '🗄️' },
      { name: 'HTML', cat: 'frontend', img: 'img/icons/html5-original.svg' },
      { name: 'CSS', cat: 'frontend', img: 'img/icons/css3-original.svg' },
      { name: 'Laravel', cat: 'backend', img: 'img/icons/laravel-original.svg' },
      { name: 'Node.js', cat: 'backend', img: 'img/icons/nodejs-original.svg' },
      { name: 'API REST', cat: 'backend', emoji: '🔗' },
      { name: 'Autenticación', cat: 'backend', emoji: '🔐' },
      { name: 'CRUD', cat: 'backend', emoji: '📝' },
      { name: 'React', cat: 'frontend', img: 'img/icons/react-original.svg' },
      { name: 'Vite', cat: 'frontend', img: 'img/icons/vite-original.svg' },
      { name: 'Flutter', cat: 'movil', img: 'img/icons/flutter-original.svg' },
      { name: 'React Native', cat: 'movil', img: 'img/icons/react-original.svg' },
      { name: 'MySQL', cat: 'bases', img: 'img/icons/mysql-original.svg' },
      { name: 'MongoDB', cat: 'bases', img: 'img/icons/mongodb-original.svg' },
      { name: 'phpMyAdmin', cat: 'bases', img: 'img/icons/php-original.svg' },
      { name: 'Git', cat: 'herramientas', img: 'img/icons/git-original.svg' },
      { name: 'GitHub', cat: 'herramientas', img: 'img/icons/github-original.svg', invert: true },
      { name: 'VS Code', cat: 'herramientas', img: 'img/icons/vscode-original.svg' },
      { name: 'Visual Studio', cat: 'herramientas', img: 'img/icons/visualstudio-plain.svg' },
      { name: 'NetBeans', cat: 'herramientas', emoji: '🛠️' },
      { name: 'XAMPP', cat: 'herramientas', emoji: '🚀' }
    ],
    proy: {
      titulo: 'Proyectos destacados',
      sub: 'Sistemas reales que he construido, disponibles en mi',
      ver: 'Ver todos en GitHub →',
      verDetalles: 'Ver detalles'
    },
    projects: [
      {
        title: 'Login & Registro MongoDB',
        short: 'Autenticación con API local y MongoDB',
        desc: 'Sistema completo de login y registro de usuarios desarrollado en Dart, que consume una API local para registrar y autenticar usuarios almacenando la información en una base de datos MongoDB.',
        images: ['img/proyectos/login-mongodb/login-mongodb-1.jpg', 'img/proyectos/login-mongodb/login-mongodb-2.jpg', 'img/proyectos/login-mongodb/login-mongodb-3.jpg', 'img/proyectos/login-mongodb/login-mongodb-4.jpg', 'img/proyectos/login-mongodb/login-mongodb-5.jpg'],
        tags: ['Dart', 'MongoDB', 'API REST', 'Autenticación'],
        github: 'https://github.com/IgniaDragnel/Login_Registro_MongoDB',
        highlights: ['Registro de nuevos usuarios', 'Inicio de sesión con validación de credenciales', 'Consumo de API REST local', 'Persistencia de datos en MongoDB', 'Interfaz limpia y funcional']
      },
      {
        title: 'Roles de Usuario (C#)',
        short: 'Usuarios con roles y permisos',
        desc: 'Aplicación de registro de usuarios con sistema de roles y permisos construida en C#. Permite crear cuentas, asignar roles y controlar el acceso a las funcionalidades según el nivel de permisos de cada usuario.',
        images: ['img/proyectos/roles-usuario/roles-usuario-1.jpg', 'img/proyectos/roles-usuario/roles-usuario-2.jpg', 'img/proyectos/roles-usuario/roles-usuario-3.jpg'],
        tags: ['C#', '.NET', 'Roles', 'Permisos'],
        github: 'https://github.com/IgniaDragnel/Roles_Usuario-C-',
        highlights: ['Registro de usuarios con roles', 'Control de acceso por nivel de permisos', 'Gestión de cuentas de usuario', 'Aplicación de escritorio en C#']
      },
      {
        title: 'Registro de Trabajadores',
        short: 'Control de almuerzos de trabajadores',
        desc: 'Aplicación de escritorio desarrollada en C# para registrar los almuerzos de los trabajadores. Optimiza el control diario de consumo, permitiendo llevar un registro ordenado y consultable de cada trabajador.',
        images: ['img/proyectos/registro-trabajadores/registro-trabajadores-1.jpg', 'img/proyectos/registro-trabajadores/registro-trabajadores-2.jpg', 'img/proyectos/registro-trabajadores/registro-trabajadores-3.jpg'],
        tags: ['C#', 'Escritorio', 'Registro'],
        github: 'https://github.com/IgniaDragnel/Registro_Trabajadores',
        highlights: ['Registro diario de almuerzos', 'Gestión de trabajadores', 'Consulta de registros almacenados', 'Aplicación de escritorio en C#']
      },
      {
        title: 'Formulario de Registro (PHP)',
        short: 'Formulario PHP con validaciones',
        desc: 'Formulario de registro en PHP con validaciones de campos, tanto en el front-end como en el back-end. Controla la entrada de datos —formato de correo, longitud de contraseñas y campos requeridos— y mejora la seguridad del formulario.',
        images: ['img/proyectos/formulario-registro/formulario-registro-1.jpg', 'img/proyectos/formulario-registro/formulario-registro-2.jpg', 'img/proyectos/formulario-registro/formulario-registro-3.jpg'],
        tags: ['PHP', 'HTML', 'Validaciones', 'Formularios'],
        github: 'https://github.com/IgniaDragnel/Formulario_Registro',
        highlights: ['Validación de campos requeridos', 'Control de formato (correo, contraseña)', 'Diseño con HTML y CSS', 'Lógica de validación en PHP']
      },
      {
        title: 'Registro de Estudiantes',
        short: 'CRUD de estudiantes con MySQL',
        desc: 'Sistema de registro de estudiantes desarrollado en Java con conexión a una base de datos MySQL. Permite almacenar, consultar y gestionar la información de los estudiantes de forma ordenada y confiable.',
        images: ['img/proyectos/registro-estudiantes/registro-estudiantes-1.jpg', 'img/proyectos/registro-estudiantes/registro-estudiantes-2.jpg', 'img/proyectos/registro-estudiantes/registro-estudiantes-3.jpg', 'img/proyectos/registro-estudiantes/registro-estudiantes-4.jpg'],
        tags: ['Java', 'MySQL', 'CRUD'],
        github: 'https://github.com/IgniaDragnel/Registro_Estudiantes',
        highlights: ['Registro y gestión de estudiantes', 'Conexión a base de datos MySQL', 'Consultas y manipulación de datos (CRUD)', 'Aplicación desarrollada en Java']
      },
      {
        title: 'Login & Registro (PHP)',
        short: 'Login y registro con sesiones PHP',
        desc: 'Sistema de login y registro de usuarios desarrollado en PHP con gestión de sesiones. Permite a los usuarios crear sus cuentas e iniciar sesión de forma segura, manteniendo su estado de autenticación durante la navegación.',
        images: ['img/proyectos/login-php/login-php-1.jpg', 'img/proyectos/login-php/login-php-2.jpg', 'img/proyectos/login-php/login-php-3.jpg'],
        tags: ['PHP', 'Sesiones', 'Autenticación'],
        github: 'https://github.com/IgniaDragnel/Login_Registro',
        highlights: ['Registro de nuevos usuarios', 'Inicio de sesión con sesiones PHP', 'Almacenamiento de credenciales', 'Interfaz sencilla y funcional']
      }
    ],
    cont: {
      titulo: '¿Trabajamos juntos?',
      sub: '¿Tienes un proyecto en mente, una oportunidad laboral o quieres saludar? Mi bandeja de entrada está siempre abierta. 🚀',
      whatsapp: 'WhatsApp',
      website: 'Sitio web',
      linkedin: 'LinkedIn',
      email: 'Correo',
      ubic: 'Ubicación',
      copied: '✉️ Abriendo tu correo… copiado al portapapeles'
    },
    foot: {
      msg: 'echo "Gracias por visitar mi portafolio"',
      copy: 'Hecho con 💙 y código'
    },
    title: 'Paul Heredia | Ingeniero en Software'
  },

  en: {
    nav: ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'],
    hero: {
      greeting: "<Hello world! 👋 I'm>",
      role: 'Software Engineer',
      desc: 'Full Stack developer specialized in Front-End and Back-End. I build functional, secure web, mobile and desktop applications with clean interfaces. Student at ESPE 🚀',
      btn1: 'See my projects',
      btn2: 'Contact me',
      btnCv: 'Download CV',
      roles: ['Full Stack Developer', 'Back-End Developer', 'Front-End Developer', 'ESPE Student 🎓']
    },
    term: {
      whoami: 'Paul Heredia — Software Engineer',
      status: '✓ available for new projects'
    },
    sec: ['<01 / about-me>', '<02 / experience>', '<03 / skills>', '<04 / projects>', '<05 / contact>'],
    sobre: {
      titulo: 'About me',
      q1: '👨‍💻 Who I am',
      p1: 'I am <strong>Paul Heredia</strong>, a Software Engineering student at <strong>ESPE</strong> and a Full Stack developer with <strong>more than 3 years of experience</strong> building <strong>Front-End</strong> and <strong>Back-End</strong> applications for companies like Royal Flowers, Kaizen Software and EQR.',
      p2: 'I am passionate about turning ideas into real solutions: from authentication and user registration systems to desktop applications that optimize everyday processes. I enjoy working with databases, APIs and building clean, functional interfaces.',
      p3: 'I am always learning new technologies and looking for challenges that let me grow as a professional.',
      q2: '🎯 What I do',
      items: [
        'Full Stack web application development (Front-End and Back-End)',
        'Design and implementation of secure, scalable REST APIs, as well as integration with third-party services and APIs',
        'Development of enterprise systems for Human Resources, Administration, Purchasing, Maintenance and Support',
        'Implementation of authentication, user management, roles and permissions',
        'Design and administration of relational and NoSQL databases',
        'Development of applications with real-time communication using WebSockets and push notifications',
        'Process automation and integration using services like Firebase Cloud Messaging, WhatsApp Business API and email',
        'Development of modern, responsive, optimized web interfaces for a better user experience',
        'Cross-platform mobile application development',
        'Version control, collaborative work and application deployment'
      ]
    },
    exp: {
      titulo: 'Work experience',
      items: [
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
    },
    hab: {
      titulo: 'Technical skills',
      sub: 'The tools and languages I use to bring ideas to life.',
      tabs: ['All', 'Languages', 'Front-End', 'Back-End', 'Mobile', 'Databases', 'Tools']
    },
    skills: [
      { name: 'PHP', cat: 'backend', img: 'img/icons/php-original.svg' },
      { name: 'Java', cat: 'lenguajes', img: 'img/icons/java-original.svg' },
      { name: 'C#', cat: 'lenguajes', img: 'img/icons/csharp-original.svg' },
      { name: 'JavaScript', cat: 'frontend', img: 'img/icons/javascript-original.svg' },
      { name: 'TypeScript', cat: 'frontend', img: 'img/icons/typescript-original.svg' },
      { name: 'Dart', cat: 'movil', img: 'img/icons/dart-original.svg' },
      { name: 'SQL', cat: 'bases', emoji: '🗄️' },
      { name: 'HTML', cat: 'frontend', img: 'img/icons/html5-original.svg' },
      { name: 'CSS', cat: 'frontend', img: 'img/icons/css3-original.svg' },
      { name: 'Laravel', cat: 'backend', img: 'img/icons/laravel-original.svg' },
      { name: 'Node.js', cat: 'backend', img: 'img/icons/nodejs-original.svg' },
      { name: 'API REST', cat: 'backend', emoji: '🔗' },
      { name: 'Authentication', cat: 'backend', emoji: '🔐' },
      { name: 'CRUD', cat: 'backend', emoji: '📝' },
      { name: 'React', cat: 'frontend', img: 'img/icons/react-original.svg' },
      { name: 'Vite', cat: 'frontend', img: 'img/icons/vite-original.svg' },
      { name: 'Flutter', cat: 'movil', img: 'img/icons/flutter-original.svg' },
      { name: 'React Native', cat: 'movil', img: 'img/icons/react-original.svg' },
      { name: 'MySQL', cat: 'bases', img: 'img/icons/mysql-original.svg' },
      { name: 'MongoDB', cat: 'bases', img: 'img/icons/mongodb-original.svg' },
      { name: 'phpMyAdmin', cat: 'bases', img: 'img/icons/php-original.svg' },
      { name: 'Git', cat: 'herramientas', img: 'img/icons/git-original.svg' },
      { name: 'GitHub', cat: 'herramientas', img: 'img/icons/github-original.svg', invert: true },
      { name: 'VS Code', cat: 'herramientas', img: 'img/icons/vscode-original.svg' },
      { name: 'Visual Studio', cat: 'herramientas', img: 'img/icons/visualstudio-plain.svg' },
      { name: 'NetBeans', cat: 'herramientas', emoji: '🛠️' },
      { name: 'XAMPP', cat: 'herramientas', emoji: '🚀' }
    ],
    proy: {
      titulo: 'Featured projects',
      sub: 'Real systems I have built, available on my',
      ver: 'See all on GitHub →',
      verDetalles: 'View details'
    },
    projects: [
      {
        title: 'Login & Registration MongoDB',
        short: 'Authentication with local API and MongoDB',
        desc: 'Complete login and user registration system developed in Dart, which consumes a local API to register and authenticate users storing the information in a MongoDB database.',
        images: ['img/proyectos/login-mongodb/login-mongodb-1.jpg', 'img/proyectos/login-mongodb/login-mongodb-2.jpg', 'img/proyectos/login-mongodb/login-mongodb-3.jpg', 'img/proyectos/login-mongodb/login-mongodb-4.jpg', 'img/proyectos/login-mongodb/login-mongodb-5.jpg'],
        tags: ['Dart', 'MongoDB', 'API REST', 'Authentication'],
        github: 'https://github.com/IgniaDragnel/Login_Registro_MongoDB',
        highlights: ['New user registration', 'Login with credential validation', 'Local REST API consumption', 'Data persistence in MongoDB', 'Clean and functional interface']
      },
      {
        title: 'User Roles (C#)',
        short: 'Users with roles and permissions',
        desc: 'User registration application with a roles and permissions system built in C#. It allows creating accounts, assigning roles and controlling access to features according to each user\'s permission level.',
        images: ['img/proyectos/roles-usuario/roles-usuario-1.jpg', 'img/proyectos/roles-usuario/roles-usuario-2.jpg', 'img/proyectos/roles-usuario/roles-usuario-3.jpg'],
        tags: ['C#', '.NET', 'Roles', 'Permissions'],
        github: 'https://github.com/IgniaDragnel/Roles_Usuario-C-',
        highlights: ['User registration with roles', 'Access control by permission level', 'User account management', 'Desktop application in C#']
      },
      {
        title: 'Workers Registration',
        short: 'Worker meal tracking',
        desc: 'Desktop application developed in C# to register workers\' meals. It optimizes daily consumption control, allowing an organized and searchable record of each worker.',
        images: ['img/proyectos/registro-trabajadores/registro-trabajadores-1.jpg', 'img/proyectos/registro-trabajadores/registro-trabajadores-2.jpg', 'img/proyectos/registro-trabajadores/registro-trabajadores-3.jpg'],
        tags: ['C#', 'Desktop', 'Records'],
        github: 'https://github.com/IgniaDragnel/Registro_Trabajadores',
        highlights: ['Daily meal registration', 'Worker management', 'Stored record queries', 'Desktop application in C#']
      },
      {
        title: 'Registration Form (PHP)',
        short: 'PHP form with validations',
        desc: 'Registration form in PHP with field validations, both front-end and back-end. It controls data input —email format, password length and required fields— and improves form security.',
        images: ['img/proyectos/formulario-registro/formulario-registro-1.jpg', 'img/proyectos/formulario-registro/formulario-registro-2.jpg', 'img/proyectos/formulario-registro/formulario-registro-3.jpg'],
        tags: ['PHP', 'HTML', 'Validations', 'Forms'],
        github: 'https://github.com/IgniaDragnel/Formulario_Registro',
        highlights: ['Required field validation', 'Format control (email, password)', 'Design with HTML and CSS', 'Validation logic in PHP']
      },
      {
        title: 'Student Registration',
        short: 'Student CRUD with MySQL',
        desc: 'Student registration system developed in Java with a MySQL database connection. It allows storing, querying and managing student information in an organized and reliable way.',
        images: ['img/proyectos/registro-estudiantes/registro-estudiantes-1.jpg', 'img/proyectos/registro-estudiantes/registro-estudiantes-2.jpg', 'img/proyectos/registro-estudiantes/registro-estudiantes-3.jpg', 'img/proyectos/registro-estudiantes/registro-estudiantes-4.jpg'],
        tags: ['Java', 'MySQL', 'CRUD'],
        github: 'https://github.com/IgniaDragnel/Registro_Estudiantes',
        highlights: ['Student registration and management', 'MySQL database connection', 'Data queries and manipulation (CRUD)', 'Application developed in Java']
      },
      {
        title: 'Login & Registration (PHP)',
        short: 'Login and registration with PHP sessions',
        desc: 'User login and registration system developed in PHP with session management. It allows users to create accounts and log in securely, keeping their authentication state during navigation.',
        images: ['img/proyectos/login-php/login-php-1.jpg', 'img/proyectos/login-php/login-php-2.jpg', 'img/proyectos/login-php/login-php-3.jpg'],
        tags: ['PHP', 'Sessions', 'Authentication'],
        github: 'https://github.com/IgniaDragnel/Login_Registro',
        highlights: ['New user registration', 'Login with PHP sessions', 'Credential storage', 'Simple and functional interface']
      }
    ],
    cont: {
      titulo: "Let's work together?",
      sub: 'Do you have a project in mind, a job opportunity or just want to say hi? My inbox is always open. 🚀',
      whatsapp: 'WhatsApp',
      website: 'Website',
      linkedin: 'LinkedIn',
      email: 'Email',
      ubic: 'Location',
      copied: '✉️ Opening your email… copied to clipboard'
    },
    foot: {
      msg: 'echo "Thanks for visiting my portfolio"',
      copy: 'Made with 💙 and code'
    },
    title: 'Paul Heredia | Software Engineer'
  }
};

// Datos constantes (no traducibles)
export const CONTACT = {
  whatsapp: 'https://wa.me/593984811855',
  whatsappLabel: '0984811855',
  github: 'https://github.com/IgniaDragnel',
  githubRepos: 'https://github.com/IgniaDragnel?tab=repositories',
  linkedin: 'https://www.linkedin.com/in/paul-heredia-9244191b1/',
  linkedinLabel: 'in/paul-heredia-9244191b1',
  email: 'paulheredia02@gmail.com',
  emailCompose: 'https://mail.google.com/mail/?view=cm&fs=1&to=paulheredia02@gmail.com',
  location: 'Quito, Ecuador',
  photo: 'img/Paul_Heredia.jpeg',
  photoFallback: 'img/perfil-placeholder.svg',
  cv: 'CV-Paul_Heredia.pdf'
} as const;

export const PROFILE = {
  name: 'Paul Heredia',
  location: '📍 Quito, Ecuador'
} as const;
