import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Marquee from '@/components/Marquee'
import TechStack from '@/components/TechStack'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Cursor />
      <Nav />
      <ScrollProgress />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <Marquee />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  )
}
