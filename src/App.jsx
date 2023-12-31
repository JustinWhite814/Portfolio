import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import Socials from './components/socials/Socials'
import './app.scss'
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
      <Socials />
     </div>
    </div>
  );
}

export default App;
