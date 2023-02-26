import { graphql, useStaticQuery } from 'gatsby';

interface Node {
  title: string;
  description: string;
  siteUrl: string;
}

interface Node2 {
  base64: string;
  height: number;
  src: string;
  srcSet: string;
  width: number;
}

type Seo = {
  site: {
    siteMetadata: Node;
  };
  file: {
    childImageSharp: {
      fixed: Node2;
    };
  };
};

export default function useSeoDetail() {
  const data: Seo = useStaticQuery(graphql`
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
