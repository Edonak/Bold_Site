import { Button } from "./ui/button";

export default function FormulaireContact() {
    return (
      <section className="flex flex-col md:flex-row bg-slate-100 p-32 ">
        {/* Formulaire de contact */}
        <div className="bg-yellow-700 text-white flex-1 p-16 h-[25hv]">
          <h3 className="text-lg font-bold mb-6">NOUS CONTACTER</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Champ Nom */}
            <div>
              <label>Nom</label>
              <div className="border-b-2 border-white"></div>
            </div>
            {/* Champ Prénom */}
            <div>
              <label>Prénom</label>
              <div className="border-b-2 border-white"></div>
            </div>
            {/* Champ Email */}
            <div>
              <label>Email</label>
              <div className="border-b-2 border-white"></div>
            </div>
            {/* Champ Téléphone */}
            <div>
              <label>Téléphone</label>
              <div className="border-b-2 border-white"></div>
            </div>
          </div>
          <p className="mt-6 text-sm"> 
            <a href="mailto:contact@bold.com" className="font-bold underline">
              contact@bold.com
            </a>
          </p>
          <div className="flex mt-8">
            <a href="#" className="text-2xl"><img src="/images/twitter.png" alt="Twitter" className="w-[20%]" /></a>
            <a href="#" className="text-2xl"><img src="/images/facebook.png" alt="Facebook" className="w-[20%]" /></a>
            <a href="#" className="text-2xl"><img src="/images/instagram.png" alt="Instagram" className="w-[20%]" /></a>
          </div>
        </div>
  
        {/* Section Recevoir nos infos */}
        <div className="bg-red-700 text-white flex-1 p-8 h-[25hv]">
          <h3 className="text-lg font-bold mb-6">Recevoir nos infos</h3>
          <p className="text-sm mb-4">
            En vous abonnant à nos pages, vous serez informé de toutes nos actions
          </p>
          <input
            type="email"
            placeholder="Votre email"
            className="w-full px-4 py-2 text-black rounded mb-4"
          />
          <Button className='bg-transparent text-white border-white'>S'abonner</Button>
          <div className="flex mt-4">
            <a href="#" className="text-2xl"><img src="/images/twitter.png" alt="Twitter" className="w-[20%]"/></a>
            <a href="#" className="text-2xl"><img src="/images/instagram.png" alt="Instagram" className="w-[20%]" /></a>
            <a href="#" className="text-2xl"><img src="/images/facebook.png" alt="Facebook" className="w-[20%]" /></a>
          </div>
        </div>
      </section>
    );
  }
  