import Image from "next/image"
import Link from "next/link"
import {Poppins} from "next/font/google"

const poppins = Poppins({
  subsets:['latin'],
  weight:'500'
});

export const Header = () => {
  return(
    <header className={`${poppins.className} bg-a-background-b flex py-3 px-5 justify-between items-center sticky top-0 z-50`}>
        <Link href="/">
          <Image src="/as-logo.png" width={75} height={0} alt="Ícone logo aroni souza" />
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-base">
          <Link href="/">Sobre mim</Link>
          <Link href="/portifolio">Portifolio</Link>
          <Link href="/educacao-skills">Educação & Skills</Link>
        </nav>
      </header>
  )
}