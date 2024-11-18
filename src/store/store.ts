import { configureStore } from '@reduxjs/toolkit';

import charactersReducer from './reducers/charactersSlice';
import favoritesReducer from './reducers/favoriteSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    favorite: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
