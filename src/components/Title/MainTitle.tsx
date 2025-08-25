interface MainTitleProps {
  title: string;
  subTitle: string;
  className?: string;
}

function MainTitle({ title, subTitle, className = '' }: MainTitleProps) {
  return (
    <div
      className={`flex w-full flex-col items-start justify-start gap-1 text-center md:text-left ${className}`}
    >
      <p className="text-2xl font-semibold text-[#4B505D]">{title}</p>
      <h1 className="text-black text-[2.5rem] font-semibold  leading-[3.25rem]">
        {subTitle}
      </h1>
    </div>
  );
}

export default MainTitle;
