import * as React from "react"
import type { PageProps } from "gatsby"

//Transversales
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "./../components/seo";

//Sections
import SectionEvents from "../components/section-events";

const metadata = {
  title: "Todos Nuestro Eventos | ZonaTech Perú",
  description: "Explora nuestros eventos pasados y futuros en ZonaTech Perú. Desde emocionantes talleres y charlas hasta programas de formación intensiva, encuentra oportunidades para aprender, crecer y conectar con otros apasionados por la tecnología. ¡No te pierdas nuestros próximos eventos y únete a la experiencia ZonaTech!",
  siteUrl: "https://zonatech.pe/eventos",
  author: "ZonaTech Perú",
  image: "https://raw.githubusercontent.com/ZonaTech-Peru/Website/master/images/portada.jpg"
}

const Eventos: React.FC<PageProps> = () => {
  return (
    <main className="main" >
      <SEO metadata={metadata} />
      <Header shape={true} background={true}  />
      <SectionEvents queryType="all"  />
      <Footer/>
    </main>
  )
}

export default Eventos