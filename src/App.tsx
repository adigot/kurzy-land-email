import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseInfo from './components/CourseInfo';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <Hero />
        <CourseInfo />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;