import React from 'react';
import { Quote, Star, ArrowRight, Play } from 'lucide-react';

const SuccessStory = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F3E8DF] overflow-hidden">
      
      {/* --- BACKGROUND DECOR --- */}
      {/* Decorative vertical lines for structure */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-[#452829]/5 hidden lg:block"></div>
      <div className="absolute top-0 right-12 w-[1px] h-full bg-[#452829]/5 hidden lg:block"></div>
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-[#452829]/5 hidden lg:block"></div>
      
      {/* Giant Background Watermark Text */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-bold text-[#452829]/5 whitespace-nowrap pointer-events-none select-none z-0">
        FOREVER
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT: THE IMAGE COMPOSITION (Span 7) --- */}
          <div className="lg:col-span-7 relative group">
            
            {/* Main Image */}
            <div className="relative z-10 w-full h-[500px] lg:h-[650px] overflow-hidden rounded-[3rem] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1623835624326-80f4ee3360ee?q=80&w=2111&auto=format&fit=crop" 
                alt="Rahim and Sumaiya Wedding" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#452829]/60 via-transparent to-transparent"></div>
              
              {/* Couple Name - Absolute Bottom */}
              <div className="absolute bottom-8 left-8 text-[#F3E8DF]">
                <h3 className="text-3xl lg:text-4xl font-serif font-bold">রহিম ও সুমাইয়া</h3>
                <p className="text-[#E8D1C5] font-medium tracking-widest text-sm uppercase mt-2">বিবাহিত: ১২ই জানুয়ারি, ২০২৪</p>
              </div>

              {/* Play Button Overlay (Optional Video Trigger) */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 transition-transform duration-300 hover:scale-110 hover:bg-[#452829] hover:border-[#452829]">
                 <Play size={24} className="ml-1 fill-current" />
              </button>
            </div>

            {/* Secondary Image (Floating Parallax) */}
            <div className="absolute -bottom-12 -right-12 w-48 h-64 rounded-2xl overflow-hidden border-4 border-[#F3E8DF] shadow-xl z-20 hidden md:block animate-float-slow">
               <img 
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" 
                alt="Hand holding" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* ROTATING TEXT BADGE */}
            <div className="absolute -top-12 -left-12 z-20 hidden md:block">
               <div className="relative w-32 h-32 flex items-center justify-center">
                  <div className="absolute inset-0 animate-spin-slow">
                     <svg viewBox="0 0 100 100" width="128" height="128">
                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text>
                           <textPath xlinkHref="#circlePath" fill="#452829" className="text-[12px] font-bold uppercase tracking-[0.2em]">
                              • SoulMate Success Story • True Love •
                           </textPath>
                        </text>
                     </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Star size={24} className="text-[#452829] fill-[#452829]" />
                  </div>
               </div>
            </div>

          </div>

          {/* --- RIGHT: THE NARRATIVE (Span 5) --- */}
          <div className="lg:col-span-5 relative">
            
            {/* Quote Icon */}
            <Quote size={64} className="text-[#E8D1C5] rotate-180 mb-6" />

            {/* Title */}
            <h4 className="text-[#452829] font-bold uppercase tracking-widest text-sm mb-4">
              মাসের সেরা গল্প
            </h4>

            {/* Editorial Heading */}
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#452829] leading-tight mb-8">
              "আমরা ভেবেছিলাম <span className="italic text-[#8a5a5c]">অপেক্ষা</span> শেষ হবে না, কিন্তু সোলমেট তা সম্ভব করেছে।"
            </h2>

            {/* Story Text */}
            <p className="text-[#57595B] text-lg leading-relaxed mb-8">
              দীর্ঘ ৫ বছর খোঁজার পর, রহিম এবং সুমাইয়ার দেখা হয় আমাদের প্ল্যাটফর্মে। তাদের পারিবারিক মূল্যবোধ এবং জীবনের লক্ষ্যের মিল ছিল অবিশ্বাস্য। মাত্র ৩ মাসের পরিচয়ে তারা সিদ্ধান্ত নেয় সারা জীবন একসাথে কাটানোর।
            </p>

            {/* Stats/Tags */}
            <div className="flex gap-4 mb-10">
               <span className="px-4 py-2 bg-[#452829]/5 text-[#452829] rounded-full text-sm font-semibold">ঢাকা</span>
               <span className="px-4 py-2 bg-[#452829]/5 text-[#452829] rounded-full text-sm font-semibold">ইঞ্জিনিয়ার</span>
               <span className="px-4 py-2 bg-[#452829]/5 text-[#452829] rounded-full text-sm font-semibold">ডাক্তার</span>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6">
               <button className="flex items-center gap-2 text-[#452829] font-bold text-lg hover:gap-4 transition-all duration-300 group">
                  আরও গল্প পড়ুন
                  <span className="bg-[#452829] text-[#F3E8DF] p-2 rounded-full group-hover:bg-[#E8D1C5] group-hover:text-[#452829] transition-colors">
                     <ArrowRight size={16} />
                  </span>
               </button>
            </div>

          </div>
        </div>
      </div>

      {/* --- CSS FOR ROTATING TEXT --- */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow {
           animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SuccessStory;