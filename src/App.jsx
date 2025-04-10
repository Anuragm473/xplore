import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {  Star, ChevronDown, ChevronRight, PhoneCall, Mail, Clock, Compass, Camera, Map, } from 'lucide-react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Package from './components/Package';
import Why from './components/Why'
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';

const App = () => {
  const [activeTab, setActiveTab] = useState('international');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentDestination, setCurrentDestination] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [favorites, setFavorites] = useState([]);

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

  // Handle scroll for parallax effects and navbar changes
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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

  // Slide image for packages
  const nextSlide = (packageId) => {
    setActiveSlide((prev) => ({
      ...prev,
      [packageId]: (prev[packageId] + 1) % packages[activeTab].find(pkg => pkg.id === packageId).images.length
    }));
  };

  const prevSlide = (packageId) => {
    setActiveSlide((prev) => ({
      ...prev,
      [packageId]: prev[packageId] === 0
        ? packages[activeTab].find(pkg => pkg.id === packageId).images.length - 1
        : prev[packageId] - 1
    }));
  };

  const toggleFavorite = (packageId) => {
    setFavorites(prev => 
      prev.includes(packageId) 
        ? prev.filter(id => id !== packageId)
        : [...prev, packageId]
    );
  };

  // Initialize active slides for packages
  useEffect(() => {
    const initialSlides = {};
    packages.international.forEach(pkg => {
      initialSlides[pkg.id] = 0;
    });
    packages.local.forEach(pkg => {
      initialSlides[pkg.id] = 0;
    });
    packages.fixesDeparture.forEach(pkg => {
      initialSlides[pkg.id] = 0;
    });
    setActiveSlide(initialSlides);
  }, []);

  // Sample data for the app
  const packages = {
    international: [
      {
        id: 1,
        destination: 'Paris, France',
        images: ['paris.jpg', 'bali.webp', 'tokyo.jpg', 'paris.jpg', 'Santorini.jpg'],
        duration: '7 Days',
        price: '$1,599',
        rating: 4.8,
        description: 'Experience the romance and charm of the City of Lights'
      },
      {
        id: 2,
        destination: 'Bali, Indonesia',
        images: ['bali.webp', 'paris.jpg', 'Santorini.jpg', 'tokyo.jpg', 'bali.webp'],
        duration: '10 Days',
        price: '$1,899',
        rating: 4.9,
        description: 'Tropical paradise with stunning beaches and rich culture'
      },
      {
        id: 3,
        destination: 'Tokyo, Japan',
        images: ['tokyo.jpg', 'Santorini.jpg', 'paris.jpg', 'bali.webp', 'Santorini.jpg'],
        duration: '8 Days',
        price: '$2,199',
        rating: 4.7,
        description: 'Modern metropolis with ancient traditions and exquisite cuisine'
      },
      {
        id: 4,
        destination: 'Santorini, Greece',
        images: ['Santorini.jpg', 'bali.webp', 'tokyo.jpg', 'paris.jpg', 'bali.webp'],
        duration: '6 Days',
        price: '$1,799',
        rating: 4.8,
        description: 'Breathtaking views and iconic white and blue architecture'
      }
    ],
    local: [
      {
        id: 5,
        destination: 'Grand Canyon',
        images: ['GrandCanyon.jpg', 'tokyo.jpg', 'YellowstonePark.jpg', 'NewYorkCity.jpg', 'grandcanyon_sunset.jpg'],
        duration: '3 Days',
        price: '$699',
        rating: 4.6,
        description: 'Natural wonder with magnificent landscapes and hiking trails'
      },
      {
        id: 6,
        destination: 'Yellowstone Park',
        images: ['YellowstonePark.jpg', 'yellowstone_geyser.jpg', 'GrandCanyon.jpg', 'yellowstone_lake.jpg', 'NewYorkCity.jpg'],
        duration: '4 Days',
        price: '$899',
        rating: 4.7,
        description: 'Iconic national park with geysers and diverse wildlife'
      },
      {
        id: 7,
        destination: 'New York City',
        images: ['NewYorkCity.jpg', 'nyc_times_square.jpg', 'nyc_central_park.jpg', 'nyc_brooklyn.jpg', 'nyc_statue.jpg', 'nyc_skyline.jpg'],
        duration: '5 Days',
        price: '$1,299',
        rating: 4.8,
        description: 'The city that never sleeps with iconic landmarks and vibrant culture'
      },
      {
        id: 8,
        destination: 'Miami Beach',
        images: ['MiamiBeach.jpg', 'miami_ocean.jpg', 'miami_nightlife.jpg', 'miami_art.jpg', 'miami_palm.jpg'],
        duration: '4 Days',
        price: '$999',
        rating: 4.5,
        description: 'Sun-soaked beaches and vibrant art deco district'
      }
    ],
    fixesDeparture: [
      {
        id: 5,
        destination: 'Grand Canyon',
        images: ['GrandCanyon.jpg', 'grandcanyon_rim.jpg', 'grandcanyon_river.jpg', 'grandcanyon_hike.jpg', 'grandcanyon_sunset.jpg'],
        duration: '3 Days',
        price: '$699',
        rating: 4.6,
        description: 'Natural wonder with magnificent landscapes and hiking trails'
      },
      {
        id: 6,
        destination: 'Yellowstone Park',
        images: ['YellowstonePark.jpg', 'yellowstone_geyser.jpg', 'yellowstone_wildlife.jpg', 'yellowstone_lake.jpg', 'yellowstone_forest.jpg'],
        duration: '4 Days',
        price: '$899',
        rating: 4.7,
        description: 'Iconic national park with geysers and diverse wildlife'
      },
      {
        id: 7,
        destination: 'New York City',
        images: ['NewYorkCity.jpg', 'nyc_times_square.jpg', 'nyc_central_park.jpg', 'nyc_brooklyn.jpg', 'nyc_statue.jpg', 'nyc_skyline.jpg'],
        duration: '5 Days',
        price: '$1,299',
        rating: 4.8,
        description: 'The city that never sleeps with iconic landmarks and vibrant culture'
      },
      {
        id: 8,
        destination: 'Miami Beach',
        images: ['MiamiBeach.jpg', 'miami_ocean.jpg', 'miami_nightlife.jpg', 'miami_art.jpg', 'miami_palm.jpg'],
        duration: '4 Days',
        price: '$999',
        rating: 4.5,
        description: 'Sun-soaked beaches and vibrant art deco district'
      }
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


  const testimonials = [
    { name: 'Sarah Johnson', location: 'New York', image: 'download.jfif', rating: 5, text: 'Our trip to Bali was absolutely perfect! The accommodations were luxurious and the local guide made us feel like family. Will definitely book with Xplore World again!' },
    { name: 'David Chen', location: 'California', image: 'download.jfif', rating: 5, text: 'The Paris tour exceeded all expectations. Our guide was incredibly knowledgeable, and the itinerary had the perfect balance of iconic sites and hidden gems.' },
    { name: 'Maya Patel', location: 'Texas', image: 'download.jfif', rating: 4, text: 'Yellowstone was breathtaking! The tour was well organized and our guide was passionate about wildlife conservation. The accommodations were comfortable and scenic.' }
  ];


  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Packages', href: '#packages' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="font-[Poppins] text-gray-800 overflow-x-hidden">
      {/* Navigation Bar */}
      
      <NavBar isScrolled={isScrolled} navLinks={navLinks} navbarOpen={navbarOpen}/>
      {/* Hero Banner Section - Enhanced with vibrant colors and tourist imagery */}
      <Banner currentDestination={currentDestination} mousePosition={mousePosition}/>

      {/* Tour Packages Section */}
      <Package activeTab={activeTab} packages={packages} activeSlide={activeSlide} favorites={favorites} setActiveTab={setActiveTab} setFavorites={setFavorites} toggleFavorite={toggleFavorite} nextSlide={nextSlide} prevSlide={prevSlide}/>

      {/* Why Choose Xplore Section - Enhanced */}
      <Why/>

      {/* CTA Banner Section */}
      <CallToAction/>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} currentTestimonial={currentTestimonial}/>

      {/* FAQ Section */}
      <FAQ/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;