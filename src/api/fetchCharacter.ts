import { Character, CharacterResponse } from '@src/types/Character';

import { BASE_API_URL } from './constants';

export async function fetchCharacter(id: string | number): Promise<Character> {
  const response = await fetch(`${BASE_API_URL}/character/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    const data = (await response.json()) as CharacterResponse;

    return data.data;
  }

  throw new Error(
    `Request failed: ${response.status} (${response.statusText})`,
  );
}
