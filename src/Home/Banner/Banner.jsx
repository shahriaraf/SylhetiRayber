import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef(null);

  // --- COLOR PALETTE (Reference) ---
  // Primary (Dark Maroon): #452829
  // Accent (Rose Gold): #E8D1C5
  // Text (Cream): #F3E8DF

  const images = [
    '../../../public/wedding.jpg',
    'https://www.nijolcreative.com/wp-content/uploads/2023/07/Nijol-creative-wedding-photography-services.jpg',
    'https://www.fearlessphotographers.com/images/photogs/Nipun-Hazra-414.jpg'
  ];

  // UPDATED CONTENT: Matrimony Context
  const slideContent = [
    {
      title: "আস্থা ও সম্পর্কের বন্ধন",
      subtitle: "বাংলাদেশের বিশ্বস্ত ম্যাট্রিমনি",
      description: "লক্ষাধিক ভেরিফাইড প্রোফাইল থেকে খুঁজে নিন আপনার স্বপ্নের মানুষকে। আমরা বিশ্বাস করি প্রতিটি সম্পর্কই বিশেষ।"
    },
    {
      title: "আপনার গল্পের শুরু এখান থেকেই",
      subtitle: "হাজারো সফল দম্পতি",
      description: "ধর্মীয় ও পারিবারিক মূল্যবোধের ভিত্তিতে উপযুক্ত জীবনসঙ্গী খোঁজার সেরা মাধ্যম। আপনার সুখের ঠিকানায় আমরা আছি পাশে।"
    },
    {
      title: "নিরাপদ ও গোপনীয়",
      subtitle: "প্রিমিয়াম ম্যাচমেকিং সেবা",
      description: "আপনার ব্যক্তিগত তথ্যের সর্বোচ্চ নিরাপত্তা নিশ্চিত করে, আধুনিক প্রযুক্তির সাহায্যে আমরা খুঁজে দিই পারফেক্ট ম্যাচ।"
    }
  ];

  // Auto-slide logic with Pause on Hover
  useEffect(() => {
    if (!isPaused && !isLoading) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 5000); 
    }
    return () => clearInterval(slideInterval.current);
  }, [isPaused, isLoading, images.length]);

  // Preload Images
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

  if (isLoading) {
    return (
      <div className="h-[90vh] bg-[#F3E8DF] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-[#E8D1C5] border-t-[#452829] rounded-full animate-spin mb-4"></div>
          <span className="text-[#452829] font-medium tracking-widest text-sm uppercase">লোড হচ্ছে...</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative h-[90vh] bg-black text-white overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Image with Ken Burns Effect (Slow Zoom) */}
            <div className={`w-full h-full overflow-hidden`}>
              <img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-cover transform transition-transform duration-[6000ms] ease-out ${
                  index === currentSlide ? 'scale-110' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>

            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            {/* Content Layer */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                
                {/* Subtitle */}
                <h3 className={`text-[#E8D1C5] text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 transition-all duration-700 ease-out transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {slideContent[index].subtitle}
                </h3>

                {/* Title */}
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight transition-all duration-700 delay-200 ease-out transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  {slideContent[index].title}
                </h1>

                {/* Description */}
                <p className={`text-base sm:text-lg md:text-xl text-[#F3E8DF]/90 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ease-out transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  {slideContent[index].description}
                </p>

                {/* CTA Button */}
                <div className={`transition-all duration-700 delay-500 ease-out transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <Link to='/register' className="group relative inline-flex items-center gap-3 bg-[#452829] text-[#F3E8DF] px-8 sm:px-10 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,209,197,0.3)] hover:-translate-y-1">
                    <span className="relative z-10 font-semibold tracking-wide">সঙ্গী খুঁজুন</span>
                    {/* Changed Icon to Heart for Matrimony context */}
                    <Heart size={20} className="relative z-10 group-hover:scale-110 transition-transform duration-300 fill-transparent group-hover:fill-[#F3E8DF]" />
                    {/* Hover Effect Layer */}
                    <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-md border border-white/10 text-white p-3 sm:p-4 rounded-full hover:bg-[#452829] hover:border-[#452829] transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-md border border-white/10 text-white p-3 sm:p-4 rounded-full hover:bg-[#452829] hover:border-[#452829] transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-[20px] group-hover:translate-x-0 z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`group relative h-1.5 rounded-full transition-all duration-500 ease-out overflow-hidden ${
              index === currentSlide ? 'w-12 bg-[#E8D1C5]' : 'w-3 bg-white/30 hover:bg-white/60 hover:w-6'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && !isPaused && (
               <div className="absolute top-0 left-0 h-full bg-[#452829] animate-progress" />
            )}
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 5000ms linear forwards;
        }
      `}</style>
    </div>
  );
};

export default Banner;