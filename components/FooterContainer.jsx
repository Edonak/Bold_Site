export default function FooterContainer() {
  return (
    <footer className="bg-[#0E4D55] text-white py-8 h-[38vh]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo et Adresse */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/images/logo.png"
            alt="BOLD Logo"
            className="w-32 mb-4"
          />
          <p className="text-sm text-center md:text-left">
            Adresse physique de l’ONG
          </p>
        </div>

        {/* Menu */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h3 className="text-lg font-bold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#accueil"
                className="hover:text-gray-300 transition"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#actions"
                className="hover:text-gray-300 transition"
              >
                Nos actions
              </a>
            </li>
            <li>
              <a
                href="#a-propos"
                className="hover:text-gray-300 transition"
              >
                A propos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-300 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-4 mt-6 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/twitter.png"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/facebook.png"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/instagram.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-500 mt-6 pt-4 text-center text-sm w-[70%] mx-60">
        Copyright ©2024. Tout droit réservé BOLD
      </div>
    </footer>
  );
}
