import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import { FiSearch } from 'react-icons/fi';

const AllProfiles = () => {
    const [profiles, setProfiles] = useState([]);
    const [filteredProfiles, setFilteredProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('all'); // 'all', 'female', 'male'
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ religion: '', city: '' });

    const [uniqueReligions, setUniqueReligions] = useState([]);
    const [uniqueCities, setUniqueCities] = useState([]);

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Environment variable

    useEffect(() => {
        const fetchProfiles = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/লগিন');
                return;
            }

            try {
                const config = { headers: { Authorization: `Bearer ${token}` } };
                const res = await axios.get(`${API_BASE_URL}/api/users/profiles`, config);

                setProfiles(res.data);
                setFilteredProfiles(res.data);

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
    }, [navigate, API_BASE_URL]);

    useEffect(() => {
        let result = [...profiles];

        if (activeTab === 'female') result = result.filter(p => p.gender === 'Female');
        else if (activeTab === 'male') result = result.filter(p => p.gender === 'Male');

        if (searchTerm) {
            result = result.filter(p =>
                `${p.firstName} ${p.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (filters.religion) result = result.filter(p => p.religion === filters.religion);
        if (filters.city) result = result.filter(p => p.currentCity === filters.city);

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

                {/* ট্যাব, সার্চ ও ফিল্টার */}
                <div className="p-6 rounded-xl mb-8">
                    <div className="flex border-b mb-6">
                        <button onClick={() => setActiveTab('all')} className={`py-2 px-6 font-semibold transition-colors duration-300 ${activeTab === 'all' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-600'}`}>সকল</button>
                        <button onClick={() => setActiveTab('female')} className={`py-2 px-6 font-semibold transition-colors duration-300 ${activeTab === 'female' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-600'}`}>কনে</button>
                        <button onClick={() => setActiveTab('male')} className={`py-2 px-6 font-semibold transition-colors duration-300 ${activeTab === 'male' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-600'}`}>বর</button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center">
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
