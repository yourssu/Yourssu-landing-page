import { graphql, useStaticQuery } from 'gatsby';

export default function useInaWordDetail() {
  const data = useStaticQuery(graphql`
    query {
      legal: file(name: { eq: "legal" }) {
        publicURL
      }
    }
  `);

  return data;
}
