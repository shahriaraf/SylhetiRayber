import React from "react";
import {
  ShieldCheck,
  Users,
  Heart,
  Sparkles,
  ArrowRight,
  Lock,
} from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#452829] overflow-hidden group mt-20">
      {/* --- BACKGROUND FX --- */}
      {/* 1. Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* 2. Glowing Orbs (Rose Gold) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E8D1C5] rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E8D1C5] rounded-full blur-[120px] opacity-5 -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* --- LEFT CONTENT: TYPOGRAPHY --- */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8D1C5]/30 bg-[#E8D1C5]/10 backdrop-blur-sm">
              <Sparkles size={14} className="text-[#E8D1C5]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#E8D1C5] uppercase">
                বিশ্বস্ত সম্পর্ক
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-[#F3E8DF] leading-[1.1]">
              যেখানে{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D1C5] to-[#cba695]">
                বিশ্বাস
              </span>{" "}
              <br />ও <span className="italic font-light">ঐতিহ্যের</span> <br />
              মিলন ঘটে
            </h2>

            <p className="text-[#F3E8DF]/80 text-lg leading-relaxed max-w-lg border-l-2 border-[#E8D1C5]/30 pl-6">
              আমরা শুধু প্রোফাইল মেলাই না, আমরা দুটি পরিবারের স্বপ্ন এবং
              মূল্যবোধের সংযোগ ঘটাই। আমাদের আধুনিক অ্যালগরিদম এবং ব্যক্তিগত
              তত্ত্বাবধানে খুঁজে নিন আপনার পারফেক্ট সোলমেট।
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 py-6 border-t border-[#E8D1C5]/20 border-b">
              <div>
                <h4 className="text-3xl font-bold text-[#E8D1C5]">১৫k+</h4>
                <p className="text-xs text-[#F3E8DF]/60 uppercase tracking-wider mt-1">
                  সফল বিবাহ
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-[#E8D1C5]">১০০%</h4>
                <p className="text-xs text-[#F3E8DF]/60 uppercase tracking-wider mt-1">
                  ভেরিফাইড প্রোফাইল
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-[#E8D1C5]">২৪/৭</h4>
                <p className="text-xs text-[#F3E8DF]/60 uppercase tracking-wider mt-1">
                  সাপোর্ট
                </p>
              </div>
            </div>

            <button className="group flex items-center gap-3 bg-[#E8D1C5] text-[#452829] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,209,197,0.4)] hover:scale-105 active:scale-95">
              <span>আমাদের যাত্রা জানুন</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* --- RIGHT CONTENT: VISUAL COMPOSITION --- */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative z-10 rounded-t-[12rem] rounded-b-[2rem] overflow-hidden border-[6px] border-[#F3E8DF]/10 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#452829] via-transparent to-transparent opacity-60 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=2070&auto=format&fit=crop"
                alt="Happy Couple"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* --- FLOATING GLASS CARDS --- */}

            {/* Card 1: Privacy (Top Left) */}
            <div className="absolute top-12 -left-8 z-20 animate-float-slow">
              <div className="flex items-center gap-4 bg-[#F3E8DF]/10 backdrop-blur-xl border border-[#F3E8DF]/20 p-4 pr-8 rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-110 hover:bg-[#F3E8DF]/20 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[#E8D1C5] flex items-center justify-center text-[#452829]">
                  <Lock size={20} />
                </div>
                <div>
                  <h4 className="text-[#F3E8DF] font-bold">নিরাপদ তথ্য</h4>
                  <p className="text-[#E8D1C5] text-xs">
                    এন্ড-টু-এন্ড এনক্রিপশন
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Verification (Bottom Right) */}
            <div className="absolute bottom-24 -right-8 z-20 animate-float-medium">
              <div className="flex items-center gap-4 bg-[#F3E8DF]/10 backdrop-blur-xl border border-[#F3E8DF]/20 p-4 pr-8 rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-110 hover:bg-[#F3E8DF]/20 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[#E8D1C5] flex items-center justify-center text-[#452829]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-[#F3E8DF] font-bold">
                    ভেরিফাইড প্রোফাইল
                  </h4>
                  <p className="text-[#E8D1C5] text-xs">আইডি ভেরিফিকেশন</p>
                </div>
              </div>
            </div>

            {/* Card 3: Matchmaking (Bottom Left - Overlapping) */}
            <div className="absolute -bottom-6 left-8 z-30 animate-float-fast">
              <div className="bg-[#E8D1C5] p-5 rounded-2xl shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
                <div className="flex items-center justify-between gap-8 mb-2">
                  <span className="text-[#452829] font-bold text-lg">
                    পারফেক্ট ম্যাচ
                  </span>
                  <Heart size={20} className="fill-[#452829] text-[#452829]" />
                </div>
                <div className="flex -space-x-3">
                  {/* Avatar 1 */}
                  <div className="w-10 h-10 rounded-full border-2 border-[#E8D1C5] bg-[#452829] overflow-hidden">
                    <img
                      src="https://cbx-prod.b-cdn.net/COLOURBOX37081171.jpg?width=1200&height=1200&quality=70"
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Avatar 2 */}
                  <div className="w-10 h-10 rounded-full border-2 border-[#E8D1C5] bg-[#452829] overflow-hidden">
                    <img
                      src="/moslem-woman_9193915.png"
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Avatar 3 */}
                  <div className="w-10 h-10 rounded-full border-2 border-[#E8D1C5] bg-[#452829] overflow-hidden">
                    <img
                      src="https://i.pinimg.com/736x/35/af/32/35af32d22da9dd8399f9c526a9c75ff4.jpg"
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Count Badge */}
                  <div className="w-10 h-10 rounded-full border-2 border-[#E8D1C5] bg-[#F3E8DF] flex items-center justify-center text-[10px] font-bold text-[#452829]">
                    +৫k
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Outline Behind Image */}
            <div className="absolute top-4 left-4 w-full h-full rounded-t-[12rem] rounded-b-[2rem] border-2 border-[#E8D1C5]/20 -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>

      {/* --- CUSTOM ANIMATIONS --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-float-medium { animation: float 5s ease-in-out infinite; }
        .animate-float-fast { animation: float 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
