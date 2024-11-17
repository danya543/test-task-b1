import { Bookmark } from '@components/Bookmark/Bookmark';
import { Images } from '@components/constants';
import { Character } from '@src/types/Character';
import { useNavigate } from 'react-router-dom';

import styles from './Card.module.scss';

const filterStr = (str: string) => {
  return str.length > 40 ? str.slice(0, 25) + '...' : str;
};

export const Card = ({ name, imageUrl, _id, films, videoGames }: Character) => {
  const { NoImage } = Images;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/characters/${_id}`);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <img
        src={imageUrl ? imageUrl : NoImage}
        className={styles.character_img}
      />
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{filterStr(films.join(', '))}</p>
        <p>{filterStr(videoGames.join(',  '))}</p>
      </div>
      <Bookmark id={_id} />
    </div>
  );
};
