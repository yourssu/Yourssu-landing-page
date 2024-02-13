import tw from 'tailwind-styled-components';

interface InformationTooltipProps {
  iconURL: string;
  activeRef: React.RefObject<HTMLDivElement>;
  title: string;
  descriptions: string[];
  absolutePosition: string | null;
}

function InformationTooltip({
  iconURL,
  activeRef,
  title,
  descriptions,
  absolutePosition,
}: InformationTooltipProps) {
  return (
    <Container ref={activeRef} className={`${absolutePosition}`}>
      <TitleContainer>
        <img src={iconURL} alt="icon" />
        <span className="body4 text-gray1-0">{title}</span>
      </TitleContainer>
      <Line />
      <DescriptionContainer>
        {descriptions.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </DescriptionContainer>
    </Container>
  );
}

export default InformationTooltip;

const Container = tw.div`
  absolute
  z-10

  rounded-[12px]
  bg-gray4-0

  min-w-[720px]
  px-6
  pb-[26px]
  pt-[22px]
`;

const TitleContainer = tw.div`
  flex
  gap-2
`;

const Line = tw.hr`
  my-4
  h-[2px]
  border-none
  bg-gray3-0
`;

const DescriptionContainer = tw.div`
  flex
  flex-col
  gap-4

  pl-3
  
  list-outside
  list-disc
  body5
  whitespace-nowrap
  text-gray1-0
`;
