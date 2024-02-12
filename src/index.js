import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store"; // Importa il tuo store Redux

import App from "./App";

// Avvia il rendering dell'applicazione utilizzando createRoot
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
