import Image from 'next/image';
const HeroSectionAbout = () => {
  return (
    <div className="relative h-screen bg-gray-800">
      <Image
        src="/images/model1.da388323327b5afc3584.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-70"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-bold">Bienvenue chez BOLD</h1>
        <p className="mt-4 text-xl p-3">Ensemble valorisons la voix des femmes , des filles et construisons leur un espace d'expression ouverte et positive.</p>
        
      </div>
    </div>
  );
};

export default HeroSectionAbout;
