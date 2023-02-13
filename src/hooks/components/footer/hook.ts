import { graphql, useStaticQuery } from 'gatsby';

interface Node {
  publicURL: string;
  name: string;
}

type Footer = {
  logo: {
    nodes: Node[];
  };
};

export default function useFooterDetail() {
  const data: Footer = useStaticQuery(graphql`
    query {
      logo: allFile(filter: { sourceInstanceName: { eq: "logo" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);
  return data;
}
