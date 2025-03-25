import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">About OPULENT</h2>
        <p className="mt-4 text-gray-600">
          Providing the most excellent services through our best pre-shipment
          inspection and continual improvement of our Quality Management System
          for customer satisfaction.
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
              "No compromise on quality" is the basic and main agenda of our
              quality department. Highly qualified staff always ensures the best
              quality of different items.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
            <p className="mt-2 text-gray-600">
              They always have update regarding Word Uster Statistics of Yarn
              and Japanese and USA fabric Inspection system details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
