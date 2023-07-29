import { ReactNode } from "react"
import { Header } from "./Header"
import { Inconsolata} from "next/font/google"

const texto = Inconsolata({
  subsets:['latin'],
  weight:'500'
});


interface LayoutPtops {
  children: ReactNode
}
export const Layout = ({ children }: LayoutPtops) => {
  return (
    <div className={texto.className}>
      <Header />
      {children}
    </div>
  )
}