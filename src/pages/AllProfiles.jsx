import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import { FiSearch } from 'react-icons/fi';

const AllProfiles = () => {
    // API থেকে পাওয়া আসল প্রোফাইল তালিকা
    const [profiles, setProfiles] = useState([]);
    // ফিল্টার করার পর দেখানো প্রোফাইল তালিকা
    const [filteredProfiles, setFilteredProfiles] = useState([]);
    
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // ট্যাব সিস্টেমের জন্য স্টেট
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'female', 'male'
    
    // সার্চ এবং ফিল্টারের জন্য স্টেট
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        religion: '',
        city: '',
    });

    // ফিল্টার ড্রপডাউনের জন্য ইউনিক অপশন
    const [uniqueReligions, setUniqueReligions] = useState([]);
    const [uniqueCities, setUniqueCities] = useState([]);

    // API থেকে প্রোফাইল Fetch করার জন্য useEffect
    useEffect(() => {
        const fetchProfiles = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/লগিন');
                return;
            }

            try {
                const config = { headers: { 'Authorization': `Bearer ${token}` } };
                const res = await axios.get('/api/users/profiles', config);
                setProfiles(res.data);
                setFilteredProfiles(res.data); // প্রাথমিকভাবে সব প্রোফাইল দেখানো হবে

                // ফিল্টারের জন্য ইউনিক ধর্ম এবং শহর বের করা
                const religions = [...new Set(res.data.map(p => p.religion).filter(Boolean))];
                const cities = [...new Set(res.data.map(p => p.currentCity).filter(Boolean))];
                setUniqueReligions(religions);
                setUniqueCities(cities);

            } catch (err) {
                console.error("প্রোফাইল আনতে সমস্যা হয়েছে:", err);
                localStorage.removeItem('token');
                navigate('/লগিন');
            } finally {
                setLoading(false);
            }
        };

        fetchProfiles();
    }, [navigate]);

    // ট্যাব, সার্চ বা ফিল্টার পরিবর্তন হলে প্রোফাইল ফিল্টার করার জন্য useEffect
    useEffect(() => {
        let result = [...profiles];

        // ১. ট্যাব অনুযায়ী ফিল্টার (কনে/বর)
        if (activeTab === 'female') {
            result = result.filter(profile => profile.gender === 'Female');
        } else if (activeTab === 'male') {
            result = result.filter(profile => profile.gender === 'Male');
        }

        // ২. সার্চ টার্ম অনুযায়ী ফিল্টার (নাম দিয়ে)
        if (searchTerm) {
            result = result.filter(profile => 
                `${profile.firstName} ${profile.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // ৩. ড্রপডাউন ফিল্টার অনুযায়ী ফিল্টার
        if (filters.religion) {
            result = result.filter(profile => profile.religion === filters.religion);
        }
        if (filters.city) {
            result = result.filter(profile => profile.currentCity === filters.city);
        }

        setFilteredProfiles(result);
    }, [profiles, activeTab, searchTerm, filters]);


    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center text-xl text-gray-700">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500 mx-auto mb-4"></div>
                    প্রোফাইলগুলো লোড হচ্ছে...
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                
                {/* কন্ট্রোল সেকশন: ট্যাব, সার্চ এবং ফিল্টার */}
                <div className="p-6 rounded-xl mb-8">
                    {/* ট্যাব সিস্টেম */}
                    <div className="flex border-b mb-6">
                        <button onClick={() => setActiveTab('all')} className={`py-2 px-6 font-semibold transition-colors duration-300 ${activeTab === 'all' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-600'}`}>সকল</button>
                        <button onClick={() => setActiveTab('female')} className={`py-2 px-6 font-semibold transition-colors duration-300 ${activeTab === 'female' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-600'}`}>কনে</button>
                        <button onClick={() => setActiveTab('male')} className={`py-2 px-6 font-semibold transition-colors duration-300 ${activeTab === 'male' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-600'}`}>বর</button>
                    </div>

                    {/* সার্চ এবং ফিল্টার */}
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        {/* সার্চ ইনপুট */}
                        <div className="relative w-full md:w-1/2">
                            <input 
                                type="text"
                                placeholder="নাম দিয়ে খুঁজুন..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>

                        {/* ফিল্টার ড্রপডাউন */}
                        <div className="flex gap-4 w-full md:w-1/2">
                            <select name="religion" onChange={handleFilterChange} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
                                <option value="">সকল ধর্ম</option>
                                {uniqueReligions.map(r => <option key={r} value={r}>{r}</option>)}
                            </select>
                            <select name="city" onChange={handleFilterChange} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
                                <option value="">সকল শহর</option>
                                {uniqueCities.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                {/* প্রোফাইল গ্রিড */}
                {filteredProfiles.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-0">
                        {filteredProfiles.map(profile => (
                            <ProfileCard key={profile._id} profile={profile} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 mt-20 py-10 bg-white rounded-lg shadow-md">
                        <p className="text-xl font-semibold">দুঃখিত!</p>
                        <p className="mt-2">আপনার অনুসন্ধানের সাথে মেলে এমন কোনো প্রোফাইল পাওয়া যায়নি।</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllProfiles;