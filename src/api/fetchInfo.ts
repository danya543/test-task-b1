import { CharactersResponse } from '@src/types/Character';

import { BASE_API_URL } from './constants';

export async function fetchInfo({
  name,
  film,
  page,
}: {
  name?: string;
  film?: string;
  page: number;
}): Promise<CharactersResponse> {
  const filters = `${name ? '&name=' + name : ''}${film ? '&films=' + film.replace(/\(.*?\)/g, '').trim() : ''}`;
  const url = `${BASE_API_URL}/character?page=${page}&pageSize=5${filters}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    const data = (await response.json()) as CharactersResponse;

    return data;
  }

  throw new Error(
    `Request failed: ${response.status} (${response.statusText})`,
  );
}
