import { Card } from '@components/Card/Card';
import { RootState } from '@store/store';
import { useSelector } from 'react-redux';

import styles from './Characters.module.scss';

export const Characters = () => {
  const characters = useSelector(
    (state: RootState) => state.characters.characters,
  );
  return (
    <section className={styles.container}>
      {characters.map(el => (
        <Card key={el._id} {...el} />
      ))}
      Characters
    </section>
  );
};
