import { v4 as uuidv4 } from "uuid"
import { navLinks } from "../../../assets/data/navLinks"

const Navbar = ({ scrollY, navbarEl }) => {

  return <nav className="navbar fixed top-0 z-max w-[100%]" ref={navbarEl}>
        <div className={`container py-3 mt-3 px-5 mx-auto flex justify-between items-center relative ${scrollY > 100 ? "navbar--active" : ""}`}>
            <a className="navbar__logo uppercase font-bold absolute left-1/2 -translate-x-1/2" href="#">Jake Alistair Wood</a>
            {navLinks.map(menu => {
                return <ul key={uuidv4()} className="navbar__nav-links flex justify-between items-center gap-5 uppercase text-xs">
                    {menu.links.map(link => {
                        return <li key={uuidv4()} className={`navbar__nav-link ${link.isButton && "btn border border-black rounded-full py-2 px-4"}`}>
                            <a href={link.href} className="flex flex-col relative text-animate-wrapper" target={`${link.openInNewTab ? "_blank" : "_self"}`}>
                                <span className="block opacity-0 width-placeholder">{link.label}</span>
                                <span className="block absolute line line--one">{link.label}</span>
                                <span className="block absolute line line--two">{link.label}</span>
                            </a>
                        </li>
                    })}
                </ul>
            })}
        </div>
    </nav>
}

export default Navbar
