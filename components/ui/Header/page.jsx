import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "../button";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png" 
            alt="Logo"
            width={100} 
            height={100} 
            priority 
          />
        </Link>
        {/** Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/don">
            <Button>Faire un don</Button>
          </Link>
        </div>
        {/** Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
