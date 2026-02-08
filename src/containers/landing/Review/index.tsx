import { motion } from 'framer-motion';

import ReviewCard from './ReviewCard';
import { ReviewDataType, REVIEWS_DATA } from './mock';

const doubledReviews: ReviewDataType[] = [...REVIEWS_DATA, ...REVIEWS_DATA];

export function ReviewCarousel() {
  const carouselVariants = {
    animate: {
      x: ['0%', '-50%'],
      transition: {
        ease: 'linear',
        duration: 20,
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="mb-7 w-full py-5">
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          variants={carouselVariants}
          animate="animate"
        >
          {doubledReviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 px-4">
              <ReviewCard reviewData={review} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
