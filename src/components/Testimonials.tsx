import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Co říkají naši absolventi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Jana Nováková"
            role="Učitelka MŠ"
            content="Tento kurz mi otevřel oči a zcela změnil můj přístup k výuce. Doporučuji všem pedagogům!"
          />
          <TestimonialCard
            name="Petr Svoboda"
            role="Ředitel ZŠ"
            content="Skvělá investice do rozvoje našeho pedagogického sboru. Vidím pozitivní změny v celé škole."
          />
          <TestimonialCard
            name="Martina Dvořáková"
            role="Rodič"
            content="Jako rodič jsem získala cenné poznatky, jak podporovat rozvoj svého dítěte doma pomocí Montessori principů."
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, content }: { name: string; role: string; content: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 mb-4">"{content}"</p>
    <div>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

export default Testimonials;