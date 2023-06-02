import { useState, useEffect } from "react";
import { portfolioProjects } from "../../assets/data/projects"
import ProjectCard from "../../components/globals/ProjectCard/ProjectCard"
import Filters from "../../components/elements/Filters/Filters";

import { flattenCategories, removeDuplicatedCategories } from "../../assets/utils/helpers";

const PortfolioPage = () => {
    const [ projects, setProjects ] = useState(portfolioProjects);
    const [ filteredProjects, setFilteredProjects ] = useState([]);
    const [ activeFilter, setActiveFilter ] = useState("all");

    const filterProjects = (categoryName) => {
        setActiveFilter(categoryName);
        console.log(categoryName);
        if(categoryName == "all") {
            setFilteredProjects(portfolioProjects);
        } else {
            setFilteredProjects([...portfolioProjects].filter(project => {
                return project.categories.includes(categoryName)
            }));
        }
    }

    useEffect(() => {
        setActiveFilter("all");
        setFilteredProjects(portfolioProjects);
    }, []);

    let categories = flattenCategories(projects);

    let filteredCategories = removeDuplicatedCategories(categories);

    return <main className="container">
        <header className="section-header flex justify-between items-center">
            <h1 className="uppercase text-3xl font-light pt-24 pb-16 text-center">Portfolio</h1>
            <Filters categories={filteredCategories} filterProjects={filterProjects} activeFilter={activeFilter} />
        </header>
        <div className="portfolio__projects grid grid-cols-3 gap-6 overflow-hidden pb-16">
            {filteredProjects.map(project => {
                return <ProjectCard data={project} />
            })}
        </div>
    </main>
}

export default PortfolioPage 