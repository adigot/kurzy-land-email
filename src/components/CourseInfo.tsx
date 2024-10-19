import React from 'react';
import { Book, Clock, Calendar, Award, Users } from 'lucide-react';

const CourseInfo = () => {
  return (
    <section id="course-info" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">O našem kurzu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfoCard icon={<Book />} title="Obsah kurzu" description="Komplexní přehled Montessori metody a její aplikace ve škole i doma" />
          <InfoCard icon={<Clock />} title="Délka" description="120 hodin vzdělávání s flexibilním rozvrhem" />
          <InfoCard icon={<Calendar />} title="Harmonogram" description="Přizpůsobený potřebám pracujících pedagogů a rodičů" />
          <InfoCard icon={<Award />} title="Certifikace" description="Akreditovaný certifikát po úspěšném dokončení" />
          <InfoCard icon={<Users />} title="Pro koho" description="Pedagogové, rodiče a všichni se zájmem o Montessori metodu" />
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