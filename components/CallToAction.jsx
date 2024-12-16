export default function CallToAction() {
    return (
      <div className="bg-red-700 w-[50%] text-white p-6 flex flex-col items-center md:flex-row md:justify-between rounded-lg">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Vous aimez ce que nous faisons?</h2>
        <div className="flex gap-4">
          <button className="bg-gray-200 text-black px-4 py-2 rounded shadow hover:bg-gray-300 transition">
            Faire un don
          </button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded shadow hover:bg-gray-400 transition">
            Nous Contacter
          </button>
        </div>
      </div>
    );
  }
  