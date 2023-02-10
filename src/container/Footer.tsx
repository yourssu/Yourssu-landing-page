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
    <footer className="flex flex-col sm:h-[100px] md:h-[132px] h-[165px] bg-[#F9FAFB] justify-center items-center text-Text_Color2-0">
      <div className="flex flex-row mb-1">
        <img
          src={logoData.publicURL}
          alt={logoData.name}
          className="mx-1 sm:h-[12px] h-[23px] sm:translate-y-[3px]"
        />
        <h3 className="sm:text-[14px] text-[20px] font-NeoEB">YOURSSU</h3>
      </div>
      <div className="sm:text-[13px] md:text-[14px] text-[16px] text-center font-NeoR">
        <p>동아리방 : 숭실대학교 학생회관 244호</p>
        <p>ⓒ Yourssu. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
