import { graphql, useStaticQuery } from 'gatsby';

import { NodeType } from '@/types/hook';

interface SupportingData {
  buttonImgData: {
    nodes: NodeType[];
  };
  readingGlasses: {
    nodes: NodeType[];
  };
  errorImgData: {
    nodes: NodeType[];
  };
  scheduleData: {
    edges: {
      node: {
        formSchedule: {
          start: Date;
          end: Date;
        };
      };
    }[];
  };
  departmentData: {
    edges: {
      node: {
        applyProcedure: {
          scheduleWithoutAssignment: boolean;
          scheduleWithAssignment: boolean;
          individualSchedule: boolean;
        };
        basicInformation: {
          name: string;
          short_introduction: string;
          _rawIcon: {
            asset: {
              _ref: string;
            };
          };
        };
        searchKeyword: string;
      };
    }[];
  };
}

export default function useSupportingDetail() {
  const data: SupportingData = useStaticQuery(graphql`
    query {
      buttonImgData: allFile(filter: { name: { eq: "arrow-right" } }) {
        nodes {
          publicURL
          name
        }
      }
      readingGlasses: allFile(filter: { name: { eq: "reading-glasses" } }) {
        nodes {
          publicURL
          name
        }
      }
      errorImgData: allFile(filter: { name: { eq: "error_bbussung" } }) {
        nodes {
          publicURL
          name
        }
      }
      scheduleData: allSanityRecruitingSchedule(
        filter: { title: { regex: "/과제 O$/" } }
      ) {
        edges {
          node {
            formSchedule {
              start
              end
            }
          }
        }
      }
      departmentData: allSanityDepartment(
        sort: { basicInformation: { key: ASC } }
      ) {
        edges {
          node {
            applyProcedure {
              scheduleWithoutAssignment
              scheduleWithAssignment
              individualSchedule
            }
            basicInformation {
              name
              short_introduction
              _rawIcon
            }
            searchKeyword
          }
        }
      }
    }
  `);

  const teamData = data.departmentData.edges.map((value) => {
    const {
      individualSchedule,
      scheduleWithAssignment,
      scheduleWithoutAssignment,
    } = value.node.applyProcedure;
    return {
      information: value.node.basicInformation,
      isRecruiting:
        individualSchedule ||
        scheduleWithAssignment ||
        scheduleWithoutAssignment,
      searchKeyword: value.node.searchKeyword,
    };
  });

  return {
    imgData: {
      buttonImgData: data.buttonImgData.nodes[0],
      readingGlasses: data.readingGlasses.nodes[0],
      errorImgData: data.errorImgData.nodes[0],
    },
    scheduleData: data.scheduleData.edges[0].node.formSchedule,
    teamData,
  };
}
