import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';
import { RoadToProInformation } from '@/types/recruiting.type';
import extractImageUrl from '@/utils/extractImageUrl';
import useRoadToProDetail from './hook';

interface RoadToProProps {
  roadToPro: RoadToProInformation;
}

function RoadToPro({ roadToPro }: RoadToProProps) {
  const data = useRoadToProDetail();

  return (
    <Container>
      <TitleContainer>
        <Title>Road to Pro</Title>
        <SubTitle>{roadToPro.title}</SubTitle>
      </TitleContainer>
      <VideoInfoContainer>
        {roadToPro.roadToPro_list.map((video) => (
          <div key={video.video_link}>
            <VideoContainer to={video.video_link}>
              <Thumbnail
                src={extractImageUrl(video.video_thumbnail._rawAsset._ref)}
                alt={video.video_link}
              />
              <Gradient src={data.gradientImg.publicURL} alt="gradient" />
              <PlayButton src={data.playIcon.publicURL} alt="play-icon" />
            </VideoContainer>
            <Presenter>{`${video.presenter_name} (${video.presenter_nickname})`}</Presenter>
          </div>
        ))}
      </VideoInfoContainer>
    </Container>
  );
}

export default RoadToPro;

const Container = tw.section`
  flex
  flex-col
  gap-10
`;

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

const VideoInfoContainer = tw.div`
  flex
  flex-wrap
  gap-x-5
  gap-y-10
`;

const VideoContainer = tw(Link)`
  relative
  h-fit
  w-fit
`;

const Thumbnail = tw.img`
  h-[224px]
  w-[400px]
  rounded-[16px]
`;

const Gradient = tw.img`
  absolute
  top-0
  rounded-[16px]
  opacity-10
`;

const PlayButton = tw.img`
  absolute
  left-[148px]
  top-[54px]
`;

const Presenter = tw.div`
  body3
  mt-4
  text-black-0
`;
