import { ProfileIcon } from './icons';
import { ReviewDataType } from './mock';

interface ReviewCardProps {
  reviewData: ReviewDataType;
}

function ReviewCard({ reviewData }: ReviewCardProps) {
  return (
    <div className="flex h-[140px] w-[500px] flex-col items-start justify-start gap-2.5 rounded-[1rem] bg-gray-50 px-9 py-5 xs:w-96 sm:w-96">
      <div className="inline-flex items-center justify-center gap-2">
        <ProfileIcon />

        <p className="B1_Sb_16 text-text-basicSecondary">
          {reviewData.nickname} / {reviewData.part}
        </p>
      </div>

      <p className="B3_Rg_14 w-full max-w-[28.7rem] text-text-basicTertiary">
        {reviewData.review}
      </p>
    </div>
  );
}

export default ReviewCard;
