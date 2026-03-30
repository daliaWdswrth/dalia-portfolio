export const projects = [
    { 
    id: 1, 
    title: 'goalflo Design & Development', 
    category: 'Frontend Development & Web Design',
    images: {
        hero: '/images/goalflo1.png',
        main: '/images/goalflo2.png',
        detail1: '/images/goalflo3.png',
        detail2: '/images/goalflo4.png',
        detail3: '/images/goalflo5.png',
    },
    year: '2025 - Now',
    role: 'Designer & Developer',
    tools: 'React, TailwindCSS, HTML, Vercel, Vite',
    description: 'Designed and built a responsive habit-tracking web application that centralizes goal setting, daily progress tracking, journaling, and task management in a customizable widget-based interface',
    link:'https://goalflo.vercel.app/',
    fullDescription: '"goalflo" is a habit-tracking and productivity web app built to bring goal setting, daily tracking, journaling, and task management into one clean, customizable dashboard. I designed and developed the entire experience—from the UI and design system to the frontend build and deployment. It’s built with React and Vite, styled with TailwindCSS, and deployed on Vercel. The focus was on creating a simple, flexible, and organized space that works smoothly across devices and makes staying consistent easier, especially for those with a variety of goals and interests.',
    caseStudy: {
        problem: `There are a lot of productivity tools out there. But most of them make you choose between having something powerful and flexible or something simple and easy. Some are endlessly customizable, but the setup cost is high enough that most people never build something that actually works for them. Simpler apps are quick enough to start but too rigid to feel personal, and too minimal to stay visually engaging.`,
        opportunity: `Most habit and productivity apps are designed mobile-first, which makes sense for quick check-ins but isn't great for the kind of bigger-picture review I wanted to do at my desk. I wanted something desktop-first that could also work on mobile — not the other way around. I also wanted category-based organization — my fitness goals, creative projects, daily routines, and reading list all live in different mental spaces.`,
        whoItsFor: `Goalflo is for anyone who has tried the popular productivity tools and bounced off them. For people who have too many goals across too many areas of life to fit into a single list and those who want a tool that feels visually personal rather than generic. With low cognitive overhead without sacrificing flexibility. I also had in mind users with ADHD, for whom visual clarity and reduced setup friction can make the difference between a tool they use and one they abandon.`,
        principles: [
            { title: 'Customizable but not complicated', body: 'Every element of the dashboard can be configured, but nothing requires a tutorial to set up. The customization should feel intuitive on first use.' },
            { title: 'Visually personal', body: 'The app should feel like it belongs to the person using it. Theme options, widget choices, and category organization all contribute to that sense of ownership.' },
            { title: 'Category-first, not task-first', body: 'Rather than one flat list, everything lives inside a category. That mirrors how most people actually think about their lives and makes the dashboard easier to navigate at a glance.' },
            { title: 'Desktop-first versatility', body: 'Built primarily for desktop use — for deeper review and planning — with a fully responsive mobile version for on-the-go access.' },
        ],
        decisions: [
            { title: 'Widget-based layout', body: 'Rather than a fixed interface, each category dashboard is made up of widgets — a habit tracker, a task list, a journal, a bookmarks panel, a calendar — that the user can choose and arrange. This gives flexibility without requiring the user to build from scratch.' },
            { title: 'Category dashboards', body: 'Organizing by area of life rather than by date or priority felt more aligned with how people actually think about their goals. Fitness goals and creative projects shouldn\'t compete for the same visual space.' },
            { title: 'Visual balance', body: 'The visual design was intentional about landing between minimal and busy. Clean enough to reduce distraction, but warm and personal enough to feel inviting.' },
        ],
        whatsnext: [
            'Drag and drop widget rearrangement',
            'Expanded theme customization',
            'Bookmark categories (to-watch, to-read, favorites, helpful tips)',
            'Multi-date calendar selection',
            'Timer widget',
            'Mini photo album and visual progress tracker',
        ],
        // TODO
        figmaImages: [
            // { src: '/images/goalflo-wireframes.png', caption: 'Early wireframes exploring widget layout' },
            // { src: '/images/goalflo-designsystem.png', caption: 'Design system — color, type, spacing' },
            // { src: '/images/goalflo-annotated.png', caption: 'Annotated screen showing key decisions' },
        ]

    }
  },
  { 
    id: 2, 
    title: 'Life In Percent Redesign', 
    category: 'Web Design & Branding',
    images: {
        hero: '/images/LIPlogo.png',
        main: '/images/LIPsample.png',
        detail1: '/images/LIPsample2.png',
        detail2: '/images/LIPsample3.png',
        detail3: '/images/LIPsample4.png',

    },
    year: '2025',
    role: 'Designer & Developer',
    tools: 'Wordpress, JavaScript, HTML/CSS, Adobe Creative Suite',
    description: 'Completed a visual overhaul of a personal development and lifestyle platform, focusing on modernizing the brand identity, improving user experience, and creating a more engaging, content-driven interface.',
    link:'https://lifeinpercent.com/',
    fullDescription: 'The Life In Percent redesign was a complete rebrand and website transformation focused on modernizing the platform’s visual identity and improving usability while staying true to its message of growth and intentional living. I led the project from concept to launch, creating wireframes, high-fidelity prototypes, and a refreshed visual system before rebuilding the site in WordPress with custom HTML, CSS, and JavaScript. The result is a cleaner, more responsive experience with stronger content hierarchy and seamless navigation across devices.',
    caseStudy: {
        problem: `Life In Percent is a stoic-inspired reflection tool that shows users what percentage of their expected life they've lived and sends a brief reflection each time they move forward another 1%. The platform had a clear concept and an existing audience, but the site didn't reflect the calm, intentional experience the product was meant to deliver. The previous version was visually inconsistent — images with no shared sizing or style, uneven typography, no defined color palette, and a layout that made the brand feel scattered rather than grounded.`,
        opportunity: `The tricky part of this project was that the product deals with mortality — how much of your life has passed, how much remains. Done wrong, that's anxiety-inducing. Done right, it's grounding. Every design decision had to reinforce the "perspective, not pressure" message. That meant resisting the temptation to make things feel urgent or dramatic, and instead building something that felt genuinely calm to interact with.`,
        decisions: [
            { 
            title: 'Establishing a brand code', 
            body: 'The first priority was defining a color palette, consistent typography, and an imagery direction that felt cohesive and intentional rather than assembled. This gave the site a visual foundation it didn\'t have before.' 
            },
            { 
            title: 'Content hierarchy and information architecture', 
            body: 'I organized the page into clear, digestible sections that guide a visitor naturally from understanding what the product is, to how it works, to signing up. The structure follows a quiet persuasion arc: curiosity, clarity, trust, action.' 
            },
            { 
            title: 'Anticipatory design in the copy', 
            body: 'The "Not Urgency. Perspective." section — a two-column format that directly addresses the anxiety objection before a visitor can form it. Treating content as part of the design rather than separate from it meant the voice and structure reinforce each other throughout.' 
            },
        ],
        outcome: `The result is a site that feels like the product it's selling — unhurried, clear, and considered. The visual identity is consistent throughout, the content guides visitors toward sign-up without pressure, and the overall experience reflects the stoic values the platform is built around. I also contributed to the site's copy and brand voice, using AI to refine the language — treating content as an integral part of the design rather than an afterthought.`,
        }
  },
  { 
    id: 3, 
    title: 'WorkersComp Branding & Web Design', 
    category: 'Web Design & Branding',
    images: {
        hero: '/images/WCIQlogo.png',
        main: '/images/WCIQhero.png',
        detail1: '/images/WCIQpic2.png',
        detail2: '/images/WCIQlogos.png',
        detail3: '/images/WCIQpic3.png',
    },
    year: '2026',
    role: 'Brand Designer & Developer',
    tools: 'Wordpress, JavaScript, HTML/CSS, Adobe Illustrator',
    description: 'Designed and developed a responsive workers’ compensation insurance quote platform that streamlines coverage exploration and quote requests through a clean, user-focused interface.',
    fullDescription: 'WorkersComp Insurance Quotes is a lead-generation platform designed to help business owners easily learn about and request workers’ compensation insurance coverage. I led the branding and wireframing process, establishing a clear visual identity and intuitive layout before moving into full development. Built with WordPress and enhanced with custom HTML, CSS, and JavaScript, the site prioritizes clean structure, strong content hierarchy, and a seamless quote request flow to create a trustworthy, user-friendly experience that guides visitors from education to conversion.',
    caseStudy: {
        problem: `Workers' compensation insurance is a category with a real UX problem. Most sites in this space are cluttered with dense information, inconsistent styling, and no clear visual identity, which makes an already complicated topic feel even more overwhelming. For users who are often time-pressed small business owners or HR managers trying to check a box, that friction kills conversions before they ever reach a form. The goal was to make the experience feel trustworthy and approachable without dumbing it down. Clear enough for a first-time insurance shopper, credible enough for a seasoned broker.`,
        whoItsFor: `The site serves a wide range of users: small business owners, HR managers and office administrators, startup founders hiring their first workers, independent contractors, and insurance agents and brokers comparing options. What they share is a need to get information quickly and request a quote without wading through jargon or visual noise.`,
        decisions: [
            {
            title: 'Branding first',
            body: `Most competitors in this space have no cohesive visual identity. Mismatched colors, generic stock imagery, inconsistent type. I established a clear brand code before touching layout or content: a defined color palette, typography system, and visual direction that gave the site a distinctive and trustworthy feel from the first impression.`
            },
            {
            title: 'Organizing dense information',
            body: `Workers' comp involves a lot of content including coverage types, eligibility, state requirements, and pricing factors. Rather than presenting it as a wall of text, I used a table of contents structure and clear content hierarchy to make the information scannable and navigable so users can orient themselves quickly and get to what they actually need.`
            },
            {
            title: 'Conversion-focused layout',
            body: `The primary objective was quote requests. Every design decision, from the page structure to the content flow to the placement of the form, was made with that conversion goal in mind. The form itself was designed to collect the necessary information without feeling burdensome, keeping the path from landing to submission as short as possible.`
            },
            {
            title: 'SEO and discoverability',
            body: `Beyond the visual and UX work, I implemented SEO optimizations including the table of contents structure to improve search visibility, recognizing that getting users to the site is just as important as converting them once they arrive.`
            },
        ],
        outcome: `The result is a site with a clear visual identity, organized content, and a conversion-focused flow that guides users from understanding their options to requesting a quote. The project covered the full design lifecycle across brand, wireframe, prototype, and build, on both web and mobile.`,
    },
  },
  {
    id: 4,
    title: 'Personal Blog',
    category: 'Web Design & Frontend Development',
    images: {
        hero: '/images/blog1.png',
        main: '/images/blog2.png',
        detail1: '/images/blog3.png',
        detail2: '/images/blog4.png',
        detail3: '/images/blog5.png',
    },
    year: '2025',
    role: 'Designer & Developer',
    tools: 'Astro, TailwindCSS, HTML/CSS, JavaScript, TypeScript',
    description: 'Designed and developed a site to present my personal programming and art projects, paired with a blog highlighting my process, learnings, and other interests of mine.',
    link:'https://daliasblog.com/',
    fullDescription: 'This blog is a custom-built website meant to showcase my personal projects while serving as a space to document my creative and technical journey. Built with Astro and styled using TailwindCSS, the site emphasizes simplicity and scalability. It allows me to document my work in a meaningful and cohesive way that encourages exploration by, for example, allowing visitors to flip through books I’ve constructed or scroll through images of my process. It’s a space where I can combine code, art, and writing in one place and share what I’m learning along the way.',
    caseStudy: {
        problem: `I wanted a space that felt more like me and less like a pitch. My main portfolio is focused and professional, but it doesn't have room for the rest of what I do — the printmaking, the bookmaking, the games I built in school, the process notes, the things I find interesting. The design brief I gave myself was: playful, whimsical, personal, and easy to keep adding to over time. Something that could grow alongside my practice without ever feeling finished or fixed.`,
        whoItsFor: `The site has three distinct sections. The blog is a space to document my process and write about whatever I want, whether that's design, books, or things I find on the internet. The projects section holds my technical work outside of client projects: games built in school, installations, other web experiments. The portfolio section is the heart of it, built specifically to showcase my print and bookmaking practice in a way that feels true to the work.`,
        decisions: [
            {
            title: 'The book-flipping interaction',
            body: `Physical books are tactile objects and the experience of going through one page by page is part of what makes them interesting. A static image gallery doesn't capture that at all. So I built an interaction that lets visitors flip through my books, emulating what it actually feels like to hold one. Each book entry also includes documentation photos, materials lists, process notes, and a summary so the full context of the work is there for anyone who wants to go deeper.`
            },
            {
            title: 'Design direction',
            body: `The visual language is deliberately different from my main portfolio. Where that site is dark, typographic, and restrained, this one is light, organic, and illustrated. The floating insects and botanical elements on the landing page set the tone immediately: this is a personal space. The typography and layout follow the same logic, inviting rather than impressive.`
            },
            {
            title: 'Built to last',
            body: `I built the site in Astro with TailwindCSS specifically because I wanted something fast, easy to maintain, and simple to extend. Adding a new blog post, a new book, or a new project should never feel like a chore. The architecture reflects that: content-first, low overhead, built to keep growing.`
            },
        ],
        },
  },
];

