import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 3000);
    }, 2000);
  };

  // --- REUSABLE COMPONENTS ---
  
  const ContactCard = ({ icon: Icon, title, line1, line2, delay }) => (
    <div 
      className={`group flex items-start gap-5 p-6 rounded-2xl bg-[#F3E8DF]/5 border border-[#F3E8DF]/10 backdrop-blur-md transition-all duration-500 hover:bg-[#F3E8DF]/10 hover:scale-[1.02] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] animate-fade-in-up`}
      style={{ animationDelay: delay }}
    >
      <div className="w-12 h-12 rounded-full bg-[#E8D1C5]/10 flex items-center justify-center group-hover:bg-[#E8D1C5] transition-colors duration-500">
        <Icon size={24} className="text-[#E8D1C5] group-hover:text-[#452829] transition-colors duration-300" />
      </div>
      <div>
        <h4 className="text-[#F3E8DF] font-serif font-bold text-lg mb-1">{title}</h4>
        <p className="text-[#F3E8DF]/60 text-sm leading-relaxed">{line1}</p>
        <p className="text-[#F3E8DF]/60 text-sm leading-relaxed">{line2}</p>
      </div>
    </div>
  );

  const FormInput = ({ type, name, placeholder, value, rows }) => (
    <div className="relative group">
      {type === 'textarea' ? (
        <textarea
          name={name}
          rows={rows || 4}
          value={value}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b border-[#F3E8DF]/20 py-4 text-[#F3E8DF] placeholder-[#F3E8DF]/30 focus:outline-none focus:border-[#E8D1C5] transition-all duration-300 resize-none"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b border-[#F3E8DF]/20 py-4 text-[#F3E8DF] placeholder-[#F3E8DF]/30 focus:outline-none focus:border-[#E8D1C5] transition-all duration-300"
          placeholder={placeholder}
        />
      )}
      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E8D1C5] transition-all duration-500 group-focus-within:w-full"></div>
    </div>
  );

  return (
    <section className="relative py-24 lg:py-32 bg-[#452829] overflow-hidden min-h-screen flex items-center">
      
      {/* --- BACKGROUND FX (Same as WhyChooseUs) --- */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#E8D1C5] rounded-full blur-[150px] opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E8D1C5] rounded-full blur-[120px] opacity-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8D1C5]/30 bg-[#E8D1C5]/5 backdrop-blur-sm mb-6">
              <MessageSquare size={14} className="text-[#E8D1C5]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#E8D1C5] uppercase">
                সহায়তা কেন্দ্র
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-[#F3E8DF] mb-6">
              যোগাযোগ <span className="italic text-[#E8D1C5]">করুন</span>
            </h2>
            <p className="text-[#F3E8DF]/70 max-w-2xl mx-auto text-lg">
              আপনার জীবনসঙ্গী খোঁজার যাত্রায় কোনো প্রশ্ন আছে? আমাদের বিশেষজ্ঞ দল আপনার সহায়তায় সর্বদা প্রস্তুত।
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* --- LEFT: CONTACT INFO CARDS --- */}
          <div className="space-y-6">
            <ContactCard 
              icon={Phone} 
              title="কল করুন" 
              line1="+8801609-674445" 
              delay="0ms"
            />
            <ContactCard 
              icon={Mail} 
              title="ইমেল করুন" 
              line1="info@marriagemedia.com" 
              delay="150ms"
            />
            <ContactCard 
              icon={MapPin} 
              title="আমাদের অফিস" 
              line1="আম্বরখানা রাজার গোল্লি"
              delay="300ms"
            />

            {/* Stylized Map Preview */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-[#F3E8DF]/10 shadow-2xl h-64 relative group animate-fade-in-up" style={{ animationDelay: '450ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1748&auto=format&fit=crop" 
                alt="Office Location" 
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-[#452829]/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="px-6 py-2 bg-[#F3E8DF]/10 backdrop-blur-md border border-[#F3E8DF]/30 text-[#F3E8DF] rounded-full text-sm font-bold hover:bg-[#E8D1C5] hover:text-[#452829] transition-all duration-300">
                    ম্যাপে দেখুন
                 </button>
              </div>
            </div>
          </div>

          {/* --- RIGHT: THE FORM --- */}
          <div className="relative">
            {/* Decorative Card Background */}
            <div className="absolute inset-0 bg-[#E8D1C5] rounded-[3rem] blur-xl opacity-10 transform rotate-2"></div>
            
            <div className="relative bg-[#F3E8DF]/5 backdrop-blur-xl border border-[#F3E8DF]/10 rounded-[3rem] p-8 sm:p-12 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-[#F3E8DF] mb-8">বার্তা পাঠান</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FormInput type="text" name="name" placeholder="আপনার নাম" value={formState.name} />
                  <FormInput type="email" name="email" placeholder="আপনার ইমেল" value={formState.email} />
                </div>
                <FormInput type="text" name="subject" placeholder="বিষয়" value={formState.subject} />
                <FormInput type="textarea" name="message" placeholder="আপনার বার্তা লিখুন..." value={formState.message} />

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSending || isSent}
                    className={`group w-full py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 ${
                      isSent 
                        ? 'bg-green-500 text-white' 
                        : 'bg-[#E8D1C5] text-[#452829] hover:bg-[#d6bea8] hover:shadow-[0_0_20px_rgba(232,209,197,0.4)]'
                    }`}
                  >
                    {isSending ? (
                      <span className="animate-pulse">পাঠানো হচ্ছে...</span>
                    ) : isSent ? (
                      <>
                        <span>সফলভাবে পাঠানো হয়েছে</span>
                        <CheckIcon />
                      </>
                    ) : (
                      <>
                        <span>বার্তা পাঠান</span>
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0; 
        }
      `}</style>
    </section>
  );
};

// Simple check icon component
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={3}>
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Contact;