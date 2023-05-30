import { useState, useEffect } from "react"

import { portfolioProjects } from "../../../assets/data/projects"
import ProjectCard from "../../globals/ProjectCard/ProjectCard"

// Package Imports
import { v4 as uuidv4 } from "uuid"

import { removeDuplicatedCategories } from "../../../assets/utils/helpers"

const Portfolio = () => {
    const [ projects, setProjects ] = useState(portfolioProjects);
    const [ filteredProjects, setFilteredProjects ] = useState([]);

    const filterProjects = (categoryName) => {
        let categorisedProjects = filteredProjects.filter(project => {
            return project.categories.includes(categoryName);
        });
        console.log(categorisedProjects);
        setFilteredProjects(categorisedProjects);
    }

    useEffect(() => {
        setFilteredProjects(portfolioProjects);
    }, []);

    let categories = [...new Set(projects.map(project => {
        return project.categories;
    }))].flat(1);

    let filteredCategories = removeDuplicatedCategories(categories);
    console.log(filteredCategories);

    return <section className="portfolio pb-32">
        <div className="container">
            <header className="section-header flex pb-12 justify-between items-center">
                <h3 className="text-3xl font-light uppercase">
                    Selected Works
                </h3>
                <div className="flex items-center gap-2">
                    <button onClick={() => setFilteredProjects(portfolioProjects)} className="category category--active px-5 text-sm py-[0.5em] uppercase bg-accent rounded-full">All</button>
                    {filteredCategories.map(category => {
                        return <button onClick={() => filterProjects(category)} className="category px-5 text-sm uppercase py-[0.5em] rounded-full">{category}</button>
                    })}
                </div>
            </header>
            <div className="portfolio__container grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredProjects.map((project, index) => {
                    return <ProjectCard key={uuidv4()} data={project} index={index} />
                })}
            </div>
        </div>
    </section>
}

export default Portfolio