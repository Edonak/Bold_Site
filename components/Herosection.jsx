// app/components/HeroSection.jsx

import { Button } from "./ui/button";

export default function HeroSection() {
    return (
      <section className="w-full h-auto bg-red-900 text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        {/* Texte principal */}
        <div className="flex flex-col items-center md:items-start max-w-md">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-500 mb-6">
            BOLD
          </h1>
          <p className="text-lg md:text-xl text-center md:text-left leading-relaxed">
            Ensemble Valorisons la voix des Femmes et des Filles et construisons
            leur un espace d'expression ouverte et positive.
          </p>
          <Button className="mt-8 px-6 py-3 bg-accent hover:bg-yellow-500 hover:text-red-900 transition">Faire un don</Button>
        </div>
  
        {/* Image */}
        <div className="mt-12 md:mt-0 md:ml-8 flex-shrink-0">
          <div className="w-full max-w-lg overflow-hidden rounded-lg h-[65vh]">
            <img
              src="/images/HeroSectionImage.jpg"
              alt="Hero Section"
              className="w-full h-auto object-cover  mt-28"
            />
          </div>
        </div>
      </section>
    );
  }
  