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
    <div className="overflow-x-hidden min-h-screen">
      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <h3 className="text-[#2BC0CD] uppercase text-lg sm:text-xl lg:text-2xl font-bold tracking-wider mb-2">
            OPULENT
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            OUR TEAM
          </h2>
        </motion.div>

        {/* Features Grid - Improved spacing and responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-[#2BC0CD] text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 object-cover rounded-full mx-auto mb-4 sm:mb-6 shadow-lg"
              />
              <div className="absolute -top-3 right-3 bg-black text-white rounded-full px-4 py-1.5 text-sm font-bold">
                {feature.id}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section - Enhanced layout and spacing */}
      <section className="bg-black text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4">{stat.icon}</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">
                {stat.value}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <Video />

      {/* News Feed Section - Improved grid and spacing */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            News Feed
          </h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-600">
            Our Blogs
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {newsData.map((news, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group h-[400px] sm:h-[450px] hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl font-bold line-clamp-2 mb-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {news.description}
                </p>
                <motion.a
                  href={news.link}
                  className="inline-block px-6 py-2 bg-[#2BC0CD] text-white rounded-full text-sm font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  Read More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      {/* <FAQSection /> */}

      {/* Contact Section - Enhanced layout and responsiveness
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col sm:flex-row items-center bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
          <div className="w-full sm:w-1/3 h-48 sm:h-full">
            <img
              src={give}
              alt="Support"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full sm:w-2/3 p-6 sm:p-8 lg:p-10">
            <div className="flex items-center mb-6">
              <div className="bg-white p-4 rounded-full shadow-md">
                <img
                  src={call}
                  alt="Phone Icon"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold ml-4">
                Have Questions? <span className="text-red-500">Call Us</span>
              </h2>
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
              +92-304-111-0767
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              Let us assist you with any inquiries or concerns you may have.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Features;
