import InformationTooltip from '@/components/Tooltip/InformationTooltip';

const WARNING_DESCRIPTIONS = [
  '기재된 내용이 사실과 다를 경우 합격이 취소될 수 있음을 유의하여 주시길 바랍니다.',
  '전형 일정 및 결과는 지원서 작성 시 기재해주신 이메일을 통해 일주일 이내로 안내드립니다.',
  '인큐베이팅 기간은 유동적으로 변경 될 수 있음을 알려드립니다.',
];

interface WarningDescriptionProps {
  iconURL: string;
  warningRef: React.RefObject<HTMLDivElement>;
}

function WarningDescription({ iconURL, warningRef }: WarningDescriptionProps) {
  return (
    <InformationTooltip
      iconURL={iconURL}
      activeRef={warningRef}
      title="지원 시 유의사항"
      descriptions={WARNING_DESCRIPTIONS}
      absolutePosition="left-[345px] top-[-22px] md:left-[300px] md:top-0 sm:left-[56px] sm:top-[33px] xs:left-[56px] xs:top-[33px]"
    />
  );
}

export default WarningDescription;
