const Services = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Powering the Future with Sustainable Energy
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Providing reliable and innovative solar energy solutions for homes,
          businesses, and industries.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default Services;
