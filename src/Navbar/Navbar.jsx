import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="bg-[#B6B09F] shadow-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Brand */}
                <Link to="/" className="text-2xl font-bold text-black">
                   SylhetiRayber
                </Link>

                {/* Center Menu - Desktop */}
                <ul className="hidden md:flex gap-8 font-medium">
                    {links.map(link => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className="text-gray-700 hover:text-black transition"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Login Button - Desktop */}
                <div className="hidden md:block">
                    <Link
                        to="/login"
                        className="bg-black/50 text-white px-5 py-2 rounded-lg hover:bg-black/70 transition"
                    >
                        Login
                    </Link>
                     {/* style={{ boxShadow: "0px 0px 4px 0.10px #000000" }} */}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <ul className="space-y-2 font-medium mb-2">
                        {links.map(link => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-gray-700 hover:text-blue-600"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        to="/login"
                        className="bg-black/50 text-white px-5 py-2 rounded-lg hover:bg-black/70 transition"
                    >
                        Login
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
