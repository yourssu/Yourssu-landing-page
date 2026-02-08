import scholarshipOnImage from 'src/assets/images/products/scholarship-on.png';
import signalImage from 'src/assets/images/products/signal.png';
import soongptImage from 'src/assets/images/products/soongpt.png';
import ssutimeImage from 'src/assets/images/products/ssu-time.png';
import usaintImage from 'src/assets/images/products/sum-usaint.png';

export interface ProductDataType {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  serviceUrl: string;
}

export const products: ProductDataType[] = [
  {
    id: 1,
    title: '숨쉴때 유세인트',
    description: '성적 정보를 빠르게 확인해보세요',
    imageUrl: usaintImage,
    serviceUrl:
      'https://apps.apple.com/kr/app/%EC%88%A8%EC%89%B4%EB%95%8C-%EC%9C%A0%EC%84%B8%EC%9D%B8%ED%8A%B8/id1601044486',
  },
  {
    id: 2,
    title: '숭피티',
    description: '숭실대 시간표 추천 서비스',
    imageUrl: soongptImage,
    serviceUrl: 'https://soongpt.yourssu.com',
  },
  {
    id: 3,
    title: '시그널',
    description: '숭실대생을 위한 소개팅 서비스',
    imageUrl: signalImage,
    serviceUrl: 'https://signal.yourssu.com',
  },
  {
    id: 4,
    title: '장학온',
    description: '대학생을 위한 장학금 추천 서비스',
    imageUrl: scholarshipOnImage,
    serviceUrl: 'https://scholarship-on-frontend.pages.dev',
  },
  {
    id: 5,
    title: '슈타임',
    description: '학사일정을 간단하게 추가하는 서비스',
    imageUrl: ssutimeImage,
    serviceUrl: 'https://ssu-time.vercel.app/',
  },
];
