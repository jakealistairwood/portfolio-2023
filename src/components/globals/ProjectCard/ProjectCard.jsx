import { useRef, useEffect } from "react"
// Package Imports
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ data, index }) => {
    const { img, additionalClassNames, href } = data;

    let projectRef = useRef();

    // useEffect(() => {
    //     let projects = gsap.utils.toArray(".project");

    //     projects.forEach(project => {
    //         let tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: project,
    //                 start: "top 20%",
    //                 scrub: true,
    //                 markers: true
    //             }
    //         })
    //     })
    // }, []);

    return <a href={href} className={`project bg-[#f9f9f9] flex justify-center items-center overflow-hidden rounded-2xl ${additionalClassNames}`}>
        <div className="project__img rounded-2xl flex justify-center items-center">
            <img
                src={img.src}
                alt={img.alt}
            />
        </div>
    </a>
}

export default ProjectCard