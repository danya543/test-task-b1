import { Images } from '@components/constants';
import { Character } from '@src/types/Character';
import { useNavigate } from 'react-router-dom';

import styles from './Card.module.scss';

export const Card = ({ name, imageUrl, _id, films, videoGames }: Character) => {
  const { NoImage } = Images;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${_id}`);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <img src={imageUrl ? imageUrl : NoImage} />
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{films.join(', ')}</p>
        <p>{videoGames.join(',  ')}</p>
      </div>
    </div>
  );
};
