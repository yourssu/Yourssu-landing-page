import InformationTooltip from '@/components/Tooltip/InformationTooltip';

interface SkillDescriptionProps {
  iconURL: string;
  activeRef: React.RefObject<HTMLDivElement>;
  descriptions: string[];
}

function SkillDescription({
  iconURL,
  activeRef,
  descriptions,
}: SkillDescriptionProps) {
  return (
    <InformationTooltip
      iconURL={iconURL}
      activeRef={activeRef}
      title="참고사항"
      descriptions={descriptions}
      absolutePosition="left-0 top-[30px]"
    />
  );
}

export default SkillDescription;
