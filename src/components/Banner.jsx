import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, ArrowRight, Compass, Star, ChevronDown, Calendar, DollarSign } from 'lucide-react';

export default function Banner({ packages, currentDestination, mousePosition, setCurrentDestination }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const featuredDestinations = [
    { 
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570498839593-e565b39455fc",
      mobileImage: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      tagline: "Where azure meets architecture",
      highlights: ["Sunset Views", "Whitewashed Villages", "Volcanic Beaches"],
      rating: 4.9
    },
    { 
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
      mobileImage: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      tagline: "Tradition in every corner",
      highlights: ["Ancient Temples", "Cherry Blossoms", "Tea Ceremonies"],
      rating: 4.8
    },
    { 
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      mobileImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      tagline: "Island of the Gods",
      highlights: ["Jungle Retreats", "Sacred Temples", "Vibrant Culture"],
      rating: 4.7
    },
    { 
      name: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260",
      mobileImage: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      tagline: "Lost city in the clouds",
      highlights: ["Incan Ruins", "Mountain Treks", "Mystical History"],
      rating: 4.9
    }
  ];

  // Enhanced responsive design system
  const colors = {
    primary: '#F59E0B',
    secondary: '#0F766E',
    accent: '#EC4899',
    background: '#1E293B',
    text: '#F8FAFC'
  };

  const typography = {
    h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight',
    h2: 'text-2xl sm:text-3xl md:text-4xl font-semibold',
    body: 'text-base sm:text-lg md:text-xl font-light leading-relaxed',
    small: 'text-xs sm:text-sm font-medium'
  };

  // All packages combined for search
  const allPackages = [...packages.international, ...packages.local, ...packages.fixesDeparture];

  const formatPrice = (priceString) => {
    return parseInt(priceString.replace('$', '').replace(',', ''));
  };

  // Filter packages based on search and filters
  useEffect(() => {
    let results = allPackages;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(pkg => 
        pkg.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by type
    if (selectedType !== 'all') {
      const categoryPackages = packages[selectedType] || [];
      results = results.filter(pkg => categoryPackages.find(catPkg => catPkg.id === pkg.id));
    }
    
    // Filter by rating
    if (selectedRating > 0) {
      results = results.filter(pkg => pkg.rating >= selectedRating);
    }
    
    // Filter by price range
    results = results.filter(pkg => {
      const price = formatPrice(pkg.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Filter by duration
    if (selectedDuration) {
      const duration = parseInt(selectedDuration);
      results = results.filter(pkg => {
        const pkgDuration = parseInt(pkg.duration.split(' ')[0]);
        return pkgDuration === duration;
      });
    }
    
    setFilteredPackages(results);
  }, [searchTerm, selectedType, selectedRating, priceRange, selectedDuration, packages]);

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  // Close results
  const handleCloseResults = () => {
    setShowResults(false);
    setSearchTerm('');
  };

  return (
    <section className="relative h-screen md:h-[90vh] lg:h-screen overflow-hidden bg-slate-800">
      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${featuredDestinations[currentDestination].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-300/60 via-slate-700/30 to-slate-800/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto h-full flex items-center relative z-10 px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl w-full">
          {/* Destination Indicator */}
          <div className="mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/20 backdrop-blur-sm flex items-center justify-center">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className={`${typography.small} text-slate-100`}>
                Currently Exploring
              </span>
              <div className="flex items-center bg-slate-800/50 px-2 sm:px-3 py-1 rounded-full">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-amber-400 mr-1" />
                <span className={`${typography.small} text-slate-50`}>
                  {featuredDestinations[currentDestination].rating}
                </span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className={`${typography.h1} text-slate-50 mb-3 md:mb-4 leading-tight`}>
              <span className="inline-block">
                Discover{' '}
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  {featuredDestinations[currentDestination].name.split(',')[0]}
                </span>
              </span>
            </h1>
            <div className="flex items-center mb-4 md:mb-6">
              <span className="text-amber-400 mr-2 text-lg">✈</span>
              <span className={`${typography.body} text-slate-300`}>
                {featuredDestinations[currentDestination].name.split(',')[1]}
              </span>
            </div>
          </div>

          {/* Search and Filter - New Addition */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex flex-col md:flex-row gap-3 md:items-center">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-12 py-3 bg-slate-800/70 backdrop-blur-md border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Search destinations, experiences..."
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setFilterOpen(!filterOpen)}
                    className="flex items-center justify-center px-4 py-3 bg-slate-800/70 backdrop-blur-md border border-slate-600 rounded-lg hover:bg-slate-700/70 transition-colors"
                  >
                    <Filter className="h-5 w-5 text-amber-500" />
                    <span className="ml-2 text-slate-200 text-sm">Filters</span>
                  </button>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-lg text-slate-900 font-medium transition-colors"
                  >
                    Search
                  </button>
                </div>
              </div>
              
              {/* Filter Panel */}
              {filterOpen && (
                <div className="mt-3 p-4 bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-slate-300 mb-2 text-sm">Trip Type</label>
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-slate-200"
                      >
                        <option value="all">All Types</option>
                        <option value="international">International</option>
                        <option value="local">Local</option>
                        <option value="fixesDeparture">Fixed Departure</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-slate-300 mb-2 text-sm">Min Rating</label>
                      <div className="flex items-center">
                        {[4.5, 4.6, 4.7, 4.8, 4.9].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => setSelectedRating(rating)}
                            className={`flex items-center justify-center w-8 h-8 rounded-full mr-1 ${
                              selectedRating === rating
                                ? 'bg-amber-500 text-slate-900'
                                : 'bg-slate-700 text-slate-300'
                            }`}
                          >
                            {rating}
                          </button>
                        ))}
                        {selectedRating > 0 && (
                          <button
                            type="button"
                            onClick={() => setSelectedRating(0)}
                            className="text-xs text-amber-400 ml-2"
                          >
                            Clear
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-slate-300 mb-2 text-sm">Duration</label>
                      <div className="flex flex-wrap gap-2">
                        {['3', '4', '5', '6', '7', '8', '10'].map((days) => (
                          <button
                            key={days}
                            type="button"
                            onClick={() => setSelectedDuration(selectedDuration === days ? '' : days)}
                            className={`px-3 py-1 rounded-md text-sm ${
                              selectedDuration === days
                                ? 'bg-amber-500 text-slate-900'
                                : 'bg-slate-700 text-slate-300'
                            }`}
                          >
                            {days} Days
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-slate-300 mb-2 text-sm">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                    <div className="relative pt-1">
                      <input
                        type="range"
                        min="0"
                        max="3000"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedType('all');
                        setSelectedRating(0);
                        setSelectedDuration('');
                        setPriceRange([0, 3000]);
                      }}
                      className="px-4 py-2 text-sm text-slate-300 hover:text-amber-400"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Search Results */}
          {showResults && (
            <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-lg p-4 mb-8 max-h-60 overflow-y-auto">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-slate-200 font-medium">
                  {filteredPackages.length} {filteredPackages.length === 1 ? 'Result' : 'Results'} Found
                </h3>
                <button 
                  onClick={handleCloseResults} 
                  className="text-slate-400 hover:text-slate-200"
                >
                  ✕
                </button>
              </div>
              
              {filteredPackages.length > 0 ? (
                <div className="space-y-3">
                  {filteredPackages.slice(0, 5).map((pkg) => (
                    <div key={pkg.id} className="flex gap-3 p-2 hover:bg-slate-700/50 rounded-md transition-colors">
                      <div 
                        className="w-16 h-16 rounded-md bg-cover bg-center flex-shrink-0" 
                        style={{ backgroundImage: `url(${pkg.images[0]})` }}
                      />
                      <div className="flex-grow">
                        <h4 className="text-slate-200 font-medium">{pkg.destination}</h4>
                        <div className="flex items-center text-sm text-slate-400">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{pkg.duration}</span>
                          <span className="mx-2">•</span>
                          <DollarSign className="w-3 h-3 mr-1" />
                          <span>{pkg.price}</span>
                          <span className="mx-2">•</span>
                          <Star className="w-3 h-3 mr-1 text-amber-400" />
                          <span>{pkg.rating}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-1">{pkg.description}</p>
                      </div>
                    </div>
                  ))}
                  
                  {filteredPackages.length > 5 && (
                    <div className="text-center text-sm text-amber-500 pt-2">
                      + {filteredPackages.length - 5} more results
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-6 text-slate-400">
                  No packages match your search criteria
                </div>
              )}
              
              <div className="mt-3 flex justify-center">
                <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-md text-slate-900 text-sm font-medium">
                  View All Results
                </button>
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <button className="flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-full font-semibold group text-sm md:text-base">
              <span>Start Exploration</span>
              <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border-2 border-slate-300/20 text-slate-50 rounded-full backdrop-blur-sm gap-2 text-sm md:text-base">
              <span>View Gallery</span>
              <div className="flex">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-slate-50 rounded-full mx-0.5"
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Destination Navigation */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 overflow-x-auto px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex justify-start md:justify-center gap-2 md:gap-3 pb-2 md:pb-0">
            {featuredDestinations.map((dest, index) => (
              <button
                key={dest.name}
                className={`flex-shrink-0 flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 ${
                  currentDestination === index 
                    ? 'bg-amber-500 text-slate-900 font-medium shadow-lg shadow-amber-500/30' 
                    : 'bg-slate-900/30 text-slate-300 hover:bg-slate-900/50 backdrop-blur-sm'
                }`}
                onClick={() => setCurrentDestination(index)}
              >
                <MapPin className={`w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 ${
                  currentDestination === index ? 'text-slate-900' : 'text-amber-500'
                }`} />
                <span className="whitespace-nowrap">
                  {dest.name.split(',')[0]}
                </span>
                {currentDestination === index && (
                  <span className="ml-1 md:ml-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-900 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}