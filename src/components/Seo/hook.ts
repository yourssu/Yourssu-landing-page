import { graphql, useStaticQuery } from 'gatsby';

type SeoSiteNode = {
  title: string;
  description: string;
  siteUrl: string;
};

type SeoFileNode = {
  base64: string;
  height: number;
  src: string;
  srcSet: string;
  width: number;
};

interface SeoData {
  site: {
    siteMetadata: SeoSiteNode;
  };
  file: {
    childImageSharp: {
      fixed: SeoFileNode;
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
          fixed(height: 630, width: 1200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return data;
}
