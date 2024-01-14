import { graphql, useStaticQuery } from 'gatsby';

export default function useTeamHeaderDetail() {
  const data = useStaticQuery(graphql`
    query {
      legal: file(name: { eq: "legal" }) {
        publicURL
      }
    }
  `);

  return data;
}
