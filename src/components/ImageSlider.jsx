import React from "react";
import videoBg from "../Images/bg-video.mp4";

const ImageSlider = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Video Background with improved responsiveness */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-h-full min-w-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content with improved responsiveness */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4 sm:px-6 md:px-16 text-white">
        <p className="text-sm sm:text-md md:text-2xl lg:text-4xl mt-20 sm:mt-40 md:mt-60 tracking-wider">
          TRADERS AND SOURCING AGENCY OF
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-2 md:mt-4 tracking-tight">
          TEXTILES
        </h1>
        <div className="mt-4 sm:mt-6 md:mt-8 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
          <button className="bg-[#2BC0CD] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white text-sm sm:text-base transition-all duration-300 hover:bg-[#3befff] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Our Service
          </button>
          <button className="bg-transparent text-white border-2 border-[#2BC0CD] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 hover:text-[#2BC0CD] hover:border-[#2BC0CD] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
