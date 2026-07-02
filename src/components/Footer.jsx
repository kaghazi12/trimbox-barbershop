import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Barber Pole Stripe Top Accent (Horizontal) */}
      <div className="barber-pole-accent"></div>
      
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo Column */}
          <div className="footer-col brand-col js-reveal">
            <a href="#" className="logo">TRIM<span>BOX</span></a>
            <p className="brand-tagline">Engineered grooming for the modern urban schedule.</p>
          </div>

          {/* Address / Map Column */}
          <div className="footer-col map-col js-reveal">
            <h4 className="footer-heading">Find Us</h4>
            <p className="address-text">120 Urban Ave, Suite 100<br/>New York, NY 10001</p>
            {/* Map Embed Placeholder */}
            <div className="map-placeholder">
              <span className="map-placeholder-text">Map Embed Placeholder</span>
            </div>
          </div>

          {/* Hours Column */}
          <div className="footer-col hours-col js-reveal">
            <h4 className="footer-heading">Hours</h4>
            <ul className="hours-list">
              <li><span>Mon - Fri:</span> <span>9:00 AM - 8:00 PM</span></li>
              <li><span>Sat:</span> <span>9:00 AM - 6:00 PM</span></li>
              <li><span>Sun:</span> <span>10:00 AM - 4:00 PM</span></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="footer-col social-col js-reveal">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2026 TrimBox Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
