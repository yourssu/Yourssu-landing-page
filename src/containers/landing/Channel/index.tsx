import { CHANNELS_DATA } from './mock';

function Channel() {
  return (
    <section className="mb-7 h-[30.5rem] py-[3.75rem] text-center">
      <h3 className="mb-[2.375rem] text-[1.75rem] font-semibold">
        다양한 채널에서 유어슈를 만나보세요
      </h3>

      <div className="mb-[3.75rem] flex justify-center gap-10">
        {CHANNELS_DATA.map((channel) => (
          <a
            key={channel.platform}
            href={channel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full flex-col items-center justify-center gap-3"
          >
            <div className="h-48 w-72 rounded-[1rem] bg-zinc-300" />

            <div className="w-72 px-1 text-left">
              <p className="text-sm font-normal text-gray-700">
                {channel.platform}
              </p>
              <h4 className="text-black whitespace-pre-wrap text-xl font-semibold">
                {channel.title}
              </h4>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Channel;
