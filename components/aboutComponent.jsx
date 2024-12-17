export default function AboutComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white md:px-12">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
        <div className="relative w-[100%]">
          <div className="w-[100%] h-[100%] md:w-72 md:h-72 rounded-full overflow-hidden">
            <img
              src="/images/AboutBoldFirstimage.jpg"
              alt="Équipe principale"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden translate-x-5 translate-y-10">
            <img
              src="/images/AboutBoldSecondImage.jpg"
              alt="Activité"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Bienvenue à <span className="text-red-500">BOLD</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            <strong>BOLD</strong> est une Association Sans But Lucratif
            poursuivant la vision d’un monde de dignité pour toutes les femmes
            et les filles.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            Notre mission est de renforcer, accompagner et soutenir les femmes
            et filles pour la construction des communautés inclusives et
            équitables.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            Son siège social se situe à Goma, en République Démocratique du
            Congo.
          </p>
          <div className="mt-6">
            <a
              href="#about"
              className="px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-full shadow-md hover:bg-red-600 transition"
            >
              A propos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
