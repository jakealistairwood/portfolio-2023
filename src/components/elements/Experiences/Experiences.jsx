import { experiences } from "../../../assets/data/experiences";

const Experiences = () => {
    return <section className="experiences">
        <div className="container">
            <header className="section-header flex justify-between items-center pb-16">
                <h3 className="text-3xl font-light uppercase">Experiences</h3>
                <a className="bg-accent px-5 py-2 rounded-full uppercase font-medium" href="/images/jake-wood-cv.pdf" target="_blank">My Resume</a>
            </header>
            <ul className="experience-list">
                {experiences.map(experience => {
                    return <li className="experience flex flex-col py-8 border-solid border-b-2 border-gray-200">
                        <button className="flex items-center">
                            <div class="table table-fixed w-full ...">
                                <div class="table-row-group">
                                    <div class="table-row uppercase text-sm">
                                        <div class="table-cell ... text-left">{experience.role}</div>
                                        <div class="table-cell ... text-left font-bold">{experience.company}</div>
                                        <div class="table-cell ... text-right">{experience.dates.start} - {experience.dates.end}</div>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <div className="hidden"></div>
                    </li>
                })}
            </ul>
        </div>
    </section>
}

export default Experiences;