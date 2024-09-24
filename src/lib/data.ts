export const menuData = [
    {
        titulo: 'Inicio',
        link: '#inicio',
    },
    {
        titulo: 'Habilidades',
        link: '#habilidades',
    },
    {
        titulo: 'Proyectos',
        link: '#proyectos',
    },
    {
        titulo: 'Herramientas',
        link: '#herramientas',
    },
    {
        titulo: 'Experiencia',
        link: '#experiencia',
    },
    {
        titulo: 'Contacto',
        link: '#contacto',
    },
] as const

export const habilidadesTagsData = {
    HTML5: {
        name: 'HTML',
        icon: 'ion--logo-html5',
        borderColor: ' hover:border-[#e34c26] dark:hover:border-[#e34c26]',
        color: 'text-[#e34c26] dark:text-[#e34c26]',
    },
    CSS3: {
        name: 'CSS',
        icon: 'ion--logo-css3',
        borderColor: ' hover:border-[#2965f1] dark:hover:border-[#2965f1]',
        color: 'text-[#2965f1] dark:text-[#2965f1]',
    },
    JavaScript: {
        name: 'JavaScript',
        icon: 'ion--logo-javascript',
        borderColor: ' hover:border-[#facc15] dark:hover:border-[#facc15]',
        color: 'text-[#facc15] dark:text-[#facc15]',
    },
    TypeScript: {
        name: 'TypeScript',
        icon: 'devicon-plain--typescript',
        borderColor: ' hover:border-[#3b82f6] dark:hover:border-[#3b82f6]',
        color: 'text-[#3b82f6] dark:text-[#3b82f6]',
    },
    Astro: {
        name: 'Astro.builds',
        icon: 'simple-icons--astro',
        borderColor: ' hover:border-[#ef4444] dark:hover:border-[#ef4444]',
        color: 'text-[#ef4444] dark:text-[#ef4444]',
    },
    React: {
        name: 'React',
        icon: 'ion--logo-react',
        borderColor: ' hover:border-[#0ea5e9] dark:hover:border-[#0ea5e9]',
        color: 'text-[#0ea5e9] dark:text-[#0ea5e9]',
    },
    ReactRouter: {
        name: 'React Router',
        icon: 'devicon-plain--reactrouter',
        borderColor: ' hover:border-[#ef4444] dark:hover:border-[#ef4444]',
        color: 'text-[#ef4444] dark:text-[#ef4444]',
    },
    Redux: {
        name: 'Redux',
        icon: 'simple-icons--redux',
        borderColor: ' hover:border-[#764abc] dark:hover:border-[#764abc]',
        color: 'text-[#764abc] dark:text-[#764abc]',
    },
    NextJS: {
        name: 'Next.js',
        icon: 'devicon-plain--nextjs',
        borderColor: ' hover:border-[#030712] dark:hover:border-white',
        color: 'text-[#030712] dark:text-white',
    },
    TailwindCSS: {
        name: 'Tailwind CSS',
        icon: 'simple-icons--tailwindcss',
        borderColor: ' hover:border-[#06b6d4] dark:hover:border-[#06b6d4]',
        color: 'text-[#06b6d4] dark:text-[#06b6d4]',
    },
    Sass: {
        name: 'Sass',
        icon: 'simple-icons--sass',
        borderColor: ' hover:border-[#cc6699] dark:hover:border-[#cc6699]',
        color: 'text-[#cc6699] dark:text-[#cc6699]',
    },
    Bootstrap: {
        name: 'Bootstrap',
        icon: 'simple-icons--bootstrap',
        borderColor: ' hover:border-[#7952b3] dark:hover:border-[#7952b3]',
        color: 'text-[#7952b3] dark:text-[#7952b3]',
    },
    NodeJS: {
        name: 'Node.js',
        icon: 'ion--logo-nodejs',
        borderColor: ' hover:border-[#68a063] dark:hover:border-[#68a063]',
        color: 'text-[#68a063] dark:text-[#68a063]',
    },
    ExpressJS: {
        name: 'Express.js',
        icon: 'simple-icons--express',
        borderColor: ' hover:border-[#000000] dark:hover:border-white',
        color: 'text-[#000000] dark:text-white',
    },
    MongoDB: {
        name: 'MongoDB',
        icon: 'simple-icons--mongodb',
        borderColor: ' hover:border-[#47a248] dark:hover:border-[#47a248]',
        color: 'text-[#47a248] dark:text-[#47a248]',
    },
    Svelte: {
        name: 'Svelte',
        icon: 'icon-svelte',
        borderColor: ' hover:border-[#ff3e00] dark:hover:border-[#ff3e00]',
        color: 'text-[#ff3e00] dark:text-[#ff3e00]',
    },
    Zustand: {
        name: 'Zustand',
        icon: 'icon-zustand',
        borderColor: ' hover:border-[#ff3e00] dark:hover:border-[#ff3e00]',
        color: 'text-[#ff3e00] dark:text-[#ff3e00]',
    },
    ViewTransitions: {
        name: 'ViewTransitions',
        icon: 'icon-view-transitions',
        borderColor: ' hover:border-[#ff3e00] dark:hover:border-[#ff3e00]',
        color: 'text-[#ff3e00] dark:text-[#ff3e00]',
    },
    shadcnUi: {
        name: 'shadcn/ui',
        icon: 'icon-shadcnUi',
        borderColor: ' hover:border-[#ff3e00] dark:hover:border-[#ff3e00]',
        color: 'text-[#ff3e00] dark:text-[#ff3e00]',
    },
} as const

