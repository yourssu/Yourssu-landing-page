import { graphql, useStaticQuery } from 'gatsby';

import { NodeListType } from '@/types/hook';

interface FooterData {
  logo: NodeListType;
}

export default function useFooterDetail() {
  const data: FooterData = useStaticQuery(graphql`
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
