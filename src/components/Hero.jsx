import './Hero.css';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');
  
  // Sample images - you can replace these with your actual image paths
   const carouselImages = [
    '/src/assets/carouselscreens/Dashboard.png',
    '/src/assets/carouselscreens/JurisChatScreen.png',
    '/src/assets/carouselscreens/Create Drafts.png',
    '/src/assets/carouselscreens/Community.png',
    '/src/assets/carouselscreens/Help & Support.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('next');
      setIsTransitioning(true);
      
      // Change index halfway through the animation for smoother transition
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % carouselImages.length
        );
      }, 600); // Changed from 2000 to 600ms - halfway point
      
      // End transition after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200); // Changed from 2000 to 1200ms - matches CSS animation duration
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const getImageIndex = (offset) => {
    return (currentImageIndex + offset + carouselImages.length) % carouselImages.length;
  };

  const handleIndicatorClick = (index) => {
    if (index !== currentImageIndex && !isTransitioning) {
      setSlideDirection(index > currentImageIndex ? 'next' : 'prev');
      setIsTransitioning(true);
      
      // Change index halfway through the animation
      setTimeout(() => {
        setCurrentImageIndex(index);
      }, 600);
      
      // End transition after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200);
    }
  };

  const handlePrevClick = () => {
    if (!isTransitioning) {
      setSlideDirection('prev');
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
      }, 600);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200);
    }
  };

  const handleNextClick = () => {
    if (!isTransitioning) {
      setSlideDirection('next');
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % carouselImages.length
        );
      }, 600);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Your AI Legal Assistant. Reimagined.</h1>
            <p>Experience the future of legal consultation with our sophisticated AI-powered platform. Get instant, accurate legal guidance tailored to your needs.</p>
            <div className="hero-download-buttons">
              <a 
                href="https://apps.apple.com/placeholder-app-store-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-store-btn"
              >
                <img 
                  src="/src/assets/icons/appstorebtn.png" 
                  alt="Download on the App Store" 
                  className="hero-store-btn-img"
                />
              </a>
              <a 
                href="https://play.google.com/placeholder-play-store-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-store-btn"
              >
                <img 
                  src="/src/assets/icons/playstorebtn.png" 
                  alt="Get it on Google Play" 
                  className="hero-store-btn-img"
                />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-carousel">
              <div className={`carousel-container ${isTransitioning ? `sliding-${slideDirection}` : ''}`}>
                <div className={`carousel-image carousel-left ${isTransitioning ? 'transitioning' : ''}`}>
                  <img 
                    src={carouselImages[getImageIndex(-1)]} 
                    alt="Legal service showcase" 
                    className="carousel-img"
                  />
                </div>
                <div className={`carousel-image carousel-center ${isTransitioning ? 'transitioning' : ''}`}>
                  <img 
                    src={carouselImages[getImageIndex(0)]} 
                    alt="Legal service showcase" 
                    className="carousel-img"
                  />
                </div>
                <div className={`carousel-image carousel-right ${isTransitioning ? 'transitioning' : ''}`}>
                  <img 
                    src={carouselImages[getImageIndex(1)]} 
                    alt="Legal service showcase" 
                    className="carousel-img"
                  />
                </div>
              </div>
              <div className="carousel-controls">
                <button 
                  className="carousel-arrow carousel-arrow-prev"
                  onClick={handlePrevClick}
                  disabled={isTransitioning}
                  aria-label="Previous image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                
                <div className="carousel-indicators">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => handleIndicatorClick(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  className="carousel-arrow carousel-arrow-next"
                  onClick={handleNextClick}
                  disabled={isTransitioning}
                  aria-label="Next image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;