import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// Import Link and useNavigate from react-router-dom for SPA navigation
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    // --- FUNCTIONALITY INTEGRATION START ---

    // 1. Check for authentication token in local storage
    const isAuthenticated = !!localStorage.getItem('token');

    // 2. Handle user logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login'); // Redirect to login page after logout
        setMenuOpen(false); // Ensure mobile menu closes on logout
    };

    // --- FUNCTIONALITY INTEGRATION END ---

    const publicLinks = [
        { name: "হোম", path: "/" },
        { name: "আমাদের সম্পর্কে", path: "/আমাদের সম্পর্কে" },
        { name: "যোগাযোগ", path: "/যোগাযোগ" },
    ];

    // Handle scroll effect (Your original code, unchanged)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open (Your original code, unchanged)
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

    // We no longer need the custom Link component, as we'll use the one from react-router-dom

    return (
        <>
            <header className={`bg-[#f8d8eb] sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg backdrop-blur-sm' : 'shadow-md'}`}>
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Brand */}
                        <Link to={isAuthenticated ? "/find-matches" : "/"}>
                            <img className='w-20 h-20' src="https://i.ibb.co/hGGSr7M/Whats-App-Image-2025-07-17-at-11-45-34-PM-removebg-preview.png" alt="SoulMate Logo" />
                        </Link>

                        {/* Center Menu - Desktop */}
                        <ul className="hidden lg:flex items-center gap-8 font-medium">
                            {/* Show All Profiles link if authenticated */}
                            {isAuthenticated && (
                                 <li>
                                    <Link
                                        to="/find-matches"
                                        className="text-gray-700 hover:text-black transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white/20 relative group"
                                    >
                                        সম্পর্ক খুঁজুন
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            )}
                            {publicLinks.map(link => (
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

                        {/* Login/Logout Button - Desktop */}
                        <div className="hidden lg:block">
                            {isAuthenticated ? (
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 text-white px-5 py-2.5 rounded-lg hover:bg-red-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                                >
                                    লগআউট
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="bg-black/50 text-white px-5 py-2.5 rounded-lg hover:bg-black/70 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                                >
                                    লগইন
                                </Link>
                            )}
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
            <div className={`fixed top-0 right-0 h-full w-56 max-w-[85vw] bg-[#f8d8eb] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-black/10">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="p-2 rounded-md hover:bg-white/20 transition-colors duration-200"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        <nav className="p-4">
                            <ul className="space-y-2 font-medium">
                                {/* Show All Profiles link if authenticated in mobile */}
                                {isAuthenticated && (
                                     <li>
                                        <Link
                                            to="/find-matches"
                                            onClick={() => setMenuOpen(false)}
                                            className="block text-gray-700 hover:text-black hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-200 transform hover:translate-x-2"
                                        >
                                            সম্পর্ক খুঁজুন
                                        </Link>
                                    </li>
                                )}
                                {publicLinks.map((link, index) => (
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

                    {/* Drawer Footer with conditional Login/Logout */}
                    <div className="p-4 border-t border-black/10">
                         {isAuthenticated ? (
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-center bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600 transition-all duration-200 font-medium shadow-md"
                                >
                                    লগআউট
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    onClick={() => setMenuOpen(false)}
                                    className="block w-full text-center bg-black/50 text-white px-5 py-3 rounded-lg hover:bg-black/70 transition-all duration-200 font-medium shadow-md"
                                >
                                    লগইন
                                </Link>
                            )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;