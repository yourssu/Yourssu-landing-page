import { graphql, useStaticQuery } from 'gatsby';

interface Nodes {
  publicURL: string;
  name: string;
}

type Header = {
  logo: {
    nodes: Nodes[];
  };
  social: {
    nodes: Nodes[];
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
    }
  `);
  const link = [
    'https://www.instagram.com/yourssu_official/',
    'https://brunch.co.kr/@yourssu-design',
    'https://www.notion.so/yourssu/YOURSSU-Blog-8e064a720d1942d68aa42093b7d2f5b6',
    'https://www.youtube.com/user/yourssu',
  ];
  return { data, link };
}
