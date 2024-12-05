import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock scroll when mobile menu is open
  const lockScroll = useCallback(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarCompensation}px`;
  }, []);

  // Unlock scroll when mobile menu is closed
  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [isOpen, lockScroll, unlockScroll]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      unlockScroll();
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="nav-content">
        <div className="logo-container">
          <span className="brand-name">SPARKY SKY</span>
        </div>

        <div className="nav-links desktop-menu">
          <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>
            About
          </a>
          <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, 'services')}>
            Services
          </a>
          <a href="#blog" className="nav-link" onClick={(e) => handleNavClick(e, 'blog')}>
            Blog
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
          </a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
          <div className="mobile-menu-container">
            <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>
              <span className="nav-link-text">Home</span>
              <div className="nav-link-glow" />
            </a>
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>
              <span className="nav-link-text">About</span>
              <div className="nav-link-glow" />
            </a>
            <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, 'services')}>
              <span className="nav-link-text">Services</span>
              <div className="nav-link-glow" />
            </a>
            <a href="#blog" className="nav-link" onClick={(e) => handleNavClick(e, 'blog')}>
              <span className="nav-link-text">Blog</span>
              <div className="nav-link-glow" />
            </a>
            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>
              <span className="nav-link-text">Contact</span>
              <div className="nav-link-glow" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;