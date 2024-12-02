import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData, getImage } from 'gatsby-plugin-image';

interface SeoSiteNode {
  title: string;
  description: string;
  siteUrl: string;
}

interface SeoData {
  site: {
    siteMetadata: SeoSiteNode;
  };
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export default function useSeoDetail() {
  const data: SeoData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      file(name: { eq: "banner-sm" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1200, height: 630, quality: 90)
        }
      }
    }
  `);

  return {
    site: data.site.siteMetadata,
    file: getImage(data.file.childImageSharp.gatsbyImageData),
  };
}
