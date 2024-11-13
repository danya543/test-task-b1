import { Character, Pagination } from '@src/types/Character';

export interface CharactersState {
  characters: Character[];
  info: Pagination | null;
  currentPage: number;
  perPage: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
