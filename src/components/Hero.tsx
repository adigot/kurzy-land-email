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
    <section id="hero" className="bg-[#3172e8] text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Montessori kurz pro pedagogy a rodiče</h1>
        <p className="text-xl mb-8">Váš klíč k úspěšnému vzdělávání dětí. Odemkněte jejich potenciál a naučte se, jak vést srdcem i rozumem.</p>
        <a 
          href="#course-info" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('course-info');
          }}
          className="bg-white text-[#3172e8] py-3 px-8 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
        >
          Zjistit více
        </a>
      </div>
    </section>
  );
};

export default Hero;