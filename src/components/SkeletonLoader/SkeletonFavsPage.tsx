import { RootState } from '@store/store';
import { useSelector } from 'react-redux';

import { SkeletonCard } from './SkeletonCard';
import styles from './SkeletonLoaders.module.scss';

export const SkeletonFavsPage = () => {
  const favorites = useSelector((state: RootState) => state.favorite.items);
  return (
    <section className={styles.favs_page}>
      {Array.from({ length: favorites.length }, (_, index) => (
        <SkeletonCard key={index} />
      ))}
    </section>
  );
};
