import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // --- FUNCTIONALITY INTEGRATION START ---
    const isAuthenticated = !!localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        setMenuOpen(false);
    };
    // --- FUNCTIONALITY INTEGRATION END ---

    const publicLinks = [
        { name: "হোম", path: "/" },
        { name: "যোগাযোগ", path: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [menuOpen]);

    const isActive = (path) => location.pathname === path;

    // --- COLOR PALETTE REFERENCE ---
    // Primary (Dark Maroon): #452829
    // Secondary (Charcoal): #57595B
    // Accent (Rose Gold): #E8D1C5
    // Background (Cream): #F3E8DF

    return (
        <>
            <header 
                className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
                    isScrolled 
                        ? 'bg-[#F3E8DF]/90 backdrop-blur-xl shadow-sm border-[#E8D1C5] py-0.5' 
                        : 'bg-[#F3E8DF] border-transparent py-1'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        
                        {/* Brand Logo */}
                        <Link 
                            to={isAuthenticated ? "/find-matches" : "/"} 
                            className="relative group z-50"
                        >
                            <div className="relative transform transition-transform duration-300 group-hover:scale-105">
                                {/* Subtle Glow behind logo using Accent Color */}
                                <div className="absolute inset-0 bg-[#E8D1C5] blur-2xl opacity-0 group-hover:opacity-60 rounded-full transition-opacity duration-500"></div>
                                <img 
                                    className='w-18 h-18 object-contain relative z-10 drop-shadow-sm' 
                                    src="https://i.ibb.co/hGGSr7M/Whats-App-Image-2025-07-17-at-11-45-34-PM-removebg-preview.png" 
                                    alt="SoulMate Logo" 
                                />
                            </div>
                        </Link>

                        {/* Center Menu - Desktop - Floating Island */}
                        <ul className="hidden lg:flex items-center gap-1 bg-[#E8D1C5]/20 backdrop-blur-md px-2 py-1.5 rounded-full border border-[#E8D1C5]/40 shadow-sm">
                            {isAuthenticated && (
                                <li>
                                    <Link
                                        to="/find-matches"
                                        className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out ${
                                            isActive('/find-matches') 
                                                ? 'text-[#452829] font-semibold' 
                                                : 'text-[#57595B] hover:text-[#452829] hover:bg-[#F3E8DF]/80'
                                        }`}
                                    >
                                        সম্পর্ক খুঁজুন
                                        {isActive('/find-matches') && (
                                            <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#452829] rounded-full"></span>
                                        )}
                                    </Link>
                                </li>
                            )}
                            {publicLinks.map(link => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out ${
                                            isActive(link.path) 
                                                ? 'text-[#452829] font-semibold' 
                                                : 'text-[#57595B] hover:text-[#452829] hover:bg-[#F3E8DF]/80'
                                        }`}
                                    >
                                        {link.name}
                                        {isActive(link.path) && (
                                            <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#452829] rounded-full"></span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-4">
                            {isAuthenticated ? (
                                <button
                                    onClick={handleLogout}
                                    className="group relative px-6 py-2.5 rounded-full text-[#57595B] font-medium transition-all duration-300 hover:text-[#452829] hover:bg-[#E8D1C5]/30 border border-transparent hover:border-[#E8D1C5]"
                                >
                                    লগআউট
                                </button>
                            ) : (
                                <Link
                                    to="/register"
                                    className="relative overflow-hidden bg-[#452829] text-[#F3E8DF] px-8 py-2.5 rounded-full font-medium shadow-lg transition-all duration-300 hover:bg-[#2d1a1b] hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95"
                                >
                                    <span className="relative z-10 tracking-wide">রেজিস্ট্রেশন করুন</span>
                                </Link>
                            )}
                        </div>

                        {/* Mobile Toggle Button */}
                        <div className="lg:hidden flex items-center z-50">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className={`p-2.5 rounded-full transition-all duration-300 ${
                                    menuOpen ? 'bg-[#452829] text-[#F3E8DF] rotate-90 shadow-md' : 'bg-[#E8D1C5]/30 text-[#452829] hover:bg-[#E8D1C5]/50 shadow-sm'
                                }`}
                                aria-label="Toggle menu"
                            >
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-[#452829]/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-500 ${
                    menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setMenuOpen(false)} 
            />

            {/* Mobile Menu Drawer - Cream Background */}
            <div 
                className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-[#F3E8DF] z-50 shadow-2xl transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) lg:hidden ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full pt-24 pb-8 px-6 border-l border-[#E8D1C5]">
                    <nav className="flex-1 space-y-2">
                        {isAuthenticated && (
                            <Link
                                to="/find-matches"
                                onClick={() => setMenuOpen(false)}
                                className={`flex items-center justify-between w-full px-5 py-4 rounded-2xl text-base font-medium transition-all duration-200 ${
                                    isActive('/find-matches')
                                        ? 'bg-[#452829] text-[#F3E8DF] shadow-lg shadow-[#452829]/20'
                                        : 'bg-white/50 text-[#57595B] shadow-sm hover:shadow-md hover:scale-[1.02]'
                                }`}
                            >
                                সম্পর্ক খুঁজুন
                                {isActive('/find-matches') && <div className="w-2 h-2 bg-[#E8D1C5] rounded-full" />}
                            </Link>
                        )}
                        
                        {publicLinks.map((link, idx) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={`flex items-center justify-between w-full px-5 py-4 rounded-2xl text-base font-medium transition-all duration-200 ${
                                    isActive(link.path)
                                        ? 'bg-[#452829] text-[#F3E8DF] shadow-lg shadow-[#452829]/20'
                                        : 'bg-white/50 text-[#57595B] shadow-sm hover:shadow-md hover:scale-[1.02]'
                                }`}
                                style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                                {link.name}
                                {isActive(link.path) && <div className="w-2 h-2 bg-[#E8D1C5] rounded-full" />}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto border-t border-[#E8D1C5] pt-8">
                        {isAuthenticated ? (
                            <button
                                onClick={handleLogout}
                                className="w-full bg-[#F3E8DF] border-2 border-[#E8D1C5] text-[#452829] px-5 py-3.5 rounded-2xl hover:bg-[#E8D1C5]/30 hover:border-[#452829]/30 transition-all duration-200 font-semibold text-lg"
                            >
                                লগআউট
                            </button>
                        ) : (
                            <Link
                                to="/register"
                                onClick={() => setMenuOpen(false)}
                                className="block w-full text-center bg-[#452829] text-[#F3E8DF] px-5 py-3.5 rounded-2xl hover:bg-[#2d1a1b] transition-all duration-200 font-semibold text-lg shadow-lg"
                            >
                                রেজিস্ট্রেশন করুন
                            </Link>
                        )}
                        <p className="text-center text-[#57595B]/60 text-xs mt-6 font-medium tracking-wide uppercase">
                            SoulMate © 2024
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;