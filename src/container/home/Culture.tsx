import SectionIntro from '@/components/SectionIntro';
import CultureItem from '@/components/CultureItem';

const items = [
  {
    id: '#1',
    title: '부서 별 인큐베이팅',
    description:
      '유어슈는 각 팀별로 신입 멤버가 적응할 수 있도록 선배들이 관련 분야 지식을 공유하고 피드백해줘요. 이런 인큐베이팅을 통해 신입 멤버들이 유어슈와 함께 배우고 성장할 수 있습니다.',
  },
  {
    id: '#2',
    title: 'TF 단위로 활동',
    description:
      "TF는 Task Force의 약자예요. '어떠한 목적을 갖는 임시 조직' 이라고 볼 수 있습니다. 해보고 싶은 프로젝트가 있다면 자유롭게 TF를 조직하고 다른 부서의 팀원들과 협업할 수 있어요.",
  },
  {
    id: '#3',
    title: '영어 닉네임 사용',
    description:
      '유연하고 창의적인 동아리 운영을 위해 영어 닉네임을 사용하고 있어요. 유어슈에서는 학번, 나이, 입부 순서와 상관 없이 모두가 서로의 닉네임을 부르며 소통합니다.',
  },
  {
    id: '#4',
    title: '자유로운 커뮤니케이션',
    description:
      '유어슈는 슬랙, 노션, 디스코드 등의 여러 소통 창구를 확용하고 있어요. 늦은 밤에도 @멘션을 꺼리지 않고 소통하는 방식이 유어슈의 자유로운 분위기를 형성합니다.',
  },
];

function Culture() {
  return (
    <div className="flex flex-col justify-center items-center h-[1030px]">
      <SectionIntro
        title="CULTURE"
        description="유어슈는 서로를 존중하며 커뮤니케이션하는 동아리입니다.<br />성장하는 문화를 통해 같이 있는 것만으로도 즐겁고 배울 수 있는 동아리로 나아갑니다."
        divStyle="bg-gradient-to-t from-gradient_color1-0 to-gradient_color2-0 w-[3px] h-[39px]"
        color="text-Text_Color1-0"
      />
      <div className="w-[958px] h-[492px] flex flex-wrap justify-between content-between items-center mt-[110px]">
        {items.map((item) => (
          <CultureItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Culture;
