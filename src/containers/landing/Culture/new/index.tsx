import MainTitle from '@/components/Title/MainTitle';

import { CultureCard } from './CultureCard';
import { cultures } from './mock';

function Culture() {
  return (
    <section className="w-full bg-[#F7F8F8] py-[80px] xs:px-5 sm:px-5 md:px-5">
      <div className="mx-auto w-full max-w-[65.625rem]">
        <MainTitle title="Culture" subTitle="유어슈에서 함께 즐기는 문화" />

        <div className="mb-6 flex flex-col items-center gap-3">
          {cultures.map((data: any, index: number) => (
            <CultureCard
              key={index}
              tagName={data.tagName}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Culture;
