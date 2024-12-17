// app/components/HeroSection.jsx

import { Button } from "./ui/button";

export default function HeroSection() {
    return (
      <section className="w-full h-[88vh] bg-red-900 text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start max-w-md">
          <h1 className="text-6xl md:text-6xl font-bold text-yellow-500 mb-6 font-blanquotey" >
            bOLD
          </h1>
          <p className="text-lg md:text-xl text-center md:text-left leading-relaxed">
            Ensemble valorisons la voix des femmes et des filles et construisons
            leur un espace d'expression ouverte et positive.
          </p>
          <Button className="mt-8 px-6 py-3 bg-transparent border-white text-white hover:bg-yellow-500 hover:text-red-900 transition">Faire un don</Button>
        </div>
        <div className="mt-12 md:mt-0 md:ml-8 flex-shrink-0">
          <div className="w-full max-w-lg overflow-hidden rounded-lg h-[65vh]">
            <img
              src="/images/HeroSectionImage.jpg"
              alt="Hero Section"
              className="w-full h-auto object-cover  mt-20 rounded-lg"
            />
          </div>
        </div>
      </section>
    );
  }
  