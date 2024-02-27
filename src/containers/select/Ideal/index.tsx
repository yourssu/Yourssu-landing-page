import tw from 'tailwind-styled-components';
import useIdealDetail from './hook';

function Ideal() {
  const { imgData } = useIdealDetail();
  const ideal = [
    {
      id: 1,
      title: '자발적인',
    },
    {
      id: 2,
      title: '도전적인',
    },
    {
      id: 3,
      title: '능동적인',
    },
    {
      id: 4,
      title: '당신을\n기다려왔습니다!',
    },
  ];

  return (
    <>
      {ideal.map((value, index) => {
        return (
          <Container
            key={value.id}
            className="relative flex items-center justify-center"
          >
            <div className=" text-center">
              <IdealText>{value.title}</IdealText>
            </div>
            <IdealImage
              $index={index}
              src={imgData.idealImgData.nodes[0].publicURL}
              alt={imgData.idealImgData.nodes[0].name}
            />
          </Container>
        );
      })}
    </>
  );
}

const Container = tw.div`
  w-full
  h-[982px]
  md:h-[666px]
  sm:h-[542px]
  xs:h-[542px]
`;

const IdealText = tw.span`
  text-center

  h2

  md:font-family: Pretendard;
  md:font-size: 40px;
  md:font-style: normal;
  md:font-weight: 700;
  md:line-height: normal;
  md:letter-spacing: -0.4px;

  sm:h3
  sm:whitespace-pre-line
  xs:h3
  xs:whitespace-pre-line
`;

const IdealImage = tw.img<{ $index: number }>`
  absolute
  ${(prop) => (prop.$index % 2 === 0 ? 'right-0' : 'left-0 -scale-x-100 transform')}
  md:w-[260px]
  sm:w-[110px]
  xs:w-[100px]
`;
export default Ideal;
