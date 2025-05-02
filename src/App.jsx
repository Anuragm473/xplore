import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";

export default function AppLayout() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
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
                fixedDeparture:pkg?.fixedDeparture,
                pax:pkg.pax,
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/tours" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen">
      <header>
        <NavBar packages={packages} isScrolled={isScrolled} navLinks={navLinks} navbarOpen={navbarOpen} />
      </header>
      <main>
        <HomePage packages={packages} setIsScrolled={setIsScrolled}/>
      </main>
    </div>
  );
}
