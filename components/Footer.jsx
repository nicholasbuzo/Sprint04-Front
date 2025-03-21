import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
        
        <div className="space-x-4">
          <Link 
            to="/about"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            About Us
          </Link>
          <Link 
            to="/contact"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 