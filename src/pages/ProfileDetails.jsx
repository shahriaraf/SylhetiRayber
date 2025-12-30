import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
    MapPin, Briefcase, Calendar, Ruler, Heart, 
    ArrowLeft, ShieldCheck, Mail, Phone, Share2, 
    MessageCircle, Star, GraduationCap, Users
} from 'lucide-react';

const ProfileDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('personal'); // personal, family, partner

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const config = { headers: { Authorization: `Bearer ${token}` } };
                const res = await axios.get(`${API_BASE_URL}/api/users/profile/${id}`, config);
                setProfile(res.data);
            } catch (err) {
                console.error(err);
                // Fallback or redirect if error
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [id]);

    if (loading) return <LoadingSkeleton />;
    if (!profile) return <div className="text-center p-10">প্রোফাইল পাওয়া যায়নি</div>;

    // Destructure Data (with fallbacks)
    const {
        firstName, lastName, profilePhoto,
        age = "N/A", religion = "N/A", currentCity = "N/A",
        occupation = "N/A", annualIncome = "N/A", education = "N/A",
        height = "N/A", bodyType = "N/A", complexion = "N/A",
        motherTongue = "N/A", diet = "N/A", aboutMe,
        caste = "N/A"
    } = profile;

    const fullName = `${firstName} ${lastName}`;
    const photoUrl = profilePhoto || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

    return (
        <div className="min-h-screen bg-[#F3E8DF] pb-20">
            
            {/* --- HERO HEADER --- */}
            <div className="relative bg-[#452829] pb-24 lg:pb-32 rounded-b-[3rem] overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8D1C5] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative z-10">
                    
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate(-1)}
                        className="absolute top-8 left-4 sm:left-8 flex items-center gap-2 text-[#E8D1C5] hover:text-[#F3E8DF] transition-colors font-medium"
                    >
                        <ArrowLeft size={20} />
                        <span>ফিরে যান</span>
                    </button>

                    <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
                        
                        {/* Profile Image (Overlapping the container) */}
                        <div className="relative -mb-16 md:-mb-24 shrink-0">
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] border-4 border-[#F3E8DF] shadow-2xl overflow-hidden bg-white">
                                <img 
                                    src={photoUrl} 
                                    alt={fullName} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Verified Badge */}
                            <div className="absolute -bottom-3 -right-3 bg-[#E8D1C5] text-[#452829] px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                                <ShieldCheck size={14} />
                                <span>ভেরিফাইড</span>
                            </div>
                        </div>

                        {/* Basic Info */}
                        <div className="text-center md:text-left flex-1 pb-4">
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#F3E8DF] mb-2">{fullName}</h1>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[#E8D1C5] text-sm md:text-base font-medium">
                                <span className="flex items-center gap-1.5"><MapPin size={16} /> {currentCity}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E8D1C5]/40 mt-2.5"></span>
                                <span className="flex items-center gap-1.5"><Briefcase size={16} /> {occupation}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E8D1C5]/40 mt-2.5"></span>
                                <span>{age} বছর</span>
                            </div>
                        </div>

                        {/* Action Buttons (Desktop) */}
                        <div className="hidden md:flex gap-3 mb-6">
                            <button className="p-3 rounded-xl border border-[#E8D1C5]/30 text-[#E8D1C5] hover:bg-[#E8D1C5] hover:text-[#452829] transition-all">
                                <Share2 size={20} />
                            </button>
                            <button className="p-3 rounded-xl border border-[#E8D1C5]/30 text-[#E8D1C5] hover:bg-[#E8D1C5] hover:text-[#452829] transition-all">
                                <Heart size={20} />
                            </button>
                            <button className="px-8 py-3 bg-[#E8D1C5] text-[#452829] rounded-xl font-bold shadow-lg hover:shadow-[#E8D1C5]/20 hover:-translate-y-1 transition-all flex items-center gap-2">
                                <MessageCircle size={18} />
                                <span>কথা বলুন</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Details (Span 8) */}
                    <div className="lg:col-span-8">
                        
                        {/* Tabs */}
                        <div className="flex border-b border-[#452829]/10 mb-8 overflow-x-auto no-scrollbar">
                            {['personal', 'family', 'partner'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-4 font-bold text-sm uppercase tracking-wider whitespace-nowrap transition-all ${
                                        activeTab === tab 
                                            ? 'text-[#452829] border-b-2 border-[#452829]' 
                                            : 'text-[#57595B]/60 hover:text-[#452829]'
                                    }`}
                                >
                                    {tab === 'personal' ? 'ব্যক্তিগত তথ্য' : tab === 'family' ? 'পারিবারিক ও শিক্ষা' : 'জীবনসঙ্গী পছন্দ'}
                                </button>
                            ))}
                        </div>

                        {/* Content Card */}
                        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#452829]/5 min-h-[400px]">
                            
                            {/* About Me (Always Visible) */}
                            <div className="mb-10">
                                <h3 className="font-serif font-bold text-2xl text-[#452829] mb-4">আমার সম্পর্কে</h3>
                                <p className="text-[#57595B] leading-relaxed text-lg">
                                    {aboutMe || "ব্যবহারকারী নিজের সম্পর্কে কিছু লিখেননি।"}
                                </p>
                            </div>

                            {/* Tab Content */}
                            {activeTab === 'personal' && (
                                <div className="animate-fade-in">
                                    <h4 className="flex items-center gap-2 font-bold text-[#E8D1C5] uppercase tracking-wider text-sm mb-6">
                                        <Users size={16} /> বিস্তারিত তথ্য
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                        <InfoRow label="ধর্ম" value={religion} />
                                        <InfoRow label="সম্প্রদায়" value={caste} />
                                        <InfoRow label="মাতৃভাষা" value={motherTongue} />
                                        <InfoRow label="উচ্চতা" value={`${height} সে.মি.`} />
                                        <InfoRow label="গাত্রবর্ণ" value={complexion} />
                                        <InfoRow label="শারীরিক গঠন" value={bodyType} />
                                        <InfoRow label="খাদ্যাভ্যাস" value={diet} />
                                        <InfoRow label="বৈবাহিক অবস্থা" value="অবিবাহিত" />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'family' && (
                                <div className="animate-fade-in">
                                    <h4 className="flex items-center gap-2 font-bold text-[#E8D1C5] uppercase tracking-wider text-sm mb-6">
                                        <GraduationCap size={16} /> শিক্ষা ও পেশা
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                        <InfoRow label="পেশা" value={occupation} />
                                        <InfoRow label="শিক্ষা" value={education} />
                                        <InfoRow label="বার্ষিক আয়" value={annualIncome} />
                                        <InfoRow label="কর্মস্থল" value={currentCity} />
                                    </div>
                                </div>
                            )}
                            
                            {activeTab === 'partner' && (
                                <div className="animate-fade-in text-center py-10">
                                    <div className="w-16 h-16 bg-[#F3E8DF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Heart size={32} className="text-[#452829]/40" />
                                    </div>
                                    <p className="text-[#57595B]">ব্যবহারকারী এখনো জীবনসঙ্গী পছন্দ নির্দিষ্ট করেননি।</p>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Right Column: Sidebar (Span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        
                        {/* Safety Card */}
                        <div className="bg-[#452829] text-[#F3E8DF] rounded-3xl p-6 md:p-8 relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8D1C5] rounded-full blur-[60px] opacity-20 pointer-events-none"></div>
                             
                             <ShieldCheck size={40} className="text-[#E8D1C5] mb-4" />
                             <h3 className="font-serif font-bold text-xl mb-2">নিরাপদ যোগাযোগ</h3>
                             <p className="text-[#F3E8DF]/70 text-sm mb-6">
                                কারো সাথে আর্থিক লেনদেন করার আগে সতর্ক থাকুন। কোনো সন্দেহজনক আচরণ দেখলে রিপোর্ট করুন।
                             </p>
                             <button className="w-full py-3 rounded-xl border border-[#E8D1C5]/30 text-[#E8D1C5] font-bold text-sm hover:bg-[#E8D1C5] hover:text-[#452829] transition-all">
                                রিপোর্ট করুন
                             </button>
                        </div>

                        {/* Contact Summary (Desktop) */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-[#452829]/5">
                            <h3 className="font-serif font-bold text-[#452829] text-lg mb-6">যোগাযোগের তথ্য</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-[#57595B]">
                                    <div className="w-10 h-10 rounded-full bg-[#F3E8DF] flex items-center justify-center shrink-0">
                                        <Phone size={18} className="text-[#452829]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#452829]/50 uppercase tracking-wide">ফোন</p>
                                        <p className="font-medium">লক করা (শুধু প্রিমিয়াম)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-[#57595B]">
                                    <div className="w-10 h-10 rounded-full bg-[#F3E8DF] flex items-center justify-center shrink-0">
                                        <Mail size={18} className="text-[#452829]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#452829]/50 uppercase tracking-wide">ইমেল</p>
                                        <p className="font-medium">লক করা (শুধু প্রিমিয়াম)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- MOBILE STICKY ACTION BAR --- */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#452829]/5 p-4 md:hidden z-40 flex gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                <button className="flex-1 py-3 rounded-xl border border-[#452829]/10 text-[#452829] font-bold flex items-center justify-center gap-2">
                    <Heart size={20} />
                    <span>পছন্দ</span>
                </button>
                <button className="flex-[2] py-3 bg-[#452829] text-[#F3E8DF] rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg">
                    <MessageCircle size={20} />
                    <span>কথা বলুন</span>
                </button>
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
            `}</style>
        </div>
    );
};

