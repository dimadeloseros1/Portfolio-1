import Link from 'next/link'
import Hero from './components/Hero'
import Divider from './components/Divider'
import Projects from './components/Projects'
import AnimatedNav from './components/AnimatedNav'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import TopButton from './components/TopButton'

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Projects />
      <Contact />
      <About />
      <Footer />
      <TopButton />
    </>
  )
}
