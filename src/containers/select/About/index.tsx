import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import tw from 'tailwind-styled-components';
import useAboutDetail from './hook';

function About() {
  const { imgData, aboutDescription } = useAboutDetail();
  const windowSize = useMediaQuery({
    query: `(min-width: 669px)`,
  });

  return (
    <Container
      windowSize={windowSize}
      className="flex items-center justify-center xs:flex-col sm:flex-col md:flex-col"
    >
      <img
        src={imgData.aboutImgData.nodes[0].publicURL}
        alt={imgData.aboutImgData.nodes[0].name}
        className="w-[498px] xs:w-[255px] sm:w-[255px]"
      />
      <SubContainer className="flex h-full w-auto flex-col items-start justify-center sm:items-center">
        <div className="flex items-center sm:justify-center">
          <span className=" bg-gradient-to-r from-mainGra2-0 to-mainGra1-0 bg-clip-text font-Jost text-[18px] font-[600] leading-[26.01px] tracking-[-2%] text-transparent">
            ABOUT YOURSSU
          </span>
          <Link to="/">
            <img
              src={imgData.smallarrow.nodes[0].publicURL}
              alt={imgData.smallarrow.nodes[0].name}
              className="pl-[7px]"
            />
          </Link>
        </div>

        <AboutTitle>
          유어슈는 여러분의 더 나은 <br /> 캠퍼스라이프를 위해 달립니다.
        </AboutTitle>
        <ListSection className="flex flex-col">
          {aboutDescription.map((value, index) => {
            return (
              <List className=" flex justify-start" key={index!}>
                <ListImage
                  src={imgData.listImgData.nodes[0].publicURL}
                  alt={imgData.listImgData.nodes[0].name}
                />
                <ListItem>{value}</ListItem>
              </List>
            );
          })}
        </ListSection>
      </SubContainer>
    </Container>
  );
}
const Container = tw.div<{ windowSize: boolean }>`
  rounded-[30px]
  py-[32px]
  px-[100px]
  ${(prop) => (prop.windowSize ? 'sm:px-[160px]' : 'sm:px-[20px]')}
  bg-white-0
  w-[1220px]
  md:w-[960px]

  sm:gap-[15px]
  ${(prop) => (prop.windowSize ? 'sm:w-[640px]' : 'sm:w-[310px]')}
`;

const SubContainer = tw.div`
  xxl:pl-[40px]
  xl:pl-[40px]
  lg:pl-[40px]

  sm:w-[216px]
`;

const AboutTitle = tw.p`
  font-pretendard 
  pt-[20px] 
  text-[32px] 
  font-[600] 
  leading-[38.19px]
  tracking-[-1%]

  sm:pt-[14px]
  sm:text-[18px]
  sm:leading-[21px]
  sm:tracking-[0%]
  sm:text-center
`;

const ListSection = tw.div`
  w-auto
  h-auto
  pt-[40px]
  sm:pt-[20px]
  gap-[12px]
`;

const List = tw.div`
  w-auto
  h-[36px]
  md:h-[30px]
  sm:h-auto
`;

const ListImage = tw.img`
  w-[24px]
  sm:w-[20px]
`;

const ListItem = tw.p`
  font-pretendard
  pl-[10px]
  text-[22px]
  font-[400]
  leading-[36px] 
  tracking-[-2%] 
  text-Text_Color2-0

  md:text-[20px]
  md:leading-[30px]

  sm:text-[12px]
  sm:leading-[14px]
`;

export default About;
