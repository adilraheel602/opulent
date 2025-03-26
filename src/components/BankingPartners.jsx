import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import js from "../Images/js.png";
import alfalah from "../Images/alfalah.png";
import allied from "../Images/allied.jpg";
import meezan from "../Images/meezan.png";
import bop from "../Images/bop.png";

// Bank Logos Array
const bankLogos = [
  { id: 1, src: js, alt: "JS Bank" },
  { id: 2, src: alfalah, alt: "Bank Alfalah" },
  { id: 3, src: allied, alt: "Allied Bank" },
  { id: 4, src: meezan, alt: "Meezan Bank" },
  { id: 5, src: bop, alt: "Bank of Punjab" },
];

const BankingPartners = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.7;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-6 sm:py-8 md:py-12 px-4 sm:px-6">
      {/* Title with responsive typography */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
        Banking Partners
      </h2>

      <div className="relative flex items-center">
        {/* Left Arrow - Responsive positioning and touch-friendly */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 sm:left-2 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 sm:flex hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} className="text-gray-700" />
        </button>

        {/* Scrollable Container with improved responsive behavior */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 py-4 snap-x snap-mandatory"
          style={{
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {bankLogos.map((bank) => (
            <div
              key={bank.id}
              className="flex-shrink-0 snap-center transition-transform duration-300 hover:scale-105"
            >
              <div className="w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28 flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={bank.src}
                  alt={bank.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow - Responsive positioning and touch-friendly */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 sm:right-2 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 sm:flex hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} className="text-gray-700" />
        </button>
      </div>

      {/* Mobile scroll indicator */}
      <div className="flex justify-center mt-4 sm:hidden">
        <div className="w-16 h-1 bg-gray-200 rounded-full">
          <div className="w-4 h-1 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default BankingPartners;
