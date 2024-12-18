import { Button } from "./ui/button";

export default function CallToAction() {
  return (
    <div className="flex justify-center items-center bg-slate-100 py-12 h-[20vh]">
      <div className="flex flex-col md:flex-row items-center bg-[#8F1D07] text-white rounded-2xl p-8 w-[40%] max-w-4xl shadow-lg relative translate-y-6">
        {/* Texte principal */}
        <div className="text-center md:text-left mb-4 md:mb-0 flex-1">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Vous aimez ce que nous faisons?
          </h2>
          {/* Boutons */}
          <div className="flex justify-center md:justify-start gap-4">
          <Button className="text-white border-white">Faire un don</Button>
          <Button className="text-white  bg-cyan-950">Nous Contacter</Button>
          </div>
        </div>
        {/* Image de la poignée de main */}
        <div className="absolute right-0 bottom-0 hidden md:block mr-8">
          <img
            src="/images/CallToAction.svg"
            alt="Poignée de main"
            className="w-32 h-32"
          />
        </div>
      </div>
    </div>
  );
}
