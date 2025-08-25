import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import tw from 'tailwind-styled-components';

import { RoadToProInformation } from '@/types/recruiting.type';

import useRoadToProDetail from './hook';

interface RoadToProProps {
  roadToPro: RoadToProInformation;
}

function RoadToPro({ roadToPro }: RoadToProProps) {
  const data = useRoadToProDetail();

  return (
    <section className="inline-flex flex-col items-start justify-start gap-6 self-stretch rounded-[12px] p-6 outline outline-1 outline-offset-[-1px] outline-[#F1F1F4]">
      <TitleContainer>
        <div className="T3_Sb_20">Road to Pro</div>
      </TitleContainer>
      <VideoInfoContainer>
        {roadToPro.roadToPro_list.map((video) => {
          const thumbnail = getImage(
            video.video_thumbnail.asset.gatsbyImageData,
          );
          return (
            <div key={video.video_link} className="flex flex-col gap-4">
              <VideoContainer
                href={video.video_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {thumbnail && <Thumbnail image={thumbnail} alt="thumbnail" />}
                <Gradient src={data.gradientImg.publicURL} alt="gradient" />
                <PlayButton src={data.playIcon.publicURL} alt="play" />
              </VideoContainer>
              <p className="B1_Rg_16">
                {video.presenter
                  .map(
                    ({ presenter_name, presenter_nickname }) =>
                      `${presenter_name} (${presenter_nickname})`,
                  )
                  .join(', ')}
              </p>
            </div>
          );
        })}
      </VideoInfoContainer>
    </section>
  );
}

export default RoadToPro;

const TitleContainer = tw.div`
  flex
  flex-col
  gap-2
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

const VideoContainer = tw.a`
  relative
  h-fit
  w-fit
`;

const Thumbnail = tw(GatsbyImage)`
  h-44
  md:h-[188px]
  sm:h-[188px]
  xs:h-[188px]

  w-80
  md:w-[336px]
  sm:w-[336px]
  xs:w-[336px]

  rounded-[16px]
`;

const Gradient = tw.img`
  h-44
  md:h-[188px]
  sm:h-[188px]
  xs:h-[188px]

  w-80
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
