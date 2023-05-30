import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid"
// Package Imports
import SplitType from "split-type";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FullWidthText = ({ pageContainer, options }) => {
    const { links, headerTag, headerText } = options;

    
    let containerRef = useRef();
    let headerRef = useRef();
    
    useEffect(() => {
        // let textToSplit = new SplitType(headerRef.current, { types: "lines", lineClass: "text-line" })

        // let splitText = new SplitType(headerRef.current, { types: "lines", lineClass: "text-line" })
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                // end: "bottom top",
                end: "+=3000",
                // markers: true,
                pin: true,
                pinSpacing: true,
                scrub: true,
                onUpdate: self => console.log("progress: ", self.progress)
            }
        })

        return () => {
            tl.revert();
        }
    }, []);

    return <section ref={containerRef}>
        <div className="container flex min-h-screen flex-col justify-center items-center">
            {headerTag === "h2" && <h2 className="text-center text-[64px] leading-tight font-light" ref={headerRef}>
                {headerText.map(line => {
                    return <div key={uuidv4()}>
                        {line.lineText.map(word => {
                            if(word.stylingOptions.styledWord) {
                                return <span className={`${word.stylingOptions.fontFamily === "aloha" ? "font-aloha" : ""}`}> {word.word}</span>
                            } else {
                                return <> {word.word}</>
                            }
                        })}
                    </div>
                })}    
            </h2>}
            {headerTag === "h3" && <h3 className="text-center" ref={headerRef}>{headerText}</h3>}
            {links && <div className="links">
                {links.map(link => {
                    return <a href={link.href}>
                        <div className="text-animate-wrapper flex flex-col">
                            <span className="opacity-0 width-placeholder">{link.label}</span>
                            <span className="line line--one">{link.label}</span>
                            <span className="line line--two">{link.label}</span>
                        </div>
                    </a>
                })}
            </div>}
        </div>
    </section>
}

export default FullWidthText