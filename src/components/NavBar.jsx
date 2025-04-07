import React from 'react'
import { Globe, MapPin, Calendar, Star, Users, ChevronDown, ChevronRight,Heart, ArrowRight, PhoneCall, Mail, Clock, CheckCircle, Compass, Camera, Map, Menu, X, Search, User, ChevronLeft } from 'lucide-react';


export default function NavBar({isScrolled,navLinks,navbarOpen}) {
  return (
    <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-teal-600' : 'text-white'}`}>
                <span className="text-amber-500">X</span>plore
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className={`${
                    isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-amber-400'
                  } font-medium transition-colors`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className={`${
                isScrolled 
                  ? 'bg-transparent text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white' 
                  : 'bg-transparent text-white border-white hover:bg-white hover:text-teal-600'
              } border rounded-full px-4 py-2 text-sm font-medium transition-colors`}>
                Sign In
              </button>
              <button className="bg-amber-500 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-amber-600 transition-colors">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen 
                ? <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} /> 
                : <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          navbarOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white shadow-lg">
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href} 
                    className="text-gray-800 hover:text-teal-600 font-medium"
                    onClick={() => setNavbarOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col space-y-3">
                  <button className="border border-teal-600 text-teal-600 rounded-full px-4 py-2 text-sm font-medium hover:bg-teal-600 hover:text-white transition-colors">
                    Sign In
                  </button>
                  <button className="bg-amber-500 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-amber-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
  )
}
