import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${
        theme === "dark" ? "bg-black/40" : "bg-white/90"
      } border-t border-purple-500/20 mt-20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Dreamscapes Inc.</h3>
            <p className="text-gray-400 mb-4">
              Pioneering the future of dream exploration and consciousness
              expansion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-400 hover:text-purple-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-purple-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                contact@dreamscapes.com
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                123 Dream Avenue, NY 10001
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates in dream
              technology.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg dark:bg-black/40 bg-white/40 border border-purple-500/20 
                  focus:border-purple-500 focus:outline-none dark:text-white text-black flex-1"
              />
              <button
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white 
                rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center dark:text-gray-400 ">
          <p>&copy; {currentYear} Dreamscapes Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
