import { graphql, useStaticQuery } from 'gatsby';

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      logo: allFile(filter: { sourceInstanceName: { eq: "logo" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);
  const logoData = data.logo.nodes[0];

  return (
    <footer className="flex flex-col md:h-[132px] h-[165px] bg-[#F9FAFB] justify-center items-center text-Text_Color2-0">
      <div className="flex flex-row mb-1">
        <img src={logoData.publicURL} alt={logoData.name} className="mx-1" />
        <h3 className=" text-xl font-NeoEB">YOURSSU</h3>
      </div>
      <div className="md:text-[14px] text-[16px] text-center font-NeoR">
        <p>동아리방 : 숭실대학교 학생회관 244호</p>
        <p>ⓒ Yourssu. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
