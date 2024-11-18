import { CharacterResponse } from '@src/types/Character';

import { BASE_API_URL } from './constants';

export async function fetchCharacters(id?: string): Promise<CharacterResponse> {
  const url = id
    ? `${BASE_API_URL}/character/${id}`
    : `${BASE_API_URL}/character`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    const data = (await response.json()) as CharacterResponse;

    return data;
  }

  throw new Error(
    `Request failed: ${response.status} (${response.statusText})`,
  );
}
