import { fetchFavorites } from '@api/fetchFavorites';
import { Card } from '@components/Card/Card';
import { Images } from '@components/constants';
import { ModalPortal } from '@components/ModalPortal/ModalPortal';
import { Confirm } from '@components/Modals/Confirm';
import { SkeletonFavsPage } from '@components/SkeletonLoader/SkeletonFavsPage';
import { Character } from '@src/types/Character';
import { RootState } from '@store/store';
import { Alert } from '@utils/Alert';
import { Button } from '@utils/Button';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './FavoritesPage.module.scss';

export const FavoritiesPage = () => {
  const { Left, Right, Trash } = Images;

  const favoritesIds = useSelector((state: RootState) => state.favorite.items);
  const [favorites, setFavorites] = useState<Character[] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchFavorites(favoritesIds).then(data => setFavorites(data));
  }, [favoritesIds]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const triggerAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className={styles.container}>
      <h1>Favorites characters</h1>
      {favorites && favorites.length > 2 && (
        <div className={styles.controls}>
          <Button onClick={() => handleScroll('left')} icon={Left} />
          <Button onClick={() => handleScroll('right')} icon={Right} />
        </div>
      )}
      {favorites ? (
        favorites.length > 0 ? (
          <div>
            <Button
              onClick={handleOpenModal}
              icon={Trash}
              classname={styles.clear}
            />
            <div className={`${styles.cards}`} ref={scrollContainerRef}>
              {favorites.map(fav => (
                <Card key={fav._id} {...fav} />
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.empty}>
            <h3>You have no saved characters yet(</h3>
          </div>
        )
      ) : (
        <SkeletonFavsPage />
      )}
      {isOpen && (
        <ModalPortal onClose={handleCloseModal}>
          <Confirm
            confirmText={'Delete all your favorites?'}
            onClose={handleCloseModal}
            triggerAlert={triggerAlert}
          />
        </ModalPortal>
      )}
      {showAlert && (
        <Alert type={'delete'} message={'Your favourites have been deleted'} />
      )}
    </section>
  );
};
