type IntroProps = {
  title: string;
  description: string;
  divStyle: string;
  color: string;
};

function SectionIntro({ title, description, divStyle, color }: IntroProps) {
  return (
    <div className="mb-[52px] flex flex-col items-center mx-[50px]">
      <div className={divStyle} />
      <h1 className="mt-5 mb-2 font-Roboto font-medium text-[36px]">{title}</h1>
      {description.split('<br />').map((des) => (
        <p
          key={des}
          className={`flex text-center font-NeoR text-[22px] leading-relaxed ${color}`}
        >
          {des}
          <br />
        </p>
      ))}
    </div>
  );
}

export default SectionIntro;
