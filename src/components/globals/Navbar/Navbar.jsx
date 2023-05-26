import { v4 as uuidv4 } from "uuid"

const Navbar = ({ navbarEl }) => {

  const navLinks = [
    {
        menu: "Site Navigation",
        links: [
            {
                label: "Home",
                href: "",
                isButton: false,
                openInNewTab: false,
            },
            {
                label: "About",
                href: "",
                isButton: false,
                openInNewTab: false,
            },
            {
                label: "Work",
                href: "",
                isButton: false,
                openInNewTab: false,
            },
            {
                label: "Blog",
                href: "",
                isButton: false,
                openInNewTab: false,
            }
        ]
    },
    {
        menu: "Socials",
        links: [
            {
                label: "LinkedIn",
                href: "",
                isButton: false,
                openInNewTab: true,
            },
            {
                label: "Dribbble",
                href: "https://dribbble.com/jakealistairwood",
                isButton: false,
                openInNewTab: true,
            },
            {
                label: "Contact",
                href: "",
                isButton: true,
                openInNewTab: false
            }
        ]
    }
  ]  

  return <nav className="navbar container sticky top-0 flex justify-between items-center py-5" ref={navbarEl}>
    <a className="navbar__logo uppercase font-bold text-" href="#">Jake Alistair Wood</a>
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
    </nav>
}

export default Navbar
