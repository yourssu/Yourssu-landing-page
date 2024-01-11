import { graphql, useStaticQuery } from 'gatsby';

export default function useSideNavigationDetail() {
  const data = useStaticQuery(graphql`
    query {
      smallArrow: file(name: { eq: "small-arrow-left" }) {
        publicURL
      }
    }
  `);

  return data;
}
