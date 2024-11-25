import React from "react";
import { motion } from "framer-motion";
import { FaBed, FaBrain, FaMedkit } from "react-icons/fa"; // Import icons

const servicesGroup1 = [
  "Back Pain",
  "Neck Pain",
  "Cervical Rib",
  "Frozen Shoulder",
  "Scoliosis",
  "Stenosis",
  "Spondylosis",
  "Pelvis Tilting",
  "Sciatica",
  "Migraine",
  "Vertigo",
  "Fibromyalgia",
];

const servicesGroup2 = [
  "Varicose Vein",
  "Anxiety",
  "Numbness",
  "Arthritis",
  "Joint Pain",
  "Paralysis",
  "Knee Pain (Knee Replacement Stage)",
  "Avascular Necrosis (AVN, Hip Replacement Stage)",
  "Listhesis (Even Grade 3)",
  "Pelvic Inflammatory Disease (PID)",
  "Disc Problems (Bulge, Herniated, Prolapse, Extrusion)",
  "Uric Acid-Pain",
];

const servicesGroup3 = [
  "Insomnia (Sleeplessness)",
  "Hemangioma",
  "Post Accidental Pain",
  "Carpal Tunnel Syndrome",
  "Pain After Surgery",
  "Severe Menstrual Pain",
  "Walking Abnormalities",
  "Ligament Fracture",
  "Ankylosing Spondylitis",
  "Muscular Dystrophy",
  "Parkinson's Disease",
  "Syringomyelia",
];

const ServiceCard = ({ icon, title, services }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-2xl transform transition duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-center mb-4">
        <div className="bg-gradient-to-r from-[#025a60] to-[#7ad7de] p-4 rounded-full text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h3>
      <ul className="list-disc list-inside text-gray-600">
        {services.map((service, index) => (
          <li key={index} className="py-1">
            {service}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600">
          We offer comprehensive treatment solutions for various spine and
          body-related health conditions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={<FaBed className="w-8 h-8" />}
          title="Spine & Muscular Care"
          services={servicesGroup1}
        />
        <ServiceCard
          icon={<FaMedkit className="w-8 h-8" />}
          title="Pain Relief & Rehabilitation"
          services={servicesGroup2}
        />
        <ServiceCard
          icon={<FaBrain className="w-8 h-8" />}
          title="Neurological Disorders"
          services={servicesGroup3}
        />
      </div>
      <div className="mt-16 flex justify-center">
        <div className="w-full max-w-4xl">
          <iframe
            src="https://www.youtube.com/embed/QV0JqnKRxIc?si=iS4zj9YWm-9W9pmC"
            title="YouTube video player"
            className="w-full aspect-video rounded-xl shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Services;
