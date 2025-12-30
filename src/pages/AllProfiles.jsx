import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import { Search, Filter, MapPin, Heart, Users, X, SlidersHorizontal, ChevronDown } from 'lucide-react';

const AllProfiles = () => {
    // --- STATE ---
    const [profiles, setProfiles] = useState([]);
    const [filteredProfiles, setFilteredProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    
    // Filters State
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'female', 'male'
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ religion: '', city: '', ageMin: '', ageMax: '' });

    // Metadata for Dropdowns
    const [uniqueReligions, setUniqueReligions] = useState([]);
    const [uniqueCities, setUniqueCities] = useState([]);
     const location = useLocation();

    const navigate = useNavigate();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // --- FETCH DATA ---
    useEffect(() => {
        const fetchProfiles = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const config = { headers: { Authorization: `Bearer ${token}` } };
                // Simulate network delay for skeleton showcase
                // await new Promise(r => setTimeout(r, 1000)); 
                const res = await axios.get(`${API_BASE_URL}/api/users/profiles`, config);

                setProfiles(res.data);
                setFilteredProfiles(res.data);

                // Extract unique values for filters
                const religions = [...new Set(res.data.map(p => p.religion).filter(Boolean))];
                const cities = [...new Set(res.data.map(p => p.currentCity).filter(Boolean))];
                setUniqueReligions(religions);
                setUniqueCities(cities);

            } catch (err) {
                console.error("Error fetching profiles:", err);
                localStorage.removeItem('token');
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchProfiles();
    }, [navigate, API_BASE_URL]);

    // --- FILTER LOGIC ---
    useEffect(() => {
        let result = [...profiles];

        // 1. Tab Filter (Gender)
        // Adjust these strings based on exactly what your backend returns (e.g. "Male" vs "male")
        if (activeTab === 'female') {
            result = result.filter(p => p.gender?.toLowerCase() === 'female' || p.gender === 'মহিলা');
        } else if (activeTab === 'male') {
            result = result.filter(p => p.gender?.toLowerCase() === 'male' || p.gender === 'পুরুষ');
        }

        // 2. Search Text
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            result = result.filter(p =>
                `${p.firstName} ${p.lastName}`.toLowerCase().includes(lowerTerm)
            );
        }

        // 3. Dropdown Filters
        if (filters.religion) result = result.filter(p => p.religion === filters.religion);
        if (filters.city) result = result.filter(p => p.currentCity === filters.city);

        setFilteredProfiles(result);
    }, [profiles, activeTab, searchTerm, filters]);


    useEffect(() => {
        // Check if data was passed from the Home page
        if (location.state && location.state.searchFilters) {
            const incomingFilters = location.state.searchFilters;
            
            // Map the home page filters to your page's filter state
            // Example mapping:
            setFilters(prev => ({
                ...prev,
                religion: incomingFilters.motherTongue, // Adjust based on your API needs
                city: incomingFilters.city || ""
            }));
            
            if(incomingFilters.lookingFor === "কনে") setActiveTab('female');
            if(incomingFilters.lookingFor === "বর") setActiveTab('male');
        }
    }, [location.state]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const clearFilters = () => {
        setFilters({ religion: '', city: '', ageMin: '', ageMax: '' });
        setSearchTerm('');
        setActiveTab('all');
    };

    // --- RENDER HELPERS ---
    
    const SkeletonCard = () => (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 animate-pulse h-96">
            <div className="w-full h-48 bg-gray-200 rounded-xl mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
            </div>
        </div>
    );

    const FilterSidebar = ({ mobile = false }) => (
        <div className={`bg-white p-6 ${mobile ? '' : 'rounded-2xl shadow-sm border border-[#E8D1C5]/30 sticky top-24'}`}>
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif font-bold text-[#452829] text-xl flex items-center gap-2">
                    <Filter size={20} /> ফিল্টার
                </h3>
                {mobile && (
                    <button onClick={() => setShowMobileFilters(false)} className="p-2 hover:bg-gray-100 rounded-full">
                        <X size={20} />
                    </button>
                )}
            </div>

            <div className="space-y-6">
                {/* Gender Tabs (Vertical in Sidebar) */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-[#452829] uppercase tracking-wider">আমি খুঁজছি</label>
                    <div className="flex flex-col gap-2">
                        {['all', 'female', 'male'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                    activeTab === tab 
                                    ? 'bg-[#452829] text-[#F3E8DF] shadow-md' 
                                    : 'bg-[#F3E8DF]/50 text-[#57595B] hover:bg-[#E8D1C5]/20'
                                }`}
                            >
                                <span>{tab === 'all' ? 'সবাই' : tab === 'female' ? 'কনে' : 'বর'}</span>
                                {activeTab === tab && <div className="w-2 h-2 rounded-full bg-[#E8D1C5]"></div>}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dropdowns */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[#452829] uppercase tracking-wider">ধর্ম</label>
                        <div className="relative">
                            <select 
                                name="religion" 
                                value={filters.religion} 
                                onChange={handleFilterChange} 
                                className="w-full appearance-none bg-[#F3E8DF]/30 border border-[#E8D1C5] text-[#452829] text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#452829]/20"
                            >
                                <option value="">সকল ধর্ম</option>
                                {uniqueReligions.map(r => <option key={r} value={r}>{r}</option>)}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#452829]/50 pointer-events-none" size={16} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[#452829] uppercase tracking-wider">শহর</label>
                        <div className="relative">
                            <select 
                                name="city" 
                                value={filters.city} 
                                onChange={handleFilterChange} 
                                className="w-full appearance-none bg-[#F3E8DF]/30 border border-[#E8D1C5] text-[#452829] text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#452829]/20"
                            >
                                <option value="">সকল শহর</option>
                                {uniqueCities.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#452829]/50 pointer-events-none" size={16} />
                        </div>
                    </div>
                </div>

                <button 
                    onClick={clearFilters}
                    className="w-full py-3 text-sm font-bold text-[#452829] border border-[#452829]/20 rounded-xl hover:bg-[#452829] hover:text-[#F3E8DF] transition-all"
                >
                    ফিল্টার মুছুন
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F3E8DF] pb-5">
            
            {/* --- HEADER SECTION --- */}
            <div className="bg-[#452829] text-[#F3E8DF] pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8D1C5] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                        আপনার <span className="text-[#E8D1C5] italic">জীবনসঙ্গী</span> খুঁজুন
                    </h1>
                    <p className="text-[#F3E8DF]/70 max-w-2xl text-lg">
                        হাজারো ভেরিফাইড প্রোফাইল থেকে বেছে নিন আপনার পছন্দের মানুষকে।
                    </p>
                </div>
            </div>

            {/* --- MAIN CONTENT LAYOUT --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* --- LEFT SIDEBAR (Desktop) --- */}
                    <div className="hidden lg:block w-72 flex-shrink-0">
                        <FilterSidebar />
                    </div>

                    {/* --- RIGHT CONTENT AREA --- */}
                    <div className="flex-1">
                        
                        {/* Search & Mobile Filter Toggle Bar */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8D1C5]/30 mb-6 flex flex-col sm:flex-row gap-4 items-center">
                            
                            {/* Search Input */}
                            <div className="relative flex-1 w-full">
                                <input
                                    type="text"
                                    placeholder="নাম দিয়ে খুঁজুন..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 bg-[#F3E8DF]/30 border border-[#E8D1C5]/50 rounded-xl text-[#452829] placeholder-[#452829]/40 focus:outline-none focus:ring-2 focus:ring-[#452829]/10 transition-all"
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#452829]/40" size={20} />
                            </div>

                            {/* Mobile Filter Button */}
                            <button 
                                onClick={() => setShowMobileFilters(true)}
                                className="lg:hidden w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#452829] text-[#F3E8DF] rounded-xl font-bold shadow-md active:scale-95 transition-all"
                            >
                                <SlidersHorizontal size={18} />
                                <span>ফিল্টার</span>
                            </button>

                            {/* Result Count Badge */}
                            <div className="hidden sm:flex px-4 py-2 bg-[#F3E8DF] text-[#452829] text-sm font-bold rounded-lg border border-[#E8D1C5]/50">
                                {filteredProfiles.length} ফলাফল
                            </div>
                        </div>

                        {/* --- PROFILE GRID --- */}
                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                                {[1, 2, 3, 4, 5, 6].map(n => <SkeletonCard key={n} />)}
                            </div>
                        ) : filteredProfiles.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                                {filteredProfiles.map(profile => (
                                    <ProfileCard key={profile._id} profile={profile} />
                                ))}
                            </div>
                        ) : (
                            // --- EMPTY STATE ---
                            <div className="bg-white rounded-3xl p-12 text-center border border-[#E8D1C5]/30 shadow-sm mt-8">
                                <div className="w-24 h-24 bg-[#F3E8DF] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search size={40} className="text-[#452829]/40" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-[#452829] mb-2">কোনো প্রোফাইল পাওয়া যায়নি</h3>
                                <p className="text-[#57595B] max-w-md mx-auto mb-8">
                                    আপনার ফিল্টারগুলো পরিবর্তন করে আবার চেষ্টা করুন।
                                </p>
                                <button 
                                    onClick={clearFilters}
                                    className="px-8 py-3 bg-[#452829] text-[#F3E8DF] rounded-xl font-bold hover:shadow-lg transition-all"
                                >
                                    সকল প্রোফাইল দেখুন
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* --- MOBILE FILTER DRAWER --- */}
            {showMobileFilters && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Overlay */}
                    <div 
                        className="absolute inset-0 bg-[#452829]/60 backdrop-blur-sm"
                        onClick={() => setShowMobileFilters(false)}
                    ></div>
                    
                    {/* Drawer */}
                    <div className="absolute inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl animate-slide-in">
                        <FilterSidebar mobile={true} />
                    </div>
                </div>
            )}
            
            <style>{`
                @keyframes slideIn {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                .animate-slide-in {
                    animation: slideIn 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default AllProfiles;