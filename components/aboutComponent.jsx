import { Button } from "./ui/button";

export default function AboutComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white md:px-12">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        <div className="relative w-[100%] flex justify-center">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden">
            <img
              src="/images/AboutBoldFirstimage.jpg"
              alt="Équipe principale"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden translate-x-24 translate-y-14">
            <img
              src="/images/AboutBoldSecondImage.jpg"
              alt="Activité"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-justify md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Bienvenue à <span className="text-[#8F1D07] font-blanquotey">BOLD</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-4 text-justify">
            <strong>BOLD</strong> est une Association Sans But Lucratif poursuivant la vision d’un
            monde de dignité pour toutes les femmes et les filles.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-4 text-justify">
            Notre mission est de renforcer, accompagner et soutenir les femmes et filles pour la
            construction des communautés inclusives et équitables.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-4 text-justify">
            Son siège social se situe à Goma, en République Démocratique du Congo.
          </p>
          <div className="flex justify-center mt-8">
            {/* <a
              href="#about"
              className="px-8 py-4 bg-transparent text-[#8F1D07] border text-lg font-medium rounded-full shadow-md hover:bg-red-600 transition"
            >
              A propos
            </a> */}
             <Button className='bg-transparent text-black border-[#8F1D07]'>A propos</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
