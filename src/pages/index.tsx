import * as React from "react"
import type { PageProps } from "gatsby"

//Transversales
import Header from "./../components/header";
import Footer from "./../components/footer";
import SEO from "./../components/seo";

//Sections
import SectionBannerIndex from "./../components/section-bannerIndex";
import SectionEvents from "../components/section-events";
import SectionAbout from "../components/section-about";

const metadata = {
  title: "Somos una ONG que ayuda a fortalecer habilidades en Desarrollo de Software | ZonaTech Perú",
  description: "Descubre ZonaTech Perú, una ONG dedicada a democratizar el conocimiento en Desarrollo de Software en todo el Perú. Únete a nuestra comunidad de apasionados por la tecnología y accede a programas de formación, eventos educativos y oportunidades de colaboración. ¡Impulsa tu carrera en tecnología con ZonaTech!",
  siteUrl: "https://zonatech.pe/",
  author: "ZonaTech Perú",
  image: "https://raw.githubusercontent.com/ZonaTech-Peru/Website/master/images/portada.jpg"
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="main" >
      <SEO metadata={metadata} />
      <Header  />
      <SectionBannerIndex/>
      <SectionAbout/>
      <SectionEvents queryType="byDate" date="2024/01/29" />
      <Footer />
    </main>
  )
}

export default IndexPage