import tw from 'tailwind-styled-components';
import QuestionCard from './QuestionCard';
import useFAQDetail from './hook';

function FAQ() {
  const { faq, imgData } = useFAQDetail();

  return (
    <Container className="flex flex-col items-center">
      <span className="font-Pretendard text-[50px] font-[600] leading-[59.67px] tracking-[-1%]">
        자주 묻는 질문
      </span>
      <div className="flex flex-col items-center gap-[20px]">
        {faq.map((value) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <QuestionCard
              question={value.question}
              smallArrow={imgData.smallarrow.nodes[0]}
            />
          );
        })}
      </div>
    </Container>
  );
}

const Container = tw.div`
  gap-[60px]
`;

export default FAQ;
