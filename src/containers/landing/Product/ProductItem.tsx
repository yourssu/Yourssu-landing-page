import { RightArrowIcon } from './icons';
import { ProductDataType } from './mocks';

interface ProductItemProps {
  product: ProductDataType;
  onProductClick: (product: ProductDataType) => void;
}

function ProductItem({ product, onProductClick }: ProductItemProps) {
  return (
    <div className="w-full max-w-[62.375rem]">
      <div
        // 'group' 클래스를 사용하여 하위 요소의 스타일을 호버 시에 제어합니다.
        className="group flex w-full cursor-pointer items-center justify-between gap-[3.125rem] xs:flex-col sm:flex-col"
        onClick={() => onProductClick(product)}
      >
        <div className="flex w-full flex-col items-start justify-start gap-4 self-end py-6">
          <div className="text-black flex items-center justify-start gap-3 transition-colors duration-300 group-hover:text-[#DB95FA]">
            <h2 className="text-3xl font-semibold xs:text-2xl sm:text-2xl">
              {product.title}
            </h2>
            <div className="h-6 w-6 text-[#525252] duration-300 group-hover:text-[#DB95FA]">
              <RightArrowIcon />
            </div>
          </div>
          <p className="whitespace-pre-line text-2xl font-normal leading-[34px] -tracking-[.02em] text-[#6E7687] xs:text-xl sm:text-xl">
            {product.description}
          </p>
        </div>

        <img
          className="w-110 h-60 rounded-[1rem] md:w-96"
          src={product.imageUrl}
          alt={`${product.title} thumbnail`}
        />
      </div>
    </div>
  );
}

export default ProductItem;
