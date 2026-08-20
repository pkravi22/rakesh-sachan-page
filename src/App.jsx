import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Positions from './components/Positions';
import Achievements from './components/Achievements';
import Contributions from './components/Contributions';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Quotes from './components/Quotes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-wrapper">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Positions />
      <Achievements />
      <Contributions />
      <Gallery />
      <Timeline />
      <Quotes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
