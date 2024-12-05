import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
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

  const services = [
    {
      title: "Full Stack Development",
      description: "From responsive design to robust server-side architectures, our solutions are tailored to meet the dynamic needs of modern businesses.",
      icon: "🚀"
    },
    {
      title: "DevOps Excellence",
      description: "Our team implements the best in class tools and practices to streamline workflows, reduce deployment time, and enhance collaboration.",
      icon: "⚙️"
    },
    {
      title: "Cloud Solutions",
      description: "We design cloud solutions that are not only robust and secure but also optimized for cost and performance.",
      icon: "☁️"
    },
    {
      title: "Data Analytics",
      description: "From predictive modeling to customer behavior analysis, our data-driven strategies help businesses make informed decisions.",
      icon: "📊"
    },
    {
      title: "AI & Machine Learning",
      description: "Leverage the power of artificial intelligence and machine learning to automate processes and gain valuable insights.",
      icon: "🤖"
    },
    {
      title: "Cybersecurity",
      description: "We safeguard your business against potential threats while ensuring compliance with global cybersecurity standards.",
      icon: "🔒"
    }
  ];

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="services-background">
        <div className="mirror-floor"></div>
        <div className="reflection-lines"></div>
        <div className="shimmer-overlay"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title">
          Our <span className="highlight">Services</span>
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ "--delay": `${index * 0.1}s` }}
            >
              <div className="card-content">
                <div className="service-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.description}</p>
              </div>
              <div className="card-reflection"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;