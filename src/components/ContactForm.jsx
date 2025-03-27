import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required.";
      }
    });
    setErrors(newErrors);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl max-w-7xl mx-auto">
      {/* Form Section - Enhanced responsiveness */}
      <div className="w-full lg:w-2/3 transition-all duration-300">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2BC0CD] mb-4 sm:mb-6 tracking-tight">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Input fields with improved responsiveness */}
          {["name", "email", "subject"].map((field) => (
            <div key={field} className="space-y-2 sm:space-y-3">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Your ${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }`}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 p-2.5 sm:p-3.5 focus:outline-none focus:border-[#2BC0CD] transition-all duration-300 text-sm sm:text-base placeholder-gray-400"
                required
              />
              {errors[field] && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors[field]}
                </p>
              )}
            </div>
          ))}

          {/* Textarea with enhanced responsiveness */}
          <div className="space-y-2 sm:space-y-3">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 p-2.5 sm:p-3.5 focus:outline-none focus:border-[#2BC0CD] h-28 sm:h-32 md:h-40 transition-all duration-300 resize-y min-h-[112px] text-sm sm:text-base placeholder-gray-400"
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit button with improved hover effect */}
          <button
            type="submit"
            className="w-full bg-[#2BC0CD] text-white py-2.5 sm:py-3.5 px-6 sm:px-8 rounded-lg hover:bg-[#2399A2] transition-all duration-300 text-sm sm:text-base font-medium hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Info Section - Enhanced styling */}
      <div className="text-white bg-[#2BC0CD] p-6 sm:p-8 rounded-xl w-full lg:w-1/3 mt-6 lg:mt-0 shadow-lg transition-all duration-300 hover:shadow-xl">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 tracking-wide">
          Contact Information
        </h3>
        <p className="mb-6 text-sm sm:text-base text-white/90">
          Contact us and we'll get back to you within 24 hours.
        </p>
        <div className="space-y-6">
          {/* Contact details with improved spacing */}
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-white mt-1.5 flex-shrink-0 text-lg sm:text-xl" />
            <span className="text-sm sm:text-base leading-relaxed">
              38 Babar Block New Garden Town, Lahore
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-white flex-shrink-0 text-lg sm:text-xl" />
            <a
              href="mailto:info@opulent-elite.com"
              className="text-sm sm:text-base hover:text-white/80 transition-colors duration-300 underline-offset-2 hover:underline"
            >
              info@opulent-elite.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-white flex-shrink-0 text-lg sm:text-xl" />
            <a
              href="tel:+923228866633"
              className="text-sm sm:text-base hover:text-white/80 transition-colors duration-300 underline-offset-2 hover:underline"
            >
              0092 • 322 • 8866633
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
