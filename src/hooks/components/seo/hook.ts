import { graphql, useStaticQuery } from 'gatsby';

interface Node {
  title: string;
  description: string;
  image: string;
  siteUrl: string;
}

type Seo = {
  site: {
    siteMetadata: Node;
  };
};

export default function useSeoDetail() {
  const data: Seo = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);

  return data;
}
