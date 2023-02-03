import { graphql, useStaticQuery } from 'gatsby';
import '../styles/global.css';

type SocialButtonData = {
  publicURL: string;
  name: string;
};

export default function Header() {
  const headerData = useStaticQuery(graphql`
    query header {
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
  const logoData = headerData.logo.nodes[0];
  const socialData = headerData.social.nodes;
  return (
    <header className="flex flex-col justify-between items-center w-full px-52 py-7 absolute">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row justify-start items-center item">
          <img src={logoData.publicURL} alt={logoData.name} />
          <span className="font-bold text-2xl">YOURSSU</span>
        </div>
        <div className="flex flex-row items-center">
          {socialData.map((data: SocialButtonData) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <a href="#!">
                <img
                  src={data.publicURL}
                  alt={data.name}
                  className="mr-4 cursor-pointer"
                />
              </a>
            );
          })}
        </div>
      </div>
      <hr className=" w-full h-0.5 bg-gray-400 block mt-2" />
    </header>
  );
}
