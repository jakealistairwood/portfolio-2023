const ProjectCard = ({ data, index }) => {
    const { img, additionalClassNames, href } = data;

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