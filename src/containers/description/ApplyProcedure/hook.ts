import { graphql, useStaticQuery } from 'gatsby';

export default function useApplyProcedureDetail() {
  const data = useStaticQuery(graphql`
    query {
      noticeIcon: file(name: { eq: "notice" }) {
        publicURL
      }
    }
  `);

  return data;
}
