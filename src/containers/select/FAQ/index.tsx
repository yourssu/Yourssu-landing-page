import * as Accordion from '@radix-ui/react-accordion';

import RecruitSectionLayout from '@/components/Layout/RecruitSectionLayout';
import RecruitTitle from '@/components/Title/RecruitTitle';

import QuestionCard from './QuestionCard';
import useFAQDetail from './hook';
import { QuestionIcon } from './icons';

function FAQ() {
  const { faqs, imgData } = useFAQDetail();

  return (
    <RecruitSectionLayout id="faq">
      <RecruitTitle
        title="FAQ"
        subtitle="유어슈에 대해 궁금한 부분이 있으신가요?"
        SVGIconComponent={<QuestionIcon />}
      />
      <Accordion.Root
        type="multiple"
        className="flex w-full flex-col items-stretch gap-5"
      >
        {faqs.map((item) => {
          return (
            <QuestionCard
              key={item.question}
              question={item.question}
              answer={item.answer}
              smallArrow={imgData.smallarrow.nodes[0]}
            />
          );
        })}
      </Accordion.Root>
    </RecruitSectionLayout>
  );
}

export default FAQ;
