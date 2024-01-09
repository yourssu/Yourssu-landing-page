// import useFooterDetail from '@/hooks/components/footer/hook';
import { graphql, useStaticQuery } from 'gatsby';
import { FooterData } from '@/types/hook';
import { OSType } from '@/types/types';

function useFooterDetail() {
  const data: FooterData = useStaticQuery(graphql`
    query {
      logo: allFile(filter: { sourceInstanceName: { eq: "logo" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);
  return data;
}

function Footer({ type }: OSType) {
  const { logo } = useFooterDetail();
  const logoData = logo.nodes[0];

  return (
    <footer className="flex h-[165px] flex-col items-center justify-center bg-[#F9FAFB] text-Text_Color2-0 xs:h-[90px] sm:h-[100px] md:h-[132px]">
      <div className="mb-1 flex flex-row items-center">
        <img
          src={logoData.publicURL}
          alt={logoData.name}
          className="mx-1 h-[23px] xs:h-[12px] sm:h-[12px]"
        />
        {type === 'ios' ? (
          <h3 className="font-Jost text-[20px] font-[550] xs:text-[14px] sm:text-[14px]">
            YOURSSU
          </h3>
        ) : (
          <h3 className="font-Jost text-[20px] font-semibold xs:text-[14px] sm:text-[14px]">
            YOURSSU
          </h3>
        )}
      </div>
      <div className="text-center font-NeoR text-[16px] xs:text-[13px] sm:text-[13px] md:text-[14px]">
        <div className="font-NeoR">동아리방 : 숭실대학교 학생회관 244호</div>
        <div>ⓒ Yourssu. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
