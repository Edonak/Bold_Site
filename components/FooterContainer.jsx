export default function FooterContainer() {
  return (
    <footer className="bg-[#0E4D55] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img
            src="/images/logo.png"
            alt="BOLD Logo"
            className="w-32 md:w-40 mb-4"
          />
          <p className="text-sm text-center md:text-left">
            17 B bis Viaza c/Matete
          </p>
          <p className="text-sm text-center md:text-left">Kinshasa Funa</p>
          <p className="text-sm text-center md:text-left">
            République Démocratique Du Congo
          </p>
        </div>
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="#accueil" className="hover:text-gray-300 transition">
                Accueil
              </a>
            </li>
            <li>
              <a href="#actions" className="hover:text-gray-300 transition">
                Nos actions
              </a>
            </li>
            <li>
              <a href="#a-propos" className="hover:text-gray-300 transition">
                A propos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/twitter.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/facebook.png"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/instagram.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/youtube.png" alt="YouTube" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-500 mt-6 pt-4 text-center text-sm px-4 md:w-[70%] md:mx-auto">
        Copyright ©2024. Tout droit réservé BOLD
      </div>
    </footer>
  );
}
