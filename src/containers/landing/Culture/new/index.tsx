import MainTitle from '@/components/Title/MainTitle';

import { CultureCard } from './CultureCard';
import { CULTURE_DATA } from './mock';

function Culture() {
  return (
    <section className="flex w-full flex-col items-center gap-8 py-20 xs:gap-6 xs:py-10 sm:gap-6 sm:py-10">
      <MainTitle title="Culture" subTitle="유어슈에서 함께 즐기는 문화" />

      <div className="mb-6 flex flex-col items-center gap-9 xs:gap-4 sm:gap-4">
        {CULTURE_DATA.map((data: any, index: number) => (
          <CultureCard
            key={index}
            tagName={data.tagName}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Culture;
