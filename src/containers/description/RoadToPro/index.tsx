import tw from 'tailwind-styled-components';

const dummy = '유어슈와 리걸팀의 이야기';

function RoadToPro() {
  return (
    <section>
      <TitleContainer>
        <Title>Road to Pro</Title>
        <SubTitle>{dummy}</SubTitle>
      </TitleContainer>
      {/* TODO: 영상 넣기 */}
    </section>
  );
}

export default RoadToPro;

const TitleContainer = tw.div`
  flex
  flex-col
  gap-2
`;

const Title = tw.div`
  h3
  text-black-0
`;

const SubTitle = tw.div`
  body3
  text-gray1-0
`;
