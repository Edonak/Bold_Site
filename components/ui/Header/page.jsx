import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "../button";

export default function Header() {
  return (
    <header className="py-4 xl:12 text-black bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png" // Chemin de l'image relative au dossier `public`
            alt="Logo"
            width={100} // Largeur en pixels
            height={100} // Hauteur en pixels
            priority // Optionnel : pour charger l'image en priorité
          />
        </Link>
        {/**Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/don">
            <Button>Faire un don</Button>
          </Link>
        </div>
        {/**Mobile nav */}
        <div className="xl:hidden">
          mobile Nav
        </div>
      </div>
    </header>
  );
}
