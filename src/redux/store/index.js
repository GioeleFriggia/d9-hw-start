import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../slices/favoriteSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;
