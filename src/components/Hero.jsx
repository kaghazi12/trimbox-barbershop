import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      
      window.requestAnimationFrame(() => {
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
        }
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
          contentRef.current.style.opacity = `${Math.max(0, 1 - scrollY / 650)}`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#booking');
    if (targetElement) {
      const headerHeight = document.getElementById('header')?.offsetHeight || 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-wrapper">
        <div className="hero-bg" id="hero-bg-img" ref={bgRef}></div>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content" ref={contentRef}>
        <h1 className="hero-title">PRECISION CUTS.<br/>NO WAITING.</h1>
        <p className="hero-subtitle">Modern urban barbering engineered for your schedule. High-fidelity grooming, zero friction.</p>
        <a href="#booking" className="btn btn-sharp btn-accent hero-cta" onClick={handleCtaClick}>Book Your Slot</a>
      </div>
    </section>
  );
};

export default Hero;
