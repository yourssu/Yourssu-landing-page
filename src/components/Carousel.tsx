import { graphql, useStaticQuery } from 'gatsby';
import { useState } from 'react';

type CarouselItemProp = {
  publicURL: string;
  name: string;
};

type CarousleItemsProp = {
  itemsData: CarouselItemProp[];
};

// 글데이터 처리하는 방법 생각
export const projectData = [
  {
    title: '숨쉴위키',
    description:
      '숭실대만의 정보를 기록 및 공유하는 정보 아카이브 웹페이지예요',
    list: ['숭실대 필수정보부터 TMI까지', '모두가 공평하게 접근 및 편집'],
    link: '',
  },
  {
    title: '숨쉴때 커뮤니티',
    description:
      '숭실대 학생들의 소통공간을 만드는 프로젝트로, 현재 다양한 기능 개발을 진행하고 있어요.',
    list: [
      '숭실대 학생들의 클린한 커뮤니티',
      '이모지로 게시물 리액션',
      '댓글과 게시물로 소통',
    ],
    link: '',
  },
  {
    title: '숨쉴때 성적표',
    description:
      '성적표를 확인하기 번거로웠던 기존의 불편함을 해결한 숨쉴때 성적표 어플리케이션이에요.',
    list: [
      '편하게 보는 이번 학기 성적표',
      '깔끔하게 캡쳐해서 쉽고 빠르게 공유',
    ],
    link: '',
  },
  {
    title: '숨쉴때 뭐먹지?',
    description:
      '어디서, 무엇을 먹을지 고민인 숭실대생을 위해 숭실대 근처 음식점을 추천해주는 웹페이지예요',
    list: [
      '숭실대 근처 음식점 추천',
      '먹고 싶지 않은 음식 제외 기능',
      '숭실대로부터 떨어진 거리 노출',
    ],
    link: '',
  },
  {
    title: '점뿌',
    description:
      '유어슈 뿌슝이 캐릭터를 활용해 만든 프로젝트로 F는 점프하고 A+을 획득하는 게임이에요.',
    list: ['F는 피하고 A+은 먹는 점뿌 게임', '게임점수 공유하여 친구들과 경쟁'],
    link: '',
  },
];

function Carousel({ itemsData }: CarousleItemsProp) {
  const [currentIndex, setcurrentIndex] = useState(0);
  const imgData = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);
  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? itemsData.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  }
  function nextSlide() {
    const isLastSlide = currentIndex === itemsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  }

  return (
    <div id="carouselItem" className="w-full">
      <div className="flex justify-between items-center h-[400px] w-full bg-[#FBFBFB]">
        <button type="button" onClick={prevSlide} className=" pl-10">
          왼쪽
        </button>
        {currentIndex % 2 === 0 ? (
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-start relative">
              <span className="text-[70px] text-[#000000] opacity-10 font-NeoSB absolute -top-[60px] -tracking-[1%]">
                0{currentIndex + 1}
              </span>
              <div className="flex flex-col px-[50px]">
                <div className="flex flex-row justify-start items-center">
                  <span className=" text-[36px] font-NeoSB text-black leading-[36px] -tracking-wide">
                    {projectData[currentIndex].title}
                  </span>
                  <img
                    className="w-[26px] h-[26px] ml-[5px]"
                    src={imgData.allFile.nodes[0].publicURL}
                    alt={imgData.allFile.nodes[0].name}
                  />
                </div>
                <span className=" text-[22px] w-[405px] text-[#525252] leading-[32px] -tracking-wider font-NeoR mt-5">
                  {projectData[currentIndex].description}
                </span>
                <div className="mt-5 flex flex-col">
                  {projectData[currentIndex].list.map((data) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div className="flex flex-row justify-start items-center mt-5">
                        <img
                          src={imgData.allFile.nodes[1].publicURL}
                          alt={imgData.allFile.nodes[1].name}
                        />
                        <p className="text-[24px] ml-[7px] text-[#525252] font-NeoSB leading-[24px] -tracking-wider">
                          {data}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-1/2 h-auto">
              <img
                src={itemsData[currentIndex].publicURL}
                alt={itemsData[currentIndex].name}
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="w-1/2 h-auto">
              <img
                src={itemsData[currentIndex].publicURL}
                alt={itemsData[currentIndex].name}
              />
            </div>
            <div className="flex flex-col justify-center items-start relative">
              <span className="text-[70px] text-[#000000] opacity-10 font-NeoSB absolute -top-[60px] -tracking-[1%]">
                0{currentIndex + 1}
              </span>
              <div className="flex flex-col px-[50px]">
                <div className="flex flex-row justify-start items-center">
                  <span className=" text-[36px] font-NeoSB text-black leading-[36px] -tracking-wide">
                    {projectData[currentIndex].title}
                  </span>
                  <img
                    className="w-[26px] h-[26px] ml-[5px]"
                    src={imgData.allFile.nodes[0].publicURL}
                    alt={imgData.allFile.nodes[0].name}
                  />
                </div>
                <span className=" text-[22px] w-[405px] text-[#525252] leading-[32px] -tracking-wider font-NeoR mt-5">
                  {projectData[currentIndex].description}
                </span>
                <div className="mt-5 flex flex-col">
                  {projectData[currentIndex].list.map((data) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div className="flex flex-row justify-start items-center mt-5">
                        <img
                          src={imgData.allFile.nodes[1].publicURL}
                          alt={imgData.allFile.nodes[1].name}
                        />
                        <p className="text-[24px] ml-[7px] text-[#525252] font-NeoSB leading-[24px] -tracking-wider">
                          {data}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        <button type="button" onClick={nextSlide} className=" pr-10">
          오른쪽
        </button>
      </div>
    </div>
  );
}

export default Carousel;
