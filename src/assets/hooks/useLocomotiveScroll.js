import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

export const ScrollTriggerProxy = (scrollEl) => {
    const { scroll } = useLocomotiveScroll();
    console.log(scroll)

    useEffect(() => {
        if(scroll) {
            const element = scroll?.el;
            console.log(element)
            scroll.on("scroll", ScrollTrigger.update);
            ScrollTrigger.scrollerProxy(element, {
                scrollTop(value) {
                    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scrollTo.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                pinType: element.style.transform ? "transform" : "fixed",
            })
        }

        return () => {
            ScrollTrigger.addEventListener("refresh", () => scroll?.update());
            ScrollTrigger.refresh();
            ScrollTrigger.defaults({ scroller: ".smooth-scroll"});
        }

    }, [scroll]);

    return null;
}