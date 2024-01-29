import tw from 'tailwind-styled-components';
import { DefaultContent } from '@/types/recruiting.type';

interface InformationProps {
  task: DefaultContent;
  ideal: DefaultContent;
  experience: DefaultContent;
}

function Information({ task, ideal, experience }: InformationProps) {
  const information = [task, ideal, experience];

  return (
    <Container>
      {information.map((data) => (
        <div key={data.title}>
          <div className="body1 mb-5 text-black-0">{data.title}</div>
          <InformationContainer>
            {data.content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </InformationContainer>
        </div>
      ))}
    </Container>
  );
}

export default Information;

const Container = tw.section`
  flex
  flex-col
  gap-[60px]
`;

const InformationContainer = tw.ul`
  body2
  list-outside
  list-disc
  pl-7
  text-gray1-0
  text-justify
`;
