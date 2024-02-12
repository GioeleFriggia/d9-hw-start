// reducers > favoriteSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (company) => company !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
