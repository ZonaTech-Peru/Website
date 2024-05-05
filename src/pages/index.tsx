import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

//Transversales
import Header from "./../components/header";
import Footer from "./../components/footer";

//Section
import SectionBannerIndex from "./../components/section-bannerIndex";
import SectionEvents from "../components/section-events";
import SectionAbout from "../components/section-about";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="main" >
      <Header shape={true} />
      <SectionBannerIndex/>
      <SectionAbout/>
      <SectionEvents queryType="byDate" date="2024/01/29" />
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
