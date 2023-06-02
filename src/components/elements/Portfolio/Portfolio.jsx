import { useState, useEffect } from "react"

import { portfolioProjects } from "../../../assets/data/projects"
import ProjectCard from "../../globals/ProjectCard/ProjectCard"

// Package Imports
import { v4 as uuidv4 } from "uuid"

import { removeDuplicatedCategories, flattenCategories } from "../../../assets/utils/helpers"
import Filters from "../Filters/Filters"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const [ projects, setProjects ] = useState(portfolioProjects);
    const [ filteredProjects, setFilteredProjects ] = useState([]);
    const [ activeFilter, setActiveFilter ] = useState("all");

    const filterProjects = (categoryName) => {
        setActiveFilter(categoryName);
        console.log(categoryName);
        if(categoryName == "all") {
            setFilteredProjects(portfolioProjects.slice(0, 5));
        } else {
            setFilteredProjects([...portfolioProjects].slice(0, 5).filter(project => {
                return project.categories.includes(categoryName)
            }));
        }
    }

    useEffect(() => {
        setActiveFilter("all");
        setFilteredProjects([...portfolioProjects].slice(0, 5));
        ScrollTrigger.refresh();
    }, []);

    let categories = flattenCategories(projects);

    let filteredCategories = removeDuplicatedCategories(categories);

    return <section className="portfolio pb-32" id="portfolioSection">
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
                <div className="min-h-[574px] h-fill bg-[#f9f9f9] rounded-2xl flex justify-center items-center">
                    <a href="/portfolio" className="flex flex-col relative text-animate-wrapper">
                        <span className="block opacity-0 width-placeholder">View all projects</span>
                        <span className="block absolute line line--one">View all projects</span>
                        <span className="block absolute line line--two">View all projects</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
}

export default Portfolio