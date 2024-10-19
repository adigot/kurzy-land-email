import React from 'react';

const Hero = () => {
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
    <section id="hero" className="bg-indigo-700 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Montessori Kurz pro Pedagogy a Rodiče</h1>
        <p className="text-xl mb-8">Objevte sílu Montessori vzdělávání a transformujte svůj přístup k výchově a výuce dětí</p>
        <a 
          href="#course-info" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('course-info');
          }}
          className="bg-white text-indigo-700 py-3 px-8 rounded-full font-semibold hover:bg-indigo-100 transition duration-300"
        >
          Zjistit více
        </a>
      </div>
    </section>
  );
};

export default Hero;