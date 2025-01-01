export default function Actions() {
  return (
    <main className="bg-[#8C7829] text-white font-sans h-[auto]">
      <h2 className="text-center text-2xl md:text-3xl font-bold pt-12 pb-8">
        Que faisons-nous
      </h2>

      <div className="container mx-auto px-4 grid grid-rows-4 grid-cols-6 gap-10 py-8">
        {/* Bloc 1 - En haut à gauche */}
        <div className="relative group col-span-3 row-span-1 mt-32">
          <img
            src="/images/impliqué.jpg"
            alt="Impliquées"
            className="w-full h-full object-cover rounded-lg"
          />
          <Overlay
            title="Impliquées"
            text="C’est un programme qui consiste à manifester le leadership des femmes
à travers des actions concrètes pouvant améliorer la condition de vie de
leurs pairs et dans leurs communautés et leurs pays."
            className="text-center"
          />
        </div>
        <div className="relative group col-span-3 row-span-1 mb-32">
          <img
            src="/images/paroleAudatieuse.jpg"
            alt="La parole audacieuse"
            className="w-full h-full object-cover rounded-lg"
          />
          <Overlay
            title="La parole audacieuse"
            text="C'est un programme qui manifeste le leadership des femmes à travers des actions concrètes."
          />
        </div>
        <div className="relative group col-span-6 row-span-2 my-32">
          <img
            src="/images/éducationAdaptée.jpg"
            alt="Éducation adaptée"
            className="w-full h-[auto] object-cover rounded-lg"
          />
          <Overlay
            title="Éducation adaptée"
            text="Consiste en un programme de formation innové et adapté aux besoins des communautés selon leur contexte."
          />
        </div>
        <div className="relative group col-span-3 row-span-1 mb-32">
          <img
            src="/images/SolutionClimat.jpg"
            alt="Solutions pour le climat"
            className="w-full h-full object-cover rounded-lg"
          />
          <Overlay
            title="Solutions pour le climat"
            text="La prévention des catastrophes, la protection de l'environnement et des écosystèmes."
          />
        </div>
        <div className="relative group col-span-3 row-span-1 mb-32">
          <img
            src="/images/blood.jpg"
            alt="Sisterhood Support System"
            className="w-full h-full object-cover rounded-lg"
          />
          <Overlay
            title="Sisterhood Support System"
            text="Encourager les femmes à travers un accompagnement juridique et psychologique."
          />
        </div>
      </div>
    </main>
  );
}

function Overlay({ title, text }) {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4 rounded-b-lg">
      <h3 className="text-lg font-bold text-yellow-400">{title}</h3>
      <p className="text-sm leading-snug">{text}</p>
      <a href="#" className="text-red-400 text-sm mt-2 inline-block">
        Voir plus
      </a>
    </div>
  );
}
