interface Props {
  title: string;
  description: string;
  linerColor: string;
  textColor: string;
}

function SectionIntro({ title, description, linerColor, textColor }: Props) {
  const textColorVariants: { [key: string]: string } = {
    ver1: 'text-Text_Color1-0',
    ver2: 'text-Text_Color2-0',
  };

  const linearVariants: { [key: string]: string } = {
    gra: 'bg-gradient-to-t from-gradient_color1-0 to-gradient_color2-0',
    black: 'bg-black-0',
  };

  return (
    <div className="mx-[50px] flex flex-col items-center">
      <div
        className={`h-[39px] w-[3px] xs:h-[22px] xs:w-[2px] ${linearVariants[linerColor]}`}
      />
      <h2 className="font-jost mb-[10px] mt-10 text-[36px] font-medium tracking-[.01em] xs:mt-[15px] xs:text-[20px] sm:text-[24px] md:text-[32px] xl:font-semibold xxl:font-semibold">
        {title}
      </h2>
      {description.split('<br />').map((des) => (
        <p
          key={des}
          className={`font-apple-neo flex justify-center text-center text-[22px] font-normal leading-relaxed xs:text-[13px] sm:w-[330px] sm:text-[14px] md:w-[450px] md:text-[18px] ${textColorVariants[textColor]}`}
        >
          {des}
          <br />
        </p>
      ))}
    </div>
  );
}

export default SectionIntro;
