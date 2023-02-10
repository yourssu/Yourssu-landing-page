type IntroProps = {
  title: string;
  description: string;
  divStyle: string;
  color: string;
};

function SectionIntro({ title, description, divStyle, color }: IntroProps) {
  return (
    <div className="mb-[52px] md:mb-[62px] flex flex-col items-center mx-[50px]">
      <div className={divStyle} />
      <h1 className="mt-[30px] mb-[10px] font-Roboto font-medium md:text-[32px] text-[36px]">
        {title}
      </h1>
      {description.split('<br />').map((des) => (
        <p
          key={des}
          className={`flex text-center md:justify-center font-NeoR text-[22px] md:text-[18px] md:w-[450px] leading-relaxed ${color}`}
        >
          {des}
          <br />
        </p>
      ))}
    </div>
  );
}

export default SectionIntro;
