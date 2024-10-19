import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64; // Adjusted to match the header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 h-16"> {/* Added h-16 for explicit height */}
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center">
          <GraduationCap className="h-8 w-8 text-indigo-600 mr-2" />
          <span className="text-xl font-semibold text-gray-800">Montessori Kurz</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="text-gray-600 hover:text-indigo-600">Domů</a></li>
            <li><a href="#course-info" onClick={(e) => { e.preventDefault(); scrollToSection('course-info'); }} className="text-gray-600 hover:text-indigo-600">O kurzu</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-600 hover:text-indigo-600">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;