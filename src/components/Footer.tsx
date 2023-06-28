import useFooterDetail from '@/hooks/components/footer/hook';

type FooterProp = {
  isType: string | undefined;
};

function Footer({ isType }: FooterProp) {
  const { logo } = useFooterDetail();
  const logoData = logo.nodes[0];

  return (
    <footer className="flex flex-col xs:h-[90px] sm:h-[100px] md:h-[132px] h-[165px] bg-[#F9FAFB] justify-center items-center text-Text_Color2-0">
      <div className="flex flex-row items-center mb-1">
        <img
          src={logoData.publicURL}
          alt={logoData.name}
          className="mx-1 xs:h-[12px] sm:h-[12px] h-[23px]"
        />
        {isType === 'ios' ? (
          <h3 className="xs:text-[14px] sm:text-[14px] text-[20px] font-Jost font-[550]">
            YOURSSU
          </h3>
        ) : (
          <h3 className="xs:text-[14px] sm:text-[14px] text-[20px] font-Jost font-semibold">
            YOURSSU
          </h3>
        )}
      </div>
      <div className="xs:text-[13px] sm:text-[13px] md:text-[14px] text-[16px] text-center font-NeoR">
        <p>동아리방 : 숭실대학교 학생회관 244호</p>
        <p>ⓒ Yourssu. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
