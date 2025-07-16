import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    'https://plus.unsplash.com/premium_photo-1670524465634-93cf255ffa8b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2xhZGVzaGklMjB3ZWRkaW5nfGVufDB8fDB8fHww',
    'https://www.nijolcreative.com/wp-content/uploads/2023/07/Nijol-creative-wedding-photography-services.jpg',
    'https://www.fearlessphotographers.com/images/photogs/Nipun-Hazra-414.jpg'
  ];

  const slideContent = [
    {
      title: "Capturing Moments",
      subtitle: "Professional Wedding Photography",
      description: "Creating timeless memories with artistic vision and precision"
    },
    {
      title: "Creative Excellence",
      subtitle: "Award-winning Photography Services",
      description: "Bringing your special moments to life with stunning visuals"
    },
    {
      title: "Timeless Artistry",
      subtitle: "Fearless Photography Approach",
      description: "Documenting love stories with passion and creativity"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  if (isLoading) {
    return (
      <div className="h-[90vh] bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[90vh] bg-black text-white overflow-hidden">
      {/* Main Slider Container */}
      <div className="relative w-full h-full">
        {/* Slides */}
        <div className="relative w-full h-full">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              {/* Slide Image */}
              <img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              
              {/* Enhanced Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/50"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                  <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {slideContent[index].title}
                  </h1>
                  
                  <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-gray-200 transition-all duration-1000 delay-200 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {slideContent[index].subtitle}
                  </h2>
                  
                  <p className={`text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {slideContent[index].description}
                  </p>
                  
                  <button className={`bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/30 transition-all duration-300 font-medium text-sm sm:text-base border border-white/20 hover:border-white/40 transform hover:scale-105 active:scale-95 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: index === currentSlide ? '600ms' : '0ms' }}>
                    Explore Our Work
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20 hover:border-white/40 group z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="group-hover:scale-110 transition-transform duration-200" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20 hover:border-white/40 group z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="group-hover:scale-110 transition-transform duration-200" />
        </button>

      

        {/* Pagination Dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 border-2 ${
                index === currentSlide
                  ? 'bg-white border-white scale-110'
                  : 'bg-white/30 border-white/50 hover:bg-white/50 hover:border-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

    
      </div>

      {/* Custom CSS for progress animation */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .progress-bar {
          animation: progress 4s linear infinite;
        }
        
        @media (max-width: 640px) {
          .progress-bar {
            animation: progress 4s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;