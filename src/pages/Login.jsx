import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiAlertCircle } from 'react-icons/fi'; // আইকন ইম্পোর্ট

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // সাবমিট করার আগে পুরোনো error মুছে ফেলা হলো

        try {
            const res = await axios.post('/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/profiles');
        } catch (err) {
            setError('অবৈধ তথ্য। অনুগ্রহ করে আবার চেষ্টা করুন।');
            console.error(err.response?.data || 'An error occurred');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl w-full max-w-md transform transition-all hover:shadow-2xl">
                
                <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-pink">
                    লগইন করুন
                </h2>

                {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 flex items-center">
                        <FiAlertCircle className="mr-3 text-xl"/>
                        <p>{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* ইমেল ইনপুট */}
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FiMail className="text-gray-400" />
                        </span>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                            placeholder="আপনার ইমেল"
                            required
                        />
                    </div>
                    
                    {/* পাসওয়ার্ড ইনপুট */}
                    <div className="relative">
                         <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FiLock className="text-gray-400" />
                        </span>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                            placeholder="আপনার পাসওয়ার্ড"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            প্রবেশ করুন
                        </button>
                    </div>

                     <p className="text-center text-gray-600 text-sm pt-4">
                        আপনার কি অ্যাকাউন্ট নেই?{' '}
                        <Link to="/register" className="font-bold text-pink-600 hover:text-pink-800 hover:underline">
                            এখানে নিবন্ধন করুন
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;