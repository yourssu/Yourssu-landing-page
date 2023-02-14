import { graphql, useStaticQuery } from 'gatsby';

interface Node {
  publicURL: string;
  name: string;
}

type Header = {
  logo: {
    nodes: Node[];
  };
  social: {
    nodes: Node[];
  };
  tooltip: {
    nodes: Node[];
  };
};

export default function useHeaderDetail() {
  const data: Header = useStaticQuery(graphql`
    query {
      logo: allFile(filter: { sourceInstanceName: { eq: "logo" } }) {
        nodes {
          publicURL
          name
        }
      }
      social: allFile(filter: { sourceInstanceName: { eq: "social" } }) {
        nodes {
          publicURL
          name
        }
      }
      tooltip: allFile(
        filter: { dir: { regex: "/images/" }, name: { eq: "tooltip" } }
      ) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);
  const link = [
    'https://brunch.co.kr/@yourssu-design',
    'https://www.youtube.com/user/yourssu',
    'https://www.instagram.com/yourssu_official/',
    'https://www.notion.so/yourssu/YOURSSU-Blog-8e064a720d1942d68aa42093b7d2f5b6',
  ];
  return { data, link };
}
