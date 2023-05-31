import { useRef, useEffect, useState } from "react"
// Package Imports
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { ReactComponent as GithubIcon } from "../../../assets/images/github.svg";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ data, index }) => {
    const { img, additionalClassNames, href, title, categories, tech, githubRepo } = data;

    let [projectHoverActive, setProjectHoverActive ] = useState(false);

    let projectRef = useRef();

    // useEffect(() => {
    //     console.log(projectRef);
    // }, []);

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


    return <a href={href} target="_blank" className={`project relative bg-[#f9f9f9] flex justify-center items-center overflow-hidden rounded-2xl ${additionalClassNames}`} onMouseEnter={() => setProjectHoverActive(true)} onMouseLeave={() => setProjectHoverActive(false)} ref={projectRef}>
        <div className="project__img rounded-2xl flex justify-center items-center">
            <img src={img.src} alt={img.alt} />
        </div>
        <div className={`overlay ${projectHoverActive ? "overlay--visible" : "overlay--hidden"}`}></div>
        <div className={`project__info flex flex-col gap-5 justify-end ${projectHoverActive ? "project__info--visible" : "project__info--hidden"} text-white`}>
            <h5 className="flex gap-4 uppercase text-sm sm:text-2xl font-light">
                {categories.map(category => {
                    return <span>{category}</span>
                })}
            </h5>            
            <div className="mt-auto flex flex-col gap-4">
                <h4 className="text-2xl sm:text-6xl font-light">{title}</h4>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <ul className="project__tags flex flex-wrap gap-2">
                        {tech.map(skill => {
                            return <li className="project__tag rounded-full uppercase text-[8px] sm:text-xs font-light py-2 px-4">
                                {skill}
                            </li>
                        })}
                    </ul>
                    {githubRepo && <a href={githubRepo} className="repo-btn flex bg-white text-opacity-0 rounded-full py-2 px-4 items-center gap-2 uppercase" target="_blank">
                        <GithubIcon />
                        <span>Repo</span>
                    </a>}
                </div>
            </div>
        </div>
    </a>
}

export default ProjectCard