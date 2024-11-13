import { Images } from '@components/constants';
import { fetchCharacters } from '@store/reducers/charactersSlice';
import { AppDispatch, RootState } from '@store/store';
import { Button } from '@utils/Button';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Pagination.module.scss';

export const Pagination = () => {
  const { Prev, Next } = Images;
  const dispatch = useDispatch<AppDispatch>();
  const info = useSelector((state: RootState) => state.characters.info);
  const page = useSelector((state: RootState) => state.characters.currentPage);

  const handleSetPage = (nextPage: number) => {
    dispatch(fetchCharacters({ page: nextPage, limit: info?.count }));
    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    });
  };

  return info ? (
    <div className={styles.container}>
      {page > 2 && (
        <Button
          onClick={() => {
            handleSetPage(page - 1);
          }}
          icon={Prev}
        />
      )}
      {page != 1 && (
        <Button
          onClick={() => {
            handleSetPage(1);
          }}
          text={`1`}
        />
      )}
      <span>{info.totalPages !== 0 && page}</span>
      {(page + 1 <= info.totalPages || info.totalPages != 0) && (
        <Button
          onClick={() => {
            handleSetPage(page + 1);
          }}
          text={`${page + 1}`}
        />
      )}
      {(page + 2 <= info.totalPages || info.totalPages != 0) && (
        <Button
          onClick={() => {
            handleSetPage(page + 2);
          }}
          text={`${page + 2}`}
        />
      )}
      {(page + 3 <= info.totalPages || info.totalPages != 0) && (
        <Button
          onClick={() => {
            handleSetPage(page + 3);
          }}
          text={`${page + 3}`}
        />
      )}
      {(page + 1 <= info.totalPages || info.totalPages != 0) && (
        <Button
          onClick={() => {
            handleSetPage(page + 1);
          }}
          icon={Next}
        />
      )}
    </div>
  ) : (
    <div>load</div>
  );
};
