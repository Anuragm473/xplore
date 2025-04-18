import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import baliImage from "../../public/bali.webp";
import {
  ArrowLeft,
  Star,
  MapPin,
  Calendar,
  Users,
  Clock,
  Check,
  Globe,
  Heart,
  Share,
  ChevronRight,
  X,
  Compass,
  MessageCircle,
  User,
  PenLine,
  Info,
  AlertCircle,
  Luggage,
  Coffee,
  Utensils,
  Car,
  Mountain,
  Camera,
} from "lucide-react";

export default function TourDetailsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedGuests, setSelectedGuests] = useState(1);
  const [activeTab, setActiveTab] = useState("overview");
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced design system matching the Tours page
  const colors = {
    primary: "#F59E0B", // Amber-500
    secondary: "#0F766E", // Teal-600
    accent: "#EC4899", // Pink-500
    background: "#1E293B", // Slate-800
    text: "#F8FAFC", // Slate-50
  };

  const typography = {
    h2: "text-4xl md:text-5xl font-bold tracking-tight",
    h3: "text-2xl md:text-3xl font-bold",
    body: "text-lg md:text-xl font-light leading-relaxed",
    small: "text-sm font-medium",
  };

  // Sample tour data
  const tour = {
    id: 4,
    name: "Machu Picchu Explorer",
    location: "Peru",
    category: "mountain",
    images: [
      "../MiamiBeach.jpg",
      "../paris.jpg",
      "../bali.webp",
      "../Santorini.jpg",
    ],
    price: 2899,
    duration: 9,
    rating: 4.9,
    review: 156,
    description:
      "Trek through the Andes to discover the lost city of the Incas. This unforgettable journey takes you through breathtaking mountain scenery, traditional villages, and finally to the majestic ancient ruins of Machu Picchu.",
    longDescription:
      "Embark on an epic journey through the Andes Mountains to discover one of the world's most spectacular archaeological sites - Machu Picchu. This carefully crafted tour combines adventure, culture, and history as you traverse the legendary Inca Trail, passing through cloud forests, alpine tundra, and subtropical jungle.\n\nYour experienced local guides will share fascinating insights about Inca history, local customs, and the diverse ecosystems you'll encounter. You'll visit traditional Quechua communities, sample authentic Peruvian cuisine, and acclimatize in the historic city of Cusco before beginning your trek.\n\nThe highlight of your journey will be watching the sunrise over Machu Picchu from the Sun Gate, followed by a comprehensive tour of this UNESCO World Heritage site. Learn about the incredible engineering feat achieved by the Incas and the mysteries that still surround this ancient citadel.",
    highlights: [
      "Guided trek along the Inca Trail",
      "Sunrise at the Sun Gate overlooking Machu Picchu",
      "Exploration of Cusco and the Sacred Valley",
      "Traditional Peruvian cuisine",
      "Visits to authentic Quechua villages",
      "Expert guides sharing cultural and historical insights",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Lima",
        description:
          "Welcome to Peru! Upon arrival at Jorge Chávez International Airport in Lima, you'll be met by our representative and transferred to your hotel. Rest and recover from your journey.",
        activities: ["Airport pickup", "Hotel check-in", "Welcome briefing"],
      },
      {
        day: 2,
        title: "Lima to Cusco",
        description:
          "After breakfast, fly to Cusco, the ancient capital of the Inca Empire. Take the day to acclimatize to the altitude (11,200 feet) and explore this beautiful colonial city.",
        activities: [
          "Morning flight to Cusco",
          "Hotel check-in",
          "Free afternoon to acclimatize",
          "Optional walking tour",
        ],
      },
      {
        day: 3,
        title: "Cusco City Tour",
        description:
          "Explore the incredible history of Cusco with a guided tour of the city's most important sites, including Sacsayhuaman fortress and the Temple of the Sun.",
        activities: [
          "Guided city tour",
          "Visit to Sacsayhuaman",
          "Qorikancha (Temple of the Sun)",
          "Traditional dinner",
        ],
      },
      {
        day: 4,
        title: "Sacred Valley",
        description:
          "Travel through the Sacred Valley of the Incas, visiting the colorful markets of Pisac and the impressive ruins at Ollantaytambo.",
        activities: [
          "Pisac Market",
          "Lunch at a local farm",
          "Ollantaytambo ruins",
          "Overnight in the Sacred Valley",
        ],
      },
      {
        day: 5,
        title: "Start of Inca Trail",
        description:
          "Begin your Inca Trail adventure! Hike through beautiful scenery and visit your first Incan ruins along the way.",
        activities: [
          "Early morning start",
          "Hiking (12km)",
          "First archaeological sites",
          "Overnight camping",
        ],
      },
      {
        day: 6,
        title: "Dead Woman's Pass",
        description:
          "The most challenging day as you ascend to Dead Woman's Pass (13,828 feet), then descend into the valley for your second night camping.",
        activities: [
          "High altitude hike",
          "Spectacular views",
          "Challenging terrain",
          "Overnight camping",
        ],
      },
      {
        day: 7,
        title: "Inca Sites Day",
        description:
          "Visit multiple impressive Inca ruins as you continue along the trail, with spectacular views of the Andes mountains.",
        activities: [
          "Multiple archaeological sites",
          "Cloud forest exploration",
          "Incredible mountain vistas",
          "Overnight camping",
        ],
      },
      {
        day: 8,
        title: "Machu Picchu",
        description:
          "Early morning hike to the Sun Gate for sunrise over Machu Picchu. Enjoy a comprehensive tour of the citadel before taking the train to Aguas Calientes.",
        activities: [
          "Sunrise at Sun Gate",
          "Guided tour of Machu Picchu",
          "Free time to explore",
          "Train to Aguas Calientes",
        ],
      },
      {
        day: 9,
        title: "Return to Cusco and Departure",
        description:
          "Return to Cusco by train and bus. Depending on your flight schedule, you may have time for last-minute shopping before your departure.",
        activities: [
          "Train to Ollantaytambo",
          "Bus to Cusco",
          "Departure assistance",
        ],
      },
    ],
    inclusions: [
      "8 nights accommodation (3 in hotels, 3 camping, 2 in mountain lodges)",
      "Professional English-speaking guides",
      "All transportation within Peru",
      "Entrance fees to all sites",
      "All meals during the trek",
      "Porters to carry camping equipment",
      "Tents and sleeping mats",
      "First-aid kit and oxygen",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Sleeping bag (can be rented)",
      "Personal expenses",
      "Tips for guides and porters",
      "Meals in Lima and Cusco",
    ],
    availableDates: [
      { id: 1, date: "June 15, 2025", spotsLeft: 6, isAvailable: true },
      { id: 2, date: "July 5, 2025", spotsLeft: 2, isAvailable: true },
      { id: 3, date: "July 25, 2025", spotsLeft: 8, isAvailable: true },
      { id: 4, date: "August 12, 2025", spotsLeft: 0, isAvailable: false },
      { id: 5, date: "September 3, 2025", spotsLeft: 4, isAvailable: true },
      { id: 6, date: "September 24, 2025", spotsLeft: 8, isAvailable: true },
    ],
    reviews: [
      {
        id: 1,
        user: "Michael R.",
        date: "March 2025",
        rating: 5,
        content:
          "This trek was everything I hoped for and more. Our guide, Carlos, was incredibly knowledgeable about Inca history and local flora and fauna. The views were spectacular, and the final approach to Machu Picchu through the Sun Gate was a moment I'll never forget. The food was surprisingly good considering we were camping, and the porters were amazing. Highly recommend!",
      },
      {
        id: 2,
        user: "Jennifer T.",
        date: "February 2025",
        rating: 5,
        content:
          "An incredible experience from start to finish. The organization was flawless, the guides were passionate and informative, and the scenery was breathtaking. The trek is challenging but absolutely worth it for the reward of seeing Machu Picchu at sunrise. Make sure to train before you go!",
      },
      {
        id: 3,
        user: "David L.",
        date: "January 2025",
        rating: 4,
        content:
          "Amazing experience overall. The trek is physically demanding but the guides ensure everyone manages at their own pace. One star off for the rather basic camping facilities, but I understand the limitations of the trail. The food was excellent and the views were worth every step.",
      },
      {
        id: 4,
        user: "Sarah P.",
        date: "December 2024",
        rating: 5,
        content:
          "The Machu Picchu Explorer tour exceeded all my expectations. The guides were incredibly knowledgeable and patient, the food was delicious, and the organization was perfect. I was worried about the altitude but the acclimatization days in Cusco helped tremendously. The final day witnessing sunrise at Machu Picchu was magical!",
      },
      {
        id: 5,
        user: "James K.",
        date: "November 2024",
        rating: 5,
        content:
          "This was the highlight of our South America trip. The trek is challenging but so rewarding. Our guide Manuel had an encyclopedic knowledge of Inca history and made the experience educational as well as beautiful. The porters and chef were incredible - still can't believe the meals they prepared on the trail!",
      },
    ],
    faqs: [
      {
        question: "How difficult is the trek?",
        answer:
          "The Inca Trail is considered a moderate to challenging trek. The most difficult day is Day 2 when you climb Dead Woman's Pass. However, with proper preparation and acclimatization, most reasonably fit people can complete it. We pace the trek appropriately and guides are trained to assist all hikers.",
      },
      {
        question: "What should I pack?",
        answer:
          "Essential items include: broken-in hiking boots, warm layers (temperatures vary drastically), rain gear, sun protection, water bottles, personal medications, headlamp, and toiletries. A detailed packing list will be provided after booking.",
      },
      {
        question: "How do I prepare for high altitude?",
        answer:
          "We include acclimatization days in Cusco before the trek. Additionally, we recommend arriving in Peru at least 2-3 days before the trek, staying hydrated, avoiding alcohol, and considering altitude medication after consulting your doctor.",
      },
      {
        question: "What about bathroom facilities on the trail?",
        answer:
          "There are basic toilet facilities at campsites along the trail. During hiking days, there are occasional primitive facilities. Our team also brings portable toilet tents for your comfort.",
      },
      {
        question: "Do I need a permit for the Inca Trail?",
        answer:
          "Yes, permits are required and strictly limited. They often sell out months in advance, especially for the peak season (May-September). We secure your permit when you book, which is why early reservation is essential.",
      },
      {
        question: "What if I can't get an Inca Trail permit?",
        answer:
          "We offer excellent alternative treks such as the Salkantay Trek or Lares Trek, which also culminate with a visit to Machu Picchu but don't require the limited permits of the classic Inca Trail.",
      },
    ],
    relatedTours: [
      {
        id: 6,
        name: "Swiss Alps Escape",
        location: "Switzerland",
        image: "../Santorini.jpg",
        price: 3299,
        duration: 8,
        rating: 4.8,
      },
      {
        id: 5,
        name: "Tokyo Urban Adventure",
        location: "Japan",
        image: "../tokyo.jpg",
        price: 1999,
        duration: 6,
        rating: 4.6,
      },
      {
        id: 7,
        name: "Amalfi Coast Expedition",
        location: "Italy",
        image: "../YellowstonePark.jpg",
        price: 2399,
        duration: 7,
        rating: 4.7,
      },
    ],
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Calculate average rating from reviews
  const calculateAverageRating = (reviews) => {
    const sum = reviews.reduce((total, review) => total + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= Math.round(rating)
                ? "text-amber-400 fill-amber-400"
                : "text-slate-600"
            }`}
          />
        ))}
      </div>
    );
  };

  const handleDateSelect = (dateId) => {
    setSelectedDate(dateId);
  };

  const handleGuestsChange = (e) => {
    setSelectedGuests(parseInt(e.target.value));
  };
  console.log(tour.images);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      {/* Back Button */}
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <motion.button
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center text-gray-600 hover:text-amber-500 transition-colors"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Tours
        </motion.button>
      </div>

      {/* Hero Section */}
      <div className="relative">
        {/* Main Image */}
        <div className="h-96 lg:h-[500px] overflow-hidden relative">
          <motion.img
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={tour.images[0]}
            alt={tour.name}
            className="w-full h-full object-fit"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-transparent to-transparent"></div>
        </div>

        {/* Tour Name and Location */}
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="absolute bottom-8 left-4 right-4 md:left-4 md:right-auto md:bottom-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="inline-flex items-center mb-3 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm border border-gray-200">
                <Compass className="w-4 h-4 text-amber-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  {tour.category === "mountain"
                    ? "Mountain Adventure"
                    : tour.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2 md:max-w-3xl">
                {tour.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-500 mr-1" />
                  <span className="text-gray-700">{tour.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-amber-500 mr-1" />
                  <span className="text-gray-700">{tour.duration} days</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-400 mr-1" />
                  <span className="text-gray-700">
                    {tour.rating} ({tour.review} reviews)
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Gallery Thumbnails */}
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="absolute bottom-[-60px] right-4 hidden md:flex space-x-3">
            {tour.images.slice(1, 4).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg hover:border-amber-500 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${tour.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="w-24 h-24 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-gray-200 flex items-center justify-center cursor-pointer hover:border-amber-500 transition-all"
            >
              <div className="text-center">
                <span className="block text-amber-500 font-bold">+12</span>
                <span className="text-xs text-gray-500">more</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Tour Details */}
          <div className="w-full lg:w-8/12">
            {/* Navigation Tabs */}
            <div className="mb-8 border-b border-gray-200">
              <div className="flex overflow-x-auto no-scrollbar gap-4">
                {["overview", "itinerary", "included", "reviews", "faq"].map(
                  (tab) => (
                    <button
                      key={tab}
                      className={`pb-3 px-1 min-w-fit font-medium whitespace-nowrap transition-colors ${
                        activeTab === tab
                          ? "text-amber-500 border-b-2 border-amber-500"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Tab Content */}
            <div>
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Tour Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {tour.longDescription}
                  </p>

                  {/* Tour Highlights */}
                  <div className="mt-8 mb-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Tour Highlights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {tour.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mt-1 mr-3 bg-amber-100 rounded-full p-1">
                            <Check className="w-4 h-4 text-amber-500" />
                          </div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tour Map */}
                  <div className="mt-8 mb-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Tour Map
                    </h3>
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <Globe className="w-16 h-16 text-amber-300 mx-auto mb-4" />
                        <p className="text-gray-500">Interactive tour map</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Itinerary Tab */}
              {activeTab === "itinerary" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Tour Itinerary
                  </h2>

                  <div className="space-y-8">
                    {tour.itinerary.map((day, index) => (
                      <motion.div
                        key={day.day}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 border-l-2 border-gray-200 pb-8"
                      >
                        {/* Day indicator */}
                        <div className="absolute left-[-18px] top-0 w-9 h-9 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center">
                          <span className="text-amber-500 font-bold">
                            {day.day}
                          </span>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {day.title}
                          </h3>
                          <p className="text-gray-700 mb-4">
                            {day.description}
                          </p>

                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-amber-500 mb-2">
                              Today's Activities:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {day.activities.map((activity, idx) => (
                                <div key={idx} className="flex items-center">
                                  <Check className="w-4 h-4 text-teal-500 mr-2" />
                                  <span className="text-gray-700 text-sm">
                                    {activity}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Included Tab */}
              {activeTab === "included" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* What's Included */}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        What's Included
                      </h2>
                      <div className="space-y-3">
                        {tour.inclusions.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <div className="mt-1 mr-3 bg-green-100 rounded-full p-1">
                              <Check className="w-4 h-4 text-green-500" />
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What's Not Included */}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        What's Not Included
                      </h2>
                      <div className="space-y-3">
                        {tour.exclusions.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <div className="mt-1 mr-3 bg-red-100 rounded-full p-1">
                              <X className="w-4 h-4 text-red-500" />
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Important Information */}
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Essential Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex items-center mb-3">
                          <Compass className="w-5 h-5 text-amber-500 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-900">
                            Tour Difficulty
                          </h3>
                        </div>
                        <p className="text-gray-700">
                          Moderate to challenging. Requires reasonable fitness
                          and some hiking experience. The highest point is
                          4,215m (13,828ft).
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex items-center mb-3">
                          <AlertCircle className="w-5 h-5 text-amber-500 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-900">
                            Health & Safety
                          </h3>
                        </div>
                        <p className="text-gray-700">
                          COVID-19 safety measures in place. Medical kit carried
                          by guides. Mandatory travel insurance required.
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex items-center mb-3">
                          <Luggage className="w-5 h-5 text-amber-500 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-900">
                            Packing Essentials
                          </h3>
                        </div>
                        <p className="text-gray-700">
                          Hiking boots, layered clothing, rain gear, sleeping
                          bag (rentable), headlamp, water bottle, sun
                          protection.
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex items-center mb-3">
                          <Info className="w-5 h-5 text-amber-500 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-900">
                            Special Requirements
                          </h3>
                        </div>
                        <p className="text-gray-700">
                          Passport valid for 6 months, Inca Trail permit
                          (secured at booking), travel insurance, moderate
                          fitness level.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accommodation & Meals */}
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Accommodation & Meals
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                        <Coffee className="w-8 h-8 text-amber-500 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Accommodation
                        </h3>
                        <p className="text-gray-700 text-sm">
                          3 nights in comfortable hotels, 3 nights camping
                          (tents provided), 2 nights in mountain lodges.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                        <Utensils className="w-8 h-8 text-amber-500 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Meals
                        </h3>
                        <p className="text-gray-700 text-sm">
                          All meals during trek prepared by our chef. Breakfast
                          at hotels. Special diets accommodated with advance
                          notice.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                        <Car className="w-8 h-8 text-amber-500 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Transportation
                        </h3>
                        <p className="text-gray-700 text-sm">
                          Airport transfers, private transport to trailhead,
                          train from Aguas Calientes, return transport to Cusco.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Reviews Tab */}
              {activeTab === "reviews" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Customer Reviews
                    </h2>
                    <div className="flex items-center">
                      <div className="mr-2">
                        {renderStars(calculateAverageRating(tour.reviews))}
                      </div>
                      <span className="text-gray-700">
                        {calculateAverageRating(tour.reviews)} (
                        {tour.reviews.length} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {(showAllReviews
                      ? tour.reviews
                      : tour.reviews.slice(0, 3)
                    ).map((review) => (
                      <div
                        key={review.id}
                        className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                              <User className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {review.user}
                              </h4>
                              <div className="text-sm text-gray-500">
                                {review.date}
                              </div>
                            </div>
                          </div>
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.content}</p>
                      </div>
                    ))}
                  </div>

                  {/* Show More Reviews Button */}
                  {tour.reviews.length > 3 && (
                    <button
                      className="mt-6 block w-full py-3 text-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 hover:border-amber-500 transition-colors"
                      onClick={() => setShowAllReviews(!showAllReviews)}
                    >
                      {showAllReviews
                        ? "Show Less Reviews"
                        : `Show All ${tour.reviews.length} Reviews`}
                    </button>
                  )}

                  {/* Write Review Button */}
                  <button className="mt-8 flex items-center justify-center w-full py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-400 transition-colors">
                    <PenLine className="w-5 h-5 mr-2" />
                    Write a Review
                  </button>
                </motion.div>
              )}

              {/* FAQ Tab */}
              {activeTab === "faq" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    {(showAllFaqs ? tour.faqs : tour.faqs.slice(0, 3)).map(
                      (faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                        >
                          <h3 className="text-lg font-semibold text-amber-500 mb-2">
                            {faq.question}
                          </h3>
                          <p className="text-gray-700">{faq.answer}</p>
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* Show More FAQs Button */}
                  {tour.faqs.length > 3 && (
                    <button
                      className="mt-6 block w-full py-3 text-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 hover:border-amber-500 transition-colors"
                      onClick={() => setShowAllFaqs(!showAllFaqs)}
                    >
                      {showAllFaqs
                        ? "Show Less FAQs"
                        : `Show All ${tour.faqs.length} FAQs`}
                    </button>
                  )}

                  {/* Contact Support */}
                  <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <MessageCircle className="w-10 h-10 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Have more questions?
                        </h3>
                        <p className="text-gray-700 mb-4">
                          Our travel experts are here to help you with any
                          questions about this tour.
                        </p>
                        <button className="inline-flex items-center px-5 py-2 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-lg transition-colors">
                          Contact Support
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Related Tours */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                You May Also Like
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tour.relatedTours.map((relatedTour) => (
                  <motion.div
                    key={relatedTour.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:border-amber-500 transition-all"
                  >
                    <div className="relative h-44">
                      <img
                        src={relatedTour.image}
                        alt={relatedTour.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-amber-500 text-white font-bold px-3 py-1 rounded-full text-sm">
                        {formatPrice(relatedTour.price)}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        {relatedTour.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        <MapPin className="w-4 h-4 text-amber-500 mr-1" />
                        <span className="text-gray-600 text-sm">
                          {relatedTour.location}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-gray-500 mr-1" />
                          <span className="text-gray-600 text-sm">
                            {relatedTour.duration} days
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-400 mr-1" />
                          <span className="text-gray-600 text-sm">
                            {relatedTour.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Booking Box */}
          <div className="w-full lg:w-4/12">
            <div className="sticky top-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg"
              >
                {/* Price Header */}
                <div className="bg-gradient-to-r from-amber-600 to-amber-500 p-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white">
                      {formatPrice(tour.price)}
                    </span>
                    <span className="ml-2 text-white/80">per person</span>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="p-6">
                  {/* Date Selection */}
                  <div className="mb-5">
                    <label className="block text-gray-700 mb-2">
                      Select Date
                    </label>
                    <div className="space-y-3">
                      {tour.availableDates.map((date) => (
                        <div
                          key={date.id}
                          className={`flex items-center justify-between p-3 rounded-lg border transition-colors cursor-pointer ${
                            selectedDate === date.id
                              ? "border-amber-500 bg-amber-50"
                              : date.isAvailable
                              ? "border-gray-200 hover:border-gray-300"
                              : "border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed"
                          }`}
                          onClick={() =>
                            date.isAvailable && handleDateSelect(date.id)
                          }
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-4 h-4 rounded-full mr-3 ${
                                selectedDate === date.id
                                  ? "bg-amber-500"
                                  : "border border-gray-400"
                              }`}
                            >
                              {selectedDate === date.id && (
                                <Check className="w-4 h-4 text-white" />
                              )}
                            </div>
                            <span className="text-gray-700">{date.date}</span>
                          </div>
                          <div>
                            {date.isAvailable ? (
                              <span className="text-sm text-gray-500">
                                {date.spotsLeft} spots left
                              </span>
                            ) : (
                              <span className="text-sm text-red-500">
                                Sold Out
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Guests Selection */}
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">
                      Number of Guests
                    </label>
                    <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-2">
                      <Users className="text-gray-500 ml-2 mr-3" />
                      <select
                        className="bg-transparent text-gray-700 flex-grow focus:outline-none"
                        value={selectedGuests}
                        onChange={handleGuestsChange}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num} className="bg-white">
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Price Calculation */}
                  <div className="border-t border-gray-200 pt-5 mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">
                        {formatPrice(tour.price)} x {selectedGuests}
                      </span>
                      <span className="text-gray-700">
                        {formatPrice(tour.price * selectedGuests)}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Service fee</span>
                      <span className="text-gray-700">
                        {formatPrice(tour.price * selectedGuests * 0.1)}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold mt-4 text-lg">
                      <span className="text-gray-900">Total</span>
                      <span className="text-amber-500">
                        {formatPrice(tour.price * selectedGuests * 1.1)}
                      </span>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <button
                    className={`w-full py-4 rounded-lg font-bold text-lg transition-colors ${
                      selectedDate
                        ? "bg-amber-500 hover:bg-amber-400 text-white"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!selectedDate}
                  >
                    Book Now
                  </button>

                  {/* Not Ready Banner */}
                  <div className="mt-4 flex items-center justify-center text-slate-400 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    Not ready to book? Add to wishlist
                  </div>
                </div>

                {/* Share and Save */}
                <div className="border-t border-gray-200 p-4">
                  <div className="flex justify-between">
                    <button
                      className="flex items-center text-gray-600 hover:text-amber-500 transition-colors"
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart
                        className={`w-5 h-5 mr-2 ${
                          isFavorite ? "fill-amber-500 text-amber-500" : ""
                        }`}
                      />
                      Save
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-amber-500 transition-colors">
                      <Share className="w-5 h-5 mr-2" />
                      Share
                    </button>
                  </div>
                </div>

                {/* Urgent Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 bg-teal-50 border border-teal-100 rounded-lg p-4 flex items-start"
                >
                  <div className="mt-1 mr-3 bg-teal-100 rounded-full p-1">
                    <AlertCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-teal-700 mb-1">
                      Limited availability
                    </h4>
                    <p className="text-gray-700 text-sm">
                      This tour is in high demand. We recommend booking at least
                      6 months in advance.
                    </p>
                  </div>
                </motion.div>

                {/* Weather Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4"
                >
                  <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                    <Mountain className="w-5 h-5 text-amber-500 mr-2" />
                    Best Season to Visit
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    The dry season (May to October) offers the best hiking
                    conditions. June to August are the most popular months, with
                    clear skies and moderate temperatures.
                  </p>
                  <div className="flex justify-between">
                    <div className="text-center p-2">
                      <div className="text-amber-500 font-medium">MAY</div>
                      <div className="text-xs text-gray-500">Good</div>
                    </div>
                    <div className="text-center p-2 bg-amber-50 rounded-lg border border-amber-100">
                      <div className="text-amber-500 font-medium">JUN</div>
                      <div className="text-xs text-gray-500">Best</div>
                    </div>
                    <div className="text-center p-2 bg-amber-50 rounded-lg border border-amber-100">
                      <div className="text-amber-500 font-medium">JUL</div>
                      <div className="text-xs text-gray-500">Best</div>
                    </div>
                    <div className="text-center p-2 bg-amber-50 rounded-lg border border-amber-100">
                      <div className="text-amber-500 font-medium">AUG</div>
                      <div className="text-xs text-gray-500">Best</div>
                    </div>
                    <div className="text-center p-2">
                      <div className="text-amber-500 font-medium">SEP</div>
                      <div className="text-xs text-gray-500">Good</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-50 mb-4">
                Ready for your adventure?
              </h2>
              <p className="text-slate-300 mb-6">
                Join thousands of travelers who have experienced the magic of
                Machu Picchu with our expert-guided tours.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium px-6 py-3 rounded-lg transition-colors">
                  Book This Tour
                </button>
                <button className="border border-slate-600 hover:border-amber-500 text-slate-300 hover:text-amber-500 px-6 py-3 rounded-lg transition-colors">
                  Explore All Tours
                </button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 max-w-md">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <Mountain className="w-6 h-6 text-teal-500" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-pink-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-50 mb-2">
                  Join our community
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  Get travel tips, destination inspiration, and exclusive offers
                  delivered to your inbox.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-l-lg flex-grow text-slate-300 focus:outline-none focus:border-amber-500"
                  />
                  <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium px-4 py-2 rounded-r-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
