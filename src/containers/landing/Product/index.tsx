import { useRef, useState, useEffect } from 'react';

import { ProductCard } from './ProductCard';
import { ArrowLeftIcon, ArrowRightIcon } from './arrowIcons';
import { products } from './mocks';

function Product() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsInView, setItemsInView] = useState(3);

  const cardWidth = 332;
  const gap = 24;

  // 1. 화면 너비에 따라 몇 개를 보여줄지 결정 (컨테이너 너비를 결정짓는 기준)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 712)
        setItemsInView(1); // 카드 1개 너비 + 여유
      else if (width < 1068)
        setItemsInView(2); // 카드 2개 + 간격 1개 너비
      else setItemsInView(3); // 카드 3개 + 간격 2개 너비

      setCurrentPage(0);
      if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const maxPage = Math.ceil(products.length / itemsInView) - 1;
      let nextPage =
        direction === 'left'
          ? Math.max(0, currentPage - 1)
          : Math.min(maxPage, currentPage + 1);

      setCurrentPage(nextPage);

      // 한 페이지(세트)만큼 정확히 이동
      const moveDistance = (cardWidth + gap) * itemsInView;
      scrollRef.current.scrollTo({
        left: nextPage * moveDistance,
        behavior: 'smooth',
      });
    }
  };

  const remaining =
    (itemsInView - (products.length % itemsInView)) % itemsInView;

  // 2. 현재 itemsInView에 딱 맞는 컨테이너 너비 계산
  const containerWidth = cardWidth * itemsInView + gap * (itemsInView - 1);

  return (
    <section className="mx-auto w-full px-5 py-[80px]">
      <div
        className="mx-auto flex flex-col transition-all duration-300"
        style={{ width: `${containerWidth}px`, maxWidth: '100%' }}
      >
        {/* 헤더 영역: 컨테이너 너비에 맞춰 정렬됨 */}
        <div className="mb-8 flex w-full items-center justify-between">
          <div className="flex flex-col items-start gap-[4px]">
            <span className="B3_Rg_14 text-text-basicTertiary">Product</span>
            <span className="T2_Sb_24">함께 몰입한 결과물</span>
          </div>
          <div className="flex h-[48px] w-[90px] items-center justify-center gap-[28px] rounded-[29px] border border-line-basicMedium px-[9px]">
            <button onClick={() => scroll('left')}>
              <ArrowLeftIcon />
            </button>
            <button onClick={() => scroll('right')}>
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        {/* 카드 리스트 영역: overflow-hidden으로 잘림 방지 */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-6 overflow-x-hidden"
          >
            {products.map((product) => (
              <div key={product.id} className="w-[332px] flex-shrink-0">
                <a href={product.serviceUrl} target="_blank" rel="noreferrer">
                  <ProductCard {...product} />
                </a>
              </div>
            ))}
            {/* 부족한 칸 채우기 */}
            {Array.from({ length: remaining }).map((_, i) => (
              <div key={`empty-${i}`} className="w-[332px] flex-shrink-0" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
