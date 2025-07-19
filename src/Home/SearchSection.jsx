import React, { useState, useEffect } from "react";
import { Search, Filter, X, ChevronDown } from "lucide-react";

const SearchSection = () => {
  const [formData, setFormData] = useState({
    lookingFor: "কনে",
    ageFrom: 18,
    ageTo: 30,
    motherTongue: "",
    caste: "",
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearch = async () => {
    setIsSearching(true);
    console.log("Search triggered with:", formData);
    
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSearching(false);
    if (isMobile) {
      setIsDrawerOpen(false);
    }
    
    // Implement actual search logic or form submission here
  };

  const resetForm = () => {
    setFormData({
      lookingFor: "কনে",
      ageFrom: 18,
      ageTo: 30,
      motherTongue: "",
      caste: "",
    });
  };

  const SearchForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-end">
      {/* Looking For */}
      <div className="text-left">
        <label className="block text-sm font-semibold mb-2 text-gray-700">আমি খুঁজছি</label>
        <div className="relative">
          <select
            name="lookingFor"
            value={formData.lookingFor}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:border-black/50 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400"
          >
            <option value="কনে">কনে</option>
            <option value="বর">বর</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>
      </div>

      {/* Age Range */}
      <div className="text-left">
        <label className="block text-sm font-semibold mb-2 text-gray-700">বয়সের পরিসীমা</label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <select
              name="ageFrom"
              value={formData.ageFrom}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-3 text-sm bg-white focus:border-black/50 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400"
            >
              {Array.from({ length: 83 }, (_, i) => (
                <option key={i + 18} value={i + 18}>{i + 18}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
          </div>
          <span className="flex items-center text-gray-500 text-sm font-medium">থেকে</span>
          <div className="relative flex-1">
            <select
              name="ageTo"
              value={formData.ageTo}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-3 text-sm bg-white focus:border-black/50 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400"
            >
              {Array.from({ length: 83 }, (_, i) => (
                <option key={i + 18} value={i + 18}>{i + 18}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Mother Tongue */}
      <div className="text-left">
        <label className="block text-sm font-semibold mb-2 text-gray-700">মাতৃভাষা</label>
        <div className="relative">
          <select
            name="motherTongue"
            value={formData.motherTongue}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:border-black/50 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400"
          >
            <option value="">ভাষা নির্বাচন করুন</option>
            <option value="Bengali">বাংলা</option>
            <option value="Hindi">হিন্দি</option>
            <option value="English">ইংরেজি</option>
            <option value="Urdu">উর্দু</option>
            <option value="Other">অন্যান্য</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>
      </div>

      {/* Caste */}
      <div className="text-left">
        <label className="block text-sm font-semibold mb-2 text-gray-700">সম্প্রদায়</label>
        <div className="relative">
          <select
            name="caste"
            value={formData.caste}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:border-black/50 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400"
          >
            <option value="">সম্প্রদায় নির্বাচন করুন</option>
            <option value="Sunni">সুন্নি</option>
            <option value="Shia">শিয়া</option>
            <option value="General">সাধারণ</option>
            <option value="Other">অন্যান্য</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>
      </div>

      {/* Search Button */}
      <div className="text-left md:text-center">
        <button
          onClick={handleSearch}
          disabled={isSearching}
          className="w-full md:w-auto mt-6 md:mt-0 px-8 py-3 bg-black/50 text-[#EAE4D5] rounded-full text-sm font-medium hover:bg-black/70 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          {isSearching ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              খোঁজা হচ্ছে...
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              খুঁজুন
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <section className="bg-[#ffeefc] py-12 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-gray-800">
          আপনার আদর্শ জীবনসঙ্গী খোঁজার যাত্রা শুরু করুন
        </h2>

        {/* Desktop Search Form */}
        <div className="hidden md:block">
          <SearchForm />
        </div>

        {/* Mobile Search Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="w-full px-6 py-4 bg-black/50 text-[#EAE4D5] rounded-xl text-base font-medium hover:bg-black/70 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-3"
          >
            <Filter className="w-5 h-5" />
            খোঁজার ফিল্টার খুলুন
          </button>
        </div>

        {/* Quick Search Stats */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>১,২৩৪ সক্রিয় প্রোফাইল</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>৫৬৭ নতুন এই সপ্তাহে</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>৮৯ সফল গল্প</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsDrawerOpen(false)} 
        />
      )}

      {/* Mobile Search Drawer */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#ffeefc] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isDrawerOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="max-h-[85vh] overflow-y-auto">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white/50 backdrop-blur-sm sticky top-0">
            <h3 className="text-lg font-semibold text-gray-800">খোঁজার ফিল্টার</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={resetForm}
                className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200"
              >
                পুনরায় সেট করুন
              </button>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Drawer Content */}
          <div className="p-6 space-y-6">
            {/* Looking For */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">আমি খুঁজছি</label>
              <div className="relative">
                <select
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-4 text-base bg-white focus:border-black/50 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="কনে">কনে</option>
                  <option value="বর">বর</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Age Range */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">বয়সের পরিসীমা</label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <select
                    name="ageFrom"
                    value={formData.ageFrom}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-4 text-base bg-white focus:border-black/50 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    {Array.from({ length: 83 }, (_, i) => (
                      <option key={i + 18} value={i + 18}>{i + 18}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
                <span className="flex items-center text-gray-500 text-base font-medium">থেকে</span>
                <div className="relative flex-1">
                  <select
                    name="ageTo"
                    value={formData.ageTo}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-4 text-base bg-white focus:border-black/50 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    {Array.from({ length: 83 }, (_, i) => (
                      <option key={i + 18} value={i + 18}>{i + 18}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mother Tongue */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">মাতৃভাষা</label>
              <div className="relative">
                <select
                  name="motherTongue"
                  value={formData.motherTongue}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-4 text-base bg-white focus:border-black/50 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="">ভাষা নির্বাচন করুন</option>
                  <option value="Bengali">বাংলা</option>
                  <option value="Hindi">হিন্দি</option>
                  <option value="English">ইংরেজি</option>
                  <option value="Urdu">উর্দু</option>
                  <option value="Other">অন্যান্য</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Caste */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">সম্প্রদায়</label>
              <div className="relative">
                <select
                  name="caste"
                  value={formData.caste}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-4 text-base bg-white focus:border-black/50 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="">সম্প্রদায় নির্বাচন করুন</option>
                  <option value="Sunni">সুন্নি</option>
                  <option value="Shia">শিয়া</option>
                  <option value="General">সাধারণ</option>
                  <option value="Other">অন্যান্য</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Search Button */}
            <div className="pt-4">
              <button
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full px-6 py-4 bg-black/50 text-[#EAE4D5] rounded-xl text-base font-medium hover:bg-black/70 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                {isSearching ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    খোঁজা হচ্ছে...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    মিল খুঁজুন
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;