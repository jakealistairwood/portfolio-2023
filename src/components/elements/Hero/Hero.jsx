import { useRef, useEffect } from "react";
import Portrait from "../../../assets/images/portrait.png"
import { ReactComponent as CircleIcon } from "../../../assets/images/decor-circle.svg"
import { ReactComponent as ArrowDown } from "../../../assets/images/arrow-down.svg"
import { ReactComponent as SquareIcon } from "../../../assets/images/decor-square.svg"
import { ReactComponent as GlobeIcon } from "../../../assets/images/globe.svg"
import SplitType from "split-type";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Hero = ({ navbarHeight }) => {

    let sectionRef = useRef();
    let topRef = useRef();
    let bottomRef= useRef();
    let parentRef = useRef();
    let spinnerRef = useRef();
    let footerRef = useRef();
    let subheaderRef = useRef();

    // useEffect(() => {
    //     let splitText = new SplitType(parentRef.current, { types: "lines", lineClass: "split-line overflow-hidden"} )
    //     bottomRef.current.parentNode.classList.add("ml-auto");
    //     // let topLineSplit = new SplitType(topRef.current, { types: "lines", lineClass: "split-line"})
    //     // let bottomLineSplit = new SplitType(bottomRef.current, { types: "lines", lineClass: "split-line" })

    //     let lines = gsap.utils.toArray('.split-line');
        
    //     gsap.from(lines, {
    //         yPercent: 100,
    //         opacity: 0,
    //         ease: "power4",
    //         duration: 1,
    //         stagger: 0.3,
    //     })

    // }, []);

    useEffect(() => {
        // const parentSplit = new SplitType(parentRef.current, { lineClass: "split-parent" })
        const childSplit = new SplitType(parentRef.current, { types: "lines", lineClass: "split-child" })
        const splitSubheader = new SplitType(subheaderRef.current, { types: "lines", lineClass: "subheader--split-line overflow-hidden" })

        console.log(childSplit.lines[1]);

        childSplit.lines[1].classList.add("!w-fit");
        childSplit.lines[1].classList.add("ml-auto");

        splitSubheader.lines[0].classList.add("pl-8");

        let lines = gsap.utils.toArray(".split-child");
        let subheaderLines = gsap.utils.toArray(".subheader--split-line");

        let tl = gsap.timeline();

        console.log(spinnerRef);

        tl.from(lines, {
            y: 50,
            opacity: 0,
            duration: 2, 
            ease: "power4",
            stagger: 1,
            // scale: 0,
            delay: 0.5
        })

        tl.from(spinnerRef.current, {
            opacity: 0,
            duration: 0.5,
            delay: 1
        })
        
        tl.from(subheaderLines, {
            x: -20,
            y: 20,
            opacity: 0,
            duration: 1,
            delay: -1,
            stagger: 0.2
        })
        
        // from(spinnerRef.current, {
        //     opacity: 0,
        //     duration: 2,
        //     delay: 2
        // }).from(subheaderLines, {
        //     delay: 3,
        //     y: 50,
        // })

        let t2 = gsap.timeline({
            ScrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "+=2000",
                markers: true,
                pin: true
            }
        })

        t2.to(lines, {
            x: 20
        })

    }, []);

    return (
        <section
            className="hero relative flex flex-col pt-32"
            style={{
                minHeight: `calc(100vh - ${navbarHeight}px)`,
            }}
            ref={sectionRef}
        >
            <h1 className="flex flex-col font-aloha w-full text-[11.25rem] font-thin leading-tight overflow-hidden" ref={parentRef}>
                <div ref={topRef}>Creative Developer</div>
                <div className="ml-auto" ref={bottomRef}>UI Designer</div>
            </h1>
            <footer className="hero__footer justify-self-end mt-auto pb-8 flex flex-row justify-between items-center" ref={footerRef}>
                <div className="uppercase">
                    <a
                        className="text-xs"
                        href="mailto:jakealistairwood@gmail.com"
                    >
                        jakealistairwood@gmail.com
                    </a>
                </div>
                <a className="flex items-center gap-2 uppercase text-xs border border-black rounded-full py-2 px-4" href="#">
                    <div>
                        <CircleIcon />
                    </div>
                    <span>Scroll Down</span>
                    <div>
                        <ArrowDown className="h-4" />
                    </div>
                </a>
                <div className="theme-switch uppercase flex items-center gap-4">
                    <GlobeIcon width={16} height={16} />
                    <span className="text-xs">Bristol-based, UK</span>
                </div>
            </footer>
            <div className="bg-[#f5f5f5] absolute h-[704px] w-[461px] top-1/2 xl:top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:-translate-y-0 rounded-t-full z-negative overflow-hidden">
                {/* <img className="h-full object-contain scale-125 opacity-[0.12]" src={Portrait} alt="" /> */}
            </div>
            <div className="absolute top-20 right-0 overflow-hidden" ref={spinnerRef}>
                <SquareIcon />
            </div>
            <p className="absolute left-[5rem] bottom-[18rem] w-[250px] text-justify uppercase text-xs hero__subheader" ref={subheaderRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur fugiat corporis harum deserunt sed ex laboriosam aspernatur cupiditate nulla.</p>
        </section>
    );
};

export default Hero;
