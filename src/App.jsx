import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/globals/Navbar/Navbar'
import Hero from './components/elements/Hero/Hero'
import './App.css'
import TextBlock from './components/elements/TextBlock/TextBlock'
import SplitType from "split-type";
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [count, setCount] = useState(0)
  const [navbarHeight, setNavbarHeight] = useState("");

  // Refs for GSAP Animations
  let ref = useRef();
  let overviewSectionRef = useRef();
  let textToSplitRef = useRef();

  useEffect(() => {
    setNavbarHeight(ref.current.offsetHeight)
  }, [navbarHeight]);

  useEffect(() => {
    
    let splitText = new SplitType(textToSplitRef.current, { types: "lines" })

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: overviewSectionRef.current,
        start: "top bottom",
        end: "top top",
        markers: true,
        scrub: 2
      }
    });
  }, []);

  return (
    <main className="container mx-auto">
      <Navbar navbarEl={ref} />
      <Hero navbarHeight={navbarHeight} />
      <section className="overview min-h-screen flex justify-center items-center" ref={overviewSectionRef}>
        <h2 className="flex flex-col items-center text-center text-6xl font-light gap-4 uppercase" ref={textToSplitRef}>
          <p>digital experiences</p>
          <p>designed with <span className="font-aloha font-regular text-[60px] tracking-wider">elegance</span>,</p>
          <p>built with <span className="uppercase font-bold">impact</span></p>
        </h2>
      </section>
      <section className="projects">
        <h3 className="uppercase">Selected Works</h3>
      </section>
      <div className="grain"></div>
    </main>
  )
}

export default App
