import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoritesState = {
  items: number[]; // Array of favorite post IDs or titles
};

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
    loadFavorites(state) {
      const storedFavorites = localStorage.getItem('booked');
      state.items = storedFavorites ? JSON.parse(storedFavorites) : [];
    },
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

export const { loadFavorites, addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
