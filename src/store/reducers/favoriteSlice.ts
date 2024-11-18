import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoritesState } from '@store/types';

const getInitialFavorites = (): number[] => {
  const storedFavorites = localStorage.getItem('booked');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const initialState: FavoritesState = {
  items: getInitialFavorites(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<number>) {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
        localStorage.setItem('booked', JSON.stringify(state.items));
      }
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.items = state.items.filter(favorite => favorite !== action.payload);
      localStorage.setItem('booked', JSON.stringify(state.items));
    },
    clearFavorites(state) {
      state.items = [];
      localStorage.removeItem('booked');
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
