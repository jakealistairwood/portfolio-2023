import { useEffect, useState, useRef } from "react";
import { useWindowScrollPositions } from "./assets/hooks/useWindowScrollPosition";

// Styling
import "./App.css";

// Package Imports
import SplitType from "split-type";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { v4 as uuidv4 } from "uuid";

// Component Imports
import Navbar from "./components/globals/Navbar/Navbar";
import Hero from "./components/elements/Hero/Hero";
import Portfolio from "./components/elements/Portfolio/Portfolio";

// Data Imports
import FullWidthText from "./components/elements/FullWidthText/FullWidthText";
import { overviewHeader, contactHeader } from "./assets/data/textBlocks";
import Experiences from "./components/elements/Experiences/Experiences";

gsap.registerPlugin(ScrollTrigger);

function App() {
    let { scrollX, scrollY } = useWindowScrollPositions();

    // Element References
    let pageRef = useRef();

    return (
        <main className="page-wrapper mx-auto" ref={pageRef}>
            <Navbar scrollY={scrollY} />
            <Hero />
            <FullWidthText pageContainer={pageRef} options={{
                sectionName: "overview",
                headerTag: "h2",
                headerText: overviewHeader
            }} />
            <Portfolio />
            <Experiences />
            <FullWidthText options={{
                sectionName: "contact",
                headerTag: "h2",
                headerText: contactHeader
            }} />
            <div className="grain"></div>
        </main>
    );
}

export default App;
