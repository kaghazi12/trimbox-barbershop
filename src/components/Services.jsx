import React, { useRef } from 'react';

const ServiceCard = ({ icon, name, price, desc }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate by max 10 degrees based on offset
    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <div 
      className="service-card js-reveal" 
      tabIndex="0"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="service-icon">
        {icon}
      </div>
      <h3 className="service-name">{name}</h3>
      <div className="service-price">${price}</div>
      <p className="service-desc">{desc}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      name: "Haircut",
      price: "35",
      desc: "Precision haircut tailored to your head shape and personal style.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="12.5" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      )
    },
    {
      name: "Beard Trim",
      price: "20",
      desc: "Line up, trim, and conditioning treatment for a sharp look.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
          <path d="M12 8v13" />
          <path d="M19 12h-4" />
          <path d="M9 12H5" />
          <path d="M17 16h-3" />
          <path d="M10 16H7" />
        </svg>
      )
    },
    {
      name: "Hot Towel Shave",
      price: "30",
      desc: "Traditional straight razor shave with warm steam and soothing oils.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          <path d="M3 11h18" />
          <path d="M12 11v8" />
          <circle cx="12" cy="20" r="1" />
          <path d="M9 14h6" />
        </svg>
      )
    },
    {
      name: "Kids Cut",
      price: "25",
      desc: "Stylish cut for the young ones, keeping them sharp and fresh.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      )
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <div className="section-header js-reveal">
          <h2 className="section-title">Services</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="services-grid">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
