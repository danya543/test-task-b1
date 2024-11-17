import { Images } from '@components/constants';
import { addFavorite, removeFavorite } from '@store/reducers/favoriteSlice';
import { AppDispatch, RootState } from '@store/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Bookmark.module.scss';

export const Bookmark = ({ id }: { id: number }) => {
  const { Book, Booked } = Images;

  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorite.items);
  const [isBooked, setIsBooked] = useState(favorites.includes(id));

  useEffect(() => {
    setIsBooked(favorites.includes(id));
  }, [favorites, id]);

  const handleBooked = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    if (isBooked) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <button className={styles.bookmark} onClick={handleBooked}>
      <img src={isBooked ? Booked : Book} />
    </button>
  );
};
