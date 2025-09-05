import React from 'react';
import { FiUser, FiMapPin, FiBriefcase, FiHeart } from 'react-icons/fi';

const ProfileCard = ({ profile }) => {
    // বয়স গণনা করার ফাংশন
    const calculateAge = (dob) => {
        if (!dob) return 'N/A';
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const age = calculateAge(profile.dateOfBirth);

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {/* প্রোফাইল ছবি */}
            <img 
                className="h-52 w-full object-cover" 
                src={`https://i.pravatar.cc/400?u=${profile._id}`} // একটি ভালো মানের ছবির জন্য সাইজ বাড়ানো হলো
                alt={`${profile.firstName} এর প্রোফাইল`} 
            />
            
            <div className="p-5">
                {/* নাম */}
                <h3 className="text-2xl font-bold text-gray-800 truncate">
                    {`${profile.firstName || ''} ${profile.lastName || ''}`}
                </h3>
                
                {/* বয়স এবং উচ্চতা */}
                <div className="flex items-center text-gray-600 text-base mt-2">
                    <FiUser className="mr-2 text-gray-400" />
                    <span>{age} বছর</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <span>{profile.height || 'N/A'} সে.মি.</span>
                </div>

                {/* অন্যান্য তথ্য */}
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-3 text-sm">
                    <div className="flex items-center text-gray-700">
                        <FiMapPin className="mr-3 text-gray-400 flex-shrink-0" />
                        <span className="font-semibold mr-2">শহর:</span>
                        <span className="truncate">{profile.currentCity || 'N/A'}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <FiHeart className="mr-3 text-gray-400 flex-shrink-0" />
                        <span className="font-semibold mr-2">ধর্ম:</span>
                        <span className="truncate">{profile.religion || 'N/A'}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <FiBriefcase className="mr-3 text-gray-400 flex-shrink-0" />
                        <span className="font-semibold mr-2">পেশা:</span>
                        <span className="truncate">{profile.occupation || 'N/A'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;