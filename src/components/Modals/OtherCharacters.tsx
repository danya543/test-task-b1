import { fetchInfo } from '@api/fetchInfo';
import Loader from '@assets/loader.png';
import { Images } from '@components/constants';
import { CharactersResponse } from '@src/types/Character';
import { Button } from '@utils/Button';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './Modals.module.scss';

export const OtherCharacters = ({
  name,
  film,
  onClose,
}: {
  name?: string;
  film?: string;
  onClose: () => void;
}) => {
  const { id } = useParams();
  const { Left, Right } = Images;
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [otherCharacters, setOtherCharacters] =
    useState<CharactersResponse | null>(null);

  useEffect(() => {
    fetchInfo({ name: name, film: film, page: page }).then(data => {
      const filteredData = id
        ? data.data.filter(el => el._id !== +id)
        : data.data;

      setOtherCharacters({
        data: filteredData,
        info: data.info,
      });
    });
  }, [page]);

  return (
    <div className={styles.otherCharacters}>
      <h2>Other characters in: {name || film}</h2>
      {otherCharacters ? (
        <div className={styles.otherCharactersList}>
          {otherCharacters.data.map(film => (
            <div
              key={film._id}
              className={styles.otherCharactersItem}
              onClick={() => {
                onClose();
                navigate(`/characters/${film._id}`);
              }}
            >
              {film.name}
            </div>
          ))}
          <div className={styles.pagination}>
            <Button
              onClick={() => {
                setOtherCharacters(null);
                setPage(prev => --prev);
              }}
              icon={Left}
              disabled={page === 1}
            />
            <Button
              onClick={() => {
                setOtherCharacters(null);
                setPage(prev => ++prev);
              }}
              icon={Right}
              disabled={otherCharacters.info.totalPages === page}
            />
          </div>
        </div>
      ) : (
        <div className={styles.loader}>
          <img src={Loader} />
          loading...
        </div>
      )}
    </div>
  );
};
