import { Character } from '@src/types/Character';

import { fetchCharacter } from './fetchCharacter';

export async function fetchFavorites(ids: number[]): Promise<Character[]> {
  const promises = ids.map(id => fetchCharacter(id));

  const favsData = await Promise.all(promises);

  return favsData;
}
