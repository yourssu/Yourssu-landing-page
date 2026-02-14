import React from 'react';
import tw from 'tailwind-styled-components';

import useFooterDetail from './hook';

interface Props {
  backgroundColor: string;
}

function Footer({ backgroundColor }: Props) {
  const { socialIcon, link } = useFooterDetail();

  const background: { [key: string]: string } = {
    gray4: 'bg-gray4-0',
    bluegray4: 'bg-bluegray4-0',
  };

  return (
    <Container $bg={background[backgroundColor]}>
      <div className="mx-auto w-full max-w-[65.625rem]">
        <LogoContainer>
          <Logo>YOURSSU</Logo>
        </LogoContainer>
        <div className="mb-2 flex items-center gap-[9px]">
          {socialIcon.nodes.map((icon, index) => (
            <React.Fragment key={icon.name}>
              <a
                href={link[icon.name.split('-')[1]]}
                target="_blank"
                rel="noreferrer"
              >
                <img src={icon.publicURL} alt={icon.name} />
              </a>
              {index !== socialIcon.nodes.length - 1 && (
                <hr className="h-[26.5px] w-[1px] border-none bg-[#D4D7DB]" />
              )}
            </React.Fragment>
          ))}
        </div>
        <InfoContainer>
          <div className="py-[3px] xs:py-[2px]">
            동아리방 : 숭실대학교 학생회관 244호
          </div>
          <div>ⓒ Yourssu. All rights reserved.</div>
        </InfoContainer>
      </div>
    </Container>
  );
}

export default Footer;

const Container = tw.footer<{ $bg: string }>`
  flex
  flex-col
  items-start
  justify-start
  text-gray1-0
  py-10
  xs:py-5
  sm:py-5
  px-5
  ${(props) => props.$bg}
`;

const LogoContainer = tw.div`
  mb-1
  flex
  flex-row
  items-center
`;

const Logo = tw.div`
  py-1
  font-jost
  font-[600]
  text-[20px]
  tracking-[-0.4px]
  sm:text-[14px]
  sm:tracking-[-0.28px]
  xs:text-[14px]
  xs:tracking-[-0.28px]

`;

const InfoContainer = tw.div`
  text-start
  body7
  sm:body8
  md:body8
  xs:body8
  xs:text-[13px]
  mb-8
`;
