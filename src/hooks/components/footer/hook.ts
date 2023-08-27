import { graphql, useStaticQuery } from 'gatsby';
import { FooterData } from '@/types/hook';

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
