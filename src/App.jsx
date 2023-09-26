import NavBar from './components/navBar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/works/works';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
function App()
{
  return <div className="app">
    <NavBar/>
    <Intro/>
    <Skills/>
    <Works/>
    <Contact/>
    <Footer/>
  </div>
}

export default App