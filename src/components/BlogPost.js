import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom"; // To access the blog post id from URL
import { blogPosts } from "./data/blogPost";

const BlogPost = () => {
  const { id } = useParams(); // Get the blog post id from the URL
  console.log(id, "id");

  // Example blog data for demonstration (replace with dynamic data as needed)

  const post = blogPosts.find((post) => post.id === parseInt(id)); // Find the post by ID

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-300 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-700">
            Blog Not Found
          </h2>
          <p className="text-lg text-gray-600">
            Sorry, this blog post does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ffcc80] to-[#ffb74d] p-6">
      <motion.div
        className="flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Left Section: Related Blogs */}
          <div className="w-full md:w-1/4 space-y-6 hidden md:block">
            <motion.div
              className="bg-white p-6 rounded-3xl shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Related Blogs
              </h3>
              <div
                className={`${
                  blogPosts.filter((relatedPost) => relatedPost.id !== post.id)
                    .length > 6
                    ? "max-h-96 overflow-y-auto"
                    : ""
                }`}
              >
                {blogPosts
                  .filter((relatedPost) => relatedPost.id !== post.id)
                  .map((relatedPost) => (
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      key={relatedPost.id}
                      className="flex items-center space-x-4 py-2 border border-gray-200 hover:bg-gray-100 rounded-full p-4 mt-2"
                    >
                      <div className="rounded-full bg-gray-200 flex items-center justify-center m-1">
                        {relatedPost.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 m-1 text-sm">
                          {relatedPost.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.div>
          </div>

          {/* Right Section: Blog Post Content */}
          <div className="w-full md:w-3/4 bg-white p-6 rounded-3xl shadow-xl space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">{post.title}</h2>
              <div className="flex items-center space-x-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={post.image}
                alt={post.title}
                className="w-auto h-80 rounded-lg"
              />
            </div>
            <p className="text-gray-700">{post.introduction}</p>
            <p className="text-gray-700">{post.description}</p>
            <p className="text-gray-700 font-semibold">{post.conclusion}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPost;
