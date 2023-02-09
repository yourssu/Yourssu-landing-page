import IdealItem from '@/components/IdealItem';

const items = [
  {
    title: '자발적인',
    description:
      '학생들이 함께 만들어가는 서비스인 만큼 스스로 일을 찾아서 해야 해요. 본인이 필요한 능력을 직접 배우고 진행하고 싶은 부분을 맡아서 일해요.',
  },
  {
    title: '도전적인',
    description:
      '유어슈에서 하는 일이 처음에는 어려워 보일 수 있어요. 하지만 도전하고 배우는 과정에서 성장한 자기 모습을 찾을 수 있을 거에요.',
  },
  {
    title: '능동적인',
    description:
      '유어슈에는 필요에 맞춰 능동적으로 학습하고 움직이는 사람이 필요해요. 스스로 학습해서 정보를 공유하는 프로세스를 통해 함께 성장할 수 있을 거에요.',
  },
];

function Ideal() {
  return (
    <div className="flex flex-row justify-center items-center bg-[#F5F5F5] h-[607px]">
      <h2 className="min-w-max h-[284px] pt-4 font-NeoSB text-[36px]">
        이런 사람을
        <br />
        지향해요
      </h2>
      <div className="bg-gradient-to-t from-gradient_color1-0 to-gradient_color2-0 mx-[39px] w-[2px] h-[284px]" />
      <div className="flex flex-col">
        {items.map((item) => (
          <IdealItem
            title={item.title}
            description={item.description}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Ideal;
