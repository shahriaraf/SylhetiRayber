import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const links = [
        { name: "হোম", path: "/" },
        { name: "আমাদের সম্পর্কে", path: "/about" },
        { name: "সেবা", path: "/services" },
        { name: "যোগাযোগ", path: "/contact" },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    const Link = ({ to, children, className, onClick }) => (
        <a href={to} className={className} onClick={onClick}>
            {children}
        </a>
    );

    return (
        <>
            <header className={`bg-[#B6B09F] sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg backdrop-blur-sm' : 'shadow-md'}`}>
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Brand */}
                        <img className='w-20 h-20' src="https://i.ibb.co/hGGSr7M/Whats-App-Image-2025-07-17-at-11-45-34-PM-removebg-preview.png" alt="" />

                        {/* Center Menu - Desktop */}
                        <ul className="hidden lg:flex items-center gap-8 font-medium">
                            {links.map(link => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-700 hover:text-black transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white/20 relative group"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Login Button - Desktop */}
                        <div className="hidden lg:block">
                            <Link
                                to="/login"
                                className="bg-black/50 text-white px-5 py-2.5 rounded-lg hover:bg-black/70 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                            >
                                লগইন
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="p-2 rounded-md hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black/20"
                                aria-label="Toggle menu"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMenuOpen(false)} />
            )}

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 right-0 h-full w-56 max-w-[85vw] bg-[#B6B09F] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between p-4 border-b border-black/10">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="p-2 rounded-md hover:bg-white/20 transition-colors duration-200"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Drawer Content */}
                    <div className="flex-1 overflow-y-auto">
                        <nav className="p-4">
                            <ul className="space-y-2 font-medium">
                                {links.map((link, index) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            onClick={() => setMenuOpen(false)}
                                            className="block text-gray-700 hover:text-black hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-200 transform hover:translate-x-2"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Drawer Footer */}
                    <div className="p-4 border-t border-black/10">
                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="block w-full text-center bg-black/50 text-white px-5 py-3 rounded-lg hover:bg-black/70 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                        >
                            লগইন
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
