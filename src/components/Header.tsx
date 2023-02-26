import { useState } from 'react';
import useHeaderDetail from '@/hooks/components/header/hook';
import '../styles/global.css';

type HeaderProp = {
  isType: string | undefined;
};

export default function Header({ isType }: HeaderProp) {
  const { data, link } = useHeaderDetail();
  const [isClick, setIsClick] = useState(false);
  const logoData = data.logo.nodes[0];
  const snsData = data.social.nodes;
  const tooltip = data.tooltip.nodes[0];

  return (
    <header className="flex flex-col justify-between items-center w-full top-[37px] md:top-[24px] sm:top-[15px] xs:top-[15px] absolute z-10">
      <div className="flex flex-row justify-between items-center xxl:w-[1280px] xl:w-[1160px] lg:w-[870px] md:w-[580px] sm:w-[355px] xs:w-[260px]">
        <div className="flex flex-row justify-between items-center">
          <img
            src={logoData.publicURL}
            alt={logoData.name}
            className=" w-[42px] md:w-[37px] sm:w-[28px] xs:w-[25px]"
          />
          {isType === 'ios' ? (
            <span className="w-[111px] md:w-[92px] sm:w-[73px] xs:w-[60px] font-Jost font-[550] text-center text-black text-[24px] md:text-[20px] sm:text-[16px] xs:text-[14px] leading-[26px] md:leading-[20px] sm:leading-[16px] xs:leading-[16px] -tracking-[0.04em] md:-tracking-[0.02em] sm:-tracking-[0.02em] xs:-tracking-[0.02em]">
              YOURSSU
            </span>
          ) : (
            <span className="w-[111px] md:w-[92px] sm:w-[73px] xs:w-[60px] font-Jost text-center font-semibold text-black text-[24px] md:text-[20px] sm:text-[16px] xs:text-[14px] leading-[26px] md:leading-[20px] sm:leading-[16px] xs:leading-[16px] -tracking-[0.04em] md:-tracking-[0.02em] sm:-tracking-[0.02em] xs:-tracking-[0.02em]">
              YOURSSU
            </span>
          )}
        </div>
        <div className="flex flex-row items-center sm:hidden xs:hidden">
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
          className="xs:block sm:block hidden cursor-pointer"
          onClick={() => {
            setIsClick(!isClick);
          }}
        >
          •••
        </div>
      </div>
      <hr className=" bg-[#8F8F90] border-none xxl:w-[1280px] xl:w-[1160px] lg:w-[870px] md:w-[580px] sm:w-[355px] xs:w-[260px] h-[1px] block mt-[21px] md:mt-[12px] sm:mt-[6px] xs:mt-[4px]" />
      {isClick === true ? (
        <div className=" hidden sm:flex xs:flex justify-center items-center w-full">
          <div className="relative min-w-[373px] xs:min-w-[275px] flex flex-row-reverse justify-start">
            <img src={tooltip.publicURL} alt={tooltip.name} />
            <div className="flex flex-row justify-between items-center absolute w-[150px] top-[15px] right-[10px]">
              {snsData.map((sns, index: number) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <a href={link[index]}>
                    <object
                      type="image/svg+xml"
                      data={sns.publicURL}
                      className="cursor-pointer pointer-events-none"
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
