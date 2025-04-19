import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  Globe,
  MapPin,
  SlidersHorizontal,
  Star,
  ChevronDown,
  X,
  Filter,
  Mountain,
  Palmtree,
  Building,
  Heart,
  ChevronRight,
  ChevronLeft,
  Compass,
  Plane,
  Home
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedDuration, setSelectedDuration] = useState("any");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedContinent, setSelectedContinent] = useState("all");
  const [filteredTours, setFilteredTours] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const navigate = useNavigate();

  // Enhanced design system matching the Package component
  const colors = {
    primary: '#F59E0B',    // Amber-500
    secondary: '#0F766E',  // Teal-600
    accent: '#EC4899',     // Pink-500
    background: '#1E293B', // Slate-800
    text: '#F8FAFC'        // Slate-50
  };

  const typography = {
    h2: 'text-4xl md:text-5xl font-bold tracking-tight',
    body: 'text-lg md:text-xl font-light leading-relaxed',
    small: 'text-sm font-medium'
  };

  const categories = [
    { id: "all", name: "All Tours", icon: <Globe className="w-4 h-4" /> },
    { id: "beach", name: "Beach Getaways", icon: <Palmtree className="w-4 h-4" /> },
    { id: "mountain", name: "Mountain Adventures", icon: <Mountain className="w-4 h-4" /> },
    { id: "city", name: "City Explorations", icon: <Building className="w-4 h-4" /> },
    { id: "cultural", name: "Cultural Experiences", icon: <Globe className="w-4 h-4" /> },
  ];

  const regions = [
    { id: "all", name: "All Regions", icon: <Globe className="w-4 h-4" /> },
    { id: "domestic", name: "Domestic", icon: <Home className="w-4 h-4" /> },
    { id: "international", name: "International", icon: <Plane className="w-4 h-4" /> },
  ];

  const continents = [
    { id: "all", name: "All Continents" },
    { id: "asia", name: "Asia" },
    { id: "europe", name: "Europe" },
    { id: "northAmerica", name: "North America" },
    { id: "southAmerica", name: "South America" },
    { id: "africa", name: "Africa" },
    { id: "oceania", name: "Oceania" },
  ];

  const durations = [
    { id: "any", name: "Any Duration" },
    { id: "short", name: "1-3 Days" },
    { id: "medium", name: "4-7 Days" },
    { id: "long", name: "8+ Days" },
  ];

  // Sample tour data with region and continent information
  const tours = [
    {
      id: 1,
      name: "Santorini Island Hopping",
      location: "Greece",
      category: "beach",
      region: "international",
      continent: "europe",
      image: "Santorini.jpg",
      price: 1899,
      duration: 7,
      rating: 4.9,
      reviews: 124,
      description: "Experience the magical sunsets and whitewashed villages of the Greek islands.",
      highlights: ["Sunset Cruise", "Wine Tasting", "Ancient Ruins"]
    },
    {
      id: 2,
      name: "Kyoto Cultural Tour",
      location: "Japan",
      category: "cultural",
      region: "international",
      continent: "asia",
      image: "tokyo.jpg",
      price: 2499,
      duration: 10,
      rating: 4.8,
      reviews: 86,
      description: "Immerse yourself in Japan's rich cultural heritage and tranquil landscapes.",
      highlights: ["Tea Ceremony", "Temple Visits", "Bamboo Forest"]
    },
    {
      id: 3,
      name: "Bali Wellness Retreat",
      location: "Indonesia",
      category: "beach",
      region: "international",
      continent: "asia",
      image: "bali.webp",
      price: 1599,
      duration: 5,
      rating: 4.7,
      reviews: 102,
      description: "Rejuvenate your mind and body on the Island of the Gods.",
      highlights: ["Yoga Sessions", "Spa Treatments", "Rice Terraces"]
    },
    {
      id: 4,
      name: "Machu Picchu Explorer",
      location: "Peru",
      category: "mountain",
      region: "international",
      continent: "southAmerica",
      image: "YellowstonePark.jpg",
      price: 2899,
      duration: 9,
      rating: 4.9,
      reviews: 156,
      description: "Trek through the Andes to discover the lost city of the Incas.",
      highlights: ["Inca Trail", "Sacred Valley", "Local Cuisine"]
    },
    {
      id: 5,
      name: "Tokyo Urban Adventure",
      location: "Japan",
      category: "city",
      region: "international",
      continent: "asia",
      image: "MiamiBeach.jpg",
      price: 1999,
      duration: 6,
      rating: 4.6,
      reviews: 78,
      description: "Navigate the bustling streets and hidden gems of Japan's capital.",
      highlights: ["Shibuya Crossing", "Tokyo Tower", "Anime District"]
    },
    {
      id: 6,
      name: "Swiss Alps Escape",
      location: "Switzerland",
      category: "mountain",
      region: "international",
      continent: "europe",
      image: "GrandCanyon.jpg",
      price: 3299,
      duration: 8,
      rating: 4.8,
      reviews: 92,
      description: "Breathtaking mountain vistas and charming alpine villages.",
      highlights: ["Cable Car Rides", "Hiking Trails", "Chocolate Tasting"]
    },
    {
      id: 7,
      name: "Amalfi Coast Expedition",
      location: "Italy",
      category: "beach",
      region: "international",
      continent: "europe",
      image: "paris.jpg",
      price: 2399,
      duration: 7,
      rating: 4.7,
      reviews: 113,
      description: "Explore the stunning coastline and picturesque towns of southern Italy.",
      highlights: ["Boat Excursions", "Limoncello Tasting", "Cliffside Villages"]
    },
    {
      id: 8,
      name: "Marrakech Discover",
      location: "Morocco",
      category: "cultural",
      region: "international",
      continent: "africa",
      image: "NewYorkCity.jpg",
      price: 1299,
      duration: 5,
      rating: 4.5,
      reviews: 67,
      description: "Navigate the colorful souks and ancient medinas of Morocco.",
      highlights: ["Medina Tour", "Desert Excursion", "Moroccan Cuisine"]
    },
    {
      id: 9,
      name: "Grand Canyon Adventure",
      location: "United States",
      category: "mountain",
      region: "domestic",
      continent: "northAmerica",
      image: "GrandCanyon.jpg",
      price: 1499,
      duration: 4,
      rating: 4.8,
      reviews: 134,
      description: "Witness the majesty of one of the world's most spectacular natural wonders.",
      highlights: ["Scenic Helicopter Tour", "Colorado River Rafting", "Rim Hiking"]
    },
    {
      id: 10,
      name: "New York City Weekend",
      location: "United States",
      category: "city",
      region: "domestic",
      continent: "northAmerica",
      image: "NewYorkCity.jpg",
      price: 999,
      duration: 3,
      rating: 4.6,
      reviews: 112,
      description: "Experience the vibrant energy of the Big Apple in a packed weekend itinerary.",
      highlights: ["Times Square", "Central Park", "Broadway Show"]
    },
    {
      id: 11,
      name: "Miami Beach Getaway",
      location: "United States",
      category: "beach",
      region: "domestic",
      continent: "northAmerica",
      image: "MiamiBeach.jpg",
      price: 1199,
      duration: 5,
      rating: 4.7,
      reviews: 98,
      description: "Soak up the sun on pristine beaches and experience the vibrant nightlife.",
      highlights: ["South Beach", "Art Deco District", "Cuban Cuisine"]
    },
    {
      id: 12,
      name: "Yellowstone National Park",
      location: "United States",
      category: "mountain",
      region: "domestic",
      continent: "northAmerica",
      image: "YellowstonePark.jpg",
      price: 1699,
      duration: 6,
      rating: 4.9,
      reviews: 145,
      description: "Discover geysers, wildlife, and breathtaking landscapes in America's first national park.",
      highlights: ["Old Faithful", "Wildlife Safari", "Grand Prismatic Spring"]
    }
  ];

  // Filter tours based on search and filters
  useEffect(() => {
    let results = [...tours];
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(tour => 
        tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'all') {
      results = results.filter(tour => tour.category === selectedCategory);
    }
    
    // Filter by region
    if (selectedRegion !== 'all') {
      results = results.filter(tour => tour.region === selectedRegion);
    }

    // Filter by continent (only if region is international)
    if (selectedRegion === 'international' && selectedContinent !== 'all') {
      results = results.filter(tour => tour.continent === selectedContinent);
    }
    
    // Filter by duration
    if (selectedDuration !== 'any') {
      switch(selectedDuration) {
        case 'short':
          results = results.filter(tour => tour.duration <= 3);
          break;
        case 'medium':
          results = results.filter(tour => tour.duration >= 4 && tour.duration <= 7);
          break;
        case 'long':
          results = results.filter(tour => tour.duration >= 8);
          break;
        default:
          break;
      }
    }
    
    // Filter by price range
    results = results.filter(tour => 
      tour.price >= priceRange[0] && tour.price <= priceRange[1]
    );
    
    setFilteredTours(results);
  }, [searchTerm, selectedCategory, selectedDuration, selectedRegion, selectedContinent, priceRange]);

  const toggleFavorite = (id) => {
    if (favoriteItems.includes(id)) {
      setFavoriteItems(favoriteItems.filter(item => item !== id));
    } else {
      setFavoriteItems([...favoriteItems, id]);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50 pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-white via-blue-50 to-white text-slate-800 py-16 px-4 md:px-6 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center mb-4 bg-white/70 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-200">
                <Compass className="w-5 h-5 text-amber-500 mr-2" />
                <span className={`${typography.small} text-slate-600`}>Explore The World</span>
              </div>
              <h1 className={`${typography.h2} text-slate-800 mb-4`}>
                Discover <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Unforgettable</span> Destinations
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`${typography.body} text-slate-600 max-w-2xl mx-auto`}
              >
                Handcrafted itineraries designed to provide you with unforgettable experiences and memories that last a lifetime.
              </motion.p>
            </motion.div>
            
            {/* Search Bar */}
            <motion.div 
              className="relative max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-wrap md:flex-nowrap gap-2 p-4 bg-white rounded-xl shadow-lg backdrop-blur-sm border border-slate-200">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 text-amber-500" />
                  <input
                    type="text"
                    placeholder="Where would you like to go?"
                    className="w-full py-3 px-10 rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 placeholder-slate-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex w-full md:w-auto gap-2">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 py-3 px-4 rounded-lg transition-colors duration-300 text-slate-700"
                    onClick={() => setFiltersOpen(!filtersOpen)}
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    <span className="hidden sm:inline">Filters</span>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: `0 0 15px ${colors.primary}40`
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 px-6 rounded-lg flex-grow md:flex-grow-0 transition-all duration-300 font-medium"
                  >
                    <Search className="w-4 h-4" />
                    Search
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Floating decorative elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1 }}
            className="absolute left-20 top-1/3 w-48 h-48 rounded-full bg-amber-400/20 blur-xl -z-0"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.2 }}
            className="absolute right-32 bottom-1/4 w-64 h-64 rounded-full bg-teal-400/20 blur-xl -z-0"
          />
        </div>
    
        <div className="container mx-auto max-w-6xl px-4 py-12">
          {/* Filters Panel */}
          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8 bg-white rounded-xl shadow-md overflow-hidden backdrop-blur-sm border border-slate-200"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                      <Filter className="w-5 h-5 mr-2 text-amber-500" />
                      Refine Your Search
                    </h3>
                    <button 
                      onClick={() => setFiltersOpen(false)}
                      className="text-slate-500 hover:text-slate-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      {/* Price Range */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-slate-700 mb-2">Price Range</h4>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-600">{formatPrice(priceRange[0])}</span>
                          <span className="text-sm text-slate-600">{formatPrice(priceRange[1])}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="5000"
                          step="100"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-amber-500"
                        />
                      </div>
                      
                      {/* Duration */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-slate-700 mb-2">Duration</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {durations.map((duration) => (
                            <button
                              key={duration.id}
                              className={`py-2 px-3 text-sm rounded-md transition-colors ${
                                selectedDuration === duration.id
                                  ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium"
                                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                              }`}
                              onClick={() => setSelectedDuration(duration.id)}
                            >
                              {duration.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      {/* Regions */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-slate-700 mb-2">Region</h4>
                        <div className="flex flex-wrap gap-2">
                          {regions.map((region) => (
                            <button
                              key={region.id}
                              className={`flex items-center py-1.5 px-3 text-sm rounded-md transition-colors ${
                                selectedRegion === region.id
                                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium"
                                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                              }`}
                              onClick={() => {
                                setSelectedRegion(region.id);
                                if (region.id !== 'international') {
                                  setSelectedContinent('all');
                                }
                              }}
                            >
                              <span className={`mr-1.5 ${selectedRegion === region.id ? "text-white" : "text-amber-500"}`}>
                                {region.icon}
                              </span>
                              {region.name}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Continents - Only show if International is selected */}
                      {selectedRegion === 'international' && (
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-slate-700 mb-2">Continent</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {continents.map((continent) => (
                              <button
                                key={continent.id}
                                className={`py-2 px-3 text-sm rounded-md transition-colors ${
                                  selectedContinent === continent.id
                                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`}
                                onClick={() => setSelectedContinent(continent.id)}
                              >
                                {continent.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Categories */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-2">Tour Type</h4>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          className={`flex items-center py-1.5 px-3 text-sm rounded-md transition-colors ${
                            selectedCategory === category.id
                              ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          <span className={`mr-1.5 ${selectedCategory === category.id ? "text-white" : "text-teal-500"}`}>
                            {category.icon}
                          </span>
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
    
          {/* Region Tabs - Quick Filters */}
          <div className="flex overflow-x-auto mb-6 pb-2 no-scrollbar">
            <div className="flex gap-2">
              {regions.map((region) => (
                <motion.button
                  key={region.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center py-2 px-4 rounded-full whitespace-nowrap transition-colors flex-shrink-0 ${
                    selectedRegion === region.id
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                  onClick={() => {
                    setSelectedRegion(region.id);
                    if (region.id !== 'international') {
                      setSelectedContinent('all');
                    }
                  }}
                >
                  <span className={`mr-2 ${selectedRegion === region.id ? "text-white" : "text-amber-500"}`}>
                    {region.icon}
                  </span>
                  {region.name}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Continent Tabs - Only show if International is selected */}
          {selectedRegion === 'international' && (
            <div className="flex overflow-x-auto mb-10 pb-2 no-scrollbar">
              <div className="flex gap-2">
                {continents.map((continent) => (
                  <motion.button
                    key={continent.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-2 px-4 rounded-full whitespace-nowrap transition-colors flex-shrink-0 ${
                      selectedContinent === continent.id
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                        : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                    onClick={() => setSelectedContinent(continent.id)}
                  >
                    {continent.name}
                  </motion.button>
                ))}
              </div>
            </div>
          )}
          
          {/* Category Tabs */}
          <div className="flex overflow-x-auto mb-10 pb-2 no-scrollbar">
            <div className="flex gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center py-2 px-4 rounded-full whitespace-nowrap transition-colors flex-shrink-0 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className={`mr-2 ${selectedCategory === category.id ? "text-white" : "text-teal-500"}`}>
                    {category.icon}
                  </span>
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
    
          {/* Results Section */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-slate-800">
                {filteredTours.length} tours found
              </h2>
              <div className="flex items-center">
                <span className="text-sm text-slate-600 mr-2">Sort by:</span>
                <button className="flex items-center text-sm text-slate-800 hover:text-amber-500 font-medium">
                  Popularity
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
    
            {filteredTours.length === 0 ? (
              <div className="text-center py-16">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-4 text-slate-400"
                >
                  <Search className="w-16 h-16 mx-auto" />
                </motion.div>
                <h3 className="text-xl font-medium text-slate-700 mb-2">No tours found</h3>
                <p className="text-slate-500">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTours.map((tour, index) => (
                  <motion.div
                    key={tour.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200"
                  >
                    <div className="relative">
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-full h-48 object-cover"
                      />
                      {/* Region Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`inline-flex items-center py-1 px-2 rounded-full text-xs font-medium ${
                          tour.region === 'domestic' 
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {tour.region === 'domestic' ? (
                            <><Home className="w-3 h-3 mr-1" />Domestic</>
                          ) : (
                            <><Plane className="w-3 h-3 mr-1" />International</>
                          )}
                        </span>
                      </div>
                      
                      {/* Price Tag */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-white/90 text-slate-800 py-1 px-3 rounded-full text-sm font-semibold shadow-sm backdrop-blur-sm">
                          {formatPrice(tour.price)}
                        </span>
                      </div>
                      
                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(tour.id)}
                        className="absolute right-4 top-[190px] z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favoriteItems.includes(tour.id)
                              ? "fill-pink-500 text-pink-500"
                              : "text-slate-400"
                          }`}
                        />
                      </button>
                    </div>
    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-slate-800 group-hover:text-teal-600 transition-colors">
                          {tour.name}
                        </h3>
                      </div>
                      
                      <div className="flex items-center mb-3 text-slate-500">
                        <MapPin className="w-4 h-4 mr-1 text-slate-400" />
                        <span className="text-sm">{tour.location}</span>
                      </div>
                      
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {tour.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-5">
                        {tour.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="bg-slate-100 text-slate-700 text-xs rounded-full px-2 py-1"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-amber-400" />
                          <span className="ml-1 text-sm font-medium text-slate-700">
                            {tour.rating}
                          </span>
                          <span className="ml-1 text-xs text-slate-500">
                            ({tour.reviews} reviews)
                          </span>
                        </div>
                        
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-slate-400 mr-1" />
                          <span className="text-sm text-slate-600">{tour.duration} days</span>
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate(`/tour/${tour.id}`)}
                        className="w-full mt-5 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-lg flex items-center justify-center font-medium transition-all duration-300"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {filteredTours.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <button className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-500 text-white font-medium">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors">
                    2
                  </button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors">
                    3
                  </button>
                  <span className="text-slate-400">...</span>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors">
                    8
                  </button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer Section */}
        <Footer/>
      </div>
  );
}