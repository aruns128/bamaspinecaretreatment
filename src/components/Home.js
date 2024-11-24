import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";
import { FaArrowRight } from "react-icons/fa";

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
      className="flex items-center justify-center min-h-screen p-4 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/hero_section.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />{" "}
      {/* Background overlay */}
      <SEO
        title="Dr. Bama Spine Care - Trusted Spine Treatment"
        description="Dr. Bama Spine Care offers effective spine care treatments in Ernakulam, specializing in back pain and spine disorders."
        keywords="spine care, back pain treatment, Dr. Bama, spine clinic, spine disorders"
        canonical="https://www.drbamaspinecare.com"
      />
      <motion.div
        className="rounded-3xl p-8 w-full max-w-4xl text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Title */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#fff] flex justify-center text-shadow-lg">
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
        <p className="text-lg text-[#fff] mb-1 font-semibold text-shadow-lg">
          Back pain, Knee pain, Disc bulge, Disc Prolapse , Listhesis, Stenosis,
          Scoliosis?
        </p>
        <p className="text-lg text-[#fff] mb-1 font-semibold text-shadow-lg">
          100% guaranteed treatment.
        </p>
        <p className="text-lg text-[#fff] mb-1 font-semibold text-shadow-lg">
          Feel the difference within 15 minutes.
        </p>

        {/* Explore Services with Hover Effect */}
        <motion.div
          className="inline-block text-[#fff] font-bold cursor-pointer"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#025a60",
            color: "#fff",
            padding: "0.5rem 1.5rem",
            borderRadius: "1rem",
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/services")}
        >
          Explore Our Services <FaArrowRight className="inline-block ml-2" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
