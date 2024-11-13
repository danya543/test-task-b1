import { fetchDisney } from '@api/fetchDisney';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '@src/types/Character';

export interface CharactersState {
  characters: Character[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CharactersState = {
  characters: [],
  status: 'idle',
  error: null,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const response = await fetchDisney({});
    return response.data as Character[];
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
        (state, action: PayloadAction<Character[]>) => {
          state.status = 'succeeded';
          state.characters = action.payload;
        },
      )
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load characters';
      });
  },
});

export default charactersSlice.reducer;
