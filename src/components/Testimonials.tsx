import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Co říkají naši absolventi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Slávka"
            role="Učitelka MŠ"
            content="Ráda bych vám touto cestou ještě jednou poděkovala, že jsem mohla Montessori kurz absolvovat právě u vás. Skripta, která jste pro nás v průběhu roku měly připravené, využívám pokaždé, když ve školce zařazuji novou aktivitu. Děkuji za umožnění fotografování aktivit ve vaší školce a nafocení postupu ukázky daných aktivit. Děkuji za váš lidský přístup, za nadšení, s kterým tuto práci prožíváte a předáváte dál."
          />
          <TestimonialCard
            name="Petra"
            role="Maminka 2 dětí"
            content="Věděla jsem, že dětem chci dát příležitost k objevování a zkoumání světa jejich vlastním tempem, neměla jsem k tomu ale dostatečné nástroje a ani si nebyla jistá, jak k tomu v praxi přistoupit. Na kurzu jsem získala nejen obrovskou spoustu inspirace na to, co jim nabídnout, ale hlavně také jak, aby je to opravdu zaujalo, přirozeně a hravě. Navíc mi kurz poskytl prostor pro sebereflexi a ujasnění si vlastních priorit ve výchově. Odnesla jsem si z něj klidnější a více respektující přístup, který dětem umožňuje přirozený růst. Doporučuji nejen všem maminkám, které chtějí své děti podpořit v jejich přirozeném vývoji."
          />
          <TestimonialCard
            name="Renata"
            role="Učitelka v jesličkách"
            content="Velké poděkování za úžasný kurz, který byl již 10. Veru, Jani, Markétko - jste inspirativní ženy, které do tohoto kurzu daly víc než je možné. Vaše energie, ochota, pokora a láska, se kterou tuto práci děláte, je nevyčerpatelná. Přeji vám mnoho dalších úspěchů a ještě jednou děkuji. Jsem ráda, že jsem byla součástí tohoto kurzu."
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