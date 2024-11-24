import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";

const Home = () => {
  const navigate = useNavigate();
  const title = "Dr. Bama Spine Care";

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/sample_image_1.jpg')" }} // Set the background image
    >
      <SEO
        title="Dr. Bama Spine Care - Trusted Spine Treatment"
        description="Dr. Bama Spine Care offers effective spine care treatments in Ernakulam, specializing in back pain and spine disorders."
        keywords="spine care, back pain treatment, Dr. Bama, spine clinic, spine disorders"
        canonical="https://www.drbamaspinecare.com"
      />
      <motion.div
        className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-300 w-full max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden and below)
        animate={{ opacity: 1, y: 0 }} // End state (visible and centered)
        transition={{ duration: 1 }} // Transition duration
      >
        {/* Animated Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-700 flex justify-center">
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index} // Custom index for staggered animation
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
            </motion.span>
          ))}
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Comprehensive care and innovative treatment solutions for your spine
          health.
        </p>
        <motion.button
          className="px-6 py-3 bg-[#025a60] text-white rounded-full shadow-lg shadow-[#025a60] hover:scale-105 transition-all"
          whileHover={{ scale: 1.1 }} // Hover effect to scale the button
          onClick={() => navigate("/services")}
        >
          Explore Our Services
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
