import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Opulent is a TIER 1 mean?",
    answer:
      "The Bloomberg New Energy Finance (BNEF) ranking allows for a transparent differentiation among the numerous PV manufacturers in the market. The title Tier-1 manufacturer is one of the highest distinctions in the industry.",
  },
  {
    question: "Is Opulent listed as TIER 1 Trader or Manufacturer?",
    answer: "AE Power is listed as a Tier-1 Manufacturer in the energy sector.",
  },
  {
    question: "Opulent  deals in what products?",
    answer:
      "Opulent  provides solar panels, inverters, and energy storage solutions.",
  },
  {
    question: "Why Buy from Opulent ?",
    answer:
      "AE Power ensures high-quality products, competitive pricing, and excellent customer support.",
  },
  {
    question:
      "How does Opulent ’s quality differ from other traders in the market?",
    answer:
      "AE Power offers Tier-1 certified products with strict quality control and industry-leading warranties.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index}>
            <motion.div
              className={`flex justify-between items-center p-4 rounded-lg cursor-pointer transition-all ${
                activeIndex === index ? "bg-red-600 text-white" : "bg-gray-100"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <FaChevronDown
                className={`transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </motion.div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-gray-50 p-4 rounded-b-lg"
            >
              <p>{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
