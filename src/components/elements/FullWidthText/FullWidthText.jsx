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
        let textToSplit = new SplitType(headerRef.current, { types: "lines, chars", lineClass: "text-line" })
        let chars = gsap.utils.toArray('.char');

        // let splitText = new SplitType(headerRef.current, { types: "lines, chars", lineClass: "text-line" })
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                // end: "bottom top",
                end: "+=4000",
                // markers: true,
                pin: true,
                pinSpacing: true,
                scrub: true,
                onLeaveBack: () => gsap.to("body", { duration: 1, backgroundColor: "#fff" } ),
                onEnter: () => gsap.to("body", { duration: 1, backgroundColor: "#E9FDB2" }),
                onEnterBack: () => gsap.to("body", { duration: 0.5, backgroundColor: "#E9FDB2" }),
                onLeave: () => gsap.to("body", { duration: 1, backgroundColor: "#fff" }),
                onUpdate: self => console.log("progress: ", self.progress)
            }
        }).from(chars, {
            opacity: 0,
            stagger: 0.2
        }, 0.5)
        return () => {
            tl.revert();
        }
    }, []);

    return <section ref={containerRef}>
        <div className="container flex min-h-screen flex-col justify-center items-center">
            {headerTag === "h2" && <h2 className="flex flex-col text-center text-[80px] leading-tight font-light" dangerouslySetInnerHTML={{ __html: headerText }} ref={headerRef} />}
            {links && (
                <div className="flex items-center gap-5">
                    {links.map(link => {
                        return <a href={link.href}>{link.label}</a>
                    })}
                </div>
            )}
        </div>
    </section>
}

export default FullWidthText