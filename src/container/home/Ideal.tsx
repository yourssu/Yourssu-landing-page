import { graphql, useStaticQuery } from 'gatsby';
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
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { extension: { eq: "png" }, dir: { regex: "/ideals/" } }
      ) {
        nodes {
          name
          publicURL
        }
      }
    }
  `);
  const longData = data.allFile.nodes[0];
  const itemData = data.allFile.nodes[1];
  return (
    <div className="flex flex-row justify-center bg-[#F5F5F5] py-16">
      <h2 className="min-w-max pt-4 pl-5 font-NeoSB text-2xl">
        이런 사람을
        <br />
        지향해요
      </h2>
      <img
        alt={longData.name}
        src={longData.publicURL}
        className="mx-7 h-[216px]"
      />
      <div className="flex flex-col">
        {items.map((item) => (
          <IdealItem
            img={itemData}
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
