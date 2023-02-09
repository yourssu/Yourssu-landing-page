import { graphql, useStaticQuery } from 'gatsby';

interface Nodes {
  publicURL: string;
  name: string;
}

interface Nodes2 extends Nodes {
  link: string;
}

type Header = {
  logo: {
    nodes: Nodes[];
  };
  social: {
    nodes: Nodes2[];
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
    'https://www.notion.so/yourssu/YOURSSU-Blog-8e064a720d1942d68aa42093b7d2f5b6',
    'https://brunch.co.kr/@yourssu-design',
    'https://www.instagram.com/yourssu_official/',
    'https://www.youtube.com/user/yourssu',
  ];
  return { data, link };
}
