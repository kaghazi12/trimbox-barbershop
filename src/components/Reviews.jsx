import React, { useEffect, useRef } from 'react';

const Reviews = () => {
  const trackRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current || !carouselRef.current) return;

    let speed = 0.5; // Pixels shift speed per frame
    let x = 0;
    let isPaused = false;
    let isDragging = false;
    let startX = 0;
    let scrollX = 0;
    let animationFrameId;

    const animateMarquee = () => {
      if (!isPaused && !isDragging && trackRef.current) {
        x -= speed;
        const halfWidth = trackRef.current.offsetWidth / 2;
        if (Math.abs(x) >= halfWidth) {
          x = 0;
        }
        trackRef.current.style.transform = `translateX(${x}px)`;
      }
      animationFrameId = requestAnimationFrame(animateMarquee);
    };

    const handleMouseEnter = () => isPaused = true;
    const handleMouseLeave = () => isPaused = false;

    // Touch Swipe Support
    const handleTouchStart = (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
      scrollX = x;
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !trackRef.current) return;
      const deltaX = e.touches[0].clientX - startX;
      x = scrollX + deltaX;
      
      const halfWidth = trackRef.current.offsetWidth / 2;
      if (x > 0) {
        x -= halfWidth;
      } else if (x < -halfWidth) {
        x += halfWidth;
      }
      trackRef.current.style.transform = `translateX(${x}px)`;
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    // Mouse Drag Support
    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX;
      scrollX = x;
      if (carouselRef.current) carouselRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
      if (!isDragging || !trackRef.current) return;
      const deltaX = e.clientX - startX;
      x = scrollX + deltaX;
      
      const halfWidth = trackRef.current.offsetWidth / 2;
      if (x > 0) {
        x -= halfWidth;
      } else if (x < -halfWidth) {
        x += halfWidth;
      }
      trackRef.current.style.transform = `translateX(${x}px)`;
    };

    const handleMouseUp = () => {
      if (isDragging) {
        isDragging = false;
        if (carouselRef.current) carouselRef.current.style.cursor = 'grab';
      }
    };

    const carousel = carouselRef.current;
    
    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    
    carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
    carousel.addEventListener('touchmove', handleTouchMove, { passive: true });
    carousel.addEventListener('touchend', handleTouchEnd);
    
    carousel.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Start animation loop
    animateMarquee();

    return () => {
      cancelAnimationFrame(animationFrameId);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchmove', handleTouchMove);
      carousel.removeEventListener('touchend', handleTouchEnd);
      
      carousel.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const reviews = [
    {
      quote: `"Hands down the best fade in the city. Zero wait time is a complete game changer."`,
      author: "Marcus R.",
      date: "2 weeks ago"
    },
    {
      quote: `"Extremely professional, sharp aesthetic, and they value my time. Booked same-day and was out in 30 minutes."`,
      author: "David K.",
      date: "1 week ago"
    },
    {
      quote: `"Hot towel shave was top-tier. Clean lines, relaxing atmosphere, and precise detail."`,
      author: "Jordan P.",
      date: "3 days ago"
    },
    {
      quote: `"TrimBox is my new go-to. Highly skilled barbers who know exactly how to handle different hair types."`,
      author: "Alex M.",
      date: "5 days ago"
    }
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="section-container">
        <div className="section-header review-header-flex js-reveal">
          <h2 className="section-title">What Clients Say</h2>
          <div className="google-badge">
            <svg className="google-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            <span className="badge-text">4.9</span>
            <span className="badge-stars">★★★★★</span>
          </div>
        </div>
        <div className="title-underline"></div>
        
        {/* Infinite Carousel */}
        <div className="reviews-carousel js-reveal" ref={carouselRef}>
          <div className="reviews-track" id="reviews-track-id" ref={trackRef}>
            {/* GROUP 1 */}
            <div className="reviews-group">
              {reviews.map((review, idx) => (
                <div className="review-card" key={`g1-${idx}`}>
                  <div className="review-rating">★★★★★</div>
                  <p className="review-quote">{review.quote}</p>
                  <div className="review-meta">
                    <span className="review-author">{review.author}</span>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* GROUP 2 (DUPLICATED FOR MARQUEE LOOP) */}
            <div className="reviews-group" aria-hidden="true">
              {reviews.map((review, idx) => (
                <div className="review-card" key={`g2-${idx}`}>
                  <div className="review-rating">★★★★★</div>
                  <p className="review-quote">{review.quote}</p>
                  <div className="review-meta">
                    <span className="review-author">{review.author}</span>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
