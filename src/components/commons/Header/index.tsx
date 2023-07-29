import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google"
import { Menu } from "./Menu";
import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500'
});

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const stateMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('isMenuOpen:', isMenuOpen)
  }

  return (
    <header className={`${poppins.className} bg-a-background-b flex py-3 px-5 justify-between items-center sticky top-0 z-50`}>
      <Link href="/">
        <Image src="/as-logo.png" width={50} height={0} alt="Ícone logo aroni souza" />
      </Link>
      <button className="p-1 md:hidden" onClick={stateMenu}>
        <AiOutlineMenu className="fill-white w-10 h-10" />
      </button>
      <nav className="hidden md:flex items-center gap-10 text-base">
        <Link href="/">Sobre mim</Link>
        <Link href="/portifolio">Portifolio</Link>
        <Link href="/educacao-skills">Educação & Skills</Link>
      </nav>
      <Menu isVisible={isMenuOpen} closeMenu={stateMenu}/>
    </header>
  )
}