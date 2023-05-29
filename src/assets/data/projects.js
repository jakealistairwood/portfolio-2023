import { v4 as uuidv4 } from "uuid"

export const projects = [
    {
        id: uuidv4(),
        additionalClassNames: "col-start-1 col-end-3",
        title: "Oli Crossland Portfolio",
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
        title: "StoreMaxx",
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
        title: "Fundamentals",
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
        categories: ["Design"],
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
        categories: ["Development"],
        tech: ["Vanilla JS", "GSAP", "SCSS"],
        img: {
            src: "/images/luna9-new.png",
            alt: "Luna9 presentation thumbnail",
        }
    },
];