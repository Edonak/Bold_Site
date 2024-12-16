import AboutComponent from "@/components/aboutComponent";
import ActionsSection from "@/components/ActionSection";
import Footer from "@/components/Footer";
import FormulaireContact from "@/components/FormulaireContact";
import HeroSection from "@/components/Herosection";
import Partenaires from "@/components/Partenaires";
import Testmonial from "@/components/Testmonials";


export default function Home() {
  return (
    <main>
      <section className="bg-white w-full h-[92vh] text-black">
        <HeroSection />
        <AboutComponent />
        <ActionsSection />
        <Testmonial />
        <Partenaires />
        <FormulaireContact />
        <Footer />
      </section>
      
    </main>
  );
}
