import tw from 'tailwind-styled-components';
import useInaWordDetail from './hook';

const dummy = {
  name: '리걸팀',
  title:
    '“법조문만 해석하고 있는 당신!\n학생들을 위한 서비스를 만들며 자신의 법 지식을 활용해 보고 싶지 않나요?”',
  description:
    '유어슈의 리걸팀은 서비스 기획부터 출시, 나아가 홍보까지\n모든 과정에서 발생할 수 있는 법적 이슈를 검토할 뿐만 아니라,\n서비스 내외로 유어슈와 이용자인 학생 모두가 만족할 수 있는 각종 정책을 수립하는 역할을 하고 있어요.\n서비스를 만들며 제작자와 이용자의 권리와 의무를 고민하는 과정을 통해 시야를 넓히고,\n여러 분야의 전공자와 협업하는 경험을 쌓고 싶다면 리걸팀과 함께해요!',
};

function InaWord() {
  const data = useInaWordDetail();

  return (
    <section>
      <div className="body1 pb-6 text-black-0">{dummy.name}의 한마디</div>
      <InaWordContainer>
        <TitleContainer>
          <img src={data.legal.publicURL} alt={dummy.name} className="h-14" />
          <Title>{dummy.title}</Title>
        </TitleContainer>
        <DescriptionContainer>{dummy.description}</DescriptionContainer>
      </InaWordContainer>
    </section>
  );
}

export default InaWord;

const InaWordContainer = tw.div`
  border-l-4
  border-blue-0
  pl-5
`;

const TitleContainer = tw.div`
  mb-5
  flex
  gap-5
  rounded-[12px]
  bg-bluegray4-0
  px-6
  py-5
`;

const Title = tw.div`
  h4
  whitespace-pre-wrap
  text-blue-0
`;

const DescriptionContainer = tw.div`
  body3
  whitespace-pre-wrap
  text-gray1-0
`;
