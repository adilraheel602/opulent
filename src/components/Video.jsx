import React, { useState } from "react";
import meeting from "../Images/meeting.png";

const Video = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative w-full mt-6 sm:mt-8 md:mt-12 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center transition-all duration-300"
      style={{ backgroundImage: `url(${meeting})` }}
    >
      {/* Dark Overlay with smooth transition */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          isHovered ? "bg-black/40" : "bg-black/60"
        }`}
      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
        {/* Play Button with enhanced hover effects */}
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border-4 border-[#2BC0CD] rounded-full cursor-pointer transform hover:scale-110 hover:border-[#2BC0CD] transition-all duration-300 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          role="button"
          aria-label="Play video"
        >
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-[#2BC0CD] group-hover:text-[#2BC0CD] transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-6.4-3.733A1 1 0 007 8.067v7.866a1 1 0 001.352.929l6.4-3.733a1 1 0 000-1.731z"
            ></path>
          </svg>
        </div>

        {/* Text with responsive sizing */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 px-4 max-w-2xl">
          See Our Latest Expo Coverage
        </h2>

        {/* Optional subtitle */}
        <p className="mt-2 text-sm sm:text-base text-gray-200 max-w-lg px-4 hidden sm:block">
          Watch exclusive footage from our recent industry expo and discover the
          latest innovations
        </p>
      </div>
    </section>
  );
};

export default Video;
