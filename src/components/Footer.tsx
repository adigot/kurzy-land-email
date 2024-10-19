import React from 'react';
import { GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <GraduationCap className="h-8 w-8 text-indigo-400 mr-2" />
            <span className="text-xl font-semibold">Montessori Kurz</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-indigo-400">Domů</a></li>
              <li><a href="#" className="hover:text-indigo-400">O kurzu</a></li>
              <li><a href="#" className="hover:text-indigo-400">Kontakt</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Montessori Kurz. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
};

export default Footer;