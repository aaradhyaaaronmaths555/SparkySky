import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth transitions
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={`app ${isLoading ? 'loading' : 'loaded'}`}>
    
      {/* Background Elements */}
      <div className="background-elements">
        <div className="grid-background"></div>
        <div className="neural-network"></div>
        <div className="ambient-light"></div>
        <div className="circuit-container">
          <div className="circuit" style={{"--index": "1"}}></div>
          <div className="circuit" style={{"--index": "2"}}></div>
          <div className="circuit" style={{"--index": "3"}}></div>
        </div>
        
        {/* Additional background effects */}
        <div className="glow-points">
          {[...Array(5)].map((_, index) => (
            <div 
              key={index} 
              className="glow-point"
              style={{
                "--delay": `${index * 2}s`,
                "--position": `${index * 20}%`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navbar - Fixed at top */}
      <Navbar />
      
      {/* Main Content */}
      <main className="main-content">
        <div className="section-wrapper">
          <section id="home" className="section">
            <Home />
          </section>
          <section id="about" className="section">
            <About />
          </section>
          <section id="services" className="section">
            <Services />
          </section>
          <section id="blog" className="section">
          <Blog/>
          </section>
          <section id="contact" className="section">
            <Contact />
          </section>
         
        </div>
      </main>
    </div>
  );
}

export default App;