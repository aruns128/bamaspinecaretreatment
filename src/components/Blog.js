import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "./data/blogPost";

const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query

  // Filter blog posts based on search query
  const filteredBlogs = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigateToBlog = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ffcc80] to-[#ffb74d] p-6">
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-gray-300 w-full max-w-6xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-700 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Blog
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Stay updated with the latest trends and insights in the world of
            spine care, health, and wellness. Dive into our articles to explore
            expert perspectives, innovative treatments, and tips for maintaining
            a healthy spine.
          </motion.p>
          {/* Search Input */}
          <div className="mb-6 w-full flex justify-center items-center">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="lg:w-1/2  w-full p-4 rounded-lg shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#ff7043] focus:ring-opacity-50 flex justify-center items-center"
            />
          </div>
          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((post) => (
                <motion.div
                  key={post.id}
                  className="bg-gray-100 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  onClick={() => navigateToBlog(post.id)}
                >
                  <div className="flex items-center justify-center mb-4">
                    {post.icon}
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-auto h-80 rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">{post.introduction}</p>
                  <div className="mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent redirection when clicking "Read More"
                        navigateToBlog(post.id);
                      }}
                      className="px-6 py-2 rounded-full shadow-lg bg-[#ff7043] text-white mt-4 transform transition-all hover:scale-105 neumorphism"
                    >
                      Read More
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-600 text-center col-span-full">
                No blogs found matching your search.
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
