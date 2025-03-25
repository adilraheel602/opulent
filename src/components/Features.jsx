import React from "react";
import { motion } from "framer-motion";
import writeup from "../Images/writeup.png";
import { useState } from "react";
import give from "../Images/give.jpg";
import call from "../Images/call.png";
import Video from "./Video";
import FAQSection from "./FAQSection";
import Imtiaz from "../Images/ImtiazAhmad.jpg";
import Kamran from "../Images/KamranAhsen.jpg";
import Ahmad from "../Images/AhmadBashir.jpg";
import awardIcon from "../Images/awardIcon.png";
import client from "../Images/client.png";
import orders from "../Images/orders.png";
import testimonial from "../Images/testimonial.png";
import blog01 from "../Images/blog01.jpg";
import blog02 from "../Images/blog02.jpg";
import blog03 from "../Images/blog03.jpg";

const newsData = [
  {
    title: "Sustainable Textiles: Paving the Way for a Greener Future",
    description:
      "In an era where environmental responsibility is paramount, the textile industry is undergoing a transformative shift toward sustainability. Eco-friendly practices are no longer just a passing trend but a necessity that drives innovation and quality in production. In this blog, we explore...",
    image: blog01,
    link: "/blogs/sustainable-textiles", // Updated link
  },
  {
    title: "Quality Assurance: Ensuring Excellence in Every Thread",
    description:
      "Quality is the cornerstone of every successful textile export, representing a commitment to excellence and reliability that customers worldwide depend on. As global markets become increasingly competitive, maintaining stringent quality standards is essential for building trust and ...",
    image: blog02,
    link: "/blogs/quality-assurance", // Updated link
  },
  {
    title:
      "Innovations in Textile Manufacturing: Technology Transforming Tradition",
    description:
      "The textile industry, deeply rooted in tradition, is now being redefined by groundbreaking technological innovations that blend heritage with modern efficiency. From state-of-the-art machinery to digital design tools, technology is revolutionizing every step of the manufacturing ...",
    image: blog03,
    link: "/blogs/textile-innovations", // Updated link
  },
];

const stats = [
  { icon: <img src={awardIcon} />, value: "100+", label: "Awards Won" },
  { icon: <img src={client} />, value: "349+", label: "Happy Clients" },
  { icon: <img src={orders} />, value: "100+", label: "Orders Completed" },
  { icon: <img src={testimonial} />, value: "999+", label: "Testimonials" },
];

const features = [
  {
    id: "01",
    title: "Imtiaz Ahmad",
    description:
      "Imtiaz Ahmad is the founder of Opulent Group of Companies. He is a seasoned businessman with a passion for innovation and excellence.",
    icon: Imtiaz,
  },
  {
    id: "02",
    title: "Kamran Ahsen",
    description:
      "Kamran Ahsen is the CEO of Opulent Group of Companies. He is a seasoned businessman with a passion for innovation and excellence.",
    icon: Kamran,
  },
  {
    id: "03",
    title: "Ahmad Bashir",
    description:
      "Ahmad Bashir is the CTO of Opulent Group of Companies. He is a seasoned businessman with a passion for innovation and excellence.",
    icon: Ahmad,
  },
];

const Features = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Team Section */}
      <section className="py-8 sm:py-16 bg-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-10"
        >
          <h3 className="text-blue-500 uppercase text-xl sm:text-2xl font-bold tracking-wide">
            OPULENT
          </h3>
          <h2 className="text-2xl sm:text-3xl mt-3 sm:mt-4 font-bold text-gray-500">
            OUR TEAM
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-red-500 text-white p-4 sm:p-6 rounded-2xl shadow-lg w-full max-w-sm mx-auto"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-24 h-24 sm:w-30 sm:h-30 mb-3 sm:mb-4 object-cover rounded-full mx-auto"
              />
              <div className="absolute -top-3 right-3 bg-black text-white rounded-full px-3 py-1 text-sm font-bold">
                {feature.id}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-white mt-2">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-8 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl sm:text-5xl">{stat.icon}</div>
              <h2 className="text-2xl sm:text-3xl font-bold mt-2 sm:mt-3 text-black">
                {stat.value}
              </h2>
              <p className="text-base sm:text-lg text-black">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <Video />

      {/* News Feed Section */}
      <section className="py-8 sm:py-12 bg-gray-100 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">
          News Feed
        </h2>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">
          Our Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {newsData.map((news, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group h-[400px] sm:h-[450px]"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 bg-white bg-opacity-90">
                <h3 className="text-base sm:text-lg font-bold line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                  {news.description}
                </p>
              </div>
              <motion.a
                href={news.link}
                className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 text-white rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Read More
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <div className="px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center bg-gray-100 justify-between rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
          {/* Left Image Section */}
          <div className="w-full sm:w-28 h-28 sm:h-full flex-shrink-0">
            <img
              src={give}
              alt="Support"
              className="ml-12 w-full h-full object-cover"
            />
          </div>

          {/* Contact Info Section */}
          <div className="w-full sm:w-3/4 p-6 sm:p-10 text-gray-900">
            {/* Heading with Icon */}
            <div className="flex items-center mb-4 sm:mb-5 gap-4">
              <div className="bg-white p-3 sm:p-4 rounded-full shadow-md flex items-center justify-center">
                <img
                  src={call}
                  alt="Phone Icon"
                  className="w-7 h-7 sm:w-9 sm:h-9"
                />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Have Questions? <span className="text-red-500">Call Us</span>
              </h2>
            </div>

            {/* Contact Details */}
            <p className="text-lg sm:text-xl font-semibold text-gray-800">
              +92-304-111-0767
            </p>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Let us assist you with any inquiries or concerns you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
