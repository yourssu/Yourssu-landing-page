import { graphql, useStaticQuery } from 'gatsby';

export default function useSideNavigationDetail() {
  const data = useStaticQuery(graphql`
    query {
      smallArrow: file(name: { eq: "small-arrow-left" }) {
        publicURL
      }
      inquiryButton: file(name: { eq: "inquiry-button" }) {
        publicURL
      }
      faqButton: file(name: { eq: "faq-button" }) {
        publicURL
      }
    }
  `);

  return data;
}
