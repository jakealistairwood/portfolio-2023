import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid"
// Package Imports
import SplitType from "split-type";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FullWidthText = ({ pageContainer, options }) => {
    const { links, headerTag, headerText, sectionName } = options;

    
    let containerRef = useRef();
    let headerRef = useRef();
    
    useEffect(() => {
        let textToSplit = new SplitType(headerRef.current, { types: "lines, chars", lineClass: "text-line", charClass: `${sectionName}-char` })
        let chars = gsap.utils.toArray(`.${sectionName}-char`);

        let sectionLinks = gsap.utils.toArray(`.btn-${sectionName}`);
        console.log(sectionLinks);

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
                // onLeaveBack: () => gsap.to("body", { duration: 1, backgroundColor: "#fff" } ),
                // onEnter: () => {
                //     gsap.to("body", { duration: 0.5, backgroundColor: "#05A5FF" }),
                // },
                // onEnterBack: () => {
                //     gsap.to("body", { duration: 0.5, backgroundColor: "#05A5FF" }),
                //     gsap.to(headerRef.current, { duration: 0.5, color: "#fff"})
                // },
                // onLeave: () => gsap.to("body", { duration: 1, backgroundColor: "#fff" }),
                onUpdate: self => console.log("progress: ", self.progress)
            }
        }).from(chars, {
            opacity: 0,
            stagger: 0.2
        }, 0.5).from(sectionLinks, {
            autoAlpha: 0
        })

        return () => {
            tl.revert();
        }
    }, []);

    return <section ref={containerRef}>
        <div className="container flex min-h-screen flex-col gap-10 justify-center items-center">
            {headerTag === "h2" && <h2 className="flex flex-col text-center text-[80px] leading-tight font-light" dangerouslySetInnerHTML={{ __html: headerText }} ref={headerRef} />}
            {links && (
                <div className="flex items-center gap-5">
                    {links.map(link => {
                        return <a className={`flex py-4 px-8 bg-black border-solid border-2 border-black flex-col items-center justify-center rounded-full btn-${sectionName} btn-${sectionName}--${link.buttonType}`} href={link.href} target={`${link.openInNewTab ? "_blank" : "_self"}`}>
                            <div className="relative text-animate-wrapper text-white flex flex-col overflow-hidden">
                                <span className="block opacity-0 width-placeholder">{link.label}</span>
                                <span className="block absolute line line--one">{link.label}</span>
                                <span className="block absolute line line--two">{link.label}</span>
                            </div>
                        </a>
                    })}
                </div>
            )}
        </div>
    </section>
}

export default FullWidthText