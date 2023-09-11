import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

//Transversales
import Header from "./../components/header";
import Footer from "./../components/footer";

//Section
import SectionBannerIndex from "./../components/section-bannerIndex";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="main" >
      <Header shape={true} />
      <SectionBannerIndex/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
