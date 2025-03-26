import React, { useState, useEffect } from "react";
import "../App.css"; // Ensure correct path
import logoStamp from "../Images/logoStamp.png"; // Ensure correct path
import email from "../Images/email.png"; // Ensure correct path
import call from "../Images/call.png"; // Ensure correct path
import "@fortawesome/fontawesome-free/css/all.min.css";
import images from "../Images/images.png"; // Ensure correct path

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
    setCloseTimeout(timeout);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      {/* Top Bar - Made Responsive */}
      <div className="absolute w-full bg-transparent px-4 md:px-10 pt-6 pb-2 text-white text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 md:mb-0">
            <span className="flex items-center">
              <img className="h-5 w-5 mr-2" src={email} alt="Email" />
              <span className="text-xs md:text-sm">info@aepower.pk</span>
            </span>
            <span className="flex items-center">
              <img className="h-5 w-5 mr-2" src={call} alt="Call" />
              <span className="text-xs md:text-sm">0304-111-0767</span>
            </span>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook text-blue-600 text-2xl"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube text-red-600 text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-blue-500 text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-pink-500 text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isScrolled
            ? "fixed top-0 left-0 w-full rounded-none shadow-lg backdrop-blur-md border border-gray-300"
            : "relative w-[95%] mx-auto mt-28 md:mt-16 lg:mt-20 rounded-xl border border-gray-300"
        } bg-transparent p-4 z-10`}
      >
        <div className="py-3 flex justify-between items-center">
          {/* Logo */}
          <img src={logoStamp} alt="AE Power Logo" className="h-8 md:h-12" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Navigation Links - Desktop */}
          <ul
            className={`hidden md:flex space-x-4 lg:space-x-6 text-black font-medium`}
          >
            {[
              { name: "HOME", items: ["About", "News"] },
              {
                name: "ABOUT",
                items: ["Products", "CEO Speech"],
              },
              {
                name: "Service",
                items: ["ABC", "DEF", "GHI"],
              },
            ].map((menu, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="hover:text-blue-500 text-black flex items-center">
                  {menu.name} <span className="ml-1">▸</span>
                </button>
                {openDropdown === menu.name && (
                  <ul
                    className="absolute left-0 mt-2 w-44 bg-blue-400 text-black shadow-lg rounded-md py-2"
                    onMouseEnter={() => clearTimeout(closeTimeout)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menu.items.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <a href="#" className="hover:text-blue-500">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>

          {/* Navigation Links - Mobile */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl mt-2`}
          >
            <ul className="py-2">
              {[
                "HOME",
                "ABOUT",
                "Service",
                "Portfolio",
                "Team",
                "Testimonial",
                "Blog",
                "Contact",
              ].map((item, index) => (
                <li key={index} className="px-4 py-2">
                  <a href="#" className="block hover:text-red-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action Button */}
          <a
            href="#"
            className="hidden md:inline-block bg-blue-400 text-white px-3 md:px-5 py-1.5 md:py-2 text-sm md:text-base rounded-full font-medium border-2 border-blue-200 transition duration-500 ease-in-out hover:bg-black hover:border-red-500 hover:text-red-500"
          >
            Components
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
