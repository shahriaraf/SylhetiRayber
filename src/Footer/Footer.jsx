import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white/50 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white/70">SylhetiRayber</h2>
          <p className="text-sm mt-2">
            Building meaningful experiences through design and technology.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white/70">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white/70">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-white/50 pt-4 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} SylhetiRayber. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
