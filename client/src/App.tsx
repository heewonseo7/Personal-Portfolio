import Navbar from './components/Navbar';
import Education from './components/Education';
import Experience from './components/Experience';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {

  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Education></Education>
        <Experience></Experience>
        <Projects></Projects>
        <Skills></Skills>
        <Footer></Footer>
    </>
  )
}

export default App
