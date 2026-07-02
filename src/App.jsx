import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

// GSAP and ScrollTrigger
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Check if GSAP and ScrollTrigger are loaded
    gsap.set('.js-reveal', { clearProps: 'transition' });

    const entryStart = 'top 85%';
    const entryDuration = 0.4;
    const entryEase = 'power2.out';

    // A. Services Section
    gsap.fromTo('#services .section-header', { opacity: 0, y: 24 }, {
      scrollTrigger: { trigger: '#services', start: entryStart, once: true },
      opacity: 1, y: 0, duration: entryDuration, ease: entryEase
    });

    gsap.fromTo('#services .service-card', { opacity: 0, y: 24 }, {
      scrollTrigger: { trigger: '#services .services-grid', start: entryStart, once: true },
      opacity: 1, y: 0, stagger: 0.1, duration: entryDuration, ease: entryEase
    });

    // B. Why TrimBox Section
    gsap.fromTo('#why-trimbox .section-header', { opacity: 0, y: 24 }, {
      scrollTrigger: { trigger: '#why-trimbox', start: entryStart, once: true },
      opacity: 1, y: 0, duration: entryDuration, ease: entryEase
    });

    gsap.fromTo('#why-trimbox .stat-card', { opacity: 0, y: 24 }, {
      scrollTrigger: { trigger: '#why-trimbox .stats-grid', start: entryStart, once: true },
      opacity: 1, y: 0, stagger: 0.1, duration: entryDuration, ease: entryEase
    });

    // C. Booking Section
    gsap.fromTo('#booking .section-header', { opacity: 0, y: 24 }, {
      scrollTrigger: { trigger: '#booking', start: entryStart, once: true },
      opacity: 1, y: 0, duration: entryDuration, ease: entryEase
    });

    gsap.fromTo('#booking .booking-wrapper', { opacity: 0, y: 24 }, {
      scrollTrigger: { trigger: '#booking .booking-wrapper', start: entryStart, once: true },
      opacity: 1, y: 0, duration: entryDuration, ease: entryEase
    });

    // D. Gallery Section
    gsap.fromTo('#gallery .section-header', { opacity: 0, y: 24 }, {
      scrollTrigger: { trigger: '#gallery', start: entryStart, once: true },
      opacity: 1, y: 0, duration: entryDuration, ease: entryEase
    });

    gsap.fromTo('#gallery .gallery-item', { opacity: 0, y: 24 }, {
      scrollTrigger: { trigger: '#gallery .gallery-grid', start: entryStart, once: true },
      opacity: 1, y: 0, stagger: 0.08, duration: entryDuration, ease: entryEase
    });

    // E. Reviews Section
    gsap.fromTo('#reviews .section-header', { opacity: 0, y: 24 }, {
      scrollTrigger: { trigger: '#reviews', start: entryStart, once: true },
      opacity: 1, y: 0, duration: entryDuration, ease: entryEase
    });

    gsap.fromTo('#reviews .reviews-carousel', { opacity: 0, y: 24 }, {
      scrollTrigger: { trigger: '#reviews .reviews-carousel', start: entryStart, once: true },
      opacity: 1, y: 0, duration: entryDuration, ease: entryEase
    });

    // F. Footer Section
    gsap.fromTo('.footer-section .footer-col', { opacity: 0, y: 24 }, {
      scrollTrigger: { trigger: '.footer-section', start: entryStart, once: true },
      opacity: 1, y: 0, stagger: 0.1, duration: entryDuration, ease: entryEase
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Booking />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

export default App;
