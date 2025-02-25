import * as Accordion from '@radix-ui/react-accordion';
import tw from 'tailwind-styled-components';

import QuestionCard from './QuestionCard';
import useFAQDetail from './hook';

function FAQ() {
  const { faq, imgData } = useFAQDetail();

  return (
    <Container className="flex flex-col items-center">
      <FAQText>자주 묻는 질문</FAQText>
      <Accordion.Root
        type="multiple"
        className="flex flex-col items-center gap-[20px]"
      >
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
      </Accordion.Root>
    </Container>
  );
}

const Container = tw.div`
  gap-[60px]
`;

const FAQText = tw.span`
  h2
  sm:h3
  xs:h3
`;

export default FAQ;
