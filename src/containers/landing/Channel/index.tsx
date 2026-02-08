import { ContentsCard } from './ContentsCard';
import { CHANNELS_DATA } from './mock';

function Channel() {
  return (
    <section className="mb-7 h-[30.5rem] py-[3.75rem] text-center">
      <h3 className="T2_Sb_24 mb-[2.375rem] xs:text-2xl sm:text-2xl md:text-2xl">
        다양한 채널에서 유어슈를 만나보세요
      </h3>

      <div
        className="mb-[3.75rem] flex w-full justify-center gap-10 
          xs:justify-start xs:overflow-x-scroll xs:pl-5 sm:justify-start sm:overflow-x-scroll sm:pl-5 md:justify-center md:overflow-x-scroll md:pl-5"
        id="scrollbar-hide"
      >
        {CHANNELS_DATA.map((channel) => (
          <ContentsCard
            key={channel.title}
            title={channel.title}
            tagNames={channel.tagNames}
            imageUrl={channel.imageUrl}
            contentUrl={channel.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Channel;
