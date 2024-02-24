import { graphql, useStaticQuery } from 'gatsby';
import { NodeListType } from '@/types/hook';

interface HeaderData {
  logo: NodeListType;
  listIcon: NodeListType;
  xIcon: NodeListType;
}

export default function useHeaderDetail() {
  const data: HeaderData = useStaticQuery(graphql`
    query {
      logo: allFile(filter: { sourceInstanceName: { eq: "logo" } }) {
        nodes {
          publicURL
          name
        }
      }
      listIcon: allFile(filter: { name: { eq: "ic_list_line" } }) {
        nodes {
          publicURL
          name
        }
      }
      xIcon: allFile(filter: { name: { eq: "ic_x_line" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);
  return { data };
}
