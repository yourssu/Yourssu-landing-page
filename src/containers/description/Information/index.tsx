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
    <>
      {information.map((info) => (
        <section
          className="inline-flex flex-col items-start justify-start gap-6 self-stretch rounded-[12px] p-6 outline outline-1 outline-offset-[-1px] outline-[#F1F1F4]"
          key={info.title}
        >
          <div className="T3_Sb_20">{info.title}</div>
          <InformationContainer>
            {info.content.map((content) => {
              const important =
                content.startsWith('[') && content.endsWith(']');

              if (important) content = content.substring(1, content.length - 1);

              return (
                <li
                  className={`${important ? 'my-2 -ml-7 list-none xs:-ml-6 sm:-ml-5 md:-ml-5' : ''}`}
                  key={content}
                >
                  {content.split('\\n').map((item) => (
                    <div
                      className={`${important ? 'font-semibold' : ''}`}
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </li>
              );
            })}
          </InformationContainer>
        </section>
      ))}
      {skill && skill.content.length !== 0 && (
        <section className="inline-flex flex-col items-start justify-start gap-6 self-stretch rounded-[12px] p-6 outline outline-1 outline-offset-[-1px] outline-[#F1F1F4]">
          <SkillTitleContainer>
            <div className="T3_Sb_20">{skill.title}</div>
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
        </section>
      )}
    </>
  );
}

export default Information;

const InformationContainer = tw.ul`
  B1_Rg_16

  list-outside
  list-disc
  text-gray1-0

  pl-7
  md:pl-5
  sm:pl-5
  xs:pl-6
  whitespace-pre-wrap
`;

const SkillTitleContainer = tw.div`
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
