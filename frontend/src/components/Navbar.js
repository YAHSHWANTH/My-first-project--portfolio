import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll for smooth scroll

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-100 p-3 shadow-md">
      <div className="flex items-center justify-between px-8">
        <div className="flex flex-col items-start space-y-1">
          <h1 className="text-gray-800 text-xl font-bold">BUDDAIAH VAGAIRA YASWANTH</h1>
          <p className="text-blue-400 text-sm">Portfolio</p>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="home" smooth={true} duration={500} className="text-gray-800 hover:text-purple-500 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="text-gray-800 hover:text-purple-500 cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="text-gray-800 hover:text-purple-500 cursor-pointer">
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="text-gray-800 hover:text-purple-500 cursor-pointer">
              Projects
            </Link>
          </li>
          <li>
            <Link to="certificates" smooth={true} duration={500} className="text-gray-800 hover:text-purple-500 cursor-pointer">
              Certificates
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
