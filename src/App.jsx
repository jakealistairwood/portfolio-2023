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
import { projects } from "./assets/data/projects";
import FullWidthText from "./components/elements/FullWidthText/FullWidthText";

gsap.registerPlugin(ScrollTrigger);

function App() {
    let { scrollX, scrollY } = useWindowScrollPositions();

    // Element References
    let pageRef = useRef();

    return (
        <main className="page-wrapper mx-auto" ref={pageRef}>
            <Navbar scrollY={scrollY} />
            <Hero />
            <FullWidthText options={{
                headerTag: "h2",
                headerText: [{
                    lineText: [{
                        word: "digital",
                        stylingOptions: {
                            styleWord: false,
                            fontFamily: "default"
                        }
                    },{
                        word: "experiences",
                        stylingOptions: {
                            styleWord: false,
                            fontFamily: "default"
                        }
                    }],
                }, {
                    lineText: [{
                        word: "designed",
                        stylingOptions: {
                            styledWord: false,
                            fontFamily: "default"
                        }
                    }, {
                        word: "with",
                        stylingOptions: {
                            styledWord: false,
                            fontFamily: "default"
                        }
                    }, {
                        word: "elegance",
                        stylingOptions: {
                            styledWord: true,
                            fontFamily: "aloha"
                        }
                    }]
                }, {
                    lineText: [{
                        word: "built",
                        stylingOptions: {
                            styledWord: false,
                            fontFamily: "default"
                        }
                    }, {
                        word: "to",
                        stylingOptions: {
                            styledWord: false,
                            fontFamily: "default"
                        }
                    }, {
                        word: "impact",
                        stylingOptions: {
                            styledWord: true,
                            fontFamily: "default"
                        }
                    }]
                }]
            }} />
            <Portfolio />
            <div className="grain"></div>
        </main>
    );
}

export default App;
