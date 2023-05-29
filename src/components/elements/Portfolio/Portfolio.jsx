import { projects } from "../../../assets/data/projects"
import ProjectCard from "../../globals/ProjectCard/ProjectCard"

// Package Imports
import { v4 as uuidv4 } from "uuid"

const Portfolio = () => {
    return <section className="portfolio">
        <div className="container">
            <h3 className="font-aloha text-9xl font-thin text-center pb-12">
                Selected Works
            </h3>
            <div className="portfolio__container grid grid-cols-2 gap-5">
                {projects.map((project, index) => {
                    return <ProjectCard key={uuidv4()} data={project} index={index} />
                })}
            </div>
        </div>
    </section>
}

export default Portfolio