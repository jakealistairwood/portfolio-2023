import { Outlet } from "react-router-dom";
import Navbar from "../components/globals/Navbar/Navbar";

import { useWindowScrollPositions } from "../assets/hooks/useWindowScrollPosition";
import Footer from "../components/globals/Footer/Footer";

const Root = () => {

    const { scrollX, scrollY } = useWindowScrollPositions();

    return <>
        <Navbar scrollY={scrollY} />
        <Outlet />
        <Footer />
    </>
}

export default Root;