import Image from "next/image"
import Link from "next/link"
import { Edu_SA_Beginner, Poppins } from "next/font/google"

const destaque = Edu_SA_Beginner({
  subsets: ['latin'],
  weight: '500'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500'
});

export const AboutMe = () => {
  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-24 py-8 text-lg lg:text-left lg:flex-nowrap lg:justify-between">

      <div className="text-white flex flex-col items-center lg:items-start gap-3 w-full lg:w-120">
        <span className="font-thin text-lg">Olá 👋 sou Aroni Souza</span>
        <span className="font-normal text-sm">C#, PHP, NodeJs, ReactJs e NextJs</span>
        <div className="flex flex-col gap-y-2 max-w-lg">
          <p className={`${poppins.className} text-sm`}>
            Tenho 41 anos sou desenvolvedor Fullstack com mais de 2 anos de experiência trabalhando como Freelancer
          </p>
          <Link href="/" className="p-2 bg-a-background-b w-fit text-lg rounded-lg transition-all hover:opacity-80">Entrar em contato</Link>
        </div>

        <div>
          <h2 className={`${destaque.className} text-4xl text-a-primary pb-5`}>Skills</h2>
          <img src="./skills.svg" />
          <h2 className={`${destaque.className} text-4xl text-a-primary py-5`}>Estudando no momento</h2>
          <img src="./estudando.svg" />
        </div>

      </div>

      <div>
        <Image className="rounded-full"
          alt="Foto do bonitão"
          src="https://avatars.githubusercontent.com/u/6691761?v=4"
          width={260}
          height={260}
          unoptimized
        />
      </div>

    </main>
  )
}
