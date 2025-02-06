import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Home,
  Sparkles,
  Users,
  MessageCircle,
  BookOpen,
  Mail,
  X,
  Moon,
  Sun,
  Menu,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const DynamicIsland = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: "/", icon: Home },
    { path: "/services", icon: Sparkles },
    { path: "/about", icon: Users },
    { path: "/testimonials", icon: MessageCircle },
    { path: "/blog", icon: BookOpen },
    { path: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Collapsed Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div
          className="bg-white dark:bg-black backdrop-blur-3xl rounded-full p-2 
          border border-purple-500/20 shadow-lg flex items-center gap-4 px-4"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`p-2 rounded-full transition-colors ${
                  isActive(item.path)
                    ? "text-purple-500"
                    : "text-gray-500 hover:text-purple-400"
                }`}
              >
                <Icon size={20} />
              </Link>
            );
          })}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-500 hover:text-purple-400 transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Expanded Navigation */}
      {isExpanded && (
        <div
          className="fixed top-6 left-1/2 -translate-x-1/2 bg-black/90 dark:bg-white/5 backdrop-blur-lg 
          rounded-full p-3 flex gap-4 items-center border border-purple-500/20 shadow-lg z-50"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsExpanded(false)}
                className="p-2 rounded-full text-gray-300 hover:text-purple-400 transition-all"
              >
                <Icon size={22} />
              </Link>
            );
          })}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-300 hover:text-purple-400 transition-all"
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button
            onClick={() => setIsExpanded(false)}
            className="p-2 text-gray-300 hover:text-purple-400 transition-all"
          >
            <X size={22} />
          </button>
        </div>
      )}
    </>
  );
};

export default DynamicIsland;
