import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <div>
        <h1>404</h1>
        <div>
          <p>Ooops, não foi possível encontrar a página!</p>
          <span>Clique no botão abaixo para redirecionar à Página Inicial</span>
        </div>
        <Link href="/">Ir para Início</Link>
      </div>
    </>
  )
}

export default NotFound;