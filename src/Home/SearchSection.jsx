import React, { useState, useEffect } from "react";
import { Search, Filter, X, ChevronDown, User, Calendar, Languages, Users, Heart, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// --- REUSABLE COMPONENT (Defined Outside to prevent re-render bugs) ---
const CustomSelect = ({ icon: Icon, label, name, value, onChange, options, placeholder }) => (
  <div className="relative group w-full">
    <label className="block text-xs font-bold text-[#E8D1C5] uppercase tracking-wider mb-2 ml-1">
      {label}
    </label>
    <div className="relative bg-white border border-[#E8D1C5] rounded-xl transition-all duration-300 group-hover:border-[#452829] group-focus-within:ring-2 group-focus-within:ring-[#E8D1C5] group-focus-within:border-[#452829]">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#452829]/50">
        <Icon size={18} />
      </div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full pl-11 pr-10 py-3.5 bg-transparent text-[#452829] font-medium text-sm appearance-none cursor-pointer focus:outline-none rounded-xl"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options}
      </select>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#452829]/40">
        <ChevronDown size={16} />
      </div>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const SearchSection = () => {
  const navigate = useNavigate(); // Hook for navigation
  
  const [formData, setFormData] = useState({
    lookingFor: "কনে",
    ageFrom: 21,
    ageTo: 30,
    motherTongue: "",
    caste: "",
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // --- COLOR PALETTE REFERENCE ---
  // Primary (Dark Maroon): #452829
  // Secondary (Charcoal): #57595B
  // Accent (Rose Gold): #E8D1C5
  // Background (Cream): #F3E8DF

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isDrawerOpen]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // --- FUNCTIONAL SEARCH LOGIC ---
  const handleSearch = async () => {
    setIsSearching(true);
    
    // 1. Cinematic Delay (Optional, for UX feel)
    await new Promise(resolve => setTimeout(resolve, 800)); 

    // 2. Check Authentication
    const token = localStorage.getItem('token');

    setIsSearching(false);
    if (isMobile) setIsDrawerOpen(false);

    if (token) {
        // Case A: User is Logged In -> Go to Find Matches with Data
        // We pass the formData state to the next route
        navigate('/find-matches', { state: { searchFilters: formData } });
    } else {
        // Case B: User is NOT Logged In -> Go to Register Page
        navigate('/register');
    }
  };

  const resetForm = () => {
    setFormData({
      lookingFor: "কনে",
      ageFrom: 21,
      ageTo: 30,
      motherTongue: "",
      caste: "",
    });
  };

  const SearchContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
      
      {/* 1. Looking For (Span 2) */}
      <div className="md:col-span-2">
        <CustomSelect 
          icon={User}
          label="আমি খুঁজছি"
          name="lookingFor"
          value={formData.lookingFor}
          onChange={handleChange}
          options={
            <>
              <option value="কনে">কনে</option>
              <option value="বর">বর</option>
            </>
          }
        />
      </div>

      {/* 2. Age Range (Span 3) */}
      <div className="md:col-span-3">
        <label className="block text-xs font-bold text-[#E8D1C5] uppercase tracking-wider mb-2 ml-1">
          বয়সের পরিসীমা
        </label>
        <div className="flex items-center gap-2 bg-white border border-[#E8D1C5] rounded-xl px-2 py-1 focus-within:ring-2 focus-within:ring-[#E8D1C5] focus-within:border-[#452829] hover:border-[#452829] transition-colors">
           <div className="pl-2 text-[#452829]/50"><Calendar size={18} /></div>
           
           <div className="relative flex-1">
             <select
               name="ageFrom"
               value={formData.ageFrom}
               onChange={handleChange}
               className="w-full py-2.5 bg-transparent text-[#452829] font-medium text-sm appearance-none cursor-pointer focus:outline-none text-center"
             >
               {Array.from({ length: 60 }, (_, i) => (
                 <option key={i + 18} value={i + 18}>{i + 18}</option>
               ))}
             </select>
           </div>
           
           <span className="text-[#57595B] text-xs font-medium">থেকে</span>
           
           <div className="relative flex-1">
             <select
               name="ageTo"
               value={formData.ageTo}
               onChange={handleChange}
               className="w-full py-2.5 bg-transparent text-[#452829] font-medium text-sm appearance-none cursor-pointer focus:outline-none text-center"
             >
               {Array.from({ length: 60 }, (_, i) => (
                 <option key={i + 18} value={i + 18}>{i + 18}</option>
               ))}
             </select>
           </div>
        </div>
      </div>

      {/* 3. Mother Tongue (Span 2) */}
      <div className="md:col-span-2">
         <CustomSelect 
          icon={Languages}
          label="মাতৃভাষা"
          name="motherTongue"
          value={formData.motherTongue}
          onChange={handleChange}
          placeholder="সব ভাষা"
          options={
            <>
              <option value="Bengali">বাংলা</option>
              <option value="English">ইংরেজি</option>
              <option value="Hindi">হিন্দি</option>
            </>
          }
        />
      </div>

      {/* 4. Caste (Span 3) */}
      <div className="md:col-span-3">
         <CustomSelect 
          icon={Users}
          label="সম্প্রদায়"
          name="caste"
          value={formData.caste}
          onChange={handleChange}
          placeholder="সকল সম্প্রদায়"
          options={
            <>
              <option value="Sunni">সুন্নি</option>
              <option value="Shia">শিয়া</option>
              <option value="General">সাধারণ</option>
            </>
          }
        />
      </div>

      {/* 5. Search Button (Span 2) */}
      <div className="md:col-span-2">
        <button
          onClick={handleSearch}
          disabled={isSearching}
          className="w-full h-[50px] bg-[#452829] text-[#F3E8DF] rounded-xl font-bold text-sm tracking-wide hover:bg-[#2d1a1b] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-[#452829]"
        >
          {isSearching ? (
            <div className="w-5 h-5 border-2 border-[#E8D1C5] border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              <Search className="w-4 h-4" />
              <span>খুঁজুন</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <section className="relative z-30 -mt-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Floating Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_20px_40px_-5px_rgba(69,40,41,0.1)] p-6 md:p-8 lg:p-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#452829] flex items-center gap-3">
                <Sparkles className="text-[#E8D1C5] fill-[#E8D1C5]" size={24} />
                জীবনসঙ্গী খুঁজুন
              </h2>
              <p className="text-[#57595B] text-sm mt-1 ml-9">
                হাজারো প্রোফাইল থেকে আপনার পছন্দের মানুষটিকে বেছে নিন
              </p>
            </div>
            
            {/* Desktop Stats (Social Proof) */}
            <div className="hidden md:flex gap-6 mt-4 md:mt-0">
               <div className="flex items-center gap-3 px-4 py-2 bg-[#F3E8DF] rounded-full">
                 <div className="p-1.5 bg-[#452829] rounded-full text-white"><Heart size={12} /></div>
                 <div className="flex flex-col leading-none">
                    <span className="text-xs font-bold text-[#452829]">১৫০০+</span>
                    <span className="text-[10px] text-[#57595B]">সফল বিবাহ</span>
                 </div>
               </div>
               <div className="flex items-center gap-3 px-4 py-2 bg-[#F3E8DF] rounded-full">
                 <div className="p-1.5 bg-[#452829] rounded-full text-white"><Users size={12} /></div>
                 <div className="flex flex-col leading-none">
                    <span className="text-xs font-bold text-[#452829]">৫০০০+</span>
                    <span className="text-[10px] text-[#57595B]">সক্রিয় প্রোফাইল</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Desktop Form Container */}
          <div className="hidden md:block">
            <SearchContent />
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="w-full py-4 bg-[#452829] text-[#F3E8DF] rounded-xl text-base font-medium transition-all duration-300 shadow-lg flex items-center justify-center gap-3 active:scale-95"
            >
              <Filter className="w-5 h-5" />
              <span>ফিল্টার ও অনুসন্ধান</span>
            </button>
            
            {/* Mobile Stats */}
            <div className="flex justify-between gap-2 mt-6">
                <div className="flex-1 bg-[#F3E8DF] p-3 rounded-xl text-center">
                    <p className="font-serif font-bold text-[#452829] text-lg">১,২০০+</p>
                    <p className="text-xs text-[#57595B]">সক্রিয় প্রোফাইল</p>
                </div>
                <div className="flex-1 bg-[#F3E8DF] p-3 rounded-xl text-center">
                    <p className="font-serif font-bold text-[#452829] text-lg">৮৫০+</p>
                    <p className="text-xs text-[#57595B]">নতুন যোগ</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-[#452829]/60 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300" 
          onClick={() => setIsDrawerOpen(false)} 
        />
      )}

      {/* Mobile Search Drawer - Bottom Sheet Style */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#F3E8DF] z-50 rounded-t-[2rem] shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
        isDrawerOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="max-h-[90vh] overflow-y-auto">
          
          {/* Drag Handle */}
          <div className="flex justify-center pt-3 pb-1">
             <div className="w-12 h-1.5 bg-[#E8D1C5] rounded-full"></div>
          </div>

          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8D1C5]">
            <h3 className="text-xl font-serif font-bold text-[#452829]">খোঁজার ফিল্টার</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={resetForm}
                className="px-3 py-1.5 text-xs font-medium text-[#452829] bg-[#E8D1C5]/30 rounded-full hover:bg-[#E8D1C5] transition-colors"
              >
                রিসেট
              </button>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 bg-white rounded-full text-[#57595B] hover:text-[#452829]"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Drawer Form Content */}
          <div className="p-6 pb-8 space-y-6">
            <SearchContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;