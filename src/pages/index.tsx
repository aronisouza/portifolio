import { AboutMe } from '@/components/Home/AboutMe'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Sobre mim | Aroni Souza</title>
      <meta name="description" content="Sou Desenvolvedor C#, PHP, NodeJs, Reactjs, nextjs com mais de 2 anos de experiencia como freelancer" />
    </Head>
      <div className='py-12 px-6 md:px-32 space-y-10 md:space-y-28'>
        <AboutMe />
      </div>
    </>
  )
}
