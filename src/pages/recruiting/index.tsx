import tw from 'tailwind-styled-components';
import Seo from '@/components/Seo';
import About from '@/containers/select/About';
import Banner from '@/containers/select/Banner';

function Recruiting() {
  return (
    <Container className="flex flex-col items-center">
      <Banner />
      <About />
    </Container>
  );
}

const Container = tw.div`
  w-full
  bg-bluegray4-0
`;

export default Recruiting;

export function Head() {
  return <Seo />;
}
