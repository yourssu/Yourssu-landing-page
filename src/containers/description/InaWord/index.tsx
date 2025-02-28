import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import tw from 'tailwind-styled-components';

import { InaWordInformation } from '@/types/recruiting.type';

interface InaWordProps {
  departmentImage: IGatsbyImageData;
  inaWord: InaWordInformation;
}

function InaWord({ departmentImage, inaWord }: InaWordProps) {
  const image = getImage(departmentImage);
  return (
    <section>
      <Title>{inaWord.title}</Title>
      <InaWordContainer>
        <WordContainer>
          {image && <DepartmentImage image={image} alt={inaWord.title} />}
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
  md:body4
  sm:body4
  xs:body4

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
  md:body6
  sm:body6
  xs:body6

  whitespace-pre-wrap
  text-blue-0
`;

const DescriptionContainer = tw.div`
  body3
  md:body7
  sm:body7
  xs:body7

  whitespace-pre-wrap
  text-gray1-0
`;

const DepartmentImage = tw(GatsbyImage)`
  w-[60px]
  xs:w-10
  sm:w-10
  md:w-10
`;
