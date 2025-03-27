import React from "react";
import logo from "../Images/logostamp.png";
import emailIcon from "../Images/emailIcon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
        {/* Company Info Section */}
        <div className="space-y-4">
          <img
            src={logo}
            alt="Logo"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
            Opulent Group of Companies is a leading textile company that
            provides high-quality products and services to its customers.
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            Get Notified
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Contact us and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
            <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden w-full sm:w-auto">
              <div className="flex items-center px-3 py-2">
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="w-5 h-4 sm:w-6 sm:h-4"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-3 sm:px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2BC0CD] text-sm sm:text-base min-w-[200px]"
              />
              <button className="bg-[#2BC0CD] text-white px-4 sm:px-6 py-2 font-semibold text-sm sm:text-base hover:bg-[#2399A2] transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm sm:text-base mt-8 sm:mt-10 border-t border-gray-700 pt-4 sm:pt-6">
        &copy; Copyright Opulent House {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
