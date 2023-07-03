import Link from 'next/link'
import Hero from './components/Hero'
import Divider from './components/Divider'
import Projects from './components/Projects'
import AnimatedNav from './components/AnimatedNav'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Projects />
      <Contact />
    </>
  )
}
