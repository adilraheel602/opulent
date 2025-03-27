import React, { useState, useEffect } from "react";
import "../App.css"; // Ensure correct path
import logoStamp from "../Images/logoStamp.png"; // Ensure correct path
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom"; // Ensure correct path

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu) => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpenDropdown(null), 300);
    setCloseTimeout(timeout);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div
        className={`transition-all duration-300 ease-in-out bg-transparent p-4 z-10 ${
          isScrolled
            ? "fixed top-0 left-0 w-full rounded-none shadow-lg backdrop-blur-md border border-gray-300"
            : "relative w-[95%] mx-auto mt-16 md:mt-10 lg:mt-12 rounded-xl border border-gray-300"
        }`}
      >
        <div className="py-3 flex justify-between items-center">
          <img src={logoStamp} alt="AE Power Logo" className="h-8 md:h-12" />
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

          <ul className="hidden md:flex space-x-4 lg:space-x-6 text-white font-medium">
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
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="hover:text-[#2BC0CD] text-white flex items-center">
                  {item} {index < 3 && <span className="ml-1">▸</span>}
                </button>
                {openDropdown === item && index < 3 && (
                  <ul
                    className="absolute left-0 mt-2 w-44 bg-[#2BC0CD] text-black shadow-lg rounded-md py-2"
                    onMouseEnter={() => clearTimeout(closeTimeout)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {["Option 1", "Option 2", "Option 3"].map(
                      (subItem, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-white"
                          >
                            {subItem}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>

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

          <Link
            to="/login"
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
