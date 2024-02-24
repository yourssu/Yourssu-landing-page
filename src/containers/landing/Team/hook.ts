import { graphql, useStaticQuery } from 'gatsby';
import { NodeListType } from '@/types/hook';
import { TeamButtonItem } from '@/types/landing.type';

interface TeamIconData {
  department_icons: NodeListType;
}

export default function useTeamDetail() {
  const data: TeamIconData = useStaticQuery(graphql`
    query {
      department_icons: allFile(
        filter: { sourceInstanceName: { eq: "department_icons" } }
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
      link: 'https://www.notion.so/yourssu/HR-Manager-c28b61f093dd4e16aaeaefefab86a6a6',
    },
    {
      id: 2,
      team: 'Manager',
      link: 'https://www.notion.so/yourssu/Content-Marketer-22bbcfde499243f489c47dcb48f32e68',
    },
    {
      id: 3,
      team: 'Legal',
      link: 'https://www.notion.so/yourssu/Legal-Officer-12b3c4c24089466b994d65b40fb1e368',
    },
    {
      id: 4,
      team: 'Designer',
      link: 'https://www.notion.so/yourssu/Product-Designer-d354b42dbe154f6bbf22de157b440e60',
    },
    {
      id: 5,
      team: 'iOS',
      link: 'https://www.notion.so/yourssu/iOS-Developer-faee8ac0116f4f9aa45566e3973ffd42',
    },
    {
      id: 6,
      team: 'Android',
      link: 'https://www.notion.so/yourssu/Android-Developer-111026b36dd445dd9dc4e0e0f8c58ae0',
    },
    {
      id: 7,
      team: 'Backend',
      link: 'https://www.notion.so/yourssu/Back-end-Developer-72d85c8ba8164f8c946fa83067e8e0e3',
    },
    {
      id: 8,
      team: 'Frontend',
      link: 'https://www.notion.so/yourssu/Web-Front-end-Developer-9d21da290a5148588f4fad2ae58a3279',
    },
    {
      id: 9,
      team: 'Maketer',
      link: 'https://www.notion.so/yourssu/Web-Front-end-Developer-9d21da290a5148588f4fad2ae58a3279',
    },
  ];

  const teamsData = data.department_icons.nodes;

  const teams: TeamButtonItem[] = teamsData.map((team, index) => {
    const teamData = {
      team: notionLink[index].team,
      notionLink: notionLink[index].link,
    };
    const imgData = {
      img: team.publicURL,
    };
    return Object.assign(teamData, imgData, teamData);
  });

  return teams;
}
