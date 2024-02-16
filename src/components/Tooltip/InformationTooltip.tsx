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
        <Title>{title}</Title>
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
  lg:min-w-[598px]
  md:min-w-[322px]
  sm:min-w-[258px]

  px-6
  md:px-4
  sm:px-4

  pb-[26px]
  md:pb-5
  sm:pb-5

  pt-[22px]
  md:pt-4
  sm:pt-4
`;

const TitleContainer = tw.div`
  flex
  gap-2
  items-center
`;

const Title = tw.span`
  body4
  md:body6
  sm:body8-1
  text-gray1-0
`;

const Line = tw.hr`
  my-4
  h-[2px]
  border-none
  bg-gray3-0
`;

const DescriptionContainer = tw.ul`
  flex
  flex-col
  gap-4

  pl-5
  
  list-outside
  list-disc
  body5
  md:body8
  sm:body8
  text-gray1-0
`;
