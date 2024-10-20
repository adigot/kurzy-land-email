import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 h-16">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center">
          <GraduationCap className="h-8 w-8 text-[#5b8eeb] mr-2" />
          <span className="text-xl font-semibold text-gray-800">MyMo svět - kurzy</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="text-gray-600 hover:text-[#3172e8]">Domů</a></li>
            <li><a href="#course-info" onClick={(e) => { e.preventDefault(); scrollToSection('course-info'); }} className="text-gray-600 hover:text-[#3172e8]">O kurzu</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-600 hover:text-[#3172e8]">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;