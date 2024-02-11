import { graphql, useStaticQuery } from 'gatsby';

export default function useRoadToProDetail() {
  const data = useStaticQuery(graphql`
    query {
      playIcon: file(name: { eq: "play-button" }) {
        publicURL
      }
      gradientImg: file(name: { eq: "video-gradient" }) {
        publicURL
      }
    }
  `);

  return data;
}
