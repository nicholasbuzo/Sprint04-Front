import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/escanear" className="hover:text-blue-400 transition-colors">
                Escanear
              </Link>
            </li>
            <li>
              <Link to="/manutencoes" className="hover:text-blue-400 transition-colors">
                Manutenções
              </Link>
            </li>
            <li>
              <Link to="/conta" className="hover:text-blue-400 transition-colors">
                Conta
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold">TrackGuard</span>
          <img 
            src="/logo.png" 
            alt="TrackGuard Logo" 
            className="h-8 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header; 