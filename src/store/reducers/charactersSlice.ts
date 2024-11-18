import { initialCharactersPerPage, initialPage } from '@api/constants';
import { fetchCharacters as apiFetchCharacters } from '@api/fetchCharacters';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharactersResponse } from '@src/types/Character';
import { CharactersState } from '@store/types';

const initialState: CharactersState = {
  characters: [],
  info: null,
  currentPage: initialPage,
  perPage: initialCharactersPerPage,
  status: 'idle',
  error: null,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async ({
    page = initialPage,
    limit = initialCharactersPerPage,
  }: {
    page?: number;
    limit?: number;
  }) => {
    const response: CharactersResponse = await apiFetchCharacters(page, limit);
    return { ...response, currentPage: page, perPage: limit };
  },
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchCharacters.fulfilled,
        (
          state,
          action: PayloadAction<CharactersResponse & { currentPage: number }>,
        ) => {
          state.status = 'succeeded';
          state.characters = action.payload.data;
          state.info = action.payload.info;
          state.currentPage = action.payload.currentPage;
        },
      )
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load characters';
      });
  },
});

export default charactersSlice.reducer;
