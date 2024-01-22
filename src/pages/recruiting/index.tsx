import tw from 'tailwind-styled-components';
import Seo from '@/components/Seo';
import About from '@/containers/select/About';
import ApplyProcedure from '@/containers/select/ApplyProcedure';
import Banner from '@/containers/select/Banner';
import FAQ from '@/containers/select/FAQ';
import Ideal from '@/containers/select/Ideal';
import Supporting from '@/containers/select/Supporting';

function Recruiting() {
  return (
    <Container className="flex flex-col items-center gap-[150px]">
      <Banner />
      <Ideal />
      <About />
      <ApplyProcedure />
      <Supporting />
      <FAQ />
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
