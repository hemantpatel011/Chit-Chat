import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* App Logo/Name */}
        <div className="text-3xl font-bold">
          <Link to="/"><span>Chit-</span><span className="font-extralight text-red-500">Chat</span></Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/chat" className="hover:text-gray-200">
            Chat
          </Link>
          <Link to="/profile" className="hover:text-gray-200">
            Profile
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
          {/* <Link to="/register" className="hover:text-gray-200">
            Register
          </Link>
          <Link to="/login" className="hover:text-gray-200">
            Login
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
