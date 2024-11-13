export interface CharacterResponse {
  info: Pagination;
  data: Character[];
}

interface Pagination {
  count: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
}

export interface Character {
  _id: number;
  films: string[];
  name: string;
  enemies: [];
  imageUrl: string;
  tvShows: string[];
  sourceUrl: string;
  videoGames: string[];
}
