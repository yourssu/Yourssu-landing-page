import { ProfileIcon } from './icons';
import { ReviewDataType } from './mock';

interface ReviewCardProps {
  reviewData: ReviewDataType;
}

function ReviewCard({ reviewData }: ReviewCardProps) {
  return (
    <div className="flex h-44 w-[33.25rem] flex-col items-start justify-start gap-2.5 rounded-[1rem] bg-gray-50 px-9 py-8 text-[#4B505D] shadow-[0px_4px_8px_0px_rgba(181,185,196,0.25)]">
      <div className="inline-flex items-center justify-center gap-2">
        <ProfileIcon />

        <p className="text-xl font-semibold leading-7">
          {reviewData.nickname} / {reviewData.part}
        </p>
      </div>

      <p className="w-full max-w-[28.7rem] text-sm leading-tight">
        {reviewData.review}
      </p>
    </div>
  );
}

export default ReviewCard;
