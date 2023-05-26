const Navbar = ({ navbarEl }) => {
  return <nav className="navbar flex justify-between items-center py-5" ref={navbarEl}>
    <a className="navbar__logo uppercase font-bold text-" href="#">Jake Alistair Wood</a>
    <ul className="navbar__nav-links flex justify-between items-center gap-5 uppercase text-xs">
        <li className="navbar__nav-links">
            <a href="">Home</a>
        </li>
        <li className="navbar__nav-links">
            <a href="">About</a>
        </li>
        <li className="navbar__nav-links">
            <a href="">Work</a>
        </li>
        <li className="navbar__nav-links">
            <a href="">Blog</a>
        </li>
    </ul>
    <ul className="navbar__nav-links flex justify-between items-center gap-5 uppercase text-xs">
        <li className="navbar__nav-links">
            <a href="">LinkedIn</a>
        </li>
        <li className="navbar__nav-links">
            <a href="flex flex-col relative btn">
                <span className="block opacity-0">Dribbble</span>
                <span className="block absolute">Dribbble</span>
                <span className="block absolute">Dribbble</span>
            </a>
        </li>
        <li className="navbar__nav-links border border-black rounded-full py-2 px-4">
            <a href="">Contact</a>
        </li>
    </ul>
  </nav>
}

export default Navbar
