export default function Partenaires() {
    return (
      <section className="bg-white py-8 px-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Ils nous accompagnent
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {/* Exemple d'images de partenaires */}
          <img src="/images/partner1.png" alt="Partenaire 1" className="h-20 object-contain" />
          <img src="/images/partner2.png" alt="Partenaire 2" className="h-20 object-contain" />
          <img src="/images/partner3.png" alt="Partenaire 3" className="h-20 object-contain" />
          <img src="/images/partner4.png" alt="Partenaire 4" className="h-20 object-contain" />
          <img src="/images/partner5.png" alt="Partenaire 5" className="h-20 object-contain" />
          <img src="/images/partner6.png" alt="Partenaire 6" className="h-20 object-contain" />
          <img src="/images/partner7.png" alt="Partenaire 7" className="h-20 object-contain" />
        </div>
      </section>
    );
  }
  