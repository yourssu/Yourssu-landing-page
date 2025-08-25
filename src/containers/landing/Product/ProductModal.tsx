import { ProductCloseIcon } from './icons';
import { ProductDataType } from './mocks';

interface ProductModalProps {
  product: ProductDataType | null;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div
      className="relative inline-flex h-full max-h-[43rem] w-full max-w-[50.625rem] flex-col rounded-[1rem] bg-white-0 px-10 py-9 shadow-lg xs:mx-5 xs:h-auto xs:py-6 sm:mx-5 sm:h-auto sm:py-6"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="flex h-6 w-full justify-end">
        <ProductCloseIcon />
      </button>

      <div className="mb-5 flex flex-col items-start justify-start">
        <div className="flex w-full flex-col items-start justify-start px-3">
          {product.status && (
            <div className="mb-3 inline-flex items-center justify-center rounded-[1rem] bg-[#ECEFFF] px-2.5 py-1">
              <div className="text-xs font-semibold leading-none text-[#6B5CFF]">
                {product.status}
              </div>
            </div>
          )}

          <div className="mb-4 flex flex-col items-start justify-start gap-1">
            <h3 className="text-[1.75rem] font-semibold text-[#25262C]">
              {product.title}
            </h3>
            <div className="flex flex-col items-start justify-center">
              <p className="whitespace-pre-line text-lg text-[#25262C]">
                {product.description}
              </p>
              <p className="text-base font-light text-[#6E7687]">
                {product.stats}
              </p>
            </div>
          </div>
        </div>

        <img
          className="w-full rounded-[1rem] object-cover "
          src={product.modalImageUrl}
          alt={`${product.title} modal image`}
        />
      </div>

      <div className="flex items-center justify-end gap-2.5">
        <a
          href={product.suggestUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 items-center justify-center rounded-[0.75rem] bg-[#ECEFFF] px-4 text-sm font-semibold text-[#5736F5]"
        >
          의견 제안
        </a>
        <a
          href={product.serviceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 items-center justify-center rounded-[0.75rem] bg-[#6B5CFF] px-4 text-sm font-semibold text-white-0"
        >
          서비스 바로가기
        </a>
      </div>
    </div>
  );
}

export default ProductModal;
