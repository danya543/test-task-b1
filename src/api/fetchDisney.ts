import { CharacterResponse } from '@src/types/Character';

import { BASE_API_URL } from './constants';

interface ResponseProps {
  name?: string;
  films?: string;
}

export async function fetchDisney(
  props: ResponseProps,
): Promise<CharacterResponse> {
  const filters = `${props.name}&${props.films}`;
  console.log(filters);
  const response = await fetch(`${BASE_API_URL}/character`, {
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
