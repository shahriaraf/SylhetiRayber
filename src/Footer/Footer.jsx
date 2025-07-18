import { Menu, X, Facebook, Twitter, Instagram, Linkedin, ChevronUp } from 'lucide-react';


const Footer = () => {


  return (
    <>
      <footer className="bg-black text-white/50 px-4 sm:px-6 py-10 lg:py-16 relative">
        {/* Desktop Footer Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#C7288E] hover:text-white/90 transition-colors">
              ম্যারেজ মিডিয়া
              </h2>
              <p className="text-sm lg:text-base leading-relaxed">
                ডিজাইন এবং প্রযুক্তির মাধ্যমে অর্থপূর্ণ অভিজ্ঞতা তৈরি করা।
              </p>
              <div className="w-12 h-[2px] bg-white/30"></div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg lg:text-xl font-semibold text-white/70">দ্রুত লিঙ্ক</h3>
              <ul className="space-y-3 text-sm lg:text-base">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200 relative group">
                    হোম
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/70 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200 relative group">
                    সম্পর্কে
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/70 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200 relative group">
                    সেবা
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/70 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200 relative group">
                    যোগাযোগ
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/70 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="text-lg lg:text-xl font-semibold text-white/70">আমাদের অনুসরণ করুন</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-white/50 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110 group"
                  aria-label="Twitter"
                >
                  <Twitter size={20} className="text-white/50 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-white/50 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-white/50 group-hover:text-white transition-colors" />
                </a>
              </div>
              <p className="text-xs lg:text-sm text-white/40 mt-4">
                আপডেটের জন্য সোশ্যাল মিডিয়ায় আমাদের সাথে যুক্ত হন
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-xs lg:text-sm text-white/50">
                &copy; {new Date().getFullYear()} সিলেটিরাইবার। সকল অধিকার সংরক্ষিত।
              </div>
              <div className="flex space-x-6 text-xs lg:text-sm">
                <a href="#" className="text-white/50 hover:text-white transition-colors">
                  গোপনীয়তা নীতি
                </a>
                <a href="#" className="text-white/50 hover:text-white transition-colors">
                  সেবার শর্তাবলী
                </a>
                <a href="#" className="text-white/50 hover:text-white transition-colors">
                  কুকিজ
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </footer>
    </>
  );
};

export default Footer;