import { Outlet } from "react-router-dom";
import Navbar from "../components/globals/Navbar/Navbar";

import { useWindowScrollPositions } from "../assets/hooks/useWindowScrollPosition";

const Root = () => {

    const { scrollX, scrollY } = useWindowScrollPositions();

    return <>
        <Navbar scrollY={scrollY} />
        <Outlet />
    </>
}

export default Root;