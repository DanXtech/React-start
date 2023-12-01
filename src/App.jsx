import './App.css'
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonials/Testimonial';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={`${darkMode && 'dark-mode'}`}>
        <div className='App'>
          <Navbar handleToggleDarkMode={setDarkMode} />
          <Intro />
          <Services />
          <Experience />
          <Work />
          <Portfolio />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
