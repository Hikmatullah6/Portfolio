

export const techCategories = [
    {
        label: 'Frontend',
        items: [
            { name: 'React',       icon: '/icons/react.svg' },
            { name: 'TailwindCSS', icon: '/icons/tailwindcss.svg' },
            { name: 'HTML',        icon: '/icons/html5.svg' },
            { name: 'CSS',         icon: '/icons/css3.svg' },
        ],
    },
    {
        label: 'Languages',
        items: [
            { name: 'JavaScript', icon: '/icons/js.svg' },
            { name: 'TypeScript', icon: '/icons/typescript.svg' },
            { name: 'Python',     icon: '/icons/python.svg' },
            { name: 'PHP',        icon: '/icons/php.svg' },
            { name: 'Java',       icon: '/icons/java.svg' },
            { name: 'C#',         icon: '/icons/csharp.svg' },
            { name: 'C++',        icon: '/icons/c++.svg' },
            { name: 'SQL',        icon: '/icons/sql.svg' },
        ],
    },
    {
        label: 'Backend & Runtime',
        items: [
            { name: 'Node.JS', icon: '/icons/nodejs.svg' },
            { name: 'Next.JS', icon: '/icons/nextjs.svg' },
        ],
    },
    {
        label: 'Tools',
        items: [
            { name: 'Supabase',   icon: '/icons/supabase.svg' },
            { name: 'MongoDB',    icon: '/icons/mongodb.svg' },
            { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
            { name: 'Docker',     icon: '/icons/docker.svg' },
        ],
    },
    {
        label: 'AI Tools',
        items: [
            { name: 'Claude Code', icon: '/icons/claude.svg' },
            { name: 'Cursor',      icon: '/icons/cursor.svg' },
        ],
    },
];

export const experiences = [
    {
        date: 'May 2025 - Present',
        title: 'Co-Founding Software Developer',
        company: 'eCommerce Startup',
        stack: ['Next.js', 'Supabase', 'Vercel', 'Claude Code'],
        description: 'Co-founded and operate an eCommerce business specializing in auction-sourced, one-off inventory (1,000+ unique products). I lead the technical side while also contributing to sales and day-to-day operations.',
        details: [
            'Developed a custom inventory management system using Next.js, Supabase, and Vercel, enabling bulk CSV uploads and real-time tracking of product status (available, sold, damaged)',
            'Designed systems to efficiently manage high-volume, non-repeatable inventory',
            'Handled customer communication and sales via Facebook Marketplace and in-person transactions',
            'Used AI-assisted development tools (Claude Code) to accelerate development and iteration',
        ],
    },
    {
        date: 'May 2025 - Jan 2026',
        title: 'Tech Executive',
        company: 'HackTrent',
        stack: ['Next.js', 'React', 'Vercel', 'Tailwind CSS'],
        description: "Worked on the tech team to build and maintain the official hackathon website, supporting a live event environment with real users.",
        details: [
            'Contributed to the frontend development of the website using Next.js',
            'Built responsive UI components for event information and participant experience',
            'Deployed updates using Vercel, ensuring reliability during high-traffic usage',
            'Collaborated with design and operations teams to implement features quickly',
            'Troubleshot issues during the event to ensure a smooth experience for participants',
        ],
    },
];

export const projects = [
    {
        title: "HackTrent's Website",
        subtitle: 'HackTrent',
        description: "Collaborated with HackTrent's Design Team, as well as fellow Tech Team Executives to develop and deploy HackTrent's website. This website would be used to promote the hackathon, as well as accept registration forms from participants of HackTrent.",
        tags: ['React', 'Next.js', 'Vercel'],
        image: '/projects/hacktrent.png',
        link: "https://www.hacktrent.ca/",
    },
    {
        title: "Full-Stack Movie Review Application",
        subtitle: 'Personal Project',
        description: "Designed and developed a full-stack movie review application enabling users to browse movies, create personalized watchlists, and track completed movies. Implemented secure authentication to manage user-specific content and built API integrations to handle movie data and user interactions across the platform. Secure user authentication and session management is included. RESTful API integration for movie and user data was applied. Persistent data storage using MySQL.",
        tags: ['React', 'Node.js', 'PHP', 'MySQL', 'REST API', 'React Router'],
        image: '/projects/moviespage.png',
        link: "https://github.com/Hikmatullah6/Backend-API-Movies-Application",
    },
    {
        title: "Inventory Management System",
        subtitle: 'eCommerce Startup',
        description: "Designed and developed an inventory management system using Next.js, Supabase, and Vercel, enabling bulk CSV uploads and real-time tracking of product status (available, sold, damaged)",
        tags: ['Next.js', 'Supabase', 'Vercel'],
        image: '/projects/inventorymanager.png',
        link: "https://inventory-manager-sepia.vercel.app/",
    },
];