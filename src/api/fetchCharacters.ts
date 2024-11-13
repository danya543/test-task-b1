import { CharactersResponse } from '@src/types/Character';

import { BASE_API_URL } from './constants';

export async function fetchCharacters(
  page: number,
  page_size: number,
): Promise<CharactersResponse> {
  const response = await fetch(
    `${BASE_API_URL}/character?page=${page}&pageSize=${page_size}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  if (response.status === 200) {
    const data = (await response.json()) as CharactersResponse;

    return data;
  }

  throw new Error(
    `Request failed: ${response.status} (${response.statusText})`,
  );
}
