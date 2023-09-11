import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

//Transversales
import Header from "../components/header";
import Footer from "../components/footer";

//Section
import SectionAbout from "../components/section-about";


const Nosotros: React.FC<PageProps> = () => {
  return (
    <main className="main" >
      <Header  background={true}/>
      <SectionAbout/>
      <Footer/>
    </main>
  )
}

export default Nosotros

export const Head: HeadFC = () => <title>Home Page</title>
