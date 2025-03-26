import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logoStamp from "../Images/logoStamp.png";

const bankingPartners = [
  { name: "Bank Alfalah", logo: "/bank-alfalah.png" },
  { name: "Allied Bank", logo: "/allied-bank.png" },
  { name: "Meezan Bank", logo: "/meezan-bank.png" },
  { name: "Bank of Punjab", logo: "/bop.png" },
  { name: "JS Bank", logo: "/js-bank.png" },
];

const Footer = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % bankingPartners.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) => (prev - 1 + bankingPartners.length) % bankingPartners.length
    );
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold uppercase mb-4 border-b border-gray-700 pb-2">
              About Us
            </h2>
            <img
              src={logoStamp}
              alt="AE Power Logo"
              className="w-32 sm:w-40 mb-4"
            />
            <p className="text-gray-400 text-sm sm:text-base">
              Opulent Group of Companies is a leading textile company that
              provides high-quality products and services to its customers.
            </p>
            <p className="text-sm sm:text-base">
              Copyright 2025 ©{" "}
              <span className="hover:text-red-500 transition-colors">
                Opulent Group of Companies
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-black text-white">
            <h2 className="text-lg font-bold uppercase mb-4 border-b border-gray-700 pb-2">
              Useful Links
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-gray-300">
              {[
                { to: "/about", text: "About" },
                { to: "#", text: "Team" },
                { to: "#", text: "Service" },
                { to: "#", text: "Blog" },
                { to: "#", text: "Portfolio" },
                { to: "#", text: "FAQ" },
                { to: "#", text: "Testimonial" },
                { to: "#", text: "Privacy Policy" },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="hover:text-red-500 transition-colors duration-300 text-sm sm:text-base"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase mb-4 border-b border-gray-700 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-red-500" />
                <span className="text-sm sm:text-base">
                  38 Babar Block New Garden Town Lahore
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="flex-shrink-0 text-red-500" />
                <a
                  href="mailto:info@opulent-elite.com"
                  className="text-sm sm:text-base hover:text-red-500 transition-colors"
                >
                  info@opulent-elite.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="flex-shrink-0 text-red-500" />
                <a
                  href="tel:0304-111-0767"
                  className="text-sm sm:text-base hover:text-red-500 transition-colors"
                >
                  0304-111-0767
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex justify-start space-x-6 pt-4">
              {[
                { Icon: FaFacebookF, href: "#" },
                { Icon: FaYoutube, href: "#" },
                { Icon: FaLinkedinIn, href: "#" },
                { Icon: FaInstagram, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="text-xl sm:text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-red-600 text-center py-3 sm:py-4">
        <p className="text-sm sm:text-base">
          Copyright © {new Date().getFullYear()} Solor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
