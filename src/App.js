import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import {
  FaBars,
  FaWindowClose,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import BlogPost from "./components/BlogPost";
import Locations from "./components/Locations";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="p-6 bg-gradient-to-r from-gray-500 via-[#025a60] to-[#7ad7de] shadow-lg text-white text-center flex items-center justify-center">
          <NavLink to="/">
            <img
              src="/images/company-logo.jpg"
              alt="Ayurveda Modern"
              className="img-fluid"
              style={{ maxWidth: "150px", height: "auto" }}
            />
          </NavLink>
        </header>

        {/* Navigation */}
        <nav className="p-4 bg-gray-200 shadow-inner">
          <div className="flex justify-center items-center flex-col">
            {/* Hamburger Button for Mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 focus:outline-none"
              >
                {!menuOpen ? (
                  <FaBars className="w-6 h-6" color="#025a60" />
                ) : (
                  <FaWindowClose className="w-6 h-6" color="red" />
                )}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-6 font-bold">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#025a60] text-white py-2 px-4 rounded-md"
                      : "text-lg text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                  }
                >
                  Home
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#025a60] text-white py-2 px-4 rounded-md"
                      : "text-lg text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                  }
                >
                  Who we are ?
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#025a60] text-white py-2 px-4 rounded-md"
                      : "text-lg text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                  }
                >
                  Services
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#025a60] text-white py-2 px-4 rounded-md"
                      : "text-lg text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                  }
                >
                  Blog
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <NavLink
                  to="/locations"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#025a60] text-white py-2 px-4 rounded-md"
                      : "text-lg text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                  }
                >
                  Locations
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#025a60] text-white py-2 px-4 rounded-md"
                      : "text-lg text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                  }
                >
                  Contact Us
                </NavLink>
              </motion.div>
            </div>

            {/* Mobile View Links (vertical stack) */}
            <div
              className={`lg:hidden ${
                menuOpen ? "block" : "hidden"
              } space-y-4 mt-4 w-full`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#025a60] text-white py-2 px-4 rounded-md block"
                      : "text-lg text-gray-700 py-2 px-4 rounded-md block hover:bg-gray-300 transition-colors"
                  }
                >
                  Home
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#025a60] text-white py-2 px-4 rounded-md block"
                      : "text-lg text-gray-700 py-2 px-4 rounded-md block hover:bg-gray-300 transition-colors"
                  }
                >
                  Who we are ?
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#025a60] text-white py-2 px-4 rounded-md block"
                      : "text-lg text-gray-700 py-2 px-4 rounded-md block hover:bg-gray-300 transition-colors"
                  }
                >
                  Services
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#025a60] text-white py-2 px-4 rounded-md block"
                      : "text-lg text-gray-700 py-2 px-4 rounded-md block hover:bg-gray-300 transition-colors"
                  }
                >
                  Blog
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <NavLink
                  to="/locations"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#025a60] text-white py-2 px-4 rounded-md block"
                      : "text-lg text-gray-700 py-2 px-4 rounded-md block hover:bg-gray-300 transition-colors"
                  }
                >
                  Locations
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#025a60] text-white py-2 px-4 rounded-md block"
                      : "text-lg text-gray-700 py-2 px-4 rounded-md block hover:bg-gray-300 transition-colors"
                  }
                >
                  Contact Us
                </NavLink>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>

        {/* Footer Section */}
        <footer className="bg-gray-500 text-white text-center py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center px-4">
            {/* Footer Navigation Links */}
            <div className="flex flex-wrap justify-center lg:justify-start space-x-4 space-y-2 lg:space-y-0 mb-4 lg:mb-0 items-center font-semibold">
              <NavLink to="/" className="text-xs py-2 px-4">
                Home
              </NavLink>
              <NavLink to="/about" className="text-xs py-2 px-4">
                About Us
              </NavLink>
              <NavLink to="/services" className="text-xs py-2 px-4">
                Services
              </NavLink>
              <NavLink to="/blog" className="text-xs py-2 px-4">
                Blog
              </NavLink>
              <NavLink to="/contact" className="text-xs py-2 px-4">
                Contact Us
              </NavLink>
              <NavLink to="/locations" className="text-xs py-2 px-4">
                Locations
              </NavLink>
            </div>

            {/* Copyright Information */}
            <p className="text-xs mb-4 lg:mb-0">
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://www.drbamaspinecare.com/"
                className="text-white text-decoration-none"
              >
                drbamaspinecare.com
              </a>{" "}
              All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center items-center space-x-4">
              <p className="text-xs">Follow Us</p>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-300 mx-2"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 mx-2"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-300 mx-2"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
