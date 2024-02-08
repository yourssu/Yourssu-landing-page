import tw from 'tailwind-styled-components';

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
    <Container ref={warningRef}>
      <TitleContainer>
        <img src={iconURL} alt="정보 더보기" />
        <span className="body4 text-gray1-0">지원 시 유의사항</span>
      </TitleContainer>
      <Line />
      <DescriptionContainer>
        {WARNING_DESCRIPTIONS.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </DescriptionContainer>
    </Container>
  );
}

export default WarningDescription;

const Container = tw.div`
  absolute
  left-[345px]
  top-[-22px]

  rounded-[12px]
  bg-gray4-0

  px-6
  pb-[26px]
  pt-[22px]
`;

const TitleContainer = tw.div`
  flex
  gap-2
`;

const Line = tw.div`
  my-4
  h-[2px]
  border-none
  bg-gray3-0
`;

const DescriptionContainer = tw.div`
  flex
  flex-col
  gap-4

  pl-7
  
  list-outside
  list-disc
  body5
  whitespace-nowrap
  text-gray1-0
`;
