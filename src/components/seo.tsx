import React from "react"
import { Helmet } from "react-helmet"

interface MetadaProps {
    title: string;
    description: string;
    siteUrl: string;
    author: string;
    image: string;
}

interface SEOProps {
    metadata: MetadaProps;
}

const SEO: React.FC<SEOProps> = ({metadata}) => {

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="author" content={metadata.author} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta property="og:image" content={metadata.image} />
      <meta property="twitter:title" content={metadata.title} />
      <meta property="twitter:description" content={metadata.description} />
      <meta property="twitter:image" content={metadata.image} />
      <meta property="twitter:card" content={metadata.image} />
    </Helmet>
  )
}

export default SEO
