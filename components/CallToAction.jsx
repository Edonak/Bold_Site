import { Button } from "./ui/button";

export default function CallToAction() {
  return (
    <div className="flex justify-center items-center bg-slate-100 py-8 md:py-12 h-auto">
      <div className="flex flex-col md:flex-row items-center bg-[#8F1D07] translate-y-32 text-white rounded-2xl p-6 md:p-8 w-[90%] md:w-[70%] lg:w-[40%] max-w-4xl shadow-lg relative md:translate-y-4">
        <div className="text-center md:text-left mb-6 md:mb-0 flex-1">
          <h2 className="text-lg md:text-2xl font-bold mb-4">
            Vous aimez ce que nous faisons?
          </h2>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <Button className="text-white border border-white hover:bg-white hover:text-[#8F1D07] transition">
              Faire un don
            </Button>
            <Button className="text-cyan-950 border border-cyan-950 hover:bg-cyan-950 hover:text-white transition">
              Nous Contacter
            </Button>
          </div>
        </div>
        {/* Image */}
        <div className="hidden md:block absolute md:relative md:ml-8">
          <img
            src="/images/CallToAction.svg"
            alt="Poignée de main"
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
      </div>
    </div>
  );
}
