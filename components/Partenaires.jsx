export default function Partenaires() {
  return (
    <section className="bg-white py-8 px-4 overflow-hidden h-[40vh]">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
        Ils nous accompagnent
      </h2>

      {/* Conteneur défilant */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll gap-8 min-w-full">
          {/* Liste des logos - doublée pour créer un effet continu */}
          <img src="/images/OIP-2.png" alt="Partenaire 1" className="h-20 object-contain" />
          <img src="/images/OIP.png" alt="Partenaire 2" className="h-20 object-contain" />
          <img src="/images/OIP-3.png" alt="Partenaire 3" className="h-20 object-contain" />
          <img src="/images/santé.png" alt="Partenaire 4" className="h-20 object-contain" />
          <img src="/images/unicef-.png" alt="Partenaire 5" className="h-20 object-contain" />
          <img src="/images/OIP-3.png" alt="Partenaire 6" className="h-20 object-contain" />
          <img src="/images/logo.png" alt="Partenaire 7" className="h-20 object-contain" />

          {/* Deuxième groupe de logos pour créer un défilement continu */}
          <img src="/images/OIP-2.png" alt="Partenaire 1" className="h-20 object-contain" />
          <img src="/images/OIP.png" alt="Partenaire 2" className="h-20 object-contain" />
          <img src="/images/OIP-3.png" alt="Partenaire 3" className="h-20 object-contain" />
          <img src="/images/santé.png" alt="Partenaire 4" className="h-20 object-contain" />
          <img src="/images/unicef-.png" alt="Partenaire 5" className="h-20 object-contain" />
          <img src="/images/OIP-3.png" alt="Partenaire 6" className="h-20 object-contain" />
          <img src="/images/logo.png" alt="Partenaire 7" className="h-20 object-contain" />
        </div>
      </div>
    </section>
  );
}
