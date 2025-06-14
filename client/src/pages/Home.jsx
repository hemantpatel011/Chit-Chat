import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full text-center">
        {/* App Name */}
        <h1 className="text-4xl font-extrabold text-black mb-4">
          Welcome to <span>Chit-</span><span className="font-extralight text-red-500">Chat</span> 💬
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg mb-6">
          Connect instantly with friends, family, or your community. Real-time messaging, secure conversations, and a beautiful interface — all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="/register"
            className="bg-black hover:bg-gray-700 text-white px-6 py-2 rounded-md transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="border border-black text-black hover:bg-blue-50 px-6 py-2 rounded-md transition"
          >
            Log In
          </Link>
        </div>

        {/* Optional Image or Illustration */}
        <div className="mt-8">
          <img
            src="https://img.freepik.com/free-vector/chatting-concept-illustration_114360-4765.jpg"
            alt="Chat Illustration"
            className="w-full max-w-md mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
