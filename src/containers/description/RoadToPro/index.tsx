import tw from 'tailwind-styled-components';
import { RoadToProInformation } from '@/types/recruiting.type';
import extractImageUrl from '@/utils/extractImageUrl';

interface RoadToProProps {
  roadToPro: RoadToProInformation;
}

function RoadToPro({ roadToPro }: RoadToProProps) {
  return (
    <section>
      <TitleContainer>
        <Title>Road to Pro</Title>
        <SubTitle>{roadToPro.title}</SubTitle>
      </TitleContainer>
      {roadToPro.roadToPro_list.map((video) => (
        <img
          key={video.video_link}
          src={extractImageUrl(video.video_thumbnail._rawAsset._ref)}
          alt={video.video_link}
        />
      ))}
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
