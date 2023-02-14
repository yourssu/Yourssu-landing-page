import { useState } from 'react';
import useHeaderDetail from '@/hooks/components/header/hook';
import '../styles/global.css';

export default function Header() {
  const { data, link } = useHeaderDetail();
  const [isClick, setIsClick] = useState(false);
  const logoData = data.logo.nodes[0];
  const snsData = data.social.nodes;
  const tooltip = data.tooltip.nodes[0];

  return (
    <header className="flex flex-col justify-between items-center w-full top-[37px] md:top-[24px] sm:top-[15px] absolute z-10">
      <div className="flex flex-row justify-between items-center xxl:w-[1280px] xl:w-[1160px] lg:w-[870px] md:w-[580px] sm:w-[355px]">
        <div className="flex flex-row justify-start items-center">
          <img
            src={logoData.publicURL}
            alt={logoData.name}
            className=" w-[42px] md:w-[37px] sm:w-[28px]"
          />
          <span className="font-Jost font-bold text-black text-[24px] md:text-[20] sm:text-[16px] -tracking-[1%]">
            YOURSSU
          </span>
        </div>
        <div className="flex flex-row items-center sm:hidden">
          {snsData.map((sns, index: number) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <a href={link[index]}>
                <object
                  type="image/svg+xml"
                  data={sns.publicURL}
                  className="ml-4 cursor-pointer pointer-events-none"
                >
                  {sns.name}
                </object>
              </a>
            );
          })}
        </div>
        <div
          aria-hidden="true"
          className="sm:block hidden cursor-pointer"
          onClick={() => {
            setIsClick(!isClick);
          }}
        >
          •••
        </div>
      </div>
      <hr className=" bg-[#8F8F90] xxl:w-[1280px] xl:w-[1160px] lg:w-[870px] md:w-[580px] sm:w-[355px] h-0.5 block mt-[5px]" />
      {isClick === true ? (
        <div className=" hidden sm:flex justify-center items-center w-full">
          <div className="relative min-w-[373px] flex flex-row-reverse justify-start">
            <img src={tooltip.publicURL} alt={tooltip.name} />
            <div className="flex flex-row justify-between items-center absolute w-[150px] top-[15px] right-[10px]">
              {snsData.map((sns, index: number) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <a href={link[index]}>
                    <object
                      type="image/svg+xml"
                      data={sns.publicURL}
                      className="mr-4 cursor-pointer pointer-events-none"
                    >
                      {sns.name}
                    </object>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
