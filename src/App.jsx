import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/globals/Navbar/Navbar'
import Hero from './components/elements/Hero/Hero'
import './App.css'
import TextBlock from './components/elements/TextBlock/TextBlock'

function App() {
  const [count, setCount] = useState(0)
  const [navbarHeight, setNavbarHeight] = useState("");

  let ref = useRef();

  useEffect(() => {
    setNavbarHeight(ref.current.offsetHeight)
  }, [navbarHeight]);

  return (
    <main className="container mx-auto">
      <Navbar navbarEl={ref} />
      <Hero navbarHeight={navbarHeight} />
      <section className="overview min-h-screen flex justify-center items-center">
        <h2 className="flex flex-col items-center text-center text-6xl font-light gap-4 uppercase">
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
