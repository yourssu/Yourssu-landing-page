import signalModalImage from 'src/assets/images/products/signal-modal.png';
import signalImage from 'src/assets/images/products/signal.png';
import soongptModalImage from 'src/assets/images/products/soongpt-modal.png';
import soongptImage from 'src/assets/images/products/soongpt.png';
import ussaintImage from 'src/assets/images/products/sum-usaint.png';
import ussaintModalImage from 'src/assets/images/products/usaint-modal.png';

export interface ProductDataType {
  id: number;
  title: string;
  description: string;
  status: string;
  stats: string;
  imageUrl: string;
  modalImageUrl: string;
  suggestUrl: string;
  serviceUrl: string;
}

export const products: ProductDataType[] = [
  {
    id: 1,
    title: '시그널',
    description: '숭실대생을 위한 소개팅 서비스',
    status: '축제기간 한정 서비스 중',
    stats: '방문자수 약 3700명, 프로필 등록자 수 676명',
    imageUrl: signalImage,
    modalImageUrl: signalModalImage,
    suggestUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSfnVYpKj6S9K1riG_a3bdVf_nJQPb3hqi309s6gweT9kiwjhw/viewform?usp=dialog',
    serviceUrl: 'https://signal.yourssu.com',
  },
  {
    id: 2,
    title: '숭피티',
    description: '이제 복잡한 시간표 조합은 그만!\n숭실대 시간표 추천 서비스',
    status: '서비스 중',
    stats: '40개 학과, 누적 1,256명 이용',
    imageUrl: soongptImage,
    modalImageUrl: soongptModalImage,
    suggestUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSe5vse5MHoTKjkFVL_Euo4p6wCOwDMYCPlp_seRUnn7QRr6Lg/viewform?usp=dialog',
    serviceUrl:
      'https://apps.apple.com/kr/app/%EC%88%A8%EC%89%B4%EB%95%8C-%EC%9C%A0%EC%84%B8%EC%9D%B8%ED%8A%B8/id1601044486',
  },
  {
    id: 3,
    title: '숨쉴때 유세인트',
    description: '유세인트에 등록되는\n성적 정보를 빠르게 확인해보세요',
    status: '서비스 중',
    stats: '사용자 만족도 4.7점, iOS/Android 사용자 100+',
    imageUrl: ussaintImage,
    modalImageUrl: ussaintModalImage,
    suggestUrl: 'https://soongpt.yourssu.com',
    serviceUrl: 'https://soongpt.yourssu.com',
  },
];
