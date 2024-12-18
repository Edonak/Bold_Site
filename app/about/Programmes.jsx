/* /pages/index.js */

import Image from "next/image";

export default function Programmes() {
  return (
    <div className="font-sans bg-gray-50 p-4">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Nos programmes
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
              Impliquées
            </h2>
            <p className="text-gray-600 leading-relaxed">
              C’est un programme qui consiste à manifester le leadership des
              femmes à travers des actions concrètes pouvant améliorer la
              condition de vie de leurs pairs et dans leurs communautés et leurs
              pays. C’est grâce à ce programme que les femmes et les filles
              développeront des plans d’actions visant à appuyer la bonne
              gouvernance dans leurs pays ainsi que les compétences sur
              lesquelles sont construites leur résilience économique. Impliquées
              aux cotés des autres femmes, INVOLVED constitue également un
              réseau national réunissant des femmes et des filles au niveau
              national. BOLD soutient le développement des initiatives
              économiques des femmes et des filles afin de favoriser leur
              autonomie financière et leur doter de pouvoir et des capacités
              pour répondre à leurs besoins et ceux de leurs familles.
            </p>
          </div>
        </div>

        {/* Deuxième partie */}
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              La parole audacieuse
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ce programme offre un espace d’expression libre autour des
              thématiques qui les préoccupent et qui appellent à une discussion.
              :
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>
                Ces discussions vont d’un cercle de confiance entre femmes pour
                échanger sur des sujets qui les préoccupent et partager des
                témoignages aux émissions préenregistrées pour sensibiliser et
                atteindre une audience plus large et diversifiée selon les
                thématiques choisis.
              </li>
              <li>
                Il s’agit ainsi d’un cadre d’échange sur les défis
                intersectoriels auxquels font face les femmes et les filles en
                Afrique Central, de l’Est et globalement méritent qu’on y
                apporte une attention particulière.
              </li>
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
              Impliquées
            </h2>
            <p className="text-gray-600 leading-relaxed">
              C’est un programme qui consiste à manifester le leadership des
              femmes à travers des actions concrètes pouvant améliorer la
              condition de vie de leurs pairs et dans leurs communautés et leurs
              pays. C’est grâce à ce programme que les femmes et les filles
              développeront des plans d’actions visant à appuyer la bonne
              gouvernance dans leurs pays ainsi que les compétences sur
              lesquelles sont construites leur résilience économique. Impliquées
              aux cotés des autres femmes, INVOLVED constitue également un
              réseau national réunissant des femmes et des filles au niveau
              national. BOLD soutient le développement des initiatives
              économiques des femmes et des filles afin de favoriser leur
              autonomie financière et leur doter de pouvoir et des capacités
              pour répondre à leurs besoins et ceux de leurs familles.
            </p>
          </div>
        </div>

        {/* Deuxième partie */}
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              La parole audacieuse
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ce programme offre un espace d’expression libre autour des
              thématiques qui les préoccupent et qui appellent à une discussion.
              :
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>
                Ces discussions vont d’un cercle de confiance entre femmes pour
                échanger sur des sujets qui les préoccupent et partager des
                témoignages aux émissions préenregistrées pour sensibiliser et
                atteindre une audience plus large et diversifiée selon les
                thématiques choisis.
              </li>
              <li>
                Il s’agit ainsi d’un cadre d’échange sur les défis
                intersectoriels auxquels font face les femmes et les filles en
                Afrique Central, de l’Est et globalement méritent qu’on y
                apporte une attention particulière.
              </li>
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
