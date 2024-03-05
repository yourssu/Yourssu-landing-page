import { graphql, type GatsbyNode } from 'gatsby';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

interface QueryResult {
  allSanityDepartment: {
    edges: {
      node: {
        basicInformation: {
          name: string;
        };
      };
    }[];
  };
  allSanityRecruitingSchedule: {
    edges: {
      node: {
        applyProcedure: {
          schedule: string;
          step: string;
        }[];
      };
    }[];
  };
}

const path = require('path');
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;

  const queryAllSanityData = await graphql<QueryResult>(`
    {
      allSanityDepartment(sort: { num: ASC }) {
        edges {
          node {
            basicInformation {
              name
            }
          }
        }
      }
      allSanityRecruitingSchedule {
        edges {
          node {
            applyProcedure {
              schedule
              step
            }
          }
        }
      }
    }
  `);

  if (queryAllSanityData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return;
  }

  const DescriptionTemplateComponent = path.resolve(
    __dirname,
    'src/templates/DescriptionTemplate.tsx',
  );

  const nameList = queryAllSanityData.data?.allSanityDepartment.edges.map(
    (edge) => edge.node.basicInformation.name,
  );

  const schedule =
    queryAllSanityData.data?.allSanityRecruitingSchedule.edges[
      queryAllSanityData.data.allSanityRecruitingSchedule.edges.length - 1
    ].node.applyProcedure;

  const generateDescriptionPage = ({
    node: {
      basicInformation: { name },
    },
  }: {
    node: {
      basicInformation: {
        name: string;
      };
    };
  }) => {
    const pageOptions = {
      path: `recruiting/${name.toLowerCase().replaceAll(' ', '_')}`,
      component: DescriptionTemplateComponent,
      context: { name, nameList, schedule },
    };

    createPage(pageOptions);
  };

  queryAllSanityData.data &&
    queryAllSanityData.data.allSanityDepartment.edges.forEach(
      generateDescriptionPage,
    );
};