export const habilidadesData = [
    habilidadesTagsData.HTML5, // HTML
    habilidadesTagsData.CSS3, // CSS
    habilidadesTagsData.JavaScript, // JavaScript
    habilidadesTagsData.TypeScript, // TypeScript
    habilidadesTagsData.Astro, // Astro.builds
    habilidadesTagsData.React, // React
    habilidadesTagsData.ReactRouter, // React Router
    habilidadesTagsData.Redux, // Redux
    habilidadesTagsData.NextJS, // Next.js
    habilidadesTagsData.TailwindCSS, // Tailwind CSS
    habilidadesTagsData.Sass, // Sass
    habilidadesTagsData.Bootstrap, // Bootstrap
    habilidadesTagsData.NodeJS, // Node.js
    habilidadesTagsData.ExpressJS, // Express.js
    habilidadesTagsData.MongoDB, // MongoDB
    habilidadesTagsData.Svelte, // Svelte
    habilidadesTagsData.Zustand, // Zustand
    habilidadesTagsData.ViewTransitions, // ViewTransitions
    habilidadesTagsData.shadcnUi, // shadcn/ui
] as const

export const experienciaData = [
    {
        titulo: 'Desarrollador Frontend con Next.js',
        empresa: 'Next.js',
        linkEmpresa: 'https://nextjs.org/',
        fecha: '2023 - Actualidad',
        descripcion:
            'Desarrollo de sitios web con Next. Next.js es un framework de desarrollo web que permite crear sitios web estáticos y dinámicos con tecnologías modernas como React, TypeScript, Tailwind CSS, etc. Se trata de un framework muy rápido y eficiente que permite crear sitios web muy rápidos y ligeros.',
        icon: 'icono-funcion-vector-web',
    },

    {
        titulo: 'Desarrollador Frontend con Astro.builds',
        empresa: 'Astro.builds',
        linkEmpresa: 'https://astro.build/',
        fecha: '2023 - Actualidad',
        descripcion:
            'Desarrollo de sitios web con Astro. Astro.builds es un framework de desarrollo web que permite crear sitios web estáticos y dinámicos con tecnologías modernas como React, TypeScript, Tailwind CSS, etc. Se trata de un framework muy rápido y eficiente que permite crear sitios web muy rápidos y ligeros.',
        icon: 'icono-funcion-vector-web',
    },
    {
        titulo: 'Bootcamp Full Stack Web Development',
        empresa: 'Codespace Academy',
        linkEmpresa: 'https://codespaceacademy.com/',
        fecha: 'Septiembre 2023 - Marzo de 2024',
        descripcion:
            'Bootcamp intensivo de 6 meses en el que se aprenden las tecnologías más demandadas en el mercado laboral. Aprendizaje de tecnologías como HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, entre otras.',
        icon: 'icono-funcion-vector-web',
    },
    {
        titulo: 'Diseñador Web y CMS',
        empresa: 'Freelance',
        linkEmpresa: '#',
        fecha: '2010 - Actualidad',
        descripcion:
            'Desde 2010 he trabajado como diseñador web freelance, realizando trabajos de diseño y desarrollo web, manejo de CMS como WordPress, Joomla, PrestaShop, etc.',
        icon: 'icono-distinto-vector-web',
    },

    {
        titulo: 'Diseñador Gráfico',
        empresa: 'Freelance',
        linkEmpresa: '#',
        fecha: '2008 - Actualidad',
        descripcion:
            'Desde 2008 he trabajado como diseñador gráfico freelance, realizando trabajos de diseño de logotipos, tarjetas de visita, flyers, carteles, etc. Actualmente no busco trabajo en este sector, pero sigo realizando trabajos de diseño gráfico para clientes habituales.',
        icon: 'icono-distinto-vector-web',
    },
] as const

