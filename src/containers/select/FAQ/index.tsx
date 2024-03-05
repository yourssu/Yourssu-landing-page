import tw from 'tailwind-styled-components';
import QuestionCard from './QuestionCard';
import useFAQDetail from './hook';

function FAQ() {
  const { faq, imgData } = useFAQDetail();

  return (
    <Container className="flex flex-col items-center">
      <FAQText>자주 묻는 질문</FAQText>
      <div className="flex flex-col items-center gap-[20px]">
        {faq.map((value) => {
          return (
            <QuestionCard
              key={value.question}
              question={value.question}
              answer={value.answer}
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

const FAQText = tw.span`
  font-PretendardSB
  text-[50px] 
  font-[600] 
  leading-[59.67px] 
  tracking-[-1%]

  sm:h3
  xs:h3
`;

export default FAQ;
