import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Globe,
  User,
  CalendarDays,
  MapPin,
  Phone,
  Search,
  ChevronDown,
  Luggage,
  Mountain,
  Hotel,
  Star,
  Compass,
  Plane,
  Landmark,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate=useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Destinations",
      href: "#destinations",
      icon: <MapPin className="w-4 h-4" />,
      dropdown: [
        {
          name: "Beach Getaways",
          icon: (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          ),
        },
        { name: "Mountain Retreats", icon: <Mountain className="w-4 h-4" /> },
        { name: "City Explorations", icon: <Landmark className="w-4 h-4" /> },
        { name: "Luxury Escapes", icon: <Star className="w-4 h-4" /> },
      ],
    },
    {
      name: "Tour Packages",
      href: "tours",
      icon: <CalendarDays className="w-4 h-4" />,
      dropdown: [
        { name: "Adventure Tours", icon: <Compass className="w-4 h-4" /> },
        { name: "Cultural Experiences", icon: <Globe className="w-4 h-4" /> },
        { name: "Family Vacations", icon: <User className="w-4 h-4" /> },
        { name: "Honeymoon Packages", icon: <Heart className="w-4 h-4" /> },
      ],
    },
    {
      name: "Special Offers",
      href: "offers",
      icon: <Star className="w-4 h-4" />,
    },
    { name: "About Us", href: "about", icon: <User className="w-4 h-4" /> },
    { name: "Contact", href: "contact", icon: <Phone className="w-4 h-4" /> },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl py-2 border-b border-gray-100"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Animated Logo */}
          <motion.a
            href="#"
            className="flex items-center group"
            whileHover={{ scale: 1.05 }}
          >
            <div
              className={`relative transition-all duration-500 flex items-center justify-center ${
                isScrolled ? "w-8 h-8" : "w-10 h-10"
              }`}
            >
              <Globe
                className={`absolute transition-all duration-500 group-hover:opacity-0 group-hover:scale-90 ${
                  isScrolled ? "text-teal-600" : "text-white"
                }`}
                size={isScrolled ? 28 : 32}
              />
              <Luggage
                className={`absolute transition-all duration-500 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 ${
                  isScrolled ? "text-amber-500" : "text-amber-300"
                }`}
                size={isScrolled ? 28 : 32}
              />
            </div>
            <span
              className={`text-2xl font-bold tracking-tight ${
                isScrolled ? "text-gray-800" : "text-white"
              } transition-colors duration-500 ml-2`}
              onClick={()=>navigate("/")}
            >
              <span className="text-amber-500">Xplore </span>
              <span className="font-light">World</span>
            </span>
          </motion.a>

          {/* Desktop Navigation with Mega Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <motion.button
                  onClick={() => (link.dropdown ? toggleDropdown(index) : null) }
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                      : "text-white hover:bg-white/10 hover:text-amber-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="mr-2">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                  {link.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </motion.button>

                {link.dropdown && (
                  <motion.div
                    className={`absolute left-0 mt-2 w-64 rounded-xl shadow-2xl overflow-hidden ${
                      isScrolled
                        ? "bg-white border border-gray-100"
                        : "bg-slate-800 border border-slate-700"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: activeDropdown === index ? 1 : 0,
                      y: activeDropdown === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      pointerEvents: activeDropdown === index ? "auto" : "none",
                    }}
                  >
                    <div className="p-4">
                      <h4
                        className={`text-sm font-semibold mb-2 ${
                          isScrolled ? "text-teal-600" : "text-amber-400"
                        }`}
                      >
                        Explore {link.name}
                      </h4>
                      <div className="space-y-2">
                        {link.dropdown.map((item, i) => (
                          <motion.a
                            key={i}
                            href="/tours"
                            className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                              isScrolled
                                ? "text-gray-600 hover:bg-teal-50 hover:text-teal-600"
                                : "text-slate-300 hover:bg-slate-700 hover:text-white"
                            }`}
                            whileHover={{ x: 5 }}
                          >
                            <span className="mr-3">{item.icon}</span>
                            {item.name}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons with Animation */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              className={`relative transition-all duration-300 ${
                isScrolled ? "bg-gray-100" : "bg-white/20"
              } rounded-full group ${
                searchFocused ? "ring-2 ring-amber-400" : ""
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <input
                type="text"
                placeholder="Where to next?"
                className={`py-2 pl-10 pr-4 rounded-full text-sm focus:outline-none ${
                  isScrolled
                    ? "bg-gray-100 placeholder-gray-500"
                    : "bg-transparent text-white placeholder-white/70"
                } w-48 transition-all duration-300`}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search
                className={`absolute left-3 top-2.5 w-4 h-4 transition-colors ${
                  isScrolled
                    ? "text-gray-500 group-hover:text-teal-600"
                    : "text-white"
                }`}
              />
            </motion.div>

            <motion.button
              className={`flex items-center ${
                isScrolled
                  ? "bg-transparent text-teal-600 hover:bg-teal-600/10"
                  : "bg-transparent text-white hover:bg-white/10"
              } rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-sm`}
              whileHover={{ scale: 1.05 }}
            >
              <User className="w-4 h-4 mr-2" />
              Sign In
            </motion.button>
            <motion.button
              className="flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full px-5 py-2.5 text-sm font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CalendarDays className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative">
                Book Now
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button with Animation */}
          <motion.button
            className="lg:hidden p-2 rounded-full focus:outline-none transition-all hover:bg-white/10"
            onClick={() => setNavbarOpen(!navbarOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {navbarOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-white"
                } transition-transform duration-300`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-white"
                } transition-transform duration-300`}
              />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu with Gradient */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl">
              <div className="container mx-auto px-6 py-6">
                {/* Mobile Search */}
                <motion.div
                  className="relative mb-6 group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    className="w-full py-3 pl-10 pr-4 rounded-full bg-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
                  />
                  <Search className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-amber-400 transition-colors" />
                </motion.div>

                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + index * 0.05 }}
                    >
                      <button
                        onClick={() =>
                          link.dropdown
                            ? toggleDropdown(index)
                            : setNavbarOpen(false)
                        }
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-white hover:bg-slate-700/50 transition-colors"
                      >
                        <div className="flex items-center">
                          <span className="mr-3 text-amber-400">
                            {link.icon}
                          </span>
                          <span className="font-medium">{link.name}</span>
                        </div>
                        {link.dropdown && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>

                      {link.dropdown && activeDropdown === index && (
                        <motion.div
                          className="pl-8 mt-1 space-y-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.dropdown.map((item, i) => (
                            <motion.a
                              key={i}
                              href="#"
                              className="flex items-center px-3 py-2 text-sm rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors"
                              onClick={() => setNavbarOpen(false)}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + i * 0.05 }}
                            >
                              <span className="mr-3 text-amber-400/80">
                                {item.icon}
                              </span>
                              {item.name}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  className="pt-6 mt-4 border-t border-slate-700/50 flex flex-col space-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    className="flex items-center justify-center border border-amber-400 text-amber-400 rounded-full px-4 py-3 text-sm font-medium hover:bg-amber-400/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <User className="w-5 h-5 mr-2" />
                    Sign In
                  </motion.button>
                  <motion.button
                    className="flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full px-4 py-3 text-sm font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CalendarDays className="w-5 h-5 mr-2" />
                    Book Now
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
