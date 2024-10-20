import React from 'react';
import { Book, Clock, Calendar, Award, Users, Users2, Coins } from 'lucide-react';

const CourseInfo = () => {
  return (
    <section id="course-info" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">O našem kurzu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfoCard icon={<Book />} title="Obsah kurzu" description="Montessori přístup je víc než jen teorie - je to cesta, která se nejlépe poznává skrze praktické zážitky. Proto vás během jednoho roku (10 víkendových setkání) provedeme jak teorií, tak praxí Montessori pedagogiky a jejich klíčových oblastí. Naučíte se, jak efektivně pracovat s Montessori pomůckami a jak je začlenit do každodenní práce s dětmi. V každém bloku si prožijete elipsu - cvičení koncentrace, ticha a koordinace pohybů - a dostanete na míru připravená skripta a pracovní listy." />
          <InfoCard icon={<Clock />} title="Délka" description="Celková délka kurzu je 247 hodin, včetně možnosti až týdenního náhledu a konzultace v MŠ Vyšehrádek zdarma. Náhledy jsou možné po domluvě a po absolvování prvních 3 víkendových bloků v kurzu." />
          <InfoCard icon={<Calendar />} title="Harmonogram" description="Začínáme 10.1.2025 blokem Teorie (10.1. - 12.1.). Dále následují bloky Praktický život (22.2. - 23.2.), Smyslová výchova a hudba (21.3. - 23.3.), Matematika I (5.4. - 6.4.), Matematika II a geometrie (3.5. - 4.5.), Jazyková výchova (30.5. - 1.6.), Výroba Montessori pomůcek (léto 2025 - dle domluvy s účastníky kurzu), Kosmická výchova I (25.10. - 26.10.), Kosmická výchova II (15.11. - 16.11.), Společné sdílení (prosinec 2025 - dle domluvy s účastníky kurzu). Pátky 10:00 - 18:00, soboty 9:00 - 18:00 a neděle 9:00 - 15:00." />
          <InfoCard icon={<Users />} title="Pro koho" description="Kurz je ideální pro pedagogy mateřských škol, pracovníky dětských skupin a center, rodiče a zájemce o Montessori pedagogiku, kteří chtějí lépe porozumět této metodě a efektivně využívat Montessori pomůcky. Kapacita kurzu je omezena na 20 účastníků, což zaručuje individuální přístup a prostor pro sdílení zkušeností." />
          <InfoCard icon={<Coins />} title="Cena kurzu" description="Cena kurzu je 37.500,-Kč. Celý kurz lze financovat pomocí šablon OP JAK. Před začátkem kurzu je možné vaše místo přenechat jiné osobě. Účastníkům kurzu nabízíme možnost přespání v nádherných prostorách komunitního centra Jasoň (cena 300 Kč/noc, k dispozici kuchyňka, sprcha i lehátka)." />
          <InfoCard icon={<Users2 />} title="Naši lektoři" description="Naším cílem není jen předat vám informace, ale naučit vás, jak pozorovat a nalézt svůj vlastní autentický styl práce. Kurzem vás tak budou provázet zkušené lektorky působící v MŠ Vyšehrádek - Veronika Stárková, Jana Běhounková a Markéta Kalertová." />
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gray-50 p-6 rounded-lg text-center">
    <div className="text-indigo-600 mb-4 flex justify-center">{React.cloneElement(icon as React.ReactElement, { size: 40 })}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default CourseInfo;