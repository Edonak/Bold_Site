/* /pages/index.js */

import Image from 'next/image';

export default function AboutDetail() {
  return (
    <div className="font-sans bg-gray-50 p-4">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Que faisons-nous
      </h1>
      
      {/* Section principale */}
      <section className="max-w-5xl mx-auto">
        {/* Première partie */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/a-propos.png" // Remplace avec le bon chemin de ton image
              alt="BOLD Image"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Comment le faisons-nous
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A travers notre action, nous poursuivons deux objectifs principaux :
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Contribuer &agrave; l&rsquo;am&eacute;lioration de la condition de vie des femmes et des filles dans leurs communaut&eacute;s ;</li>
              <li>Participer au d&eacute;veloppement communautaire en favorisant une participation &eacute;quitable et &eacute;gale ;</li>
              <li>Appuyer les initiatives locales des femmes et des jeunes filles ;</li>
              <li>Offrir un espace et cadre d&rsquo;&eacute;change pour renforcer la solidarit&eacute; ;</li>
              <li>Transmettre la connaissance de leurs droits &agrave; travers des techniques d&rsquo;apprentissage.</li>
            </ul>
          </div>
        </div>

        {/* Deuxième partie */}
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Nos valeurs
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A travers notre action, nous poursuivons deux objectifs principaux :
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Contribuer &agrave; l&rsquo;am&eacute;lioration de la condition de vie des femmes et des filles dans leurs communaut&eacute;s ;</li>
              <li>Participer au d&eacute;veloppement communautaire en favorisant une participation &eacute;quitable et &eacute;gale ;</li>
              <li>Travailler en synergie avec des partenaires socio-humanitaires pour la r&eacute;alisation de plans d&rsquo;accompagnement.</li>
            </ul>
          </div>
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/a-propos.png" // Remplace avec le bon chemin de ton image
              alt="BOLD Image"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
