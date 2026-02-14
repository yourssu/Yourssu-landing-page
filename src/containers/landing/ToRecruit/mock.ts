import toRecruitImage from 'src/assets/images/to-recruit.png';

interface RecruitData {
  imageUrl: string;
  recruitTitle: {
    desktop: string;
    mobile: string;
  };
  buttonText: {
    desktop: string;
    mobile: string;
  };
}

export const RECRUIT_DATA: RecruitData = {
  imageUrl: toRecruitImage,
  recruitTitle: {
    desktop: '새로운 도전을 재미로 바꾸는 사람, 유어슈로 모여요.',
    mobile: '새로운 도전을 재미로 바꾸는 사람\n유어슈로 모여요',
  },
  buttonText: {
    desktop: '지원하러 가기',
    mobile: '지원하기',
  },
};
