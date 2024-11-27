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
          <div key={video.video_link} className="flex flex-col gap-4">
            <VideoContainer to={video.video_link}>
              <Thumbnail
                src={extractImageUrl(video.video_thumbnail._rawAsset._ref)}
                alt={video.video_link}
              />
              <Gradient src={data.gradientImg.publicURL} alt="gradient" />
              <PlayButton src={data.playIcon.publicURL} alt="play" />
            </VideoContainer>
            <Presenter>
              {video.presenter
                .map(
                  ({ presenter_name, presenter_nickname }) =>
                    `${presenter_name} (${presenter_nickname})`,
                )
                .join(', ')}
            </Presenter>
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
  md:body4
  sm:body4
  xs:body4
  text-black-0
`;

const SubTitle = tw.div`
  body3
  md:body7
  sm:body7
  xs:body7
  text-gray1-0
`;

const VideoInfoContainer = tw.div`
  flex
  flex-wrap

  gap-x-5
  md:gap-x-2
  sm:gap-x-2
  xs:gap-x-2

  gap-y-10
  md:gap-y-5
  sm:gap-y-5
  xs:gap-y-5
`;

const VideoContainer = tw(Link)`
  relative
  h-fit
  w-fit
`;

const Thumbnail = tw.img`
  h-[224px]
  md:h-[188px]
  sm:h-[188px]
  xs:h-[188px]

  w-[400px]
  md:w-[336px]
  sm:w-[336px]
  xs:w-[336px]

  rounded-[16px]
`;

const Gradient = tw.img`
  h-[224px]
  md:h-[188px]
  sm:h-[188px]
  xs:h-[188px]

  w-[400px]
  md:w-[336px]
  sm:w-[336px]
  xs:w-[336px]

  absolute
  top-0
  rounded-[16px]
  opacity-10
`;

const PlayButton = tw.img`
  absolute
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2
  transform

  w-[108px]
  xs:w-[91px]
  sm:w-[91px]
  md:w-[91px]
`;

const Presenter = tw.div`
  body3
  md:body8
  sm:body8
  xs:body8
  text-black-0
`;
