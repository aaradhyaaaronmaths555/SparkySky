import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Zap, Users } from 'lucide-react';
import './About.css';
const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-background">
        <div className="tech-grid"></div>
        <div className="glow-overlay"></div>
      </div>

      <div className="about-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="highlight">SPARKY SKY</span>
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-content">
              <div className="intro-badge">Innovative Digital Solutions</div>
              
              <p className="lead-text">
                Welcome to <span className="highlight-text">SPARKY SKY</span> – 
                where innovation meets excellence in digital transformation.
              </p>

              <div className="mission-card">
                <h3 className="mission-title">Our Mission</h3>
                <p className="mission-text">
                  "Empowering businesses through cutting-edge technology and 
                  innovative solutions that drive growth and digital excellence."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="iphone-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="iphone-frame">
              <div className="iphone-notch">
                <div className="notch-camera"></div>
                <div className="notch-speaker"></div>
              </div>
              <div className="iphone-screen">
                <div className="screen-content">
                  {/* Header Section */}
                  <div className="screen-header">
                    <h3 className="phone-header">Digital Innovation Hub</h3>
                    <p className="phone-subtitle">Building the Future</p>
                  </div>

                  {/* Main Grid */}
                  <div className="screen-grid">
                    <div className="grid-item">
                      <h4>Our Stack</h4>
                      <ul className="expertise-list">
                        <li>Web3 Solutions</li>
                        <li>Blockchain</li>
                        <li>AI Integration</li>
                      </ul>
                    </div>

                    <div className="grid-item">
                      <div className="impact-stats">
                        <div className="stat">
                          <span className="stat-number">50+</span>
                          <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat">
                          <span className="stat-number">30+</span>
                          <span className="stat-label">Clients</span>
                        </div>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="features-grid">
                      <motion.div 
                        className="feature-item"
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      >
                        <Sparkles className="feature-icon" size={16} />
                        <h4>Innovation</h4>
                        <p>Cutting-edge solutions</p>
                      </motion.div>

                      <motion.div 
                        className="feature-item"
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      >
                        <Code className="feature-icon" size={16} />
                        <h4>Tech Stack</h4>
                        <p>Modern architecture</p>
                      </motion.div>

                      <motion.div 
                        className="feature-item"
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      >
                        <Zap className="feature-icon" size={16} />
                        <h4>Performance</h4>
                        <p>Optimized systems</p>
                      </motion.div>

                      <motion.div 
                        className="feature-item"
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      >
                        <Users className="feature-icon" size={16} />
                        <h4>Support</h4>
                        <p>24/7 assistance</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;