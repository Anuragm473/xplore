import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Globe,
  User,
  MapPin,
  Phone,
  Search,
  ChevronDown,
  Luggage,
  Mountain,
  Star,
  Compass,
  Plane,
  Landmark,
} from "lucide-react";
import { CalendarDays, Home, Building, FileText } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The main dropdown categories now just show Domestic and International
  const topLevelDestinations = [
    {
      name: "Domestic",
      icon: <Home className="w-4 h-4" />,
      // Indian destinations for domestic travel
      submenu: [
        { name: "Goa", icon: <Compass className="w-4 h-4" /> },
        { name: "Kashmir", icon: <Mountain className="w-4 h-4" /> },
        { name: "Kerala", icon: <Compass className="w-4 h-4" /> },
        { name: "Rajasthan", icon: <Landmark className="w-4 h-4" /> },
        { name: "North East", icon: <Mountain className="w-4 h-4" /> },
        { name: "Himachal Pradesh", icon: <Mountain className="w-4 h-4" /> },
        { name: "Golden Triangle", icon: <Landmark className="w-4 h-4" /> },
        { name: "Andaman & Nicobar", icon: <Compass className="w-4 h-4" /> },
      ]
    },
    {
      name: "International",
      icon: <Globe className="w-4 h-4" />,
      submenu: [
        {
          name: "Asia",
          icon: <Globe className="w-4 h-4" />,
          submenu: [
            { name: "Thailand", icon: <Compass className="w-4 h-4" /> },
            { name: "Singapore", icon: <Building className="w-4 h-4" /> },
            { name: "Japan", icon: <Landmark className="w-4 h-4" /> },
            { name: "Bali", icon: <Compass className="w-4 h-4" /> },
          ]
        },
        {
          name: "Europe",
          icon: <Globe className="w-4 h-4" />,
          submenu: [
            { name: "France", icon: <Landmark className="w-4 h-4" /> },
            { name: "Italy", icon: <Landmark className="w-4 h-4" /> },
            { name: "Switzerland", icon: <Mountain className="w-4 h-4" /> },
            { name: "Spain", icon: <Compass className="w-4 h-4" /> },
          ]
        },
        {
          name: "North America",
          icon: <Globe className="w-4 h-4" />,
          submenu: [
            { name: "USA", icon: <Landmark className="w-4 h-4" /> },
            { name: "Canada", icon: <Mountain className="w-4 h-4" /> },
            { name: "Mexico", icon: <Compass className="w-4 h-4" /> },
          ]
        },
        {
          name: "Middle East",
          icon: <Globe className="w-4 h-4" />,
          submenu: [
            { name: "Dubai", icon: <Building className="w-4 h-4" /> },
            { name: "Turkey", icon: <Landmark className="w-4 h-4" /> },
            { name: "Egypt", icon: <Landmark className="w-4 h-4" /> },
          ]
        },
        {
          name: "Australia & Oceania",
          icon: <Globe className="w-4 h-4" />,
          submenu: [
            { name: "Australia", icon: <Compass className="w-4 h-4" /> },
            { name: "New Zealand", icon: <Mountain className="w-4 h-4" /> },
            { name: "Fiji", icon: <Compass className="w-4 h-4" /> },
          ]
        },
      ]
    }
  ];

  const navLinks = [
    {
      name: "Destinations",
      href: "#destinations",
      icon: <MapPin className="w-4 h-4" />,
      dropdown: topLevelDestinations,
    },
    {
      name: "Visa Services",
      href: "visa",
      icon: <FileText className="w-4 h-4" />,
      dropdown: [
        { name: "Tourist Visa", icon: <Plane className="w-4 h-4" /> },
        { name: "Business Visa", icon: <Building className="w-4 h-4" /> },
        { name: "Work Visa", icon: <FileText className="w-4 h-4" /> },
        { name: "Student Visa", icon: <Home className="w-4 h-4" /> },
        { name: "Transit Visa", icon: <Plane className="w-4 h-4" /> },
        { name: "Electronic Visa", icon: <FileText className="w-4 h-4" /> },
        { name: "Visa Requirements", icon: <FileText className="w-4 h-4" /> },
      ],
    },
    {
      name: "Special Offers",
      href: "offers",
      icon: <Star className="w-4 h-4" />,
    },
    { 
      name: "About Us", 
      href: "about", 
      icon: <User className="w-4 h-4" /> 
    },
    { 
      name: "Contact", 
      href: "contact", 
      icon: <Phone className="w-4 h-4" /> 
    },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setActiveSubDropdown(null); // Reset sub dropdown when toggling main dropdown
  };

  const toggleSubDropdown = (index) => {
    setActiveSubDropdown(activeSubDropdown === index ? null : index);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-md py-2 border-b border-gray-100"
          : "bg-sky-50 py-4"
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
                  isScrolled ? "text-blue-600" : "text-blue-700"
                }`}
                size={isScrolled ? 28 : 32}
              />
              <Luggage
                className={`absolute transition-all duration-500 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 ${
                  isScrolled ? "text-orange-500" : "text-orange-600"
                }`}
                size={isScrolled ? 28 : 32}
              />
            </div>
            <span
              className={`text-2xl font-bold tracking-tight ${
                isScrolled ? "text-gray-800" : "text-gray-900"
              } transition-colors duration-500 ml-2`}
              onClick={() => navigate("/")}
            >
              <span className="text-orange-500">Xplore </span>
              <span className="font-light">World</span>
            </span>
          </motion.a>

          {/* Desktop Navigation with Mega Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <motion.button
                  onClick={() => (link.dropdown ? toggleDropdown(index) : null)}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      : "text-gray-800 hover:bg-blue-100/50 hover:text-blue-700"
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

                {link.dropdown && activeDropdown === index && (
                  <motion.div
                    className={`absolute left-0 mt-2 w-64 rounded-xl shadow-lg overflow-hidden ${
                      isScrolled
                        ? "bg-white border border-gray-100"
                        : "bg-white border border-blue-100"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4">
                      <h4
                        className={`text-sm font-semibold mb-2 ${
                          isScrolled ? "text-blue-600" : "text-blue-700"
                        }`}
                      >
                        Explore {link.name}
                      </h4>
                      <div className="space-y-2">
                        {link.dropdown.map((item, i) => (
                          <div key={i}>
                            <motion.button
                              onClick={() => {
                                if (item.submenu) {
                                  toggleSubDropdown(i);
                                } else {
                                  navigate(link.href);
                                  setActiveDropdown(null);
                                }
                              }}
                              className={`flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                                isScrolled
                                  ? "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                              }`}
                              whileHover={{ x: 5 }}
                            >
                              <div className="flex items-center">
                                <span className="mr-3 text-blue-500">{item.icon}</span>
                                {item.name}
                              </div>
                              {item.submenu && (
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform duration-300 ${
                                    activeSubDropdown === i ? "rotate-180" : ""
                                  }`}
                                />
                              )}
                            </motion.button>
                            
                            {/* Second level dropdown for destinations */}
                            {item.submenu && activeSubDropdown === i && (
                              <motion.div
                                className="pl-6 mt-1 space-y-2"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {item.submenu.map((subItem, j) => (
                                  <motion.a
                                    key={j}
                                    href={`/destinations/${item.name.toLowerCase()}/${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="flex items-center px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setActiveSubDropdown(null);
                                    }}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * j }}
                                  >
                                    <span className="mr-3 text-blue-500">
                                      {subItem.icon}
                                    </span>
                                    {subItem.name}
                                  </motion.a>
                                ))}
                              </motion.div>
                            )}
                          </div>
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
                isScrolled ? "bg-gray-100" : "bg-white/80"
              } rounded-full group ${
                searchFocused ? "ring-2 ring-blue-400" : ""
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <input
                type="text"
                placeholder="Where to next?"
                className={`py-2 pl-10 pr-4 rounded-full text-sm focus:outline-none ${
                  isScrolled
                    ? "bg-gray-100 placeholder-gray-500"
                    : "bg-transparent text-gray-800 placeholder-gray-500"
                } w-48 transition-all duration-300`}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search
                className={`absolute left-3 top-2.5 w-4 h-4 transition-colors ${
                  isScrolled
                    ? "text-gray-500 group-hover:text-blue-600"
                    : "text-gray-500 group-hover:text-blue-600"
                }`}
              />
            </motion.div>

            <motion.button
              className={`flex items-center ${
                isScrolled
                  ? "bg-transparent text-blue-600 hover:bg-blue-600/10"
                  : "bg-transparent text-blue-700 hover:bg-blue-100"
              } rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-sm`}
              whileHover={{ scale: 1.05 }}
            >
              <User className="w-4 h-4 mr-2" />
              Sign In
            </motion.button>
            <motion.button
              className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full px-5 py-2.5 text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
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
            className="lg:hidden p-2 rounded-full focus:outline-none transition-all hover:bg-blue-100/50"
            onClick={() => setNavbarOpen(!navbarOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {navbarOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-gray-900"
                } transition-transform duration-300`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-gray-900"
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
            <div className="bg-gradient-to-b from-blue-50 to-white shadow-lg">
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
                    className="w-full py-3 pl-10 pr-4 rounded-full bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                  />
                  <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
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
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-800 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex items-center">
                          <span className="mr-3 text-blue-600">
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
                            <div key={i}>
                              <motion.button
                                onClick={() => {
                                  if (item.submenu) {
                                    toggleSubDropdown(i);
                                  } else {
                                    navigate(link.href);
                                    setNavbarOpen(false);
                                  }
                                }}
                                className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + i * 0.05 }}
                              >
                                <div className="flex items-center">
                                  <span className="mr-3 text-blue-500">
                                    {item.icon}
                                  </span>
                                  {item.name}
                                </div>
                                {item.submenu && (
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                      activeSubDropdown === i ? "rotate-180" : ""
                                    }`}
                                  />
                                )}
                              </motion.button>

                              {/* Second level for mobile */}
                              {item.submenu && activeSubDropdown === i && (
                                <motion.div
                                  className="pl-6 mt-1 space-y-2"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {item.submenu.map((subItem, j) => (
                                    <motion.a
                                      key={j}
                                      href={`/destinations/${item.name.toLowerCase()}/${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                      className="flex items-center px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                                      onClick={() => setNavbarOpen(false)}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.05 * j }}
                                    >
                                      <span className="mr-3 text-blue-500">
                                        {subItem.icon}
                                      </span>
                                      {subItem.name}
                                    </motion.a>
                                  ))}
                                </motion.div>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  className="pt-6 mt-4 border-t border-gray-200 flex flex-col space-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    className="flex items-center justify-center border border-blue-500 text-blue-600 rounded-full px-4 py-3 text-sm font-medium hover:bg-blue-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <User className="w-5 h-5 mr-2" />
                    Sign In
                  </motion.button>
                  <motion.button
                    className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full px-4 py-3 text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
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