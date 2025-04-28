import React, { useState, useEffect, useRef } from 'react';
import { Globe, MapPin, Shield, Calendar, Phone, Star, ArrowRight, ArrowLeft, User, Search, AlertCircle } from 'lucide-react';

export default function Banner({packages}) {
  const [destination, setDestination] = useState('Hidden Treasures');
  const destinations = ['Hidden Treasures', 'Mountain Escapes', 'Coastal Paradises', 'Desert Adventures'];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Package Card Stack State
  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const cardStackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Active tab state
  const [activeTab, setActiveTab] = useState('FLIGHTS');
  
  // Packages data
  const allPackages = [
    ...packages?.international || [],
    ...packages?.local || []
  ];
  
  // Form state
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('1 Traveler, Economy');
  const [hotelLocation, setHotelLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [rooms, setRooms] = useState('1 Room, 2 Adults');
  const [tourDestination, setTourDestination] = useState('');
  const [tourDate, setTourDate] = useState('');
  const [tourGroup, setTourGroup] = useState('2 People');
  
  // Form validation
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
      setDestination(destinations[(currentIndex + 1) % destinations.length]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Improved navigation function to handle both hash and direct URL navigation
  const navigateToSection = (sectionId) => {
    try {
      // First try to navigate to hash
      window.location.hash = sectionId;
      
      // Also try to scroll to the element with that ID if it exists
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      // Close the mobile menu and reset dropdowns
      setNavbarOpen(false);
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    } catch (error) {
      console.error("Navigation error:", error);
      // Fallback to simple hash change if there's an error
      window.location.hash = sectionId;
    }
  };
  
  // Check if device is mobile/tablet
  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);
  
  // Format date string to display in input field
  const formatDateForDisplay = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Return original if invalid
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  // Validate form based on active tab
  const validateForm = () => {
    const newErrors = {};
    
    if (activeTab === 'FLIGHTS') {
      if (!fromLocation.trim()) newErrors.fromLocation = 'Origin is required';
      if (!toLocation.trim()) newErrors.toLocation = 'Destination is required';
      if (!departureDate) newErrors.departureDate = 'Departure date is required';
      if (!returnDate) newErrors.returnDate = 'Return date is required';
      
      // Check if return date is after departure date
      if (departureDate && returnDate && new Date(returnDate) < new Date(departureDate)) {
        newErrors.returnDate = 'Return date must be after departure date';
      }
    } 
    else if (activeTab === 'HOTELS') {
      if (!hotelLocation.trim()) newErrors.hotelLocation = 'Destination is required';
      if (!checkInDate) newErrors.checkInDate = 'Check-in date is required';
      if (!checkOutDate) newErrors.checkOutDate = 'Check-out date is required';
      
      // Check if check-out date is after check-in date
      if (checkInDate && checkOutDate && new Date(checkOutDate) < new Date(checkInDate)) {
        newErrors.checkOutDate = 'Check-out date must be after check-in date';
      }
    }
    else if (activeTab === 'TOURS') {
      if (!tourDestination.trim()) newErrors.tourDestination = 'Tour destination is required';
      if (!tourDate) newErrors.tourDate = 'Tour date is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setErrors({});
    setFormSubmitted(false);
  };
  
  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    if (validateForm()) {
      // Form is valid, proceed with search
      console.log('Search params for', activeTab, ':', 
        activeTab === 'FLIGHTS' ? { fromLocation, toLocation, departureDate, returnDate, travelers } :
        activeTab === 'HOTELS' ? { hotelLocation, checkInDate, checkOutDate, rooms } :
        { tourDestination, tourDate, tourGroup }
      );
      
      // You would typically call an API or redirect here
      alert(`${activeTab} search submitted successfully!`);
    } else {
      console.log('Form has errors');
    }
  };

  // Render the appropriate form based on active tab
  const renderForm = () => {
    switch(activeTab) {
      case 'FLIGHTS':
        return (
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 md:gap-2 items-center">
            {/* From Location */}
            <div className="w-full md:w-1/5 relative">
              <div className={`flex items-center gap-2 bg-gray-100 p-3 rounded-md ${errors.fromLocation && formSubmitted ? 'border border-red-500' : ''}`}>
                <MapPin className="w-5 h-5 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="From"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="bg-transparent w-full border-none focus:outline-none text-gray-800"
                />
              </div>
              {errors.fromLocation && formSubmitted && (
                <p className="text-red-500 text-xs mt-1 absolute">{errors.fromLocation}</p>
              )}
            </div>
            
            {/* To Location */}
            <div className="w-full md:w-1/5 relative">
              <div className={`flex items-center gap-2 bg-gray-100 p-3 rounded-md ${errors.toLocation && formSubmitted ? 'border border-red-500' : ''}`}>
                <MapPin className="w-5 h-5 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="To"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="bg-transparent w-full border-none focus:outline-none text-gray-800"
                />
              </div>
              {errors.toLocation && formSubmitted && (
                <p className="text-red-500 text-xs mt-1 absolute">{errors.toLocation}</p>
              )}
            </div>
            
            {/* Departure Date */}
            <div className="w-full md:w-1/5 relative">
              <div className={`flex items-center gap-2 bg-gray-100 p-3 rounded-md ${errors.departureDate && formSubmitted ? 'border border-red-500' : ''}`}>
                <Calendar className="w-5 h-5 text-gray-500" />
                <input 
                  type="date" 
                  placeholder="Departure Date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="bg-transparent w-full border-none focus:outline-none text-gray-800"
                />
              </div>
              {errors.departureDate && formSubmitted && (
                <p className="text-red-500 text-xs mt-1 absolute">{errors.departureDate}</p>
              )}
            </div>
            
            {/* Return Date */}
            <div className="w-full md:w-1/5 relative">
              <div className={`flex items-center gap-2 bg-gray-100 p-3 rounded-md ${errors.returnDate && formSubmitted ? 'border border-red-500' : ''}`}>
                <Calendar className="w-5 h-5 text-gray-500" />
                <input 
                  type="date" 
                  placeholder="Return Date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="bg-transparent w-full border-none focus:outline-none text-gray-800"
                />
              </div>
              {errors.returnDate && formSubmitted && (
                <p className="text-red-500 text-xs mt-1 absolute">{errors.returnDate}</p>
              )}
            </div>
            
            {/* Travelers */}
            <div className="w-full md:w-1/5 relative">
              <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                <User className="w-5 h-5 text-gray-500" />
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="bg-transparent w-full border-none focus:outline-none text-gray-800 appearance-none cursor-pointer"
                >
                  <option>1 Traveler, Economy</option>
                  <option>2 Travelers, Economy</option>
                  <option>1 Traveler, Business</option>
                  <option>2 Travelers, Business</option>
                </select>
              </div>
            </div>
            
            {/* Search Button - Only visible on mobile */}
            <button
              type="submit"
              onClick={()=>navigateToSection('contact')}
              className="w-full md:hidden bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Search className="w-5 h-5" />
              Search Flights
            </button>
          </form>
        );
        
      case 'HOTELS':
        return (
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 md:gap-2 items-center">
            {/* Hotel Location */}
            <div className="w-full md:w-1/4 relative">
              <div className={`flex items-center gap-2 bg-gray-100 p-3 rounded-md ${errors.hotelLocation && formSubmitted ? 'border border-red-500' : ''}`}>
                <MapPin className="w-5 h-5 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Where are you going?"
                  value={hotelLocation}
                  onChange={(e) => setHotelLocation(e.target.value)}
                  className="bg-transparent w-full border-none focus:outline-none text-gray-800"
                />
              </div>
              {errors.hotelLocation && formSubmitted && (
                <p className="text-red-500 text-xs mt-1 absolute">{errors.hotelLocation}</p>
              )}
            </div>
            
            {/* Check-in Date */}
            <div className="w-full md:w-1/4 relative">
              <div className={`flex items-center gap-2 bg-gray-100 p-3 rounded-md ${errors.checkInDate && formSubmitted ? 'border border-red-500' : ''}`}>
                <Calendar className="w-5 h-5 text-gray-500" />
                <input 
                  type="date" 
                  placeholder="Check-in Date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="bg-transparent w-full border-none focus:outline-none text-gray-800"
                />
              </div>
              {errors.checkInDate && formSubmitted && (
                <p className="text-red-500 text-xs mt-1 absolute">{errors.checkInDate}</p>
              )}
            </div>
            
            {/* Check-out Date */}
            <div className="w-full md:w-1/4 relative">
              <div className={`flex items-center gap-2 bg-gray-100 p-3 rounded-md ${errors.checkOutDate && formSubmitted ? 'border border-red-500' : ''}`}>
                <Calendar className="w-5 h-5 text-gray-500" />
                <input 
                  type="date" 
                  placeholder="Check-out Date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="bg-transparent w-full border-none focus:outline-none text-gray-800"
                />
              </div>
              {errors.checkOutDate && formSubmitted && (
                <p className="text-red-500 text-xs mt-1 absolute">{errors.checkOutDate}</p>
              )}
            </div>
            
            {/* Rooms */}
            <div className="w-full md:w-1/4 relative">
              <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                <User className="w-5 h-5 text-gray-500" />
                <select
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="bg-transparent w-full border-none focus:outline-none text-gray-800 appearance-none cursor-pointer"
                >
                  <option>1 Room, 2 Adults</option>
                  <option>1 Room, 1 Adult</option>
                  <option>2 Rooms, 4 Adults</option>
                  <option>2 Rooms, 2 Adults, 2 Children</option>
                </select>
              </div>
            </div>
            
            {/* Search Button - Only visible on mobile */}
            <button
              type="submit"
              onClick={()=>navigateToSection('contact')}
              className="w-full md:hidden bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Search className="w-5 h-5" />
              Search Hotels
            </button>
          </form>
        );
        
      case 'TOURS':
        return (
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 md:gap-2 items-center">
            {/* Tour Destination */}
            <div className="w-full md:w-1/3 relative">
              <div className={`flex items-center gap-2 bg-gray-100 p-3 rounded-md ${errors.tourDestination && formSubmitted ? 'border border-red-500' : ''}`}>
                <Globe className="w-5 h-5 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Tour Destination"
                  value={tourDestination}
                  onChange={(e) => setTourDestination(e.target.value)}
                  className="bg-transparent w-full border-none focus:outline-none text-gray-800"
                />
              </div>
              {errors.tourDestination && formSubmitted && (
                <p className="text-red-500 text-xs mt-1 absolute">{errors.tourDestination}</p>
              )}
            </div>
            
            {/* Tour Date */}
            <div className="w-full md:w-1/3 relative">
              <div className={`flex items-center gap-2 bg-gray-100 p-3 rounded-md ${errors.tourDate && formSubmitted ? 'border border-red-500' : ''}`}>
                <Calendar className="w-5 h-5 text-gray-500" />
                <input 
                  type="date" 
                  placeholder="Tour Date"
                  value={tourDate}
                  onChange={(e) => setTourDate(e.target.value)}
                  className="bg-transparent w-full border-none focus:outline-none text-gray-800"
                />
              </div>
              {errors.tourDate && formSubmitted && (
                <p className="text-red-500 text-xs mt-1 absolute">{errors.tourDate}</p>
              )}
            </div>
            
            {/* Tour Group Size */}
            <div className="w-full md:w-1/3 relative">
              <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                <User className="w-5 h-5 text-gray-500" />
                <select
                  value={tourGroup}
                  onChange={(e) => setTourGroup(e.target.value)}
                  className="bg-transparent w-full border-none focus:outline-none text-gray-800 appearance-none cursor-pointer"
                >
                  <option>2 People</option>
                  <option>1 Person</option>
                  <option>3-5 People</option>
                  <option>6+ People</option>
                </select>
              </div>
            </div>
            
            {/* Search Button - Only visible on mobile */}
            <button
            onClick={()=>navigateToSection('contact')}
              type="submit"
              className="w-full md:hidden bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Search className="w-5 h-5" />
              Find Tours
            </button>
          </form>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full pt-20">
          {/* Hero Content */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
              Your Dream Vacation Awaits
            </h1>
            <p className="text-xl md:text-2xl text-white font-light italic mb-8 drop-shadow-md">
              Explore the World with us.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-0">
            <div className="bg-teal-500 inline-flex rounded-t-lg overflow-hidden">
              <button 
                className={`px-6 py-3 font-medium transition ${activeTab === 'FLIGHTS' ? 'bg-teal-600 text-white' : 'text-white hover:bg-teal-600'}`}
                onClick={() => handleTabChange('FLIGHTS')}
              >
                FLIGHTS
              </button>
              <button 
                className={`px-6 py-3 font-medium transition ${activeTab === 'HOTELS' ? 'bg-teal-600 text-white' : 'text-white hover:bg-teal-600'}`}
                onClick={() => handleTabChange('HOTELS')}
              >
                HOTELS
              </button>
              <button 
                className={`px-6 py-3 font-medium transition ${activeTab === 'TOURS' ? 'bg-teal-600 text-white' : 'text-white hover:bg-teal-600'}`}
                onClick={() => handleTabChange('TOURS')}
              >
                TOURS
              </button>
            </div>
          </div>
          
          {/* Search Form */}
          <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-4 md:p-6 max-w-5xl mx-auto">
            {renderForm()}
            
            {/* Search Button - Only visible on desktop */}
            <div className="hidden md:flex justify-center mt-6">
              <button
              onClick={()=>navigateToSection('contact')}
                className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-10 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Search className="w-5 h-5" />
                {activeTab === 'FLIGHTS' ? 'Search Flights' : 
                 activeTab === 'HOTELS' ? 'Search Hotels' : 'Find Tours'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}