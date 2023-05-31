import { useRef, useEffect } from "react"

import { ReactComponent as CircleIcon } from "../../../assets/images/decor-circle.svg";
import { ReactComponent as ArrowDown } from "../../../assets/images/arrow-down.svg";
import { ReactComponent as SquareIcon } from "../../../assets/images/decor-square.svg";
import { ReactComponent as GlobeIcon } from "../../../assets/images/globe.svg";
import { ReactComponent as AvailableForHireIcon } from "../../../assets/images/available-for-hire.svg";

// Package Imports
import SplitType from "split-type";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    let heroRef = useRef();
    let heroText = useRef();
    let topLine = useRef();
    let bottomLine = useRef();
    let squareRef = useRef();

    useEffect(() => {
        let textToSplit = new SplitType(heroText.current, { types: "lines", lineClass: "hero-text-line" })

        // textToSplit.lines[1].classList.add("!w-fit");
        // textToSplit.lines[1].classList.add("ml-auto");

        let animatedLines = gsap.utils.toArray(".hero-text-line");
        let tl = gsap.timeline();

        // let t2 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: heroRef.current,
        //         start: "top top",
        //         end: "+=2000",
        //         markers: true,
        //         pin: true,
        //     }
        // });

        tl.from(animatedLines, {
            y: 200,
            opacity: 0,
            duration: 2,
            ease: "power3",
            stagger: 0.6,
            delay: 0.5,
        })

        // let t2 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: heroRef.current,
        //         start: "top top",
        //         end: "+=2000",
        //         markers: true,
        //         pin: true,
        //         // pinSpacing: true,
        //         scrub: true
        //     }
        // })

    }, []);

    return <section className="hero relative" ref={heroRef} id="heroSection">
        <div className="container min-h-screen mx-auto flex flex-col pt-20 md:pt-28 lg:pt-40 2xl:pt-64">
            <h1 className="font-aloha font-thin text-[5.25rem] sm:text-[9.25rem] lg:text-[8rem] 2xl:text-[11.25rem] w-full leading-tight overflow-hidden" ref={heroText}>
                <div ref={topLine}>Creative Developer</div>
                <div className="flex items-center" style={{ display: "flex !important", justifyContent: "space-between !important" }} ref={bottomLine}>
                    <span>&</span>
                    <span>UI Designer</span>
                </div>
            </h1>
            <footer
                className="hero__footer justify-self-end mt-auto pb-8 flex flex-col-reverse gap-10 sm:gap-2 sm:flex-row justify-between items-center"
            >
                <div className="uppercase">
                    <a className="hidden sm:block text-xs" href="mailto:jakealistairwood@gmail.com">
                        jakealistairwood@gmail.com
                    </a>
                </div>
                <a className="flex items-center gap-2 uppercase text-xs border border-black rounded-full py-2 px-4 scroll-btn" href="#">
                    <div>
                        <CircleIcon />
                    </div>
                    <div className="relative flex flex-col text-animate-wrapper">
                        <span className="block opacity-0 width-placeholder">Scroll Down</span>
                        <span className="block absolute line line--one">Scroll Down</span>
                        <span className="block absolute line line--two">Scroll Down</span>
                    </div>
                    <div>
                        <ArrowDown className="h-4" />
                    </div>
                </a>
                <div className="theme-switch uppercase flex items-center gap-4">
                    <GlobeIcon width={16} height={16} />
                    <span className="text-xs">Bristol-based, UK</span>
                </div>
            </footer>
        </div>
        <div className="square" ref={squareRef}></div>
        <div className="available-for-hire-icon">
            <AvailableForHireIcon />
        </div>
    </section>
}

export default Hero