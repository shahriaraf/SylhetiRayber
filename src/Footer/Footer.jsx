import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // --- COLOR PALETTE REFERENCE ---
  // Background: #452829 (Dark Maroon)
  // Text: #F3E8DF (Cream)
  // Accent: #E8D1C5 (Rose Gold)
  // Muted: #F3E8DF/60

  return (
    <footer className="relative bg-gray-900 text-[#F3E8DF] pt-20 pb-10 overflow-hidden">
      
      {/* Background Texture/Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      
      {/* Top Decorative Border (Gradient) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E8D1C5]/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-3">
            <div className="flex items-center gap-1">
               <img 
                    src="https://i.ibb.co/hGGSr7M/Whats-App-Image-2025-07-17-at-11-45-34-PM-removebg-preview.png" 
                    alt="SoulMate Logo" 
                    className="w-16 h-16 object-contain brightness-110" 
                />
               <h2 className="text-2xl font-serif font-bold text-[#E8D1C5]">ম্যারেজ মিডিয়া</h2>
            </div>
            <p className="text-[#F3E8DF]/70 text-sm leading-relaxed max-w-xs">
              বিশ্বাস এবং ঐতিহ্যের সাথে আপনার নিখুঁত জীবনসঙ্গী খুঁজে পেতে আমরা প্রতিশ্রুতিবদ্ধ। ডিজাইন এবং প্রযুক্তির মাধ্যমে অর্থপূর্ণ সম্পর্ক তৈরি করাই আমাদের লক্ষ্য।
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Linkedin} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#E8D1C5] font-bold uppercase tracking-wider text-sm mb-6">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-4 text-sm font-medium">
              <FooterLink label="হোম" href="#" />
              <FooterLink label="আমাদের সম্পর্কে" href="#" />
              <FooterLink label="সফল গল্প" href="#" />
              <FooterLink label="প্যাকেজ সমূহ" href="#" />
              <FooterLink label="যোগাযোগ" href="#" />
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-[#E8D1C5] font-bold uppercase tracking-wider text-sm mb-6">যোগাযোগ করুন</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-[#F3E8DF]/80">
                <MapPin size={18} className="text-[#E8D1C5] shrink-0 mt-0.5" />
                <span>আম্বরখানা রাজার গোল্লি</span>
              </li>
              <li className="flex items-center gap-3 text-[#F3E8DF]/80">
                <Phone size={18} className="text-[#E8D1C5] shrink-0" />
                <span>+8801609-674445</span>
              </li>
              <li className="flex items-center gap-3 text-[#F3E8DF]/80">
                <Mail size={18} className="text-[#E8D1C5] shrink-0" />
                <span>info@marriagemedia.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div>
            <h3 className="text-[#E8D1C5] font-bold uppercase tracking-wider text-sm mb-6">নিউজলেটার</h3>
            <p className="text-[#F3E8DF]/70 text-sm mb-4">
              নতুন অফার এবং আপডেট পেতে আমাদের সাথে যুক্ত থাকুন।
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="আপনার ইমেল লিখুন" 
                  className="w-full bg-[#F3E8DF]/10 border border-[#E8D1C5]/20 rounded-lg px-4 py-3 text-sm text-[#F3E8DF] placeholder-[#F3E8DF]/40 focus:outline-none focus:border-[#E8D1C5] focus:ring-1 focus:ring-[#E8D1C5] transition-all"
                />
              </div>
              <button className="w-full bg-[#E8D1C5] text-[#452829] font-bold text-sm py-3 rounded-lg hover:bg-[#d6bea8] transition-colors shadow-lg">
                সাবস্ক্রাইব করুন
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E8D1C5]/20 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F3E8DF]/60">
          
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Marriage Media. Made with</span>
            <Heart size={12} className="text-[#E8D1C5] fill-[#E8D1C5]" />
            <span>in Bangladesh.</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-[#E8D1C5] transition-colors">গোপনীয়তা নীতি</a>
            <a href="#" className="hover:text-[#E8D1C5] transition-colors">শর্তাবলী</a>
            <a href="#" className="hover:text-[#E8D1C5] transition-colors">কুকিজ</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button (Floating) */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 bg-[#E8D1C5] text-[#452829] rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none group"
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="group-hover:animate-bounce" />
      </button>

    </footer>
  );
};

// --- Helper Components for cleaner code ---

const SocialIcon = ({ icon: Icon }) => (
  <a 
    href="#" 
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F3E8DF]/10 text-[#F3E8DF] hover:bg-[#E8D1C5] hover:text-[#452829] transition-all duration-300 hover:scale-110"
  >
    <Icon size={18} />
  </a>
);

const FooterLink = ({ label, href }) => (
  <li className="group">
    <a href={href} className="flex items-center gap-2 text-[#F3E8DF]/80 hover:text-[#E8D1C5] transition-colors duration-200">
      <span className="w-0 h-[2px] bg-[#E8D1C5] transition-all duration-300 group-hover:w-3"></span>
      {label}
    </a>
  </li>
);

export default Footer;