// --- Helper Component for Data Rows ---
const InfoRow = ({ label, value }) => (
    <div className="border-b border-[#452829]/5 pb-2 last:border-0">
        <p className="text-xs font-bold text-[#E8D1C5] uppercase tracking-wide mb-1">{label}</p>
        <p className="text-[#452829] font-medium text-lg">{value}</p>
    </div>
);

// --- Loading Skeleton ---
const LoadingSkeleton = () => (
    <div className="min-h-screen bg-[#F3E8DF] animate-pulse">
        <div className="h-80 bg-[#452829]/90 rounded-b-[3rem]"></div>
        <div className="max-w-7xl mx-auto px-6 -mt-24">
            <div className="flex gap-8 items-end">
                <div className="w-64 h-64 bg-gray-300 rounded-[2rem] border-4 border-[#F3E8DF]"></div>
                <div className="pb-8 space-y-4">
                    <div className="h-10 w-64 bg-[#452829]/20 rounded"></div>
                    <div className="h-6 w-40 bg-[#452829]/20 rounded"></div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-8 mt-20">
                <div className="col-span-8 h-96 bg-white rounded-3xl"></div>
                <div className="col-span-4 h-64 bg-[#452829]/10 rounded-3xl"></div>
            </div>
        </div>
    </div>
);

export default ProfileDetails;