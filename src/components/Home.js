import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cubeRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      if (!cubeRef.current) return;
      
      const { left, top, width, height } = cubeRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 30;
      const y = ((e.clientY - top) / height - 0.5) * 30;
      
      cubeRef.current.style.transform = 
        `rotateX(${-y}deg) rotateY(${x}deg)`;
    };

    const container = cubeRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleGetStarted = () => {
    navigate('/services');
  };

  const handleLearnMore = () => {
    navigate('/contact');
  };

  return (
    <div className="hero-section">
      {/* Left Content Side */}
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1 className="hero-title">
          HELPING YOU TO ACHIEVE
          <span className="gradient-text"> DIGITAL EXCELLENCE </span> 
          WITH US
        </h1>
        
        <p className="hero-text">
          TRANSFORM YOUR BUSINESS WITH CUTTING EDGE SOLUTION. WE DELIVER EXCEPTIONAL RESULTS THROUGH
          <span className="highlight">STRATEGIC PLANNING</span>,
          <span className="highlight">CREATIVE DESIGN</span>, AND 
          <span className="highlight">EFFECTIVE MARKETING</span>.<br />
          WE TRANSROM YOUR BUSINESS TO BE AT THE TOP OF THE MARKET.
        </p>
        
        <div className="cta-container">
          <button 
            className="cta-button primary"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
          <button 
            className="cta-button secondary"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right 3D Cube Side */}
      <div className="cube-container">
        <div className="scene">
          <div className="cube" ref={cubeRef}>
            <div className="cube-face front">
              <div className="cube-face-content">
                <span>BOOST</span>
                <div className="face-icon">🚀</div>
              </div>
            </div>
            <div className="cube-face back">
              <div className="cube-face-content">
                <span>IMPROVE</span>
                <div className="face-icon">📈</div>
              </div>
            </div>
            <div className="cube-face right">
              <div className="cube-face-content">
                <span>AMPLIFY</span>
                <div className="face-icon">🔊</div>
              </div>
            </div>
            <div className="cube-face left">
              <div className="cube-face-content">
                <span>ENHANCE</span>
                <div className="face-icon">✨</div>
              </div>
            </div>
            <div className="cube-face top">
              <div className="cube-face-content">
                <span>ACHIEVE</span>
                <div className="face-icon">🏆</div>
              </div>
            </div>
            <div className="cube-face bottom">
              <div className="cube-face-content">
                <span>DELIVER</span>
                <div className="face-icon">📦</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;