import { loadingCharactersNum } from '@components/constants';

import { SkeletonCard } from './SkeletonCard';
import styles from './SkeletonLoaders.module.scss';
import { SkeletonPagination } from './SkeletonPagination';

export const SkeletonCards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {Array.from({ length: loadingCharactersNum }, (_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
      <SkeletonPagination />
    </div>
  );
};
