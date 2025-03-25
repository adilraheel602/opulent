import React from "react";

const Blog02 = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">About AE Power</h2>
        <p className="mt-4 text-gray-600">
          AE Power is committed to providing high-quality energy solutions with
          a focus on sustainability and efficiency. Our team of experts ensures
          top-tier services in solar, electrical, and power systems.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              Delivering reliable and cost-effective power solutions to meet
              modern energy demands.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              To be the leading provider of sustainable and innovative energy
              solutions worldwide.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
            <p className="mt-2 text-gray-600">
              Commitment to excellence, innovation, and environmental
              responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog02;
