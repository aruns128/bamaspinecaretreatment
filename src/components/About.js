import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaClinicMedical, FaHandsHelping } from "react-icons/fa"; // Add icons for health and care
import SEO from "./SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#00b8d4] to-[#4caf50] p-6">
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-gray-300 w-full max-w-4xl text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Who we are ?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <SEO
              title="Keral,Tamilnadu"
              description="With over 30 years of experience in spine care treatment, we at Bama
            Spine Care are dedicated to providing effective and personalized
            solutions for a wide range of spinal and musculoskeletal conditions.
            Our expertise lies in merging the ancient wisdom of Ayurveda with
            the latest advancements in modern medical technology, ensuring that
            our patients receive the highest standard of care."
              keywords="spine care clinics, locations, Dr. Bama spine, back pain clinics"
              canonical="https://www.drbamaspinecare.com/locations"
            />
            With over 30 years of experience in spine care treatment, we at Bama
            Spine Care are dedicated to providing effective and personalized
            solutions for a wide range of spinal and musculoskeletal conditions.
            Our expertise lies in merging the ancient wisdom of Ayurveda with
            the latest advancements in modern medical technology, ensuring that
            our patients receive the highest standard of care.
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <SEO
              title="Keral,Tamilnadu"
              description="Our team of specialists is committed to offering holistic,
            non-invasive treatments that address not just the symptoms, but the
            root causes of your health concerns. Whether you're dealing with
            chronic pain, postural issues, or neurological conditions, we are
            here to guide you towards a pain-free, healthier life."
              keywords="spine care clinics, locations, Dr. Bama spine, back pain clinics"
              canonical="https://www.drbamaspinecare.com/locations"
            />
            Our team of specialists is committed to offering holistic,
            non-invasive treatments that address not just the symptoms, but the
            root causes of your health concerns. Whether you're dealing with
            chronic pain, postural issues, or neurological conditions, we are
            here to guide you towards a pain-free, healthier life.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <motion.div
              className="bg-blue-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="flex items-center justify-center mb-4">
                <FaHeartbeat className="w-12 h-12 text-[#00b8d4]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700">
                Holistic Care
              </h3>
              <p className="text-gray-600">
                We focus on treating the root cause of your health issues with
                holistic, non-invasive methods.
              </p>
            </motion.div>

            <motion.div
              className="bg-green-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex items-center justify-center mb-4">
                <FaClinicMedical className="w-12 h-12 text-[#4caf50]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700">
                Advanced Technology
              </h3>
              <p className="text-gray-600">
                Our facilities are equipped with state-of-the-art technology to
                provide the best care possible.
              </p>
            </motion.div>

            <motion.div
              className="bg-purple-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <div className="flex items-center justify-center mb-4">
                <FaHandsHelping className="w-12 h-12 text-[#9c27b0]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700">
                Compassionate Team
              </h3>
              <p className="text-gray-600">
                Our dedicated team of professionals is always ready to help and
                guide you on your journey to recovery.
              </p>
            </motion.div>
          </div>

          <motion.p
            className="text-lg text-gray-600 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            At Dr.Bama Spine Care, your well-being is our priority. We look
            forward to being a part of your health journey, helping you
            rediscover comfort, mobility, and a life free from pain.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
