import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: '🏥',
      title: 'Emergency Care',
      description: '24/7 emergency services with state-of-the-art facilities',
      delay: '0s'
    },
    {
      icon: '👨‍⚕️',
      title: 'Expert Doctors',
      description: 'Highly qualified specialists across all departments',
      delay: '0.1s'
    },
    {
      icon: '💊',
      title: 'Pharmacy',
      description: 'In-house pharmacy with comprehensive medication',
      delay: '0.2s'
    },
    {
      icon: '🔬',
      title: 'Diagnostics',
      description: 'Advanced lab and imaging diagnostic services',
      delay: '0.3s'
    },
    {
      icon: '🩺',
      title: 'Health Checkups',
      description: 'Comprehensive preventive health screening packages',
      delay: '0.4s'
    },
    {
      icon: '🏃',
      title: 'Wellness Programs',
      description: 'Personalized fitness and nutrition guidance',
      delay: '0.5s'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Patients Treated', delay: '0s' },
    { number: '200+', label: 'Expert Doctors', delay: '0.1s' },
    { number: '15+', label: 'Departments', delay: '0.2s' },
    { number: '24/7', label: 'Emergency Care', delay: '0.3s' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      text: 'The care I received at HealFlow was exceptional. The doctors are truly dedicated and professional.',
      rating: 5,
      delay: '0s'
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      text: 'Outstanding facilities and compassionate staff. I felt safe and well-cared for throughout my treatment.',
      rating: 5,
      delay: '0.1s'
    },
    {
      name: 'Emily Davis',
      role: 'Patient',
      text: 'HealFlow has transformed healthcare in our community. Highly recommend their services!',
      rating: 5,
      delay: '0.2s'
    }
  ];

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-icon">⚕️</span>
              <span className="logo-text">HealFlow</span>
            </div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-buttons">
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/register" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Your Health,
                <span className="gradient-text"> Our Priority</span>
              </h1>
              <p className="hero-subtitle">
                Experience world-class healthcare with HealFlow. Advanced medical care, 
                compassionate service, and cutting-edge technology - all in one place.
              </p>
              <div className="hero-buttons">
                <Link to="/register" className="btn btn-hero-primary">Book Appointment</Link>
                <a href="#services" className="btn btn-hero-secondary">Explore Services</a>
              </div>
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item" style={{ animationDelay: stat.delay }}>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <div className="floating-card card-1">
                  <span className="card-icon">❤️</span>
                  <span className="card-text">Heart Care</span>
                </div>
                <div className="floating-card card-2">
                  <span className="card-icon">🧠</span>
                  <span className="card-text">Neurology</span>
                </div>
                <div className="floating-card card-3">
                  <span className="card-icon">👶</span>
                  <span className="card-text">Pediatrics</span>
                </div>
                <div className="main-image-placeholder">
                  <svg viewBox="0 0 400 500" fill="none">
                    <rect width="400" height="500" fill="url(#doctorGradient)" rx="20"/>
                    <defs>
                      <linearGradient id="doctorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2"/>
                      </linearGradient>
                    </defs>
                    <circle cx="200" cy="150" r="60" fill="#4F46E5" opacity="0.3"/>
                    <rect x="140" y="220" width="120" height="200" rx="10" fill="#06B6D4" opacity="0.3"/>
                    <text x="200" y="480" fontSize="20" textAnchor="middle" fill="#4F46E5" opacity="0.5">
                      Healthcare Professional
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive healthcare solutions tailored to your needs
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card"
                style={{ animationDelay: service.delay }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="about-image-placeholder">
                <svg viewBox="0 0 500 400" fill="none">
                  <rect width="500" height="400" fill="url(#aboutGradient)" rx="20"/>
                  <defs>
                    <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                  <circle cx="150" cy="150" r="80" fill="#4F46E5" opacity="0.2"/>
                  <circle cx="350" cy="250" r="100" fill="#06B6D4" opacity="0.2"/>
                  <rect x="100" y="280" width="300" height="80" rx="10" fill="#10B981" opacity="0.2"/>
                  <text x="250" y="380" fontSize="24" textAnchor="middle" fill="#4F46E5" opacity="0.5">
                    Modern Healthcare Facility
                  </text>
                </svg>
              </div>
            </div>
            <div className="about-text">
              <h2 className="about-title">About HealFlow</h2>
              <p className="about-description">
                HealFlow is a leading healthcare institution committed to providing exceptional 
                medical care with compassion and excellence. With over 15 years of experience, 
                we've been at the forefront of medical innovation and patient care.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">State-of-the-art medical equipment</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Experienced and caring medical staff</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Patient-centered approach to healthcare</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Comprehensive medical services</span>
                </div>
              </div>
              <Link to="/register" className="btn btn-primary">Join HealFlow</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-subtitle">
              Real experiences from real people
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                style={{ animationDelay: testimonial.delay }}
              >
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="contact-title">Get In Touch</h2>
              <p className="contact-description">
                Have questions? We're here to help. Reach out to us through any of these channels.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <div className="contact-label">Address</div>
                    <div className="contact-value">123 Healthcare Ave, Medical District</div>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">contact@healflow.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <div>
                    <div className="contact-label">Hours</div>
                    <div className="contact-value">24/7 Emergency Services</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="4" className="form-input"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-icon">⚕️</span>
                <span className="logo-text">HealFlow</span>
              </div>
              <p className="footer-description">
                Providing exceptional healthcare services with compassion and excellence.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><Link to="/register">Appointments</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Departments</h4>
              <ul className="footer-links">
                <li><a href="#services">Cardiology</a></li>
                <li><a href="#services">Neurology</a></li>
                <li><a href="#services">Pediatrics</a></li>
                <li><a href="#services">Orthopedics</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 HealFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
