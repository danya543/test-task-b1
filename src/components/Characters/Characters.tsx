import { Card } from '@components/Card/Card';
import { Pagination } from '@components/Pagination/Pagination';
import { fetchCharacters } from '@store/reducers/charactersSlice';
import { AppDispatch, RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Characters.module.scss';

export const Characters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const characters = useSelector(
    (state: RootState) => state.characters.characters,
  );
  const info = useSelector((state: RootState) => state.characters.info);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(fetchCharacters({ limit: +event.target.value }));
  };

  return (
    <section className={styles.container}>
      <h3>Disney characters</h3>
      <select onChange={handleSelectChange} value={info?.count}>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <div className={styles.characters}>
        {characters.map(el => (
          <Card key={el._id} {...el} />
        ))}
      </div>
      <Pagination />
    </section>
  );
};
