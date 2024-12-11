"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links =[
    {
        name:"Accueil",
        path:"/",
    },
    {
        name:"Nos actions",
        path:"/actions",
    },
    {
        name:"A Propos",
        path:"/about",
    },
    {
        name:"Contact",
        path:"/contact",
    }
]

export default function Nav() {
  return (
    <nav className="flex gap-8">
        {links.map((link, index) =>{
            return(
                <Link href={link.path} key={index}>
                    {link.name}
                </Link>
            )
        })}


    </nav>
  )
}
