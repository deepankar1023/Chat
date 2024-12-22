import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="bg-black text-white p-4"
      style={{
        boxShadow: "0 6px 12px -3px rgba(255, 255, 255, 0.8)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo and Navigation Links */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold hover:text-gray-400">
            LOGO
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-lg font-semibold hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-lg font-semibold hover:text-gray-400"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-semibold hover:text-gray-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg font-semibold hover:text-gray-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: User Icon and Login/Signup */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-500">
            Login/Signup
          </button>
          <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
            <i className="fas fa-user text-lg"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
