import { graphql, useStaticQuery } from 'gatsby';

interface Node {
  publicURL: string;
  name: string;
}

type TeamIcon = {
  teams: {
    nodes: Node[];
  };
  hovers: {
    nodes: Node[];
  };
};

type Teams = {
  team: string;
  img: string;
  hoverImg: string;
  notionLink: string;
};

export default function useTeamDetail() {
  const data: TeamIcon = useStaticQuery(graphql`
    query {
      teams: allFile(
        filter: { sourceInstanceName: { eq: "teams" } }
        sort: { order: ASC, fields: name }
      ) {
        nodes {
          publicURL
          name
        }
      }
      hovers: allFile(
        filter: { sourceInstanceName: { eq: "hovers" } }
        sort: { order: ASC, fields: name }
      ) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);

  const notionLink = [
    {
      id: 1,
      team: 'HR',
      link: 'https://www.notion.so/yourssu/YOURSSU-Notion-22e4609461514c1daadea3289f85b833',
    },
    { id: 2, team: 'Marketer', link: '' },
    { id: 3, team: 'Legal', link: '' },
    { id: 4, team: 'Designer', link: '' },
    { id: 5, team: 'iOS', link: '' },
    { id: 6, team: 'Android', link: '' },
    { id: 7, team: 'Backend', link: '' },
    { id: 8, team: 'Frontend', link: '' },
  ];

  const teamsData = data.teams.nodes;
  const hoversData = data.hovers.nodes;

  const teams: Teams[] = teamsData.map((team, index) => {
    const teamData = {
      team: notionLink[index].team,
      notionLink: notionLink[index].link,
    };
    const imgData = {
      img: team.publicURL,
      hoverImg: hoversData[index].publicURL,
    };
    return Object.assign(teamData, imgData, teamData);
  });

  return teams;
}
