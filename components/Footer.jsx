import CallToAction from './CallToAction';

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white text-sm pt-0">
      {/* Composant Call to Action */}
      <CallToAction />

      {/* Section principale */}
      <div className="flex flex-col md:flex-row justify-between p-8">
        {/* Section Logo & Adresse */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl font-bold">BOLD</span>
            <p className="text-xs font-light">Building Optimism, Leadership & Development</p>
          </div>
          <p className="text-gray-300">Adresse physique de l’ONG</p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-2 text-lg">Menu</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-gray-400">Accueil</a></li>
            <li><a href="/actions" className="hover:text-gray-400">Nos actions</a></li>
            <li><a href="/about" className="hover:text-gray-400">A propos</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" aria-label="Twitter">
            <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 text-center p-4 text-gray-400">
        Copyright ©2024. Tout droit reserve BOLD
      </div>
    </footer>
  );
}
