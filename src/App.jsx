import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './componenti/Header/Header'
import About from './componenti/About/About'
import Projects from './componenti/Projects/Projects'
import Skills from './componenti/Skills/Skills'
import Contact from './componenti/Contact/Contact'
import ScrollToTop from './componenti/ScrollToTop/ScrollToTop'
import Footer from './componenti/Footer/Footer'
import './App.css'

function App() {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
