import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Copy, Check, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // UI states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  // Contact information
  const contactInfo = {
    address: {
      street: '123 Web3 Street',
      city: 'Crypto Valley, CV 12345',
      region: 'Silicon Hills'
    },
    email: {
      contact: 'contact@example.com',
      support: 'support@example.com'
    },
    phone: {
      primary: '+1 (555) 123-4567',
      secondary: '+1 (555) 987-6543'
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email address';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulate API call - Replace with actual API endpoint
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    }
  };

  // Handle copy to clipboard
  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="section contact-section">
      <div className="section-container">
        {/* Header Section */}
        <div className="contact-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="header-content"
          >
            <div className="title-wrapper">
              <div className="glowing-line" />
              <h2 className="section-title">
                Connect <span className="highlight">With Us</span>
              </h2>
              <div className="glowing-line" />
            </div>
            <p className="subtitle">Let's Build the Future of Web3 Together</p>
          </motion.div>
        </div>

        {/* Contact Cards Grid */}
        <motion.div 
          className="contact-grid"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {/* Visit Us Card */}
          <motion.div
            className="contact-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="contact-info">
              <h3 className="card-title">Visit Us</h3>
              <ul className="contact-details">
                <motion.li whileHover={{ x: 5 }}>
                  <MapPin className="contact-icon" />
                  <span>{contactInfo.address.street}</span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <MapPin className="contact-icon" />
                  <span>{contactInfo.address.city}</span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <MapPin className="contact-icon" />
                  <span>{contactInfo.address.region}</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* Email Us Card */}
          <motion.div
            className="contact-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="contact-info">
              <h3 className="card-title">Email Us</h3>
              <ul className="contact-details">
                {Object.entries(contactInfo.email).map(([key, email]) => (
                  <motion.li
                    key={key}
                    whileHover={{ x: 5 }}
                    onClick={() => handleCopy(email, `email-${key}`)}
                    className="cursor-pointer"
                  >
                    <Mail className="contact-icon" />
                    <span>{email}</span>
                    {copiedField === `email-${key}` ? (
                      <Check className="copy-icon success" />
                    ) : (
                      <Copy className="copy-icon" />
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Call Us Card */}
          <motion.div
            className="contact-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="contact-info">
              <h3 className="card-title">Call Us</h3>
              <ul className="contact-details">
                {Object.entries(contactInfo.phone).map(([key, phone]) => (
                  <motion.li
                    key={key}
                    whileHover={{ x: 5 }}
                    onClick={() => handleCopy(phone, `phone-${key}`)}
                    className="cursor-pointer"
                  >
                    <Phone className="contact-icon" />
                    <span>{phone}</span>
                    {copiedField === `phone-${key}` ? (
                      <Check className="copy-icon success" />
                    ) : (
                      <Copy className="copy-icon" />
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          className="contact-form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
        >
          <div className="form-grid">
            <motion.div 
              className="form-group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </motion.div>

            <motion.div 
              className="form-group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
              />
            </motion.div>
          </div>

          <motion.div 
            className="form-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label htmlFor="subject" className="form-label">Subject (Optional)</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-input"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this regarding?"
            />
          </motion.div>

          <motion.div 
            className="form-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
            />
          </motion.div>

          <motion.button
            type="submit"
            className={`submit-button ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
            whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(136, 68, 34, 0.2)' }}
            whileTap={{ y: 0 }}
          >
            {isSubmitting ? (
              <div className="loading-spinner" />
            ) : (
              <>
                <Send className="button-icon" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>

          {submitStatus && (
            <motion.div
              className={`message ${submitStatus}-message`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {submitStatus === 'success' ? (
                <>
                  <Check className="message-icon" />
                  Message sent successfully!
                </>
              ) : (
                <>
                  <span className="message-icon">⚠️</span>
                  Failed to send message. Please try again.
                </>
              )}
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;