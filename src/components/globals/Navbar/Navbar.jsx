import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { navLinks } from "../../../assets/data/navLinks"
import { Link } from "react-router-dom"

const Navbar = ({ scrollY, navbarEl }) => {

  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

  return <nav className="navbar fixed top-0 z-max w-[100%]" ref={navbarEl}>
        <div className={`container py-3 mt-3 px-5 flex justify-between items-center mx-auto relative ${scrollY > 100 ? "navbar--active" : ""}`}>
            <a className="navbar__logo uppercase font-bold static lg:absolute lg:left-1/2 lg:-translate-x-1/2" href="/">Jake Alistair Wood</a>
            <button className="uppercase lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? "close" : "menu"}</button>
            <div className={`flex ${mobileMenuOpen ? " mobile-menu mobile-menu--active" : "mobile-menu"} !lg:flex lg:justify-between lg:items-center w-full`}>
                {navLinks.map(menu => {
                    return <ul key={uuidv4()} className={`navbar__nav-links flex ${mobileMenuOpen ? "flex-col" : ""} justify-between items-center gap-5 uppercase text-xs`}>
                        {menu.links.map(link => {
                            return <li key={uuidv4()} className={`navbar__nav-link ${link.isButton && "btn border border-black rounded-full py-2 px-4"}`}>
                                {/* <a href={link.href} className="flex flex-col relative text-animate-wrapper" target={`${link.openInNewTab ? "_blank" : "_self"}`}>
                                    <span className="block opacity-0 width-placeholder">{link.label}</span>
                                    <span className="block absolute line line--one">{link.label}</span>
                                    <span className="block absolute line line--two">{link.label}</span>
                                </a> */}
                                <Link to={link.href} className="flex flex-col relative text-animate-wrapper" target={`${link.openInNewTab ? "_blank" : "_self"}`} onClick={() => setMobileMenuOpen(false)}>
                                    <span className="block opacity-0 width-placeholder">{link.label}</span>
                                    <span className="block absolute line line--one">{link.label}</span>
                                    <span className="block absolute line line--two">{link.label}</span>
                                </Link>
                            </li>
                        })}
                    </ul>
                })}
            </div>
        </div>
    </nav>
}

export default Navbar
