import { useRef, useState } from 'react';

import { ProductCard } from './ProductCard';
import { ArrowLeftIcon, ArrowRightIcon } from './arrowIcons';
import { products } from './mocks';

function Product() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3;
  const cardWidth = 332;
  const gap = 24;
  const moveDistance = (cardWidth + gap) * itemsPerPage; // 1068px

  // 데이터가 3의 배수가 아닐 때, 부족한 칸 수를 계산 (예: 5개면 1칸 부족)
  const remainingSlots =
    (itemsPerPage - (products.length % itemsPerPage)) % itemsPerPage;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const maxPage = Math.ceil(products.length / itemsPerPage) - 1;
      let nextPage =
        direction === 'left'
          ? Math.max(0, currentPage - 1)
          : Math.min(maxPage, currentPage + 1);

      setCurrentPage(nextPage);

      scrollRef.current.scrollTo({
        left: nextPage * moveDistance,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full py-[80px]">
      {/* 1. 헤더 영역 */}
      <div className="mx-auto mb-8 flex w-full max-w-[1060px] flex-col items-start gap-[4px]">
        <span className="font-pretendard text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-text-basicTertiary">
          Product
        </span>
        <div className="flex w-full items-center justify-between">
          <span className="font-pretendard text-[24px] font-semibold leading-[38px] tracking-[-0.48px]">
            함께 몰입한 결과물
          </span>
          {/* 화살표 버튼 그룹 */}
          <div className="flex h-[48px] w-[90px] cursor-pointer items-center justify-center gap-[28px] rounded-[29px] border border-line-basicMedium px-[9px]">
            <button onClick={() => scroll('left')} aria-label="이전">
              <ArrowLeftIcon />
            </button>
            <button onClick={() => scroll('right')} aria-label="다음">
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      {/* 2. 카드 리스트 영역 */}
      <div className="mx-auto flex max-w-[1060px] flex-col">
        <div
          ref={scrollRef}
          className="scrollbar-hide relative flex snap-x snap-mandatory gap-6 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <a
              key={product.id}
              href={product.serviceUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ProductCard
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            </a>
          ))}
          {/* 부족한 칸만큼 투명한 div를 생성해 스크롤 공간 확보 */}
          {Array.from({ length: remainingSlots }).map((_, i) => (
            <div
              key={`dummy-${i}`}
              className="h-1 min-w-[332px] flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
