import { graphql, useStaticQuery } from 'gatsby';

import { NodeListType } from '@/types/hook';

interface FooterData {
  logo: NodeListType;
  socialIcon: NodeListType;
}

export default function useFooterDetail() {
  const data: FooterData = useStaticQuery(graphql`
    query {
      logo: allFile(filter: { sourceInstanceName: { eq: "logo" } }) {
        nodes {
          publicURL
          name
        }
      }
      socialIcon: allFile(
        filter: { sourceInstanceName: { eq: "socials" } }
        sort: { name: ASC }
      ) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);

  const link: { [key: string]: string } = {
    instagram: 'https://www.instagram.com/yourssu_official',
    youtube: 'https://www.youtube.com/user/yourssu',
    medium: 'https://medium.com/yourssu',
    github: 'https://github.com/yourssu',
    laboratory: 'https://github.com/yourssu-Lab',
  };

  return { logo: data.logo, socialIcon: data.socialIcon, link };
}
