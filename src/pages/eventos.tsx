import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

//Transversales
import Header from "../components/header";
import Footer from "../components/footer";

//Section
import SectionEvents from "../components/events";


const Eventos: React.FC<PageProps> = () => {
  return (
    <main className="main" >
      <Header background={true}  />
      <SectionEvents/>
      <Footer/>
    </main>
  )
}

export default Eventos

export const Head: HeadFC = () => <title>Home Page</title>
