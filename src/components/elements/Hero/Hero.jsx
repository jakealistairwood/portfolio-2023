import { useRef, useEffect } from "react"

// Package Imports
import SplitType from "split-type";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    let heroText = useRef();
    let topLine = useRef();
    let bottomLine = useRef();

    useEffect(() => {
        let textToSplit = new SplitType(heroText.current, { types: "lines", lineClass: "hero-text-line" })

        textToSplit.lines[1].classList.add("!w-fit");
        textToSplit.lines[1].classList.add("ml-auto");

        let animatedLines = gsap.utils.toArray(".hero-text-line");
        let tl = gsap.timeline();

        tl.from(animatedLines, {
            y: 200,
            opacity: 0,
            duration: 2,
            ease: "power3",
            stagger: 0.6,
            delay: 0.5
        })
    }, []);

    return <section className="hero">
        <div className="container min-h-screen mx-auto flex flex-col justify-center">
            <h1 className="font-aloha font-thin text-[11.25rem] w-full leading-tight overflow-hidden" ref={heroText}>
                <div ref={topLine}>Creative Developer</div>
                <div className="ml-auto" ref={bottomLine}>UI Designer</div>
            </h1>
        </div>
    </section>
}

export default Hero