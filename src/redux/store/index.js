// store/index.js

import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const initialState = {
  favourite: {
    list: [],
  },
  loading: false, // indicatore di caricamento
  error: null, // eventuale messaggio di errore
};

const store = configureStore({
  reducer: mainReducer,
  initialState, // aggiungi lo stato iniziale
});

export default store;
