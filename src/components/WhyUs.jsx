import React, { useEffect, useRef } from 'react';

const StatCard = ({ icon, target, decimals = 0, suffix = '', label, valueText }) => {
  const valueRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!target) return; // If there's no target number, skip the count animation

    const countUp = (element) => {
      let current = 0;
      const duration = 1800; // ms
      const frameRate = 60;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      let frame = 0;
      
      const animate = () => {
        frame++;
        const progress = frame / totalFrames;
        // Ease out quadratic progress curves
        const easeProgress = progress * (2 - progress);
        current = easeProgress * target;
        
        element.textContent = current.toFixed(decimals) + suffix;
        
        if (frame < totalFrames) {
          requestAnimationFrame(animate);
        } else {
          element.textContent = target.toFixed(decimals) + suffix;
        }
      };
      
      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          countUp(valueRef.current);
        }
      });
    }, { threshold: 0.15 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [target, decimals, suffix]);

  return (
    <div className="stat-card js-reveal" ref={cardRef}>
      <div className="stat-icon">
        {icon}
      </div>
      {target ? (
        <div className="stat-value" ref={valueRef}>
          {0 + suffix}
        </div>
      ) : (
        <div className="stat-value-text">{valueText}</div>
      )}
      <div className="stat-label">{label}</div>
    </div>
  );
};

const WhyUs = () => {
  const stats = [
    {
      target: 500,
      suffix: "+",
      label: "Happy Clients",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      valueText: "Same-Day",
      label: "Booking Available",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )
    },
    {
      target: 4.9,
      decimals: 1,
      suffix: "★",
      label: "Google Rated",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }
  ];

  return (
    <section className="why-section" id="why-trimbox">
      <div className="section-container">
        <div className="section-header js-reveal">
          <h2 className="section-title">Why TrimBox</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
