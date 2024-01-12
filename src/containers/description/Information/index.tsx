import tw from 'tailwind-styled-components';

const dummy = [
  {
    title: '유어슈 법률 책임자는 이런 일을 하고 있어요',
    description: [
      '학생들의 최고로 만족하는 서비스가 출시되도록 Proudct 팀과 긴밀히 협력하여 최선의 법무 전략을 설립하기',
      '서비스 퀄리티를 최상으로 유지하면서 유저들의 개인 정보 보호를 최선으로 지켜나갈 수 있는 약관 작성 및 서비스 정책 설립',
      '플랫폼 기업 법무 실무 이슈와 사례에 대한 스터디 및 유어슈 서비스에 적용 연구',
      '유어슈 팀이 다른 대외 기관, 그룹들로 인해 직면할 수 있는 법적인 이슈를 예방하고 해결하기',
      '점차 규모가 성장 중인 유어슈 팀이 리스크 없이 운영될 수 있도록 내부 회칙 및 정책 설립',
    ],
  },
  {
    title: '이런 팀원을 찾고 있어요',
    description: [
      '법학 관련 학과 재학생(복수 전공자도 지원 가능)',
      '플랫폼 기업 법무 실무에 흥미가 있고 공부하고자 하는 분',
      '졸업 이후 진로를 인터넷 및 플랫폼 기업 혹은 그 외 기업 법무 관련 업무를 수행하고 싶으신 분',
    ],
  },
  {
    title: '이런 경험이 있으면 더 좋아요',
    description: [
      '법학 전공자로서 지식을 활용해서 장기/단기 프로젝트를 진행해 본 경험',
      '필요한 상황에 따라 요구되는 내용을 문서로 일목요연하게 정리해 본 경험',
    ],
  },
];

function Information() {
  return (
    <Container>
      {dummy.map((information) => (
        <div key={information.title}>
          <div className="body1 mb-5 text-black-0">{information.title}</div>
          <InformationContainer>
            {information.description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </InformationContainer>
        </div>
      ))}
    </Container>
  );
}

export default Information;

const Container = tw.section`
  flex
  flex-col
  gap-[60px]
`;

const InformationContainer = tw.ul`
  body2
  list-outside
  list-disc
  pl-6
  text-gray1-0
`;
