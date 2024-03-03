import { useState } from 'react';
import { Link } from 'gatsby';
import useHeaderDetail from '@/components/Header/hook';
import { OSType } from '@/types/landing.type';

interface Props {
  type: OSType;
  pageType: string;
}

function Header({ type, pageType }: Props) {
  const { data } = useHeaderDetail();
  const [isClick, setIsClick] = useState(false);
  const logoData = data.logo.nodes[0];
  const listIconData = data.listIcon.nodes[0];
  const xIconData = data.xIcon.nodes[0];

  return (
    <header
      className={`${
        pageType === 'main' ? 'absolute z-10' : 'bg-bluegray4-0'
      } z-10 flex w-full flex-col items-center justify-between ${
        isClick && pageType === 'main' ? 'bg-white-0' : 'null'
      }`}
    >
      <div className="flex w-full items-center justify-between py-[24px] xs:px-[20px] xs:py-[12px] sm:px-[20px] sm:py-[12px] md:px-[40px] md:py-[24px] lg:px-[40px] lg:py-[24px] xl:w-[1326px] xxl:w-[1326px]">
        <Link to="/" className="flex items-center justify-between">
          <img
            src={logoData.publicURL}
            alt={logoData.name}
            className=" w-[42px] xs:w-[25px] sm:w-[28px] md:w-[37px]"
          />
          {type === 'ios' ? (
            <span className="text-black w-[111px] text-center font-Jost text-[24px] font-[550] leading-[26px] -tracking-[0.04em] xs:w-[60px] xs:text-[14px] xs:leading-[16px] xs:-tracking-[0.02em] sm:w-[73px] sm:text-[16px] sm:leading-[16px] sm:-tracking-[0.02em] md:w-[92px] md:text-[20px] md:leading-[20px] md:-tracking-[0.02em]">
              YOURSSU
            </span>
          ) : (
            <span className="text-black w-[111px] text-center font-Jost text-[24px] font-semibold leading-[26px] -tracking-[0.04em] xs:w-[60px] xs:text-[14px] xs:leading-[16px] xs:-tracking-[0.02em] sm:w-[73px] sm:text-[16px] sm:leading-[16px] sm:-tracking-[0.02em] md:w-[92px] md:text-[20px] md:leading-[20px] md:-tracking-[0.02em]">
              YOURSSU
            </span>
          )}
        </Link>
        <div className="flex flex-row items-center gap-[24px] xs:hidden sm:hidden">
          <Link to="/">
            <span
              className={`${
                pageType === 'main'
                  ? ' font-Jost text-[18px] font-[600] leading-normal tracking-[-0.36px] text-black-0'
                  : 'font-Jost text-[18px] font-[600] leading-normal tracking-[-0.36px] text-bluegray1-0'
              }`}
            >
              MAIN
            </span>
          </Link>
          <Link to="/recruiting">
            <span
              className={`${
                pageType === 'main'
                  ? ' font-Jost text-[18px] font-[600] leading-normal tracking-[-0.36px] text-bluegray1-0'
                  : 'font-Jost text-[18px] font-[600] leading-normal tracking-[-0.36px] text-black-0'
              }`}
            >
              RECRUITING
            </span>
          </Link>
        </div>
        <div
          aria-hidden="true"
          className="hidden cursor-pointer xs:block sm:block"
          onClick={() => {
            setIsClick(!isClick);
          }}
        >
          {isClick ? (
            <img src={xIconData.publicURL} alt={xIconData.name} />
          ) : (
            <img src={listIconData.publicURL} alt={listIconData.name} />
          )}
        </div>
      </div>
      <hr
        className={`${
          isClick ? 'hidden' : null
        } block h-[1px] w-full border-none ${pageType !== 'main' && 'bg-bluegray2-0'}`}
      />
      {isClick ? (
        <nav className="flex h-auto w-full flex-col items-start justify-start bg-white-0 md:hidden lg:hidden xl:hidden xxl:hidden">
          <span
            className={`
              p-[20px]
              ${
                pageType === 'main'
                  ? ' font-Jost text-[18px] font-[600] leading-normal tracking-[-0.36px] text-black-0'
                  : 'font-Jost text-[18px] font-[600] leading-normal tracking-[-0.36px] text-Text_Color2-0'
              }`}
          >
            <Link to="/">MAIN</Link>
          </span>
          <span
            className={`
              p-[20px]
              ${
                pageType === 'main'
                  ? ' font-Jost text-[18px] font-[600] leading-normal tracking-[-0.36px] text-Text_Color2-0'
                  : 'font-Jost text-[18px] font-[600] leading-normal tracking-[-0.36px] text-black-0'
              }`}
          >
            <Link to="/recruiting">RECRUITING</Link>
          </span>
        </nav>
      ) : null}
    </header>
  );
}

export default Header;
