import AboutComponent from "@/components/aboutComponent";
import ActionsSection from "@/components/ActionSection";
import HeroSection from "@/components/Herosection";
import Testmonial from "@/components/Testmonials";


export default function Home() {
  return (
    <main>
      <section className="bg-white w-full h-[92vh] text-black">
        <HeroSection />
        <AboutComponent />
        <ActionsSection />
        <Testmonial />
      </section>
      
    </main>
  );
}
