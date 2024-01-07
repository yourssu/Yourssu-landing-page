import { IntroElement } from '@/types/types';

function SectionIntro({ title, description, divStyle, color }: IntroElement) {
  return (
    <div className="mx-[50px] flex flex-col items-center">
      <div className={`h-[39px] w-[3px] xs:h-[22px] xs:w-[2px] ${divStyle}`} />
      <h1 className="mb-[10px] mt-[40px] font-Jost text-[36px] font-medium tracking-[.01em] xs:mt-[15px] xs:text-[20px] sm:text-[24px] md:text-[32px] xl:font-semibold xxl:font-semibold">
        {title}
      </h1>
      {description.split('<br />').map((des) => (
        <p
          key={des}
          className={`flex justify-center text-center font-NeoR text-[22px] leading-relaxed xs:text-[13px] sm:w-[330px] sm:text-[14px] md:w-[450px] md:text-[18px] ${color}`}
        >
          {des}
          <br />
        </p>
      ))}
    </div>
  );
}

export default SectionIntro;
