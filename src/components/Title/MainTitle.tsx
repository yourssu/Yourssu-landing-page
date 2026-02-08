interface MainTitleProps {
  title: string;
  subTitle: string;
  className?: string;
}

function MainTitle({ title, subTitle, className = '' }: MainTitleProps) {
  return (
    <div
      className={`flex w-full flex-col items-start justify-start gap-1 text-center ${className}`}
    >
      <p className="text-2xl font-semibold text-[#4B505D] sm:text-base md:text-lg">
        {title}
      </p>
      <h1 className="text-black text-[2.5rem] font-semibold leading-[3.25rem] sm:text-2xl md:text-3xl">
        {subTitle}
      </h1>
    </div>
  );
}

export default MainTitle;
