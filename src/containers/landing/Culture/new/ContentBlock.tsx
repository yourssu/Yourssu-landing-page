import { CULTURE_DATA } from './mock';

type ContentBlockProps = {
  content: (typeof CULTURE_DATA)[0];
};

function ContentBlock({ content }: ContentBlockProps) {
  return (
    <div>
      <p className="mb-5 whitespace-pre-line text-2xl text-[#4B505D] xs:text-xl sm:text-xl">
        {content.description}
      </p>
      <img
        src={content.imageUrl}
        alt={`${content.tabName} 활동 이미지`}
        className="w-full rounded-[1rem] object-cover"
      />
    </div>
  );
}

export default ContentBlock;
