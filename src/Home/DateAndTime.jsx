import React from "react";

const DateAndTime = () => {
  return (
    <div>
      <section id="ceremony" className="relative py-24 lg:py-32 bg-[#452829]">
        {/* Background Texture/Image */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#452829] via-[#452829]/95 to-[#452829]"></div>

        {/* Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8D1C5] rounded-full blur-[150px] opacity-10"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 text-[#F3E8DF]">
            <span className="block text-[#E8D1C5] tracking-[0.3em] text-sm uppercase font-semibold mb-4">
              Save The Date
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              বিয়ের অনুষ্ঠান
            </h2>
            <div className="flex justify-center items-center gap-3 opacity-60">
              <Star className="w-4 h-4 text-[#E8D1C5]" />
              <div className="h-[1px] w-20 bg-[#E8D1C5]"></div>
              <Star className="w-4 h-4 text-[#E8D1C5]" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Event Card 1 */}
            <div className="bg-[#F3E8DF]/5 backdrop-blur-sm border border-[#F3E8DF]/10 rounded-3xl p-8 lg:p-10 hover:bg-[#F3E8DF]/10 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#F3E8DF] mb-2">
                    বিবাহ অনুষ্ঠান
                  </h3>
                  <p className="text-[#E8D1C5] text-sm tracking-wide uppercase">
                    The Ceremony
                  </p>
                </div>
                <div className="bg-[#E8D1C5] p-3 rounded-full text-[#452829]">
                  <Heart size={24} />
                </div>
              </div>

              <p className="text-[#F3E8DF]/80 mb-8 leading-relaxed">
                ৬ই এপ্রিল বিবাহ অনুষ্ঠান অনুষ্ঠিত হবে সেন্ট প্যাট্রিক চার্চে। এই
                পবিত্র মুহূর্তটি আমাদের সাথে ভাগ করে নেওয়ার জন্য আপনাকে
                আমন্ত্রণ।
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[#F3E8DF]">
                  <div className="w-10 h-10 rounded-full bg-[#F3E8DF]/10 flex items-center justify-center shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#E8D1C5] uppercase tracking-wide mb-0.5">
                      তারিখ
                    </p>
                    <p className="font-medium">রবিবার - ১৩ই সেপ্টেম্বর, ২০২১</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#F3E8DF]">
                  <div className="w-10 h-10 rounded-full bg-[#F3E8DF]/10 flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#E8D1C5] uppercase tracking-wide mb-0.5">
                      সময়
                    </p>
                    <p className="font-medium">সকাল ৯:০০ - সকাল ১০:০০</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#F3E8DF]">
                  <div className="w-10 h-10 rounded-full bg-[#F3E8DF]/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#E8D1C5] uppercase tracking-wide mb-0.5">
                      স্থান
                    </p>
                    <p className="font-medium">
                      সেন্ট প্যাট্রিক ক্যাথলিক চার্চ
                    </p>
                    <p className="text-sm opacity-60">
                      ৬১৯ ১০ম স্ট্রিট এনডব্লিউ, ওয়াশিংটন, ডিসি
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#F3E8DF]/10 flex gap-4">
                <button className="flex-1 bg-[#E8D1C5] text-[#452829] py-3 rounded-lg font-bold text-sm hover:bg-[#d6bea8] transition-colors">
                  ম্যাপ দেখুন
                </button>
                <button className="px-4 py-3 border border-[#F3E8DF]/30 rounded-lg text-[#F3E8DF] hover:bg-[#F3E8DF]/10 transition-colors">
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-[#F3E8DF]/5 backdrop-blur-sm border border-[#F3E8DF]/10 rounded-3xl p-8 lg:p-10 hover:bg-[#F3E8DF]/10 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#F3E8DF] mb-2">
                    সংবর্ধনা
                  </h3>
                  <p className="text-[#E8D1C5] text-sm tracking-wide uppercase">
                    The Reception
                  </p>
                </div>
                <div className="bg-[#E8D1C5] p-3 rounded-full text-[#452829]">
                  <Star size={24} />
                </div>
              </div>

              <p className="text-[#F3E8DF]/80 mb-8 leading-relaxed">
                ঐতিহাসিক হোটেলের বলরুমের মহত্ত্ব এবং চিরকালীন কমনীয়তার মাঝে
                আমরা আপনার সাথে সারা রাত উৎসব করার জন্য অপেক্ষা করছি।
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[#F3E8DF]">
                  <div className="w-10 h-10 rounded-full bg-[#F3E8DF]/10 flex items-center justify-center shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#E8D1C5] uppercase tracking-wide mb-0.5">
                      তারিখ
                    </p>
                    <p className="font-medium">রবিবার - ১৩ই সেপ্টেম্বর, ২০২১</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#F3E8DF]">
                  <div className="w-10 h-10 rounded-full bg-[#F3E8DF]/10 flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#E8D1C5] uppercase tracking-wide mb-0.5">
                      সময়
                    </p>
                    <p className="font-medium">সন্ধ্যা ৬:০০ - রাত ১০:০০</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#F3E8DF]">
                  <div className="w-10 h-10 rounded-full bg-[#F3E8DF]/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#E8D1C5] uppercase tracking-wide mb-0.5">
                      স্থান
                    </p>
                    <p className="font-medium">দ্য মেফ্লাওয়ার হোটেল</p>
                    <p className="text-sm opacity-60">
                      ৬২০ ১১তম স্ট্রিট এনডব্লিউ, ওয়াশিংটন, ডিসি
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#F3E8DF]/10 flex gap-4">
                <button className="flex-1 bg-[#E8D1C5] text-[#452829] py-3 rounded-lg font-bold text-sm hover:bg-[#d6bea8] transition-colors">
                  ম্যাপ দেখুন
                </button>
                <button className="px-4 py-3 border border-[#F3E8DF]/30 rounded-lg text-[#F3E8DF] hover:bg-[#F3E8DF]/10 transition-colors">
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DateAndTime;
