import { graphql, useStaticQuery } from 'gatsby';
import { NodeType } from '@/types/hook';

interface IdeaData {
  idealImgData: {
    nodes: NodeType[];
  };
}

export default function useIdealDetail() {
  const imgData: IdeaData = useStaticQuery(graphql`
    query {
      idealImgData: allFile(
        filter: { name: { eq: "departmentSelect.ideal" } }
      ) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);

  return { imgData };
}
