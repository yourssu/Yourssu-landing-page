import { MediumInformation } from '@/types/recruiting.type';

interface MediumProps {
  medium: MediumInformation[];
}

function Medium({ medium }: MediumProps) {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="h3 md:body4 sm:body4 xs:body4 text-black-0">Medium</div>
      </div>
      {medium.map((article) => (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          key={article.title}
          className="flex gap-5 xs:flex-col-reverse sm:flex-col-reverse"
        >
          <div className="flex flex-col gap-5">
            <div className="h4 sm:body6 xs:body6">{article.title}</div>
            <div className="body3 sm:body8 xs:body8">{article.description}</div>
          </div>
          <img
            className="w-[340px] xs:h-36 xs:w-full sm:h-36 sm:w-full"
            src={article.image}
            alt={article.title}
          />
        </a>
      ))}
    </section>
  );
}

export default Medium;
