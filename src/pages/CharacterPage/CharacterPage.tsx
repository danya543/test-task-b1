import { fetchCharacter } from '@api/fetchCharacter';
import { Bookmark } from '@components/Bookmark/Bookmark';
import { ExpandableBlock } from '@components/ExpandableBlock/ExpandableBlock';
import { ModalPortal } from '@components/ModalPortal/ModalPortal';
import { OtherCharacters } from '@components/Modals/OtherCharacters';
import { SkeletonCharacterPage } from '@components/SkeletonLoader/SkeletonCharacterPage';
import { Character } from '@src/types/Character';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './CharacterPage.module.scss';

export const CharacterPage = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<Character | null>(null);
  const [searchInfo, setSearchInfo] = useState('');

  useEffect(() => {
    id && fetchCharacter(id).then(data => setCharacter(data));
  }, [id]);

  const handleClose = () => setSearchInfo('');

  return character ? (
    <div className={styles.container}>
      <div className={styles.character_header}>
        <div className={styles.character_img}>
          <img src={character.imageUrl} alt="Character" />
          <Bookmark id={character._id} />
        </div>
        <div className={styles.info}>
          <h2>{character.name}</h2>
          {character.films.length > 0 && (
            <div className={styles.films_container}>
              <h4>Films</h4>
              <div className={styles.films}>
                {character.films.map((film, index) => (
                  <span
                    key={index}
                    className={styles.filmItem}
                    onClick={() => setSearchInfo(film)}
                  >
                    {film}
                    {index < character.films.length - 1 && ','}
                  </span>
                ))}
              </div>
              {searchInfo && (
                <ModalPortal onClose={handleClose}>
                  <OtherCharacters film={searchInfo} onClose={handleClose} />
                </ModalPortal>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={styles.info_container}>
        <ExpandableBlock title={'TV shows'} items={character.tvShows} />
        <ExpandableBlock title={'Video games'} items={character.videoGames} />
      </div>
    </div>
  ) : (
    <SkeletonCharacterPage />
  );
};
