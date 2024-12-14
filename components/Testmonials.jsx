export default function Testmonial() {
    return (
      <div className="w-full mx-auto">
        {/* Section Stats */}
        <section className="bg-white text-center py-12 px-4">
          <h2 className="text-2xl font-bold text-black mb-6">
            Nos Actions en 2024 en chiffre
          </h2>
          <div className="flex justify-center space-x-12">
            {/* Card 1 */}
            <div>
              <h3 className="text-4xl font-bold text-red-600 mb-2">30K</h3>
              <p className="text-gray-700">Somme Récoltées en $</p>
            </div>
            {/* Card 2 */}
            <div>
              <h3 className="text-4xl font-bold text-yellow-500 mb-2">1/3</h3>
              <p className="text-gray-700">Des femmes est victime de violences sexuelles</p>
            </div>
            {/* Card 3 */}
            <div>
              <h3 className="text-4xl font-bold text-green-600 mb-2">50</h3>
              <p className="text-gray-700">
                Partenaires qui nous accompagnent
              </p>
            </div>
          </div>
        </section>
  
        {/* Section Testimonials */}
        <section className="bg-red-800 py-12 px-4">
          <h2 className="text-center text-2xl font-bold text-white mb-10">
            Ce qu'ils disent de nous
          </h2>
  
          <div className="flex pl-14 pr-14 flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center w-full md:w-2/3">
              <img
                src="/images/temoignage 1.jpg"
                alt="Témoignage 1"
                className="mx-auto rounded-full w-24 h-24 -mt-12 mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Identité de la personne</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur. Elit cras magna orci ultrices
                sed. Non rhoncus a faucibus tristique sed nunc.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center w-full md:w-2/3">
              <img
                src="/images/temoignage 1.jpg"
                alt="Témoignage 1"
                className="mx-auto rounded-full w-24 h-24 -mt-12 mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Identité de la personne</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur. Elit cras magna orci ultrices
                sed. Non rhoncus a faucibus tristique sed nunc.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center w-full md:w-2/3">
              <img
                src="/images/temoignage 2.jpg"
                alt="Témoignage 2"
                className="mx-auto rounded-full w-24 h-24 -mt-12 mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Identité de la personne</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur. Elit cras magna orci ultrices
                sed. Non rhoncus a faucibus tristique sed nunc.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center w-full md:w-2/3">
              <img
                src="/images/temoignage 3.jpg"
                alt="Témoignage 3"
                className="mx-auto rounded-full w-24 h-24 -mt-12 mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Identité de la personne</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur. Elit cras magna orci ultrices
                sed. Non rhoncus a faucibus tristique sed nunc.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  