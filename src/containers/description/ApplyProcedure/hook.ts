import { graphql, useStaticQuery } from 'gatsby';

export default function useApplyProcedureDetail() {
  const data = useStaticQuery(graphql`
    query {
      warningLightIcon: file(name: { eq: "warning-circle-light" }) {
        publicURL
      }
      warningDarkIcon: file(name: { eq: "warning-circle-dark" }) {
        publicURL
      }
    }
  `);

  return data;
}
