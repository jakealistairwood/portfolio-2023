import { useState } from "react";
import { portfolioProjects } from "../../assets/data/projects"
import ProjectCard from "../../components/globals/ProjectCard/ProjectCard"

const PortfolioPage = () => {
    const [ projects, setProjects ] = useState(portfolioProjects);
    const [ filteredProjects, setFilteredProjects ] = useState([]);
    const [ activeFilter, setActiveFilter ] = useState("all");

    return <main className="container">
        <header className="section-header flex justify-between items-center">
            <h1 className="uppercase text-3xl font-light pt-24 pb-16 text-center">Portfolio</h1>
        </header>
        <div className="portfolio__projects grid grid-cols-3 gap-6">
            {portfolioProjects.map(project => {
                return <ProjectCard data={project} />
            })}
        </div>
    </main>
}

export default PortfolioPage 