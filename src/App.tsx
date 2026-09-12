import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Capabilities />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
