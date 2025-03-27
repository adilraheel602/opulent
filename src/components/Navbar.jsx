import React, { useState, useEffect } from "react";
import "../App.css"; // Ensure correct path
import logoStamp from "../Images/logoStamp.png"; // Ensure correct path
import email from "../Images/email.png"; // Ensure correct path
import call from "../Images/call.png"; // Ensure correct path
import "@fortawesome/fontawesome-free/css/all.min.css";
import images from "../Images/images.png"; // Ensure correct path
import { Link } from "react-router-dom"; // Ensure correct path

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
      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isScrolled
            ? "fixed top-0 left-0 w-full rounded-none shadow-lg backdrop-blur-md border border-gray-300"
            : "relative w-[95%] mx-auto mt-16 md:mt-10 lg:mt-12 rounded-xl border border-gray-300"
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
            className={`hidden md:flex space-x-4 lg:space-x-6 text-white font-medium`}
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
                <button className="hover:text-[#2BC0CD] text-white flex items-center">
                  {menu.name} <span className="ml-1">▸</span>
                </button>
                {openDropdown === menu.name && (
                  <ul
                    className="absolute left-0 mt-2 w-44 bg-[#2BC0CD] text-black shadow-lg rounded-md py-2"
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
              <a href="#" className="hover:text-[#2BC0CD]">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2BC0CD]">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2BC0CD]">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2BC0CD]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2BC0CD]">
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
                  <a href="#" className="block hover:text-[#2BC0CD]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action Button */}
          <Link
            href="/login"
            to="login"
            className="hidden md:inline-block bg-[#2BC0CD] text-white px-3 md:px-5 py-1.5 md:py-2 text-sm md:text-base rounded-full font-medium border-2 border-white transition duration-500 ease-in-out hover:bg-white hover:border-[#2BC0CD] hover:text-[#2BC0CD]"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
