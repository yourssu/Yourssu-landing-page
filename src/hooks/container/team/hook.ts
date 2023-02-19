import { graphql, useStaticQuery } from 'gatsby';

interface Node {
  publicURL: string;
  name: string;
}

type Team = {
  teams: {
    nodes: Node[];
  };
};

export default function useTeamDetail() {
  const data: Team = useStaticQuery(graphql`
    query {
      teams: allFile(
        filter: { sourceInstanceName: { eq: "teams" } }
        sort: { name: ASC }
      ) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);

  return data;
}
