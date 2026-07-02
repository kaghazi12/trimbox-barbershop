import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, targetId) => {
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const headerHeight = document.getElementById('header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      closeMobileMenu();
    }
  };

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`} id="header">
        <div className="header-container">
          <a href="#" className="logo">TRIM<span>BOX</span></a>
          
          <nav className="desktop-nav">
            <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
            <a href="#why-trimbox" className="nav-link" onClick={(e) => handleNavClick(e, '#why-trimbox')}>Why Us</a>
            <a href="#gallery" className="nav-link" onClick={(e) => handleNavClick(e, '#gallery')}>Gallery</a>
            <a href="#reviews" className="nav-link" onClick={(e) => handleNavClick(e, '#reviews')}>Reviews</a>
            <a href="#booking" className="btn btn-pill btn-accent nav-cta" onClick={(e) => handleNavClick(e, '#booking')}>Book Now</a>
          </nav>

          <div className="header-actions">
            <button 
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
              id="hamburger-btn" 
              aria-label="Toggle Navigation"
              onClick={toggleMobileMenu}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
        id="mobile-menu"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMobileMenu();
        }}
      >
        <button className="close-btn" id="close-menu-btn" aria-label="Close Navigation" onClick={closeMobileMenu}>&times;</button>
        <nav className="mobile-nav-links">
          <a href="#services" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
          <a href="#why-trimbox" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#why-trimbox')}>Why Us</a>
          <a href="#gallery" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#gallery')}>Gallery</a>
          <a href="#reviews" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#reviews')}>Reviews</a>
          <a href="#booking" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#booking')}>Book Now</a>
        </nav>
      </div>
    </>
  );
};

export default Header;
