import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-300 w-full lg:max-w-2xl  max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-700">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We’d love to hear from you! Reach out to us for any inquiries or
          questions you might have.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Your Message"
            rows="4"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-full shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
