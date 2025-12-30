import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, User, Heart, ArrowRight, Calendar, Star } from 'lucide-react';

const ProfileCard = ({ profile }) => {
    
    // Fallback for missing data
    const { 
        _id, 
        firstName, 
        lastName, 
        profilePhoto, 
        currentCity = "Not Specified", 
        occupation = "N/A", 
        age = "N/A",
        religion = "N/A"
    } = profile;

    const fullName = `${firstName} ${lastName}`;
    const photoUrl = profilePhoto || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

    return (
        <div className="group relative bg-white rounded-2xl border border-[#E8D1C5]/30 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(69,40,41,0.15)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col h-full">
            
            {/* --- IMAGE SECTION --- */}
            <div className="relative h-64 overflow-hidden bg-[#F3E8DF]">
                <img 
                    src={photoUrl} 
                    alt={fullName} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#452829]/80 via-transparent to-transparent opacity-60"></div>

                {/* Top Tags (Religion/Age) */}
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-[#452829] shadow-sm uppercase tracking-wide">
                        {religion}
                    </span>
                </div>

                {/* Favorite Button (Floating) */}
                <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-[#452829] hover:text-[#E8D1C5] transition-all duration-300 active:scale-95">
                    <Heart size={18} />
                </button>

                {/* Name & Age Overlay */}
                <div className="absolute bottom-4 left-4 text-[#F3E8DF]">
                    <h3 className="text-xl font-serif font-bold leading-tight">{fullName}</h3>
                    <p className="text-[#E8D1C5] text-sm font-medium">{age} বছর বয়স</p>
                </div>
            </div>

            {/* --- DETAILS SECTION --- */}
            <div className="p-5 flex-1 flex flex-col">
                
                {/* Info Grid */}
                <div className="space-y-3 mb-6">
                    {/* Location */}
                    <div className="flex items-center gap-3 text-[#57595B]">
                        <div className="w-8 h-8 rounded-full bg-[#F3E8DF] flex items-center justify-center shrink-0 group-hover:bg-[#E8D1C5]/30 transition-colors">
                            <MapPin size={16} className="text-[#452829]" />
                        </div>
                        <span className="text-sm font-medium truncate">{currentCity}</span>
                    </div>

                    {/* Occupation */}
                    <div className="flex items-center gap-3 text-[#57595B]">
                        <div className="w-8 h-8 rounded-full bg-[#F3E8DF] flex items-center justify-center shrink-0 group-hover:bg-[#E8D1C5]/30 transition-colors">
                            <Briefcase size={16} className="text-[#452829]" />
                        </div>
                        <span className="text-sm font-medium truncate">{occupation}</span>
                    </div>

                    {/* Member Type (Static for now, implies premium) */}
                    <div className="flex items-center gap-3 text-[#57595B]">
                        <div className="w-8 h-8 rounded-full bg-[#F3E8DF] flex items-center justify-center shrink-0 group-hover:bg-[#E8D1C5]/30 transition-colors">
                            <Star size={16} className="text-[#452829]" />
                        </div>
                        <span className="text-sm font-medium truncate">ভেরিফাইড মেম্বার</span>
                    </div>
                </div>

                {/* --- ACTION BUTTON --- */}
                <div className="mt-auto pt-4 border-t border-[#E8D1C5]/30">
                    <Link 
                        to={`/profile/${_id}`}
                        className="group/btn w-full relative flex items-center justify-center gap-2 bg-[#452829] text-[#F3E8DF] py-3.5 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-[#2d1a1b] active:scale-95"
                    >
                        <span className="relative z-10">প্রোফাইল দেখুন</span>
                        <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        
                        {/* Shine Effect on Hover */}
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;