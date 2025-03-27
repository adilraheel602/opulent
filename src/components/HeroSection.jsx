import React from "react";
import globe from "../Images/globe.jpg";
import auditorium from "../Images/auditorium.jpg";
import qualityDept from "../Images/qualityDept.jpg";
import exportDept from "../Images/exportDept.jpg";
import accountsDept from "../Images/accountsDept.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  const credentials = [
    {
      title: "GLOBAL MARKET",
      description:
        "As international business has enormous potential for our yarn and fabric...",
      icon: globe,
      backgroundImage: globe,
    },
    {
      title: "DOMESTIC MARKET",
      description:
        "Experience peace of mind with our reliable, warranty-backed solar services.",
      icon: auditorium,
      backgroundImage: auditorium,
    },
    {
      title: "QUALITY CONTROL",
      description:
        "No compromise on quality is the basic and main agenda of our quality...",
      icon: qualityDept,
      backgroundImage: qualityDept,
    },
    {
      title: "EXPORTS",
      description:
        "Ready to provide up-to-date productions status and shipment details anytime...",
      icon: exportDept,
      backgroundImage: exportDept,
    },
    {
      title: "ACCOUNTS | FINANCE",
      description:
        "Aim to serve the needs of our customers and build value for our clients...",
      icon: accountsDept,
      backgroundImage: accountsDept,
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <section className="py-8 sm:py-12 md:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
          Departments
        </h2>
        <p className="max-w-2xl mx-auto px-4 text-sm sm:text-base md:text-lg">
          Opulent Group of Companies is a reflection of commitment, dedication
          and team spirit of its management and employees.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 mt-6 sm:mt-8 md:mt-10">
          {credentials.map((feature, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-6 rounded-xl shadow-lg bg-white flex flex-col items-center justify-center transition-all duration-300 relative overflow-hidden hover:shadow-xl group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Background Image with improved responsive overlay */}
              <div className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-30">
                <img
                  src={feature.backgroundImage}
                  alt={feature.title}
                  className="w-full h-full object-cover opacity-20"
                  loading="lazy"
                />
              </div>

              {/* Icon with responsive sizing */}
              <div className="relative z-10 mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Text Content with improved responsive typography */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold relative z-10 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-2 relative z-10 line-clamp-3">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
