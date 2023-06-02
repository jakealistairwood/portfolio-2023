import { v4 as uuidv4 } from "uuid"

const Filters = ({ categories, filterProjects, activeFilter }) => {
    console.log(activeFilter);
    return <div className="flex flex-wrap items-center gap-2">
    <button onClick={() => filterProjects("all")} className={`category ${activeFilter == "all" && "category--active"} px-5 text-xs sm:text-sm py-[0.5em] uppercase hover:bg-accent rounded-full`}>All</button>
    {categories.map(category => {
        console.log(category)
        return <button key={uuidv4()} onClick={() => filterProjects(category)} className={`category ${activeFilter == category && "category--active"} hover:bg-accent px-5 text-xs sm:text-sm uppercase py-[0.5em] rounded-full`}>{category}</button>
    })}
</div>
}

export default Filters