import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <div className="text-center mt-12 md:mt-24">
        <h1 className="text-5xl">404</h1>
        <div className="my-10">
          <p>Ooops, não foi possível encontrar a página!</p>
          <span>Clique no botão abaixo para redirecionar à Página Inicial</span>
        </div>
        <Link href="/" className="bg-slate-500 p-2 w-fit rounded-md text-lg transition-all hover:opacity-90">Ir para Início</Link>
      </div>
    </>
  )
}

export default NotFound;