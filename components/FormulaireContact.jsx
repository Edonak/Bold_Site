import { Button } from "./ui/button";

export default function FormulaireContact() {
  return (
    <section className="flex flex-col lg:flex-row bg-slate-100 p-6 md:p-12 lg:p-32 gap-6 lg:gap-0">
      <div className="bg-yellow-700 text-white flex-1 p-6 md:p-8 lg:p-16 h-auto lg:h-[25vh]">
        <h3 className="text-lg font-bold mb-6 text-center md:text-left">
          NOUS CONTACTER
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div>
            <label>Nom</label>
            <div className="border-b-2 border-white"></div>
          </div>
          <div>
            <label>Prénom</label>
            <div className="border-b-2 border-white"></div>
          </div>
          <div>
            <label>Email</label>
            <div className="border-b-2 border-white"></div>
          </div>
          <div>
            <label>Téléphone</label>
            <div className="border-b-2 border-white"></div>
          </div>
        </div>
        <p className="mt-6 text-sm text-center md:text-left">
          <a href="mailto:contact@bold.com" className="font-bold underline">
            contact@bold.com
          </a>
        </p>
        <div className="flex justify-center md:justify-start mt-8 gap-4">
          <a href="#" className="text-2xl">
            <img
              src="/images/twitter.png"
              alt="Twitter"
              className="w-8 md:w-6"
            />
          </a>
          <a href="#" className="text-2xl">
            <img
              src="/images/facebook.png"
              alt="Facebook"
              className="w-8 md:w-6"
            />
          </a>
          <a href="#" className="text-2xl">
            <img
              src="/images/instagram.png"
              alt="Instagram"
              className="w-8 md:w-6"
            />
          </a>
        </div>
      </div>
      <div className="bg-red-700 text-white flex-1 p-6 md:p-8 lg:p-16 h-auto lg:h-[25vh]">
        <h3 className="text-lg font-bold mb-6 text-center md:text-left">
          Recevoir nos infos
        </h3>
        <p className="text-sm mb-4 text-center md:text-left">
          En vous abonnant à nos pages, vous serez informé de toutes nos actions
        </p>
        <input
          type="email"
          placeholder="Votre email"
          className="w-full px-4 py-2 text-black rounded mb-4"
        />
        <div className="flex justify-center md:justify-start">
          <Button className="bg-transparent text-white border border-white">
            S'abonner
          </Button>
        </div>
        <div className="flex justify-center md:justify-start mt-4 gap-4">
          <a href="#" className="text-2xl">
            <img
              src="/images/twitter.png"
              alt="Twitter"
              className="w-8 md:w-6"
            />
          </a>
          <a href="#" className="text-2xl">
            <img
              src="/images/instagram.png"
              alt="Instagram"
              className="w-8 md:w-6"
            />
          </a>
          <a href="#" className="text-2xl">
            <img
              src="/images/facebook.png"
              alt="Facebook"
              className="w-8 md:w-6"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
