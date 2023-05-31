import { useState, useEffect } from "react"

import { portfolioProjects } from "../../../assets/data/projects"
import ProjectCard from "../../globals/ProjectCard/ProjectCard"

// Package Imports
import { v4 as uuidv4 } from "uuid"

import { removeDuplicatedCategories } from "../../../assets/utils/helpers"
import Filters from "../Filters/Filters"

const Portfolio = () => {
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
        // setFilteredProjects(portfolioProjects)
        // console.log(categoryName);
        // let categorisedProjects = filteredProjects.filter(project => {
        //     let p = project.categories.includes(categoryName);
        //     console.log(p);
        //     return project.categories.includes(categoryName);
        // });
        // console.log(categorisedProjects);
        // setFilteredProjects(categorisedProjects);
    }

    useEffect(() => {
        setActiveFilter("all");
        setFilteredProjects(portfolioProjects);
    }, []);

    let categories = [...new Set(projects.map(project => {
        return project.categories;
    }))].flat(1);

    let filteredCategories = removeDuplicatedCategories(categories);

    return <section className="portfolio pb-32">
        <div className="container">
            <header className="section-header flex flex-col gap-8 sm:flex-row pb-12 justify-between items-center">
                <h3 className="text-3xl font-light uppercase">
                    Selected Works
                </h3>
                <Filters categories={filteredCategories} filterProjects={filterProjects} activeFilter={activeFilter} />
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