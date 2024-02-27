import { useRef } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import tw from 'tailwind-styled-components';
import { NodeType } from '@/types/hook';

export default function DepartmentSearch({
  imgData,
  setSearchText,
}: {
  imgData: NodeType;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) {
  const Ref = useRef<HTMLInputElement>(null);
  const breakpoints = useBreakpoint();

  return (
    <Container className="flex h-auto justify-between">
      <SearchBox
        ref={Ref}
        placeholder={
          breakpoints.md
            ? '키워드 검색'
            : `관심있는 분야에 대해 검색해보세요 ex) 인사, 기획, ...`
        }
        onChange={() => {
          setTimeout(() => {
            setSearchText(Ref.current!.value);
          }, 2000);
        }}
      />
      <IconWapper
        type="button"
        onClick={() => {
          setSearchText(Ref.current!.value);
        }}
      >
        <SearchIcon src={imgData.publicURL} alt={imgData.name} />
      </IconWapper>
    </Container>
  );
}

const Container = tw.div`
  w-[1280px] 
  lg:w-[924px]
  md:w-[500px]
  sm:w-[200px]
  xs:w-[200px]

  rounded-[14px] 
  bg-bluegray3-0
  px-[32px]
  py-[17px]    
`;

const SearchBox = tw.input`
  w-[800px]
  lg:w-[600px]
  md:w-[350px] 
  sm:w-[100px]
  xs:w-[100px]

  text-bluegray1-0 

  bg-bluegray3-0 
  border-none
  outline-none

  h4
  sm:body8
  xs:body8
`;

const IconWapper = tw.button``;

const SearchIcon = tw.img`
  w-[32px] 
  sm:w-[21px]
  xs:w-[21px] 
`;