export const toolsData = [
    {
        name: 'VS Code',
        icon: 'devicon-plain--vscode',
        borderColor: ' hover:border-[#007acc] dark:hover:border-[#007acc]',
        color: 'text-[#007acc] dark:text-[#007acc]',
    },
    {
        name: 'Git',
        icon: 'simple-icons--git',
        borderColor: ' hover:border-[#181717] dark:hover:border-white',
        color: 'text-[#181717] dark:text-white',
    },
    {
        name: 'GitHub',
        icon: 'ion--logo-github',
        borderColor: ' hover:border-[#181717] dark:hover:border-white',
        color: 'text-[#181717] dark:text-white',
    },
    {
        name: 'Figma',
        icon: 'ion--logo-figma',
        borderColor: ' hover:border-[#f24e1e] dark:hover:border-[#f24e1e]',
        color: 'text-[#f24e1e] dark:text-[#f24e1e]',
    },
    {
        name: 'Photoshop',
        icon: 'devicon-plain--photoshop',
        borderColor: ' hover:border-[#31a8ff] dark:hover:border-[#31a8ff]',
        color: 'text-[#31a8ff] dark:text-[#31a8ff]',
    },
    {
        name: 'Illustrator',
        icon: 'devicon-plain--illustrator',
        borderColor: ' hover:border-[#ff9a00] dark:hover:border-[#ff9a00]',
        color: 'text-[#ff9a00] dark:text-[#ff9a00]',
    },
    {
        name: 'Postman',
        icon: 'devicon-plain--postman',
        borderColor: ' hover:border-[#ff6c37] dark:hover:border-[#ff6c37]',
        color: 'text-[#ff6c37] dark:text-[#ff6c37]',
    },
    {
        name: 'Slack',
        icon: 'devicon-plain--slack',
        borderColor: ' hover:border-[#4a154b] dark:hover:border-[#4a154b]',
        color: 'text-[#4a154b] dark:text-[#4a154b]',
    },
] as const

export const proyectosData = [
    {
        title: 'Spotify Clone',
        description:
            'Desarrollo de un clon de la web de Spotify. Trabajo realizado con el framework de Astro.builds, junto con TypeScript y Tailwind CSS. El proyecto es una demostracion de las capacidades de Astro.builds para integrar tecnologías modernas como React y Svelte, un estado global con Zustand, transicion entre paginas por medio de las ViewTransitions y algunos componerntes de shadcn/ui.',
        link: 'https://manueldenis-spotify.netlify.app/',
        github: 'https://github.com/ManuelDenisDev/2024-09-23-spotify-clone',
        image: '/assets/img/proyectos/mandendev-spotify-clone.png',
        tags: [
            habilidadesTagsData.HTML5,
            habilidadesTagsData.TailwindCSS,
            habilidadesTagsData.TypeScript,
            habilidadesTagsData.Astro,
            habilidadesTagsData.React,
            habilidadesTagsData.Svelte,
            habilidadesTagsData.Zustand,
            habilidadesTagsData.ViewTransitions,
            habilidadesTagsData.shadcnUi,
        ],
    },
    {
        title: 'Elena Cibaja - Interiorismo',
        description:
            'Desarrollo de sitio web para interiorista. Trabajo realizado con Astro.builds, TypeScript y Tailwind CSS.',
        link: 'https://elenacibaja-portafolio.netlify.app/',
        github: 'https://github.com/ManuelDenisDev/20240206-elenacibaja-portafolio',
        image: '/assets/img/proyectos/elenacibaja-sitioweb-01.png',
        tags: [
            habilidadesTagsData.HTML5,
            habilidadesTagsData.TailwindCSS,
            habilidadesTagsData.TypeScript,
            habilidadesTagsData.Astro,
        ],
    },
    {
        title: 'Manuel Denis - Sitio Web',
        description:
            'Desarrollo de sitio web para músico. Trabajo realizado con Next.js, TypeScript y Tailwind CSS.',
        link: 'https://manueldenis.netlify.app/',
        github: 'https://github.com/ManuelDenisDev/2024-09-16-ManuelDenisDev-Portafolio',
        image: '/assets/img/proyectos/manueldenis-portafolio-01.png',
        tags: [
            habilidadesTagsData.HTML5,
            habilidadesTagsData.TailwindCSS,
            habilidadesTagsData.JavaScript,
            habilidadesTagsData.Astro,
        ],
    },
] as const
