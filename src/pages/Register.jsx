import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { 
    User, Lock, Mail, Phone, MapPin, Briefcase, Heart, 
    ChevronRight, ChevronLeft, Check, Calendar, BookOpen, 
    Smile, Loader2, AlertCircle 
} from 'lucide-react';

// --- REUSABLE COMPONENTS (Moved OUTSIDE the main component) ---

const InputGroup = ({ label, name, type = "text", placeholder, icon: Icon, required = true, value, onChange }) => (
    <div className="space-y-1.5">
        <label className="text-xs font-bold text-[#452829] uppercase tracking-wider ml-1">
            {label}
        </label>
        <div className="relative group">
            {Icon && (
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#57595B] group-focus-within:text-[#452829]">
                    <Icon size={18} />
                </div>
            )}
            <input
                type={type}
                name={name}
                value={value} // Controlled input
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className={`w-full ${Icon ? 'pl-11' : 'pl-4'} pr-4 py-3.5 bg-white border border-[#E8D1C5] rounded-xl text-[#452829] placeholder-gray-400 focus:outline-none focus:border-[#452829] focus:ring-4 focus:ring-[#E8D1C5]/20 transition-all duration-300`}
            />
        </div>
    </div>
);

const SelectGroup = ({ label, name, options, icon: Icon, required = true, value, onChange }) => (
    <div className="space-y-1.5">
        <label className="text-xs font-bold text-[#452829] uppercase tracking-wider ml-1">
            {label}
        </label>
        <div className="relative group">
            {Icon && (
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#57595B] group-focus-within:text-[#452829]">
                    <Icon size={18} />
                </div>
            )}
            <select
                name={name}
                value={value} // Controlled input
                onChange={onChange}
                required={required}
                className={`w-full ${Icon ? 'pl-11' : 'pl-4'} pr-10 py-3.5 bg-white border border-[#E8D1C5] rounded-xl text-[#452829] focus:outline-none focus:border-[#452829] focus:ring-4 focus:ring-[#E8D1C5]/20 transition-all duration-300 appearance-none cursor-pointer`}
            >
                <option value="">নির্বাচন করুন...</option>
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[#57595B]">
                <ChevronRight size={16} className="rotate-90" />
            </div>
        </div>
    </div>
);

// --- MAIN COMPONENT ---

const Register = () => {
    const navigate = useNavigate();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // --- STATE MANAGEMENT ---
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const [formData, setFormData] = useState({
        email: '', password: '', firstName: '', lastName: '', 
        gender: '', dateOfBirth: '', phone: '', currentCity: '', 
        height: '', bodyType: '', complexion: '', 
        education: '', occupation: '', annualIncome: '', 
        religion: '', caste: '', motherTongue: '', diet: '', aboutMe: '',
    });

    // --- CONSTANTS ---
    const totalSteps = 4;
    const steps = [
        { id: 1, title: "অ্যাকাউন্ট", icon: Lock },
        { id: 2, title: "ব্যক্তিগত", icon: User },
        { id: 3, title: "পেশা ও শিক্ষা", icon: Briefcase },
        { id: 4, title: "জীবনধারা", icon: Heart },
    ];

    // --- HANDLERS ---
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGenderSelect = (gender) => {
        setFormData({ ...formData, gender });
    };

    const nextStep = () => {
        if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            await axios.post(`${API_BASE_URL}/api/auth/register`, formData);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.msg || 'নিবন্ধন ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F3E8DF] py-12 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8D1C5] rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#452829] rounded-full blur-[150px] opacity-5 translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-3xl mx-auto relative z-10">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#452829] mb-3">
                        প্রোফাইল তৈরি করুন
                    </h2>
                    <p className="text-[#57595B]">আপনার জীবনসঙ্গী খোঁজার যাত্রা শুরু করতে তথ্য প্রদান করুন</p>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-between items-center mb-10 px-4 sm:px-12 relative">
                    {/* Progress Bar Background */}
                    <div className="absolute left-4 right-4 top-1/2 h-0.5 bg-[#E8D1C5] -z-10 transform -translate-y-1/2 sm:left-12 sm:right-12"></div>
                    {/* Active Progress Bar */}
                    <div 
                        className="absolute left-4 top-1/2 h-0.5 bg-[#452829] -z-10 transform -translate-y-1/2 transition-all duration-500 sm:left-12"
                        style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`, maxWidth: 'calc(100% - 24px - 24px)' }} 
                    ></div>

                    {steps.map((step) => {
                        const isActive = step.id === currentStep;
                        const isCompleted = step.id < currentStep;

                        return (
                            <div key={step.id} className="flex flex-col items-center">
                                <div 
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                                        isActive 
                                            ? 'bg-[#452829] border-[#452829] text-white scale-110 shadow-lg' 
                                            : isCompleted 
                                                ? 'bg-[#452829] border-[#452829] text-white' 
                                                : 'bg-[#F3E8DF] border-[#E8D1C5] text-[#E8D1C5]'
                                    }`}
                                >
                                    {isCompleted ? <Check size={18} /> : <step.icon size={18} />}
                                </div>
                                <span className={`mt-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                                    isActive ? 'text-[#452829]' : 'text-[#57595B]/50'
                                }`}>
                                    {step.title}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Main Form Card */}
                <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl p-6 sm:p-10">
                    
                    {error && (
                        <div className="mb-6 bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl flex items-center gap-3 animate-pulse">
                            <AlertCircle size={20} />
                            <p>{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        
                        {/* STEP 1: Account Info */}
                        {currentStep === 1 && (
                            <div className="space-y-6 animate-fade-in">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <InputGroup 
                                        label="নামের প্রথম অংশ" name="firstName" icon={User} 
                                        value={formData.firstName} onChange={handleChange} 
                                    />
                                    <InputGroup 
                                        label="নামের শেষ অংশ" name="lastName" icon={User} 
                                        value={formData.lastName} onChange={handleChange}
                                    />
                                </div>
                                <InputGroup 
                                    label="ইমেল" name="email" type="email" placeholder="আপনার ইমেল লিখুন" icon={Mail} 
                                    value={formData.email} onChange={handleChange}
                                />
                                <InputGroup 
                                    label="পাসওয়ার্ড" name="password" type="password" placeholder="••••••••" icon={Lock} 
                                    value={formData.password} onChange={handleChange}
                                />
                            </div>
                        )}

                        {/* STEP 2: Personal Info */}
                        {currentStep === 2 && (
                            <div className="space-y-6 animate-fade-in">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#452829] uppercase tracking-wider ml-1">লিঙ্গ</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {['পুরুষ', 'মহিলা'].map((g) => (
                                            <button
                                                type="button"
                                                key={g}
                                                onClick={() => handleGenderSelect(g)}
                                                className={`py-3 rounded-xl border-2 font-medium transition-all duration-200 ${
                                                    formData.gender === g 
                                                        ? 'border-[#452829] bg-[#452829]/5 text-[#452829]' 
                                                        : 'border-[#E8D1C5] bg-white text-[#57595B] hover:border-[#452829]/50'
                                                }`}
                                            >
                                                {g}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <InputGroup 
                                        label="জন্ম তারিখ" name="dateOfBirth" type="date" icon={Calendar} 
                                        value={formData.dateOfBirth} onChange={handleChange}
                                    />
                                    <InputGroup 
                                        label="ফোন নম্বর" name="phone" placeholder="আপনার ফোন নম্বর লিখুন" icon={Phone} 
                                        value={formData.phone} onChange={handleChange}
                                    />
                                </div>
                                <InputGroup 
                                    label="বর্তমান শহর" name="currentCity" placeholder="আপনার বর্তমান শহর লিখুন" icon={MapPin} 
                                    value={formData.currentCity} onChange={handleChange}
                                />
                            </div>
                        )}

                        {/* STEP 3: Career & Physical */}
                        {currentStep === 3 && (
                            <div className="space-y-6 animate-fade-in">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <InputGroup 
                                        label="উচ্চতা (সে.মি.)/( ফুট )" name="height" type="number" placeholder="আপনার উচ্চতা লিখুন" 
                                        value={formData.height} onChange={handleChange}
                                    />
                                    <SelectGroup 
                                        label="শারীরিক গঠন" name="bodyType" options={['পাতলা', 'মাঝারি', 'ভারী', 'অ্যাথলেটিক']} 
                                        value={formData.bodyType} onChange={handleChange}
                                    />
                                    <SelectGroup 
                                        label="গাত্রবর্ণ" name="complexion" options={['খুব ফর্সা', 'ফর্সা', 'শ্যামলা', 'কালো']} 
                                        value={formData.complexion} onChange={handleChange}
                                    />
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <InputGroup 
                                        label="সর্বোচ্চ শিক্ষা" name="education" placeholder="আপনার সর্বোচ্চ শিক্ষা লিখুন" icon={BookOpen} 
                                        value={formData.education} onChange={handleChange}
                                    />
                                    <InputGroup 
                                        label="পেশা" name="occupation" placeholder="আপনার পেশা লিখুন" icon={Briefcase} 
                                        value={formData.occupation} onChange={handleChange}
                                    />
                                </div>
                                <InputGroup 
                                    label="বার্ষিক আয়" name="annualIncome" placeholder="আপনার বার্ষিক আয় লিখুন" icon={Smile}
                                    value={formData.annualIncome} onChange={handleChange}
                                />
                            </div>
                        )}

                        {/* STEP 4: Lifestyle */}
                        {currentStep === 4 && (
                            <div className="space-y-6 animate-fade-in">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <InputGroup 
                                        label="ধর্ম" name="religion" placeholder="ইসলাম" icon={Heart} 
                                        value={formData.religion} onChange={handleChange}
                                    />
                                    <InputGroup 
                                        label="সম্প্রদায়/জাতি" name="caste" placeholder="সুন্নি" 
                                        value={formData.caste} onChange={handleChange}
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <InputGroup 
                                        label="মাতৃভাষা" name="motherTongue" placeholder="বাংলা" 
                                        value={formData.motherTongue} onChange={handleChange}
                                    />
                                    <SelectGroup 
                                        label="খাদ্যাভ্যাস" name="diet" options={['নিরামিষ', 'আমিষ', 'ডিম সহ নিরামিষ', 'ভেগান']} 
                                        value={formData.diet} onChange={handleChange}
                                    />
                                </div>
                                
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-[#452829] uppercase tracking-wider ml-1">আপনার সম্পর্কে</label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-4 text-[#57595B]">
                                            <Smile size={18} />
                                        </div>
                                        <textarea
                                            name="aboutMe"
                                            rows={4}
                                            value={formData.aboutMe}
                                            onChange={handleChange}
                                            placeholder="আপনার ব্যক্তিত্ব, শখ এবং পছন্দ সম্পর্কে সংক্ষেপে লিখুন..."
                                            className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#E8D1C5] rounded-xl text-[#452829] placeholder-gray-400 focus:outline-none focus:border-[#452829] focus:ring-4 focus:ring-[#E8D1C5]/20 transition-all duration-300 resize-none"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* NAVIGATION BUTTONS */}
                        <div className="flex justify-between items-center mt-10 pt-6 border-t border-[#E8D1C5]/50">
                            {currentStep > 1 ? (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#57595B] hover:text-[#452829] hover:bg-[#F3E8DF] transition-all"
                                >
                                    <ChevronLeft size={20} />
                                    পেছনে
                                </button>
                            ) : (
                                <div></div>
                            )}

                            {currentStep < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="flex items-center gap-2 bg-[#452829] text-[#F3E8DF] px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-[#2d1a1b] hover:shadow-xl transition-all transform active:scale-95"
                                >
                                    পরবর্তী
                                    <ChevronRight size={20} />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex items-center gap-2 bg-gradient-to-r from-[#452829] to-[#5e3a3b] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Check size={20} />}
                                    নিবন্ধন সম্পন্ন করুন
                                </button>
                            )}
                        </div>

                    </form>
                </div>
                
                <div className="text-center mt-8">
                    <p className="text-[#57595B] text-sm">
                        ইতিমধ্যে একটি অ্যাকাউন্ট আছে?{' '}
                        <Link to="/login" className="font-bold text-[#452829] hover:text-[#8a5a5c] transition-colors underline decoration-[#E8D1C5] underline-offset-4 decoration-2">
                            এখানে লগইন করুন
                        </Link>
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Register;