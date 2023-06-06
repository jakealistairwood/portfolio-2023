import { v4 as uuidv4 } from "uuid"

export const portfolioProjects = [
    {
        id: uuidv4(),
        additionalClassNames: "col-start-1 sm:col-end-3",
        title: "StoreMaxx",
        href: "https://staging.storemaxx.co.uk",
        githubRepo: "",
        categories: ["UI/UX Design", "Development"],
        tech: ["Wordpress", "PHP", "ACF", "Twig", "Figma"],
        img: {
            src: "/images/storemaxx.png",
            alt: "Storemaxx presentation thumbnail",
        }
    },
    {
        id: uuidv4(),
        additionalClassNames: "h-fill max-h-[574px]",
        title: "Product Feedback Dashboard",
        githubRepo: "https://github.com/jakealistairwood/frontendmentor-product-feedback",
        href: "https://frontendmentor-product-feedback.vercel.app",
        categories: ["Development"],
        tech: ["React", "React Router", "TailwindCSS"],
        img: {
            src: "/images/product-feedback.webp",
            alt: "Product Feedback presentation thumbnail"
        }
    },
    {
        id: uuidv4(),
        additionalClassNames: "h-fill max-h-[574px]",
        title: "Fundamentals",
        githubRepo: "",
        href: "https://fundamentals.tech/products/application-data-hub-adh/",
        categories: ["Development"],
        tech: ["Wordpress", "PHP", "ACF", "Twig", "GSAP"],
        img: {
            src: "/images/fundamentals.png",
            alt: "Fundamentals presentation thumbnail",
        }
    },
    {
        id: uuidv4(),
        additionalClassNames: "h-fill max-h-[574px]",
        title: "ECF",
        href: "https://www.figma.com/file/QSL6qogaV8vkUfoheIJDkv/Client-Project---ECF?type=design&node-id=95%3A1016&t=rUiQxfluGCT8PXuZ-1",
        categories: ["UI/UX Design"],
        tech: ["Figma"],
        img: {
            src: "/images/ecf.png",
            alt: "ECF presentation thumbnail",
        }
    },
    {
        id: uuidv4(),
        additionalClassNames: "h-fill max-h-[574px]",
        title: "Luna9",
        githubRepo: "https://github.com/jakealistairwood/Luna9",
        href: "https://luna9.vercel.app",
        categories: ["Development"],
        tech: ["Vanilla JS", "GSAP", "SCSS"],
        img: {
            src: "/images/luna9-new.png",
            alt: "Luna9 presentation thumbnail",
        }
    },
    {
        id: uuidv4(),
        additionalClassNames: "h-fill max-h-[574px]",
        title: "Oli Crossland Portfolio (WIP)",
        href: "https://olicrossland.com",
        githubRepo: "https://github.com/jakealistairwood/olicrossland-portfolio",
        categories: ["Development", "UI/UX Design"],
        tech: ["Figma", "GSAP", "Framer Motion", "React", "SCSS"],
        img: {
            src: "/images/olicrossland-portfolio.png",
            alt: "Oli Crossland Portfolio presentation thumbnail",
        }
    },
    {
        id: uuidv4(),
        additionalClassNames: "h-fill max-h-[574px]",
        title: "Todo App (Frontend Mentor)",
        githubRepo: "https://github.com/jakealistairwood/fm-todo-redux",
        href: "https://fm-todo-redux.vercel.app/",
        categories: ["Development"],
        tech: ["React", "Styled Components", "Redux"],
        img: {
            src: "/images/todo.png",
            alt: "Todo App presentation thumbnail"
        }
    },
    {
        id: uuidv4(),
        additionalClassNames: "h-fill max-h-[574px]",
        title: "JS Calculator",
        githubRepo: "https://github.com/jakealistairwood/js-calculator",
        href: "https://jakealistairwood.github.io/js-calculator/",
        categories: ["Development"],
        tech: ["Vanilla JS", "SCSS"],
        img: {
            src: "/images/js-calculator.png",
            alt: "JS Calculator presentation thumbnail"
        }
    },
    {
        id: uuidv4(),
        additionalClassNames: "h-fill max-h-[574px]",
        title: "SaveOom",
        githubRepo: "",
        href: "https://www.figma.com/file/CY3lTHFW9t6sZtvsOE97JY/Client-Project---SaveOom?type=design&node-id=1200%3A15591&t=jVaf1ts4ZQuMJzxu-1",
        categories: ["UI/UX Design"],
        tech: ["Figma"],
        img: {
            src: "/images/saveoom.png",
            alt: "SaveOom presentation thumbnail"
        }
    },
    {
        id: uuidv4(),
        additionalClassNames: "h-fill max-h-[574px]",
        title: "Lujam",
        githubRepo: "",
        href: "https://www.figma.com/file/nNA7MVykoLSwVPJGHG6ylB/Client-Project---Lujam-Portal?type=design&node-id=0%3A1&t=9xQNfQr8IHcVmE9I-1",
        categories: ["UI/UX Design"],
        tech: ["Figma"],
        img: {
            src: "/images/lujam.png",
            alt: "Lujam presentation thumbnail"
        }
    },
];