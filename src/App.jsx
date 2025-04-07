import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Calendar, Star, Users, ChevronDown, ChevronRight, ArrowRight, PhoneCall, Mail, Clock, CheckCircle, Compass, Camera, Map } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('international');
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentDestination, setCurrentDestination] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentTestimonial]);

  // Auto-rotate destinations for banner
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentDestination((prev) => (prev + 1) % featuredDestinations.length);
    }, 7000);
    return () => clearTimeout(timer);
  }, [currentDestination]);

  // Sample data for the app
  const packages = {
    international: [
      { id: 1, destination: 'Paris, France', image: 'paris.jpg', duration: '7 Days', price: '$1,599', rating: 4.8 },
      { id: 2, destination: 'Bali, Indonesia', image: 'bali.webp', duration: '10 Days', price: '$1,899', rating: 4.9 },
      { id: 3, destination: 'Tokyo, Japan', image: 'tokyo.jpg', duration: '8 Days', price: '$2,199', rating: 4.7 },
      { id: 4, destination: 'Santorini, Greece', image: 'Santorini.jpg', duration: '6 Days', price: '$1,799', rating: 4.8 }
    ],
    local: [
      { id: 5, destination: 'Grand Canyon', image: 'GrandCanyon.jpg', duration: '3 Days', price: '$699', rating: 4.6 },
      { id: 6, destination: 'Yellowstone Park', image: 'YellowstonePark.jpg', duration: '4 Days', price: '$899', rating: 4.7 },
      { id: 7, destination: 'New York City', image: 'NewYorkCity.jpg', duration: '5 Days', price: '$1,299', rating: 4.8 },
      { id: 8, destination: 'Miami Beach', image: 'MiamiBeach.jpg', duration: '4 Days', price: '$999', rating: 4.5 }
    ]
  };

  const featuredDestinations = [
    { 
      name: "Santorini, Greece", 
      image: "Santorini.jpg",
      tagline: "Where azure meets architecture",
      description: "Iconic whitewashed buildings perched on volcanic cliffs"
    },
    { 
      name: "Kyoto, Japan", 
      image: "tokyo.jpg",
      tagline: "Tradition in every corner",
      description: "Ancient temples and breathtaking cherry blossoms"
    },
    { 
      name: "Bali, Indonesia", 
      image: "bali.webp",
      tagline: "Island of the Gods",
      description: "Lush rice terraces and spiritual sanctuaries"
    },
    { 
      name: "Machu Picchu, Peru", 
      image: "paris.jpg",
      tagline: "Lost city in the clouds",
      description: "Ancient Incan marvel nestled in the Andes"
    }
  ];

  const faqs = [
    { question: 'How do I book a tour package?', answer: 'Booking is simple! Browse our packages, select your preferred one, click "Book Now", fill in your details, and complete the payment process. You\'ll receive a confirmation email with all details.' },
    { question: 'What is your cancellation policy?', answer: 'We offer free cancellation up to 30 days before your trip. Cancellations made 15-29 days prior receive a 50% refund. Cancellations less than 15 days before departure are non-refundable.' },
    { question: 'Are flights included in the packages?', answer: 'International packages include round-trip flights from major cities. Local packages do not include flights unless specifically mentioned in the package details.' },
    { question: 'Do you offer customized tour packages?', answer: 'Yes! We specialize in creating custom itineraries. Contact us through the form or call us directly to discuss your dream vacation and we\'ll design a personalized experience.' }
  ];

  const testimonials = [
    { name: 'Sarah Johnson', location: 'New York', image: 'download.jfif', rating: 5, text: 'Our trip to Bali was absolutely perfect! The accommodations were luxurious and the local guide made us feel like family. Will definitely book with Xplore again!' },
    { name: 'David Chen', location: 'California', image: 'download.jfif', rating: 5, text: 'The Paris tour exceeded all expectations. Our guide was incredibly knowledgeable, and the itinerary had the perfect balance of iconic sites and hidden gems.' },
    { name: 'Maya Patel', location: 'Texas', image: 'download.jfif', rating: 4, text: 'Yellowstone was breathtaking! The tour was well organized and our guide was passionate about wildlife conservation. The accommodations were comfortable and scenic.' }
  ];

  const highlights = [
    { icon: <Compass className="w-12 h-12 text-teal-500" />, title: 'Expert Local Guides', description: 'Our guides are locals with years of experience and intimate knowledge of each destination.' },
    { icon: <Map className="w-12 h-12 text-teal-500" />, title: 'All-Inclusive Trips', description: 'All accommodations, local transport, and selected meals are included in our package prices.' },
    { icon: <Camera className="w-12 h-12 text-teal-500" />, title: 'Unforgettable Experiences', description: 'Curated activities that go beyond typical tourist attractions for authentic cultural immersion.' }
  ];

  // Define our new color theme
  const theme = {
    primary: 'teal-600', // Using teal as the primary theme color
    secondary: 'amber-500', // Using amber as an accent
    text: {
      light: 'white',
      dark: 'gray-800',
      muted: 'gray-400'
    },
    background: {
      light: 'white',
      dark: 'gray-900',
      accent: 'teal-50'
    }
  };


  return (
    <div className="font-[Poppins] text-gray-800 overflow-x-hidden">
      {/* Hero Banner Section - Enhanced with vibrant colors and tourist imagery */}
      <section className="relative h-screen overflow-hidden">
        {/* Background image with overlay gradient */}
        <motion.div 
          key={currentDestination}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={featuredDestinations[currentDestination].image} 
            alt={featuredDestinations[currentDestination].name} 
            className="w-full h-full object-cover"
            style={{
              transform: `translate(${mousePosition.x / 80}px, ${mousePosition.y / 80}px) scale(1.1)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
          {/* New enhanced color overlay with more vibrant tourism feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 via-transparent to-teal-900/80"></div>
          
          {/* Dynamic color accent overlay based on destination */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-amber-500 mix-blend-overlay opacity-30"
          ></motion.div>
        </motion.div>

        {/* Animated weather elements to enhance the travel feeling */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated clouds */}
          <motion.div 
            animate={{ 
              x: ['-5%', '105%'],
            }} 
            transition={{ 
              duration: 120,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-24 left-0 w-32 h-16 bg-white opacity-40 rounded-full blur-xl"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              x: ['-10%', '110%'],
            }} 
            transition={{ 
              duration: 90,
              repeat: Infinity,
              ease: "linear",
              delay: 20
            }}
            className="absolute top-48 left-0 w-48 h-20 bg-white opacity-30 rounded-full blur-xl"
          ></motion.div>
        </div>

        {/* 3D Globe animation - enhanced with better positioning */}
        <div className="absolute -right-20 -bottom-40 md:-bottom-24 lg:bottom-0 w-full md:w-1/2 h-full pointer-events-none opacity-40">
          <motion.div 
            animate={{ 
              rotateY: [0, 360],
              rotateX: [5, -5, 5]
            }} 
            transition={{ 
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative w-full h-full"
          >
            <Globe className="absolute w-full h-full text-teal-400" strokeWidth={0.5} />
          </motion.div>
        </div>

        {/* Animated location pins */}
        <motion.div 
          className="absolute left-1/4 top-1/3 w-4 h-4"
          animate={{ 
            y: [0, -15, 0], 
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: 0.5
          }}
        >
          <MapPin className="w-8 h-8 text-amber-500 drop-shadow-lg" fill="#F59E0B" />
        </motion.div>

        <motion.div 
          className="absolute right-1/3 bottom-1/4 w-4 h-4"
          animate={{ 
            y: [0, -15, 0], 
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: 1.5
          }}
        >
          <MapPin className="w-8 h-8 text-amber-500 drop-shadow-lg" fill="#F59E0B" />
        </motion.div>

        <motion.div 
          className="absolute left-1/2 top-1/2 w-4 h-4"
          animate={{ 
            y: [0, -15, 0], 
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: 2.5
          }}
        >
          <MapPin className="w-8 h-8 text-amber-500 drop-shadow-lg" fill="#F59E0B" />
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            {/* Animated destination tag with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-3 bg-amber-500 text-white px-6 py-2 rounded-full font-medium text-sm backdrop-blur-sm shadow-lg"
            >
              <motion.span
                key={currentDestination}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <Globe className="w-4 h-4 mr-2" />
                {featuredDestinations[currentDestination].name}
              </motion.span>
            </motion.div>

            {/* Main title with animated text reveal - enhanced typography */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                Discover the world, 
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block text-amber-400"
                >
                  one Xplore at a time
                </motion.span>
              </h1>
            </motion.div>

            {/* Destination-specific tagline */}
            <motion.p
              key={`tagline-${currentDestination}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl text-amber-300 mb-2 italic font-light"
            >
              "{featuredDestinations[currentDestination].tagline}"
            </motion.p>

            {/* Subtitle with animated reveal - improved description */}
            <motion.p 
              key={`desc-${currentDestination}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl"
            >
              {featuredDestinations[currentDestination].description}
            </motion.p>

            {/* Animated stat counters with improved styling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-8 mb-10"
            >
              <div className="flex items-center">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                  className="w-12 h-12 bg-teal-500/30 backdrop-blur-lg rounded-lg flex items-center justify-center mr-3 border border-teal-400/30"
                >
                  <Globe className="w-6 h-6 text-amber-400" />
                </motion.div>
                <div>
                  <motion.p 
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 2 }}
                    className="text-2xl font-bold text-white"
                  >
                    50+ Destinations
                  </motion.p>
                  <p className="text-teal-200 text-sm">Around the world</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 6 }}
                  className="w-12 h-12 bg-teal-500/30 backdrop-blur-lg rounded-lg flex items-center justify-center mr-3 border border-teal-400/30"
                >
                  <Users className="w-6 h-6 text-amber-400" />
                </motion.div>
                <div>
                  <motion.p 
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="text-2xl font-bold text-white"
                  >
                    10,000+ Travelers
                  </motion.p>
                  <p className="text-teal-200 text-sm">Satisfied customers</p>
                </div>
              </div>
            </motion.div>

            {/* CTA buttons with enhanced hover effects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#f59e0b" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-amber-500 text-white rounded-full font-medium transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center"
              >
                Explore Packages
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.div>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-teal-400 text-white rounded-full font-medium transition-all flex items-center justify-center backdrop-blur-sm"
              >
                Book Now
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Destination indicators with enhanced styling */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {featuredDestinations.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentDestination(index)}
              className={`h-2 rounded-full transition-all ${
                currentDestination === index ? 'bg-amber-500 w-16' : 'bg-white/50 w-8'
              }`}
            />
          ))}
        </div>
        
        {/* Scroll indicator with improved styling */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white"
        >
          <p className="text-sm mb-2 text-teal-200">Scroll to explore</p>
          <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
        
        {/* Enhanced floating 3D elements */}
        <div className="hidden md:block">
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-teal-500/20 backdrop-blur-xl rounded-full mix-blend-overlay"
          />
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-amber-500/30 backdrop-blur-xl rounded-full mix-blend-overlay"
          />
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-16 bg-white" id="packages">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Discover Our <span className="text-teal-600">Tour Packages</span></h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">Handcrafted itineraries designed to provide you with unforgettable experiences and memories that last a lifetime.</p>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-full p-1 bg-gray-100">
              <button 
                onClick={() => setActiveTab('international')}
                className={`px-6 py-2 rounded-full ${activeTab === 'international' ? 'bg-teal-600 text-white' : 'text-gray-700'}`}
              >
                International
              </button>
              <button 
                onClick={() => setActiveTab('local')}
                className={`px-6 py-2 rounded-full ${activeTab === 'local' ? 'bg-teal-600 text-white' : 'text-gray-700'}`}
              >
                Local
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages[activeTab].map((pkg) => (
              <motion.div 
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img src={pkg.image} alt={pkg.destination} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center">
                    <Star className="w-4 h-4 text-amber-500 mr-1" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2">{pkg.destination}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <span className="font-bold text-teal-600">{pkg.price}</span>
                  </div>
                  <button className="w-full py-2 bg-gray-100 hover:bg-teal-600 hover:text-white text-teal-600 font-medium rounded-lg transition-colors flex items-center justify-center">
                    Book Now <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white border border-teal-600 text-teal-600 rounded-full font-medium hover:bg-teal-600 hover:text-white transition-all flex items-center"
            >
              View All Packages <ChevronRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Why Choose Xplore Section - Enhanced */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose <span className="text-teal-600">Xplore</span></h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">Experience travel like never before with our premium services and thoughtful attention to detail.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-teal-600">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to pack your bags?</h2>
          <p className="text-xl mb-8">Let's Xplore together!</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-all text-lg"
          >
            Start Planning Your Trip
          </motion.button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our <span className="text-orange-500">Travelers Say</span></h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">Real experiences from travelers who discovered the world with Xplore.</p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={currentTestimonial}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="flex items-center mb-6">
                  <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-14 h-14 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg">"{testimonials[currentTestimonial].text}"</p>
              </motion.div>
            </div>
            
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-2 ${currentTestimonial === index ? 'bg-orange-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked <span className="text-orange-500">Questions</span></h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">Get answers to common questions about our tours and booking process.</p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between font-medium"
                >
                  <span>{faq.question}</span>
                  {activeFaq === index ? <ChevronDown className="w-5 h-5 text-orange-500" /> : <ChevronRight className="w-5 h-5 text-orange-500" />}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get in <span className="text-orange-500">Touch</span></h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">Have questions or ready to book? Reach out to our friendly team.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <PhoneCall className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@xplore-travel.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-600">Monday-Friday: 9AM-6PM EST</p>
                      <p className="text-gray-600">Saturday: 10AM-4PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Our Location</h3>
                <div className="bg-gray-200 rounded-xl w-full h-48 overflow-hidden">
                  <img src="xplore.png" alt="Map location" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="package" className="block text-gray-700 mb-2">Package of Interest</label>
                  <select 
                    id="package" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  >
                    <option value="">Select a package</option>
                    <option value="paris">Paris, France</option>
                    <option value="bali">Bali, Indonesia</option>
                    <option value="tokyo">Tokyo, Japan</option>
                    <option value="santorini">Santorini, Greece</option>
                    <option value="grand-canyon">Grand Canyon</option>
                    <option value="yellowstone">Yellowstone Park</option>
                    <option value="new-york">New York City</option>
                    <option value="miami">Miami Beach</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">Xplore</h3>
              <p className="text-gray-400 mb-6">Travel Beyond Boundaries</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-all">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-all">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-all">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
                <li><a href="#packages" className="text-gray-400 hover:text-orange-500 transition-colors">Tour Packages</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Destinations</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Europe</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Asia</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Oceania</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">North America</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get special offers and travel tips.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <button className="bg-orange-500 text-white px-4 rounded-r-lg hover:bg-orange-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} Xplore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;