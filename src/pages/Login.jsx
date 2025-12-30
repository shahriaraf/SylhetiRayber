import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, AlertCircle, Eye, EyeOff, Loader2, ArrowRight, Heart } from 'lucide-react';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate = useNavigate();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // --- COLOR PALETTE ---
    // Primary: #452829 (Maroon)
    // Bg: #F3E8DF (Cream)
    // Accent: #E8D1C5 (Rose Gold)
    // Secondary: #57595B (Charcoal)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const res = await axios.post(`${API_BASE_URL}/api/auth/login`, formData);
            localStorage.setItem('token', res.data.token);
            setTimeout(() => navigate('/'), 800); // Cinematic delay
        } catch (err) {
            setError('ইমেল বা পাসওয়ার্ড সঠিক নয়। আবার চেষ্টা করুন।');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex w-full bg-[#F3E8DF]">
            
            {/* --- LEFT SIDE: FORM SECTION --- */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-24 xl:px-32 relative z-10 bg-[#F3E8DF]">
                
                {/* Logo - Top Left */}
                <div className="absolute top-8 left-8 sm:left-12 lg:left-12 flex items-center gap-1">
                    <img 
                        src="https://i.ibb.co/hGGSr7M/Whats-App-Image-2025-07-17-at-11-45-34-PM-removebg-preview.png" 
                        alt="Logo" 
                        className="w-14 h-14 object-contain drop-shadow-md"
                    />
                    <span className="text-xl font-serif font-bold text-[#452829] tracking-wide">মেরেজ মিডিয়া</span>
                </div>

                {/* Main Content Container */}
                <div className="mt-16 lg:mt-0">
                    <div className="mb-10">
                    
                        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#452829] mt-4 mb-3">
                            ফিরে আসার জন্য <br/>ধন্যবাদ
                        </h1>
                        <p className="text-[#57595B] text-lg">
                            আপনার জীবনসঙ্গী খোঁজার যাত্রা এখান থেকেই শুরু করুন।
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 text-red-600 p-4 rounded-r-lg mb-8 flex items-center gap-3 shadow-sm animate-shake">
                            <AlertCircle size={20} />
                            <p className="font-medium">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div className="group">
                            <label className="block text-xs font-bold text-[#452829] uppercase tracking-wider mb-2 ml-1">
                                ইমেল
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#57595B] group-focus-within:text-[#452829] transition-colors">
                                    <Mail size={20} />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    className="w-full pl-12 pr-4 py-4 bg-white border border-[#E8D1C5] rounded-xl text-[#452829] placeholder-gray-300 focus:outline-none focus:border-[#452829] focus:ring-4 focus:ring-[#E8D1C5]/20 transition-all duration-300 text-base"
                                    placeholder="আপনার ইমেল লিখুন"
                                    required
                                />
                            </div>
                        </div>
                        
                        {/* Password Input */}
                        <div className="group">
                            <div className="flex justify-between items-center ml-1 mb-2">
                                <label className="block text-xs font-bold text-[#452829] uppercase tracking-wider">
                                    পাসওয়ার্ড
                                </label>
                                <Link to="/forgot-password" className="text-xs font-medium text-[#57595B] hover:text-[#452829] hover:underline transition-all">
                                    পাসওয়ার্ড ভুলে গেছেন?
                                </Link>
                            </div>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#57595B] group-focus-within:text-[#452829] transition-colors">
                                    <Lock size={20} />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    onChange={handleChange}
                                    value={formData.password}
                                    className="w-full pl-12 pr-12 py-4 bg-white border border-[#E8D1C5] rounded-xl text-[#452829] placeholder-gray-300 focus:outline-none focus:border-[#452829] focus:ring-4 focus:ring-[#E8D1C5]/20 transition-all duration-300 text-base"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-[#452829] transition-colors focus:outline-none"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#452829] text-[#F3E8DF] font-bold py-4 rounded-xl shadow-lg shadow-[#452829]/20 hover:shadow-xl hover:bg-[#2d1a1b] hover:-translate-y-1 transform transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 text-lg"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 size={24} className="animate-spin" />
                                        <span>যাচাই করা হচ্ছে...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>প্রবেশ করুন</span>
                                        <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t border-[#E8D1C5]"></div>
                            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase tracking-widest">অথবা</span>
                            <div className="flex-grow border-t border-[#E8D1C5]"></div>
                        </div>

                        {/* Register Link */}
                        <div className="text-center">
                            <p className="text-[#57595B]">
                                আপনার কি অ্যাকাউন্ট নেই?{' '}
                                <Link to="/register" className="font-bold text-[#452829] hover:text-[#2d1a1b] underline decoration-[#E8D1C5] underline-offset-4 decoration-2 hover:decoration-[#452829] transition-all">
                                    বিনামূল্যে নিবন্ধন করুন
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
                
        
            </div>

            {/* --- RIGHT SIDE: IMAGE HERO SECTION --- */}
            <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-[#452829]">
                {/* Background Image */}
                <img 
                    src="../../public/Marriage.jpg" 
                    alt="Wedding Couple" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#452829] via-[#452829]/40 to-transparent"></div>
                <div className="absolute inset-0 bg-[#452829]/20 mix-blend-multiply"></div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-16 text-[#F3E8DF]">
                    <div className="mb-6">
                        <Heart className="w-12 h-12 text-[#E8D1C5] fill-[#E8D1C5]/20 mb-6" />
                        <h2 className="text-4xl font-serif font-bold leading-tight mb-4">
                            "ভালোবাসা শুধু একে অপরের দিকে তাকানো নয়, <br/>একই দিকে তাকিয়ে পথ চলা।"
                        </h2>
                        <div className="w-20 h-1 bg-[#E8D1C5] rounded-full"></div>
                    </div>
                    
    
                </div>
            </div>

            {/* Shake Animation Style */}
            <style>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
                    20%, 40%, 60%, 80% { transform: translateX(4px); }
                }
                .animate-shake {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
                }
            `}</style>
        </div>
    );
};

export default Login;