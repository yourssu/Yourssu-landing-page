import * as Accordion from '@radix-ui/react-accordion';
import tw from 'tailwind-styled-components';

import QuestionCard from './QuestionCard';
import useFAQDetail from './hook';

function FAQ() {
  const { faq, imgData } = useFAQDetail();

  return (
    <Container className="flex flex-col items-center">
      <FAQText>유어슈 모집 FAQ</FAQText>
      <Accordion.Root
        type="multiple"
        className="flex flex-col items-center gap-10"
      >
        {faq.map((value) => {
          return (
            <div key={value.category} className="flex flex-col gap-5">
              <div className="h3 sm:h4 xs:h4">{value.category}</div>
              {value.list.map((item) => {
                return (
                  <QuestionCard
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    smallArrow={imgData.smallarrow.nodes[0]}
                  />
                );
              })}
            </div>
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
