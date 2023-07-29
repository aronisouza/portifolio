import Image from "next/image"
import Link from "next/link"
import { AiOutlineMenuUnfold } from 'react-icons/ai'

interface MenuProps {
  isVisible: boolean;
  closeMenu: () => void;
}

export const Menu = ({ isVisible, closeMenu }: MenuProps) => {
  return (
    <div className={`${isVisible ? 'flex' : 'hidden'}
    fixed inset-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-sm md:hidden`}
      onClick={closeMenu}
    >
      <div className="w-full bg-a-background-b h-96 shadow-md p-y3 p-x5" onClick={(e) => e.stopPropagation()}>
        <div className="flex py-3 px-5 justify-between items-center sticky top-0">
          <Link href="/">
            <Image src="/as-logo.png" width={50} height={0} alt="Ícone logo aroni souza" />
          </Link>
          <button onClick={closeMenu}>
            <AiOutlineMenuUnfold className="fill-white w-10 h-10" />
          </button>
        </div>
        <nav className="flex flex-col gap-5 m-5">
          <Link href="/">Sobre mim</Link>
          <Link href="/portifolio">Portifolio</Link>
          <Link href="/educacao-skills">Educação & Skills</Link>
        </nav>
      </div>
    </div>
  )
}