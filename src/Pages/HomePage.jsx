import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Star, ChevronDown, ChevronRight, PhoneCall, Mail, Clock, Compass, Camera, Map } from 'lucide-react';
import Banner from './../components/Banner';
import Package from './../components/Package';
import Why from './../components/Why';
import Testimonials from './../components/Testimonials';
import FAQ from './../components/FAQ';
import Contact from './../components/Contact';
import Footer from './../components/Footer';
import CallToAction from './../components/CallToAction';

const HomePage = ({setIsScrolled}) => {
  const [activeTab, setActiveTab] = useState('international');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentDestination, setCurrentDestination] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSlide, setActiveSlide] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [packages, setPackages] = useState({
    international: [],
    local: [],
    fixesDeparture: [],
  });

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch('https://xplore-backend-alpha.vercel.app/api');
        const data = await response.json();

        const categorizedPackages = {
          international: [],
          local: [],
          fixesDeparture: [],
        };
        console.log(data)

        data.packages.forEach(pkg => {
          const formattedPackage = {
            id: pkg.id, // using the virtual id
            destination: pkg.destination,
            images: pkg.images,
            duration: pkg.duration,
            price: pkg.price,
            rating: pkg.rating,
            description: pkg.description,
          };

          // categorize based on the `category` field
          if (pkg.category === 'international') {
            categorizedPackages.international.push(formattedPackage);
          } else if (pkg.category === 'local') {
            categorizedPackages.local.push(formattedPackage);
          } else if (pkg.category === 'fixedDeparture') {
            categorizedPackages.fixesDeparture.push(formattedPackage);
          }
        });

        setPackages(categorizedPackages);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    }

    fetchApi();
  }, []);

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

  return (
    <div className="font-[Poppins] text-gray-800 overflow-x-hidden">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Xplore World | Premium Global Travel & Tour Packages</title>
        <meta 
          name="description" 
          content="Xplore World offers unforgettable travel experiences with premium tour packages to exotic destinations worldwide. Book your dream vacation with our expert travel planners today." 
        />
        <meta 
          name="keywords" 
          content="Xplore World, travel packages, international tours, vacation deals, luxury travel, adventure tours, cultural experiences, best travel agency, holiday packages" 
        />
        <meta property="og:title" content="Xplore World | Premium Global Travel & Tour Packages" />
        <meta property="og:description" content="Discover the world with Xplore World's premium travel packages and unforgettable experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xploreworld.com" />
        <meta property="og:image" content="https://xploreworld.com/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://xploreworld.com" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Xplore World",
              "description": "Premium global travel and tour packages provider",
              "url": "https://xploreworld.com",
              "logo": "https://xploreworld.com/images/logo.png",
              "sameAs": [
                "https://www.facebook.com/xploreworld",
                "https://www.instagram.com/xploreworld",
                "https://twitter.com/xploreworld"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Travel Street",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "postalCode": "33101",
                "addressCountry": "US"
              },
              "telephone": "+1 (555) 123-4567"
            }
          `}
        </script>
      </Helmet>


      {/* Main Content with semantic sections */}
      <main>
        {/* Hero Banner Section */}
        <section aria-labelledby="main-heading">
          <Banner setCurrentDestination={setCurrentDestination} packages={packages} currentDestination={currentDestination} mousePosition={mousePosition}/>
        </section>

        {/* Tour Packages Section */}
        <section id="packages" aria-labelledby="packages-heading">
          <Package 
            activeTab={activeTab} 
            packages={packages} 
            activeSlide={activeSlide} 
            favorites={favorites} 
            setActiveTab={setActiveTab} 
            setFavorites={setFavorites} 
            toggleFavorite={toggleFavorite} 
            nextSlide={nextSlide} 
            prevSlide={prevSlide}
          />
        </section>

        {/* Why Choose Xplore Section */}
        <section id="about" aria-labelledby="why-heading">
          <Why/>
        </section>

        {/* CTA Banner Section */}
        <section aria-labelledby="cta-heading">
          <CallToAction/>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-gray-50">
          <Testimonials testimonials={testimonials} currentTestimonial={currentTestimonial}/>
        </section>

        {/* FAQ Section */}
        <section id="faq" aria-labelledby="faq-heading" className="bg-white">
          <FAQ/>
        </section>

        {/* Contact Section */}
        <section id="contact" aria-labelledby="contact-heading" className="bg-gray-50">
          <Contact packages={packages}/>
        </section>
      </main>

      {/* Footer with semantic HTML */}
      <footer>
        <Footer/>
      </footer>

      {/* Hidden SEO text for keyword optimization */}
      <div className="hidden" aria-hidden="true">
        <h1>Xplore World - Your Premier Travel Partner</h1>
        <p>
          Xplore World offers the best travel packages and tour experiences across the globe. 
          As a leading travel agency, we specialize in luxury vacations, adventure tours, 
          and cultural experiences. Book your dream holiday with Xplore World today and 
          discover why we're the top choice for international travelers seeking unforgettable 
          journeys to destinations like Paris, Bali, Tokyo, and more.
        </p>
        <h2>Why Choose Xplore World for Your Next Vacation?</h2>
        <p>
          Xplore World provides expertly crafted tour packages with premium accommodations, 
          local guides, and unique experiences. Our travel experts help you explore world 
          destinations with confidence and style. Whether you're looking for a romantic getaway, 
          family vacation, or solo adventure, Xplore World has the perfect travel solution.
        </p>
      </div>
    </div>
  );
};

export default HomePage;