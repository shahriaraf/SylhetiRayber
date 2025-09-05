import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FiUser, FiLock, FiMail, FiPhone, FiHome, FiEdit2, FiBriefcase, FiHeart, FiAlertCircle, FiCalendar, FiUsers } from 'react-icons/fi';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '', password: '', firstName: '', lastName: '', gender: '', dateOfBirth: '',
        phone: '', currentCity: '', height: '', bodyType: '', complexion: '', education: '',
        occupation: '', annualIncome: '', religion: '', caste: '', motherTongue: '',
        diet: '', aboutMe: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/register', formData);
            navigate('/login'); // navigate to the login page in Bengali
        } catch (err) {
            setError(err.response?.data?.msg || 'নিবন্ধন ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
            console.error(err.response?.data);
        }
    };

    // Helper for styled input fields
    const renderInput = (name, label, type = 'text', placeholder = '') => (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                placeholder={placeholder}
            />
        </div>
    );

    // Helper for styled select fields
    const renderSelect = (name, label, options) => (
        <div>
             <label htmlFor={name} className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
             <select 
                id={name} 
                name={name} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
             >
                <option value="">নির্বাচন করুন...</option>
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    );

    // Helper for section titles
    const SectionTitle = ({ icon, title }) => (
        <div className="flex items-center space-x-3 mb-6 border-b border-gray-200 pb-3">
            <div className="bg-pink-100 text-pink-600 p-2 rounded-full">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
    );


    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-600 mb-10">
                    আপনার প্রোফাইল তৈরি করুন
                </h2>

                {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 flex items-center">
                        <FiAlertCircle className="mr-3 text-xl"/>
                        <p>{error}</p>
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-10">
                    {/* Account Information */}
                    <div>
                        <SectionTitle icon={<FiLock size={20}/>} title="অ্যাকাউন্ট তথ্য" />
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                           {renderInput('email', 'ইমেল', 'email', 'example@email.com')}
                           {renderInput('password', 'পাসওয়ার্ড', 'password', '********')}
                        </div>
                    </div>

                    {/* Basic Information */}
                    <div>
                        <SectionTitle icon={<FiUser size={20}/>} title="মৌলিক তথ্য" />
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                           {renderInput('firstName', 'নামের প্রথম অংশ')}
                           {renderInput('lastName', 'নামের শেষ অংশ')}
                           {renderInput('dateOfBirth', 'জন্ম তারিখ', 'date')}
                           {renderSelect('gender', 'লিঙ্গ', ['পুরুষ', 'মহিলা'])}
                        </div>
                    </div>

                    {/* Contact & Location */}
                    <div>
                        <SectionTitle icon={<FiPhone size={20}/>} title="যোগাযোগ এবং ঠিকানা" />
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                           {renderInput('phone', 'ফোন নম্বর')}
                           {renderInput('currentCity', 'বর্তমান শহর')}
                        </div>
                    </div>

                    {/* Physical Appearance */}
                    <div>
                        <SectionTitle icon={<FiHeart size={20}/>} title="শারীরিক বিবরণ" />
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                           {renderInput('height', 'উচ্চতা (সে.মি.)')}
                           {renderSelect('bodyType', 'শারীরিক গঠন', ['পাতলা', 'رياضي', 'মাঝারি', 'ভারী'])}
                           {renderSelect('complexion', 'গাত্রবর্ণ', ['খুব ফর্সা', 'ফর্সা', 'শ্যামলা', 'কালো'])}
                        </div>
                    </div>
                    
                    {/* Career & Education */}
                    <div>
                        <SectionTitle icon={<FiBriefcase size={20}/>} title="শিক্ষা ও পেশা" />
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                           {renderInput('education', 'সর্বোচ্চ শিক্ষা')}
                           {renderInput('occupation', 'পেশা')}
                           {renderInput('annualIncome', 'বার্ষিক আয় (টাকায়)')}
                        </div>
                    </div>

                    {/* Religion & Lifestyle */}
                    <div>
                        <SectionTitle icon={<FiUsers size={20}/>} title="ধর্ম ও জীবনধারা" />
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                           {renderInput('religion', 'ধর্ম')}
                           {renderInput('caste', 'জাতি / সম্প্রদায়')}
                           {renderInput('motherTongue', 'মাতৃভাষা')}
                           {renderSelect('diet', 'খাদ্যাভ্যাস', ['নিরামিষ', 'আমিষ', 'ডিম সহ নিরামিষ', 'ভেগান'])}
                        </div>
                    </div>

                    {/* About Yourself */}
                    <div>
                        <SectionTitle icon={<FiEdit2 size={20}/>} title="আপনার সম্পর্কে" />
                        <div>
                            <textarea 
                                id="aboutMe" 
                                name="aboutMe" 
                                rows={4} 
                                onChange={handleChange} 
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                                placeholder="আপনার সম্পর্কে কিছু লিখুন..."
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            নিবন্ধন করুন
                        </button>
                    </div>

                    <p className="text-center text-gray-600 text-sm pt-4">
                        ইতিমধ্যে একটি অ্যাকাউন্ট আছে?{' '}
                        <Link to="/login" className="font-bold text-pink-600 hover:text-pink-800 hover:underline">
                            এখানে লগইন করুন
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;