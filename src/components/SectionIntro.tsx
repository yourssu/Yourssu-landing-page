type IntroProps = {
  title: string;
  description: string;
  divStyle: string;
  color: string;
};

function SectionIntro({ title, description, divStyle, color }: IntroProps) {
  return (
    <div className="flex flex-col items-center mx-[50px]">
      <div className={`xs:w-[2px] w-[3px] xs:h-[30px] h-[39px] ${divStyle}`} />
      <h1 className="xs:mt-[30px] mt-[40px] mb-[10px] font-Jost font-medium xs:text-[20px] sm:text-[24px] md:text-[32px] text-[36px]">
        {title}
      </h1>
      {description.split('<br />').map((des) => (
        <p
          key={des}
          className={`flex text-center justify-center font-NeoR xs:text-[13px] sm:text-[14px] md:text-[18px] text-[22px] sm:w-[330px] md:w-[450px] leading-relaxed ${color}`}
        >
          {des}
          <br />
        </p>
      ))}
    </div>
  );
}

export default SectionIntro;
