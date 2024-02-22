import { Link } from 'gatsby';
import { NodeType } from '@/types/hook';

export default function DepartmentLinkButton({
  buttonImgData,
}: {
  buttonImgData: NodeType;
}) {
  return (
    <Link to="/">
      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[999px] bg-gradient-to-r from-mainGra2-0 to-mainGra1-0">
        <img
          className="h-[20px] w-[10px]"
          src={buttonImgData.publicURL}
          alt={buttonImgData.name}
        />
      </div>
    </Link>
  );
}
