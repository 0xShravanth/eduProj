import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Edupap Logo" className="h-8 w-auto" />
        {/* Logo  text
        <span className="text-xl font-bold text-white ml-2">
          Edu<span className="text-blue-400">pap</span>
        </span> */}
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-6 text-gray-300">
        <li>
          <a href="#" className="hover:text-blue-400">
            Exam
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400">
            FAQ
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <button className="border border-blue-400 text-blue-400 px-4 py-2 rounded-md">
          Login
        </button>
        <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
          sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
