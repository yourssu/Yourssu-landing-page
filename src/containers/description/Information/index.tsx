import { useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';

import {
  DefaultContentInformation,
  SkillContentInformation,
} from '@/types/recruiting.type';

import SkillDescription from './SkillDescription';
import useInformationDetail from './hook';

interface InformationProps {
  task: DefaultContentInformation;
  ideal: DefaultContentInformation;
  experience: DefaultContentInformation;
  skill: SkillContentInformation | null;
}

function Information({ task, ideal, experience, skill }: InformationProps) {
  const information = [task, ideal, experience];
  const data = useInformationDetail();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (
        isTooltipOpen &&
        !tooltipRef.current?.contains(e.target as HTMLDivElement)
      )
        setIsTooltipOpen(false);
    };
    document.addEventListener('mousedown', handleClose);

    return () => document.removeEventListener('mousedown', handleClose);
  }, [isTooltipOpen]);

  return (
    <Container>
      {information.map((info) => (
        <TitleContainer key={info.title}>
          <InformationTitle>{info.title}</InformationTitle>
          <InformationContainer>
            {info.content.map((content) => (
              <li key={content}>
                {content.split('\\n').map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </li>
            ))}
          </InformationContainer>
        </TitleContainer>
      ))}
      {skill && skill.content.length !== 0 && (
        <div className="relative">
          <SkillTitleContainer>
            <InformationTitle>{skill.title}</InformationTitle>
            {skill.notice.length > 0 && (
              <div className="relative">
                <NoticeButton
                  type="button"
                  onClick={() => {
                    setIsTooltipOpen((prev) => !prev);
                  }}
                >
                  <img
                    src={data.warningLightIcon.publicURL}
                    alt="정보 더보기"
                  />
                  <NoticeText>참고사항을 반드시 읽어주세요</NoticeText>
                </NoticeButton>
                {isTooltipOpen && (
                  <SkillDescription
                    iconURL={data.warningDarkIcon.publicURL}
                    activeRef={tooltipRef}
                    descriptions={skill.notice}
                  />
                )}
              </div>
            )}
          </SkillTitleContainer>
          <InformationContainer>
            {skill.content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </InformationContainer>
        </div>
      )}
    </Container>
  );
}

export default Information;

const Container = tw.section`
  flex
  flex-col
  gap-[60px]
  lg:gap-[50px]
  md:gap-[50px]
  sm:gap-[50px]
  xs:gap-[50px]
`;

const TitleContainer = tw.div`
  flex
  flex-col
  gap-5
  lg:gap-4
  md:gap-4
  sm:gap-4
`;

const InformationTitle = tw.div`
  body1
  md:body4
  sm:body4
  xs:body4
  text-black-0
`;

const InformationContainer = tw.ul`
  body2
  md:body7
  sm:body7
  xs:body7

  list-outside
  list-disc
  text-gray1-0
  text-justify

  pl-7
  md:pl-5
  sm:pl-5
  xs:pl-6
  whitespace-pre-wrap
`;

const SkillTitleContainer = tw.div`
  mb-5
  flex
  items-center
  gap-3
  flex-wrap
`;

const NoticeButton = tw.button`
  flex
  items-center
  gap-1
`;

const NoticeText = tw.span`
  body4
  md:body6
  sm:body6
  xs:body6
  text-gray2-0
`;
