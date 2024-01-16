import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';
import useAboutDetail from './hook';

function About() {
  const { imgData, aboutDescription } = useAboutDetail();

  return (
    <Container className="flex justify-center">
      <img
        src={imgData.aboutImgData.nodes[0].publicURL}
        alt={imgData.aboutImgData.nodes[0].name}
      />
      <SubContainer className="flex flex-col items-start justify-center">
        <div className="flex items-center">
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

        <p className=" font-pretendard pt-[20px] text-[32px] font-[600] leading-[38.19px] tracking-[-1%]">
          유어슈는 여러분의 더 나은 <br /> 캠퍼스라이프를 위해 달립니다.
        </p>
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
const Container = tw.div`
  rounded-[30px]
  py-[32px]
  px-[80px]
  bg-white-0
`;

const SubContainer = tw.div`
  pl-[40px]
`;

const ListSection = tw.div`
  w-auto
  h-[132px]
  pt-[40px]
  gap-[12px]
`;

const List = tw.div`
  w-auto
  h-[36px]
`;

const ListImage = tw.img`
  w-[24px]
`;

const ListItem = tw.p`
  font-pretendard
  pl-[10px]
  text-[22px]
  font-[400]
  leading-[36px] 
  tracking-[-2%] 
  text-Text_Color2-0
`;

export default About;
