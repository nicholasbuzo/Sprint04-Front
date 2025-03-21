import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white h-15 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          © 2025 TrackGuard. Todos direitos reservados.
        </div>
        
        <div className="space-x-4">
          <Link href="/Nos" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
            Sobre nós
          </Link>
          <Link href="/Contato" className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors">
            Fale conosco
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;