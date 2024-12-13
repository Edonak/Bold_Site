// app/components/ActionsSection.jsx

export default function ActionsSection() {
    const actions = [
      {
        title: 'Impliqués',
        description:
          'Ce programme offre un espace d’expression libre autour des thématiques qui les préoccupent et qui appellent à une discussion.',
        image: '/images/action-1.jpg',
      },
      {
        title: 'La parole audacieuse',
        description:
          'C’est un programme qui consiste à manifester le leadership des femmes à travers des actions concrètes.',
        image: '/images/action-2.jpg',
      },
      {
        title: 'Éducation adaptée',
        description:
          'Consiste en un programme de formation innové et adapté aux besoins des communautés selon leur contexte et évolution.',
        image: '/images/action-3.jpg',
      },
      {
        title: 'Solutions pour le climat',
        description:
          'La prévention des catastrophes, la protection de l’environnement et les énergies propres.',
        image: '/images/action-4.jpg',
      },
      {
        title: 'Sisterhood Support System',
        description:
          'Soutien juridique, économique et psychologique pour les femmes dans leurs communautés.',
        image: '/images/action-5.jpg',
      },
    ];
  
    return (
      <section className="bg-yellow-900 text-white py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Que faisons-nous
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-md overflow-hidden relative group"
            >
              {/* Image */}
              <img
                src={action.image}
                alt={action.title}
                className="w-full h-48 object-cover"
              />
              {/* Texte */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{action.title}</h3>
                <p className="text-sm leading-relaxed">{action.description}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold mt-4 inline-block group-hover:underline"
                >
                  Voir plus
                </a>
              </div>
              {/* Overlay pour l'effet */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  