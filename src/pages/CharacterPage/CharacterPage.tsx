import { fetchCharacter } from '@api/fetchCharacter';
import { Character } from '@src/types/Character';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './CharacterPage.module.scss';

export const CharacterPage = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<Character | null>(null);
  useEffect(() => {
    id && fetchCharacter(id).then(data => setCharacter(data.data));
  }, []);
  return character ? (
    <div className={styles.container}>{character.name}</div>
  ) : (
    <div>loading</div>
  );
};
