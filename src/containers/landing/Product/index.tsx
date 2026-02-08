import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import MainTitle from '@/components/Title/MainTitle';

import ProductItem from './ProductItem';
import ProductModal from './ProductModal';
import { ProductDataType } from './mocks';
import { products } from './mocks';

function Product() {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductDataType | null>(null);

  const handleProductClick = (product: ProductDataType) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  return (
    <section className="mt-[6.25rem]">
      <div className="container mx-auto flex max-w-[65.625rem] flex-col items-start justify-center xs:px-5 sm:px-5 md:px-5">
        <MainTitle title="Product" subTitle="함께 몰입한 결과물" />

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-10">
          {products.map((product) => (
            <>
              <ProductItem
                product={product}
                onProductClick={handleProductClick}
              />

              <div className="h-px w-full bg-gray-200"></div>
            </>
          ))}
        </div>
      </div>
      {selectedProduct &&
        createPortal(
          <div
            className="z-100 fixed inset-0 flex items-center justify-center bg-black-0 bg-opacity-50"
            onClick={handleCloseModal}
          >
            <ProductModal
              product={selectedProduct}
              onClose={handleCloseModal}
            />
          </div>,
          document.body,
        )}
    </section>
  );
}

export default Product;
