import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = [
    { thumb: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600", full: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200", alt: "TrimBox haircut model 1" },
    { thumb: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=600", full: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200", alt: "TrimBox haircut model 2" },
    { thumb: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600", full: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200", alt: "TrimBox haircut model 3" },
    { thumb: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?q=80&w=600", full: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?q=80&w=1200", alt: "TrimBox haircut model 4" },
    { thumb: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=600", full: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200", alt: "TrimBox haircut model 5" },
    { thumb: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600", full: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200", alt: "TrimBox haircut model 6" },
    { thumb: "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?q=80&w=600", full: "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?q=80&w=1200", alt: "TrimBox haircut model 7" },
    { thumb: "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=600", full: "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=1200", alt: "TrimBox haircut model 8" }
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (e, direction) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    
    let nextIndex = lightboxIndex + direction;
    if (nextIndex >= images.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = images.length - 1;
    setLightboxIndex(nextIndex);
  };

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox(e, 1);
      if (e.key === 'ArrowLeft') navigateLightbox(e, -1);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex]);

  return (
    <>
      <section className="gallery-section" id="gallery">
        <div className="section-container">
          <div className="section-header js-reveal">
            <h2 className="section-title">The Work</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="gallery-grid">
            {images.map((img, idx) => (
              <div 
                key={idx}
                className="gallery-item js-reveal" 
                onClick={() => openLightbox(idx)}
              >
                <img src={img.thumb} alt={img.alt} className="gallery-img" />
                <div className="gallery-hover-overlay">
                  <span className="view-label">View Cut</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <div 
        className={`lightbox ${lightboxIndex !== null ? 'active' : ''}`} 
        id="lightbox" 
        aria-hidden={lightboxIndex === null ? 'true' : 'false'} 
        role="dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget || e.target.classList.contains('lightbox-content')) {
            closeLightbox();
          }
        }}
      >
        <button className="lightbox-close" aria-label="Close Lightbox" onClick={closeLightbox}>&times;</button>
        <button className="lightbox-arrow lightbox-prev" aria-label="Previous Image" onClick={(e) => navigateLightbox(e, -1)}>&#10094;</button>
        <button className="lightbox-arrow lightbox-next" aria-label="Next Image" onClick={(e) => navigateLightbox(e, 1)}>&#10095;</button>
        <div className="lightbox-content">
          {lightboxIndex !== null && (
            <img src={images[lightboxIndex].full} alt={images[lightboxIndex].alt} className="lightbox-img-expanded" />
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
