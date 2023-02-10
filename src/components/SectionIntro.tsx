type IntroProps = {
  title: string;
  description: string;
  divStyle: string;
  color: string;
};

function SectionIntro({ title, description, divStyle, color }: IntroProps) {
  return (
    <div className="flex flex-col items-center mx-[50px]">
      <div className={`w-[3px] h-[39px] ${divStyle}`} />
      <h1 className="mt-[40px] mb-[10px] font-Roboto font-medium sm:text-[24px] md:text-[32px] text-[36px]">
        {title}
      </h1>
      {description.split('<br />').map((des) => (
        <p
          key={des}
          className={`flex text-center justify-center font-NeoR sm:text-[14px] md:text-[18px] text-[22px] sm:w-[330px] md:w-[450px] leading-relaxed ${color}`}
        >
          {des}
          <br />
        </p>
      ))}
    </div>
  );
}

export default SectionIntro;
