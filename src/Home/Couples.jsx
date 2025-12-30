import React from "react";

const Couples = () => {
  return (
    <div>
      <section
        id="couple"
        className="relative py-20 lg:py-32 bg-[#F3E8DF] text-center overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#E8D1C5] rounded-full blur-[100px] opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#452829] rounded-full blur-[120px] opacity-10 translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#452829]/5 rounded-full z-0"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="mb-16 lg:mb-24">
            <span className="block text-[#452829] tracking-[0.3em] text-sm uppercase font-semibold mb-4 animate-fade-in-up">
              The Union
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#452829] mb-6 font-serif">
              সুখী দম্পতি
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#452829]/30"></div>
              <Heart className="w-5 h-5 text-[#452829] fill-[#452829]" />
              <div className="h-[1px] w-12 bg-[#452829]/30"></div>
            </div>
            <p className="text-lg md:text-xl italic text-[#57595B] max-w-2xl mx-auto font-serif leading-relaxed">
              "একটি সুখী বিবাহ হল দুই ভাল ক্ষমাশীলের মিলন।"
            </p>
          </div>

          {/* Couple Grid - Asymmetric Layout for Interest */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
            {/* Bride Card - Arched Design */}
            <div className="group relative">
              <div className="relative z-10">
                <div className="aspect-[3/4] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden border-[8px] border-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  <img
                    src="https://weddingbyte.com/storage/upload/vendor/featured/IMG_20210505_154619.jpg"
                    alt="Jane Milea"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#452829]/80 via-transparent to-transparent opacity-60"></div>

                  {/* Floating Tag */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
                    <span className="text-[#452829] font-serif italic text-lg">
                      কনে
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Content Below */}
              <div className="mt-8 text-center lg:text-left lg:pl-4">
                <h3 className="text-3xl font-serif text-[#452829] mb-2">
                  জেন মিলিয়া
                </h3>
                <p className="text-[#E8D1C5] font-medium tracking-wider text-sm uppercase mb-4">
                  The Bride
                </p>
                <p className="text-[#57595B] leading-relaxed">
                  "আমি দিলানের জন্য পাগল। তার সত্যিই একটি অসাধারণ হৃদয় আছে। আমি
                  অবিশ্বাস্যভাবে ধন্য এবং আমার বাকি জীবনের প্রতিটি দিন আমার সেরা
                  বন্ধুর সাথে কাটাতে পেরে খুশি।"
                </p>
              </div>
            </div>

            {/* Groom Card - Arched Design (Offset) */}
            <div className="group relative lg:mt-24">
              <div className="relative z-10">
                <div className="aspect-[3/4] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden border-[8px] border-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  <img
                    src="https://jkforeignbrands.com/wp-content/uploads/2021/11/Groom-03.jpg"
                    alt="John Dilan"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#452829]/80 via-transparent to-transparent opacity-60"></div>

                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
                    <span className="text-[#452829] font-serif italic text-lg">
                      বর
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center lg:text-right lg:pr-4">
                <h3 className="text-3xl font-serif text-[#452829] mb-2">
                  জন দিলান
                </h3>
                <p className="text-[#E8D1C5] font-medium tracking-wider text-sm uppercase mb-4">
                  The Groom
                </p>
                <p className="text-[#57595B] leading-relaxed">
                  "মিলিয়া আমার কাছে অনেক কিছু এবং আমি বিশ্বাস করতে পারি না যে
                  সে আসলে আমাকে বিয়ে করতে যাচ্ছে। আমি তার সাথে আমার বাকি জীবন
                  কাটাতে পেরে খুব উৎসাহিত।"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Couples;
