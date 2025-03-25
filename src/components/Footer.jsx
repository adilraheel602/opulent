import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
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
    <>
      <div>
        {/* <div className="w-full text-center py-10">
          <h2 className="text-3xl font-bold mb-6">Banking Partners</h2>
          <div className="relative flex justify-center items-center overflow-hidden">
            <motion.div
              className="flex gap-8"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {bankingPartners.map((partner, i) => (
                <img
                  key={i}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 object-contain"
                />
              ))}
            </motion.div>
            <button
              className="absolute left-0 bg-white p-2 rounded-full"
              onClick={prevSlide}
            >
              ‹
            </button>
            <button
              className="absolute right-0 bg-white p-2 rounded-full"
              onClick={nextSlide}
            >
              ›
            </button>
          </div>

          <div className="bg-black text-white py-10 mt-10 flex flex-col md:flex-row justify-around">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-500 text-3xl" />
              <div>
                <p className="font-bold">Support & Email</p>
                <p>info@opulent-elite.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-red-500 text-3xl" />
              <div>
                <p className="font-bold">Customer Support</p>
                <p>0304-111-0767</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-500 text-3xl" />
              <div>
                <p className="font-bold">Corporate Office</p>
                <p>38 Babar Block, New Garden, Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Logo & Description */}
            <div>
              <h2 className="text-lg font-bold uppercase mb-4 border-b border-gray-700 pb-2">
                About Us
              </h2>
              <img src={logoStamp} alt="AE Power Logo" className="w-40 mb-4" />
              <p className="text-gray-400 text-sm">
                Opulent Group of Companies is a leading textile company that
                provides high-quality products and services to its customers.
              </p>
              <p>
                Copyright 2025 © <span>Opulent Group of Companies</span>
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-black text-white p-6">
              <h2 className="text-lg font-bold uppercase mb-4 border-b border-gray-700 pb-2">
                Useful Links
              </h2>
              <div className="grid grid-cols-2 gap-2 text-gray-300">
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
                <a href="#" className="hover:text-white">
                  Team
                </a>
                <a href="#" className="hover:text-white">
                  Service
                </a>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
                <a href="#" className="hover:text-white">
                  Portfolio
                </a>
                <a href="#" className="hover:text-white">
                  Faq
                </a>
                <a href="#" className="hover:text-white">
                  Testimonial
                </a>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact us and we'll get back to you within 24 hours.
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    38 Babar Block New Garden Town Lahore
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    info@opulent-elite.com
                  </a>
                </li>
                {/* Social Icons */}
                <div className="flex justify-center mt-10 space-x-6 text-gray-400 text-lg">
                  <a href="#" className="hover:text-white">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="hover:text-white">
                    <FaYoutube />
                  </a>
                  <a href="#" className="hover:text-white">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="hover:text-white">
                    <FaInstagram />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-red-600 text-center py-4 mt-10">
          <p className="text-sm">
            Copyright © 2024 Solor. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
