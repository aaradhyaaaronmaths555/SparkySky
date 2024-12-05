import React, { useState, useEffect } from 'react';
import './Home.css';
import logo from '../images/logo.png';
import about from '../images/about-image.png';
import blog1 from '../images/blog1.png';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const NeonBackground = () => {
    const sparkles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4
    }));
  
    return (
      <div className="neon-bg">
        <div className="sparkles">
          {sparkles.map(sparkle => (
            <div
              key={sparkle.id}
              className="sparkle"
              style={{
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
                left: `${sparkle.left}%`,
                top: `${sparkle.top}%`,
                animationDelay: `${sparkle.delay}s`
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  

  // Handle cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-nav') && !event.target.closest('.mobile-menu-button')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Header */}
      <header className="header">
        <nav className="nav-container">
          <div className="logo">
            <img
              src={logo}
              alt="Outback Yak Logo"
              className="logo-image"
            />
            <span className="logo-text">Outback Yak</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isMenuOpen ? 'show' : ''}`}>
            <div className="mobile-nav-content">
              {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Build and elevate your digital solutions with us
            </h1>
            <p className="hero-text">
              Empowering businesses with cutting-edge Full Stack Development, DevOps, Cloud Technologies, AI, data analytics,
              and more. We tailor our expertise to teams and companies of all sizes, ensuring innovation and excellence in
              every project.
            </p>
            <div className="button-group">
              <a href="#contact" className="primary-button">Contact Us Now</a>
              <a href="#about" className="secondary-button">Learn More</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
  <h2 className="section-title">About Outback Yak</h2>
  <div className="about-content">
    <div className="about-text">
      <p>
        Outback Yak is a premium software solutions partner for startups and 
        scaleups. We help our clients build and launch digital products that drive 
        innovation and growth.
      </p>
      <p>
        Our team of experts specializes in full-stack web development, solutions 
        architecture, cloud computing, big data, machine learning, and generative AI. 
        We're committed to delivering cutting-edge solutions that empower businesses 
        to thrive in the digital age.
      </p>
      <a href="#contact" className="primary-button about-button">
        Learn More About Us
      </a>
    </div>
    <div className="about-image">
      <img 
        src={about} // Changed this line to use the imported image
        alt="About Outback Yak" 
        className="about-img"
      />
    </div>
  </div>
</section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="section-container">
            <h2 className="section-title">Our Services</h2>
            <div className="services-grid">
              {[
                {
                  title: "Full Stack Development",
                  description: "From responsive design to robust server-side architectures, our solutions are tailored to meet the dynamic needs of modern businesses."
                },
                {
                  title: "DevOps Excellence",
                  description: "Our team implements the best in class tools and practices to streamline workflows, reduce deployment time, and enhance collaboration."
                },
                {
                  title: "Cloud Solutions",
                  description: "We design cloud solutions that are not only robust and secure but also optimized for cost and performance."
                },
                {
                  title: "Data Analytics",
                  description: "From predictive modeling to customer behavior analysis, our data-driven strategies help businesses make informed decisions."
                },
                {
                  title: "AI & Machine Learning",
                  description: "Leverage the power of artificial intelligence and machine learning to automate processes and gain valuable insights."
                },
                {
                  title: "Cybersecurity",
                  description: "We safeguard your business against potential threats while ensuring compliance with global cybersecurity standards."
                }
              ].map((service, index) => (
                <div key={index} className="service-card">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
<section id="blog" className="blog-section">
  <NeonBackground />
  <div className="section-container">
    <h2 className="section-title">Latest Insights</h2>
    <div className="blog-grid">
      {[
        {
          title: "The Future of Cloud Computing in 2024",
          excerpt: "Explore the latest trends in cloud computing, from serverless architecture to edge computing and how they're shaping the future of technology.",
          category: "Cloud Technology",
          date: "March 10, 2024",
          
          author: "Alex Thompson",
          image: blog1 // Using the about image temporarily - replace with actual blog image
        },
        {
          title: "Implementing DevOps: A Complete Guide",
          excerpt: "Learn how to successfully implement DevOps practices in your organization, from continuous integration to deployment automation.",
          category: "DevOps",
          date: "March 8, 2024",
          
          author: "Sarah Chen",
          image: blog1 // Using the about image temporarily - replace with actual blog image
        },
        {
          title: "AI in Modern Business Applications",
          excerpt: "Discover how artificial intelligence is transforming business operations and decision-making processes in 2024.",
          category: "Artificial Intelligence",
          date: "March 5, 2024",
          
          author: "Michael Brown",
          image: blog1 // Using the about image temporarily - replace with actual blog image
        }
      ].map((blog, index) => (
        <div key={index} className="blog-card">
          <div className="blog-card-inner">
            <div className="blog-image-container">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="blog-image" 
              />
              <div className="blog-category">{blog.category}</div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <div className="blog-meta">
                <div className="blog-author-date">
                  <span className="blog-author">{blog.author}</span>
                  <span className="blog-date">{blog.date}</span>
                </div>
                <span className="blog-read-time">{blog.readTime}</span>
              </div>
              <a href="#" className="blog-read-more">
                Read More
                <svg 
                  className="arrow-icon" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="section-container">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3 className="contact-subtitle">Contact Information</h3>
                <p className="contact-description">
                  Ready to transform your business? Let's start a conversation about your project today!
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <svg
                      className="contact-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span>+61 3 9123 4567</span>
                  </div>
                  <div className="contact-item">
                    <svg
                      className="contact-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                    <span>info@outbackyak.com</span>
                  </div>
                  <div className="contact-item">
                    <svg
                      className="contact-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Melbourne, Australia</span>
                  </div>
                </div>
              </div>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="form-input"
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="form-input"
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="form-input"
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="Your Message" 
                    className="form-textarea"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="primary-button w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <img src={logo} alt="Outback Yak Logo" className="footer-logo" />
            <p className="footer-description">
              Outback Yak is a premium software solutions partner for startups and scaleups.
            </p>
            <p className="footer-details">Melbourne, AU • ABN 11 672 730 773</p>
          </div>
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-menu">
              {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-social">
            <h3 className="footer-title">Connect with us</h3>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="sr-only">LinkedIn</span>
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="sr-only">Twitter</span>
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="sr-only">Instagram</span>
                <svg viewBox="0 0 24 24" className="social-icon">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Outback Yak. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;