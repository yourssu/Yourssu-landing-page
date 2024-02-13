import { useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';
import InformationTooltip from '@/components/Tooltip/InformationTooltip';
import {
  DefaultContentInformation,
  SkillContentInformation,
} from '@/types/recruiting.type';
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
        <div key={data.title}>
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
        </div>
      ))}
      {skill && (
        <div className="relative">
          <SkillTitleContainer>
            <div className="body1 text-black-0">{skill.title}</div>
            {skill.notice.length > 0 && (
              <NoticeButton
                type="button"
                onClick={() => {
                  setIsTooltipOpen((prev) => !prev);
                }}
              >
                <img src={data.warningLightIcon.publicURL} alt="정보 더보기" />
                <span className="body4 text-gray2-0">
                  참고사항을 반드시 읽어주세요
                </span>
              </NoticeButton>
            )}
          </SkillTitleContainer>
          {isTooltipOpen && (
            <InformationTooltip
              iconURL={data.warningDarkIcon.publicURL}
              activeRef={tooltipRef}
              title="참고사항"
              descriptions={skill.notice}
              absolutePosition="left-[441px] top-[40px]"
            />
          )}
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
`;

const InformationTitle = tw.div`
  body1
  mb-5
  text-black-0
`;

const InformationContainer = tw.ul`
  body2
  list-outside
  list-disc
  text-gray1-0
  text-justify
  pl-9
  whitespace-pre-wrap
`;

const SkillTitleContainer = tw.div`
  mb-5
  flex
  items-center
  gap-3
`;

const NoticeButton = tw.button`
  flex
  items-center
  gap-1
`;
