import tw from 'tailwind-styled-components';
import { OSType } from '@/types/landing.type';
import useFooterDetail from './hook';

interface Props {
  type: OSType;
  backgroundColor: string;
}

function Footer({ type, backgroundColor }: Props) {
  const { logo } = useFooterDetail();
  const logoData = logo.nodes[0];

  const background: { [key: string]: string } = {
    gray4: 'bg-gray4-0',
    bluegray4: 'bg-bluegray4-0',
  };

  return (
    <Container $bg={background[backgroundColor]}>
      <LogoContainer>
        <LogoImg src={logoData.publicURL} alt={logoData.name} />
        {type === 'ios' ? (
          <IosLogo>YOURSSU</IosLogo>
        ) : (
          <DefaultLogo>YOURSSU</DefaultLogo>
        )}
      </LogoContainer>
      <InfoContainer>
        <div className="py-[3px] xs:py-[2px]">
          동아리방 : 숭실대학교 학생회관 244호
        </div>
        <div>ⓒ Yourssu. All rights reserved.</div>
      </InfoContainer>
    </Container>
  );
}

export default Footer;

const Container = tw.footer<{ $bg: string }>`
  flex
  flex-col
  items-center
  justify-center
  text-gray1-0
  py-10
  xs:py-[20px]
  sm:py-[30px]
  ${(props) => props.$bg}
`;

const LogoContainer = tw.div`
  mb-1
  flex
  flex-row
  items-center
`;

const LogoImg = tw.img`
  mr-1
  h-[23px]
  xs:h-[12px]
  sm:h-[12px]
`;

// TODO: Ios 버전 css 확인
const IosLogo = tw.div`
  body3
  py-1
  font-[550]
  xs:text-[14px]
  sm:text-[14px]
`;

const DefaultLogo = tw.div`
  body3
  py-1
  xs:text-[14px]
  sm:text-[14px]
`;

const InfoContainer = tw.div`
  text-center
  body5
  xs:text-[13px]
  sm:text-[13px]
  md:text-[14px]
`;
