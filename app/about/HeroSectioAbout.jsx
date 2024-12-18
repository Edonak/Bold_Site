// components/HeroSection.js
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
        <h1 className="text-5xl font-bold">Bienvenue à Kadea Academy</h1>
        <p className="mt-4 text-xl">Votre avenir commence ici</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
          En savoir plus
        </button>
      </div>
    </div>
  );
};

export default HeroSectionAbout;
