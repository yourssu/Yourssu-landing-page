import tw from 'tailwind-styled-components';
import { InaWordInformation } from '@/types/recruiting.type';
import extractImageUrl from '@/utils/extractImageUrl';

interface InaWordProps {
  departmentImage: string;
  inaWord: InaWordInformation;
}

function InaWord({ departmentImage, inaWord }: InaWordProps) {
  return (
    <section>
      <Title>{inaWord.title}</Title>
      <InaWordContainer>
        <WordContainer>
          <img
            src={extractImageUrl(departmentImage)}
            alt={inaWord.title}
            className="h-14"
          />
          <Word>“{inaWord.word}”</Word>
        </WordContainer>
        <DescriptionContainer>{inaWord.content}</DescriptionContainer>
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

const Title = tw.div`
  body1
  pb-6
  text-black-0
`;

const WordContainer = tw.div`
  flex
  gap-5
  items-center
  
  rounded-[12px]
  bg-bluegray4-0
  
  mb-5
  px-6
  py-5
`;

const Word = tw.div`
  h4
  whitespace-pre-wrap
  text-blue-0
`;

const DescriptionContainer = tw.div`
  body3
  whitespace-pre-wrap
  text-gray1-0
`;
