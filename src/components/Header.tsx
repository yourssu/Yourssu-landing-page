import useHeaderDetail from '@/hooks/hook';
import '../styles/global.css';

export default function Header() {
  const { data, link } = useHeaderDetail();
  const logoData = data.logo.nodes[0];
  const snsData = data.social.nodes;
  return (
    <header className="flex flex-col justify-between items-center w-full top-[37px] md:top-[24px] sm:top-[15px] absolute z-10">
      <div className="flex flex-row justify-between items-center xxl:w-[1280px] xl:w-[1160px] lg:w-[870px] md:w-[580px] sm:w-[355px]">
        <div className="flex flex-row justify-start items-center">
          <img
            src={logoData.publicURL}
            alt={logoData.name}
            className=" w-[42px] md:w-[37px] sm:w-[28px]"
          />
          <span className=" font-Roboto font-bold text-black text-[24px] md:text-[20] sm:text-[16px] -tracking-[1%]">
            YOURSSU
          </span>
        </div>
        <div className="flex flex-row items-center sm:hidden">
          {snsData.map((sns, index: number) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <a href={link[index]}>
                <img
                  src={sns.publicURL}
                  alt={sns.name}
                  className="mr-4 cursor-pointer md:w-[21px] md:h-[21px]"
                />
              </a>
            );
          })}
        </div>
        <div className="sm:block hidden">•••</div>
      </div>
      <hr className=" bg-[#8F8F90] xxl:w-[1280px] xl:w-[1160px] lg:w-[870px] md:w-[580px] sm:w-[355px] h-0.5 block mt-[5px]" />
    </header>
  );
}
