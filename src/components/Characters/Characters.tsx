import { Card } from '@components/Card/Card';
import { Pagination } from '@components/Pagination/Pagination';
import { SkeletonCards } from '@components/SkeletonLoader/SkeletonCards';
import { RootState } from '@store/store';
import { Select } from '@utils/Select';
import { useSelector } from 'react-redux';

import styles from './Characters.module.scss';

export const Characters = () => {
  const characters = useSelector(
    (state: RootState) => state.characters.characters,
  );
  const status = useSelector((state: RootState) => state.characters.status);

  return (
    <section className={styles.container}>
      <h3>Disney characters</h3>
      <Select />
      {status === 'loading' ? (
        <SkeletonCards />
      ) : status === 'failed' ? (
        <div>Check your internet connection</div>
      ) : (
        <div>
          <div className={styles.characters}>
            {characters.map(el => (
              <Card key={el._id} {...el} />
            ))}
          </div>
          <Pagination />
        </div>
      )}
    </section>
  );
};
