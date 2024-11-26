import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';

import { NodeType } from '@/types/hook';

export default function DepartmentLinkButton({
  buttonImgData,
  linkData,
}: {
  buttonImgData: NodeType;
  linkData: string;
}) {
  return (
    <Link to={`${linkData}`}>
      <Container className="flex items-center justify-center">
        <ArrowImg src={buttonImgData.publicURL} alt={buttonImgData.name} />
      </Container>
    </Link>
  );
}

const Container = tw.div`
  w-[44px]
  h-[44px] 
  rounded-[999px] 
  bg-gradient-to-r 
  from-mainGra2-0 
  to-mainGra1-0
`;

const ArrowImg = tw.img`
  w-auto
  h-[20px]
`;
