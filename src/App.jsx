import { useEffect, useState, useRef } from "react";

// Styling
import "./App.css";

// Package Imports
import SplitType from "split-type";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { v4 as uuidv4 } from "uuid";

// Component Imports
import Navbar from "./components/globals/Navbar/Navbar";

// Data Imports
import { projects } from "./assets/data/projects";
import Hero from "./components/elements/Hero/Hero";

gsap.registerPlugin(ScrollTrigger);

function App() {

    return (
        <main className="mx-auto">
            <Navbar />
            <Hero />
            <div className="grain"></div>
        </main>
    );
}

export default App;
