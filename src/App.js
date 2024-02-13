import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import Favourites from "./components/Favourites";
import MyNavbar from "./components/NavBar.jsx"; // Importa il componente Navbar
import MyFooter from "./components/Footer.jsx"; // Importa il componente Footer
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar /> {/* Includi il componente Navbar qui */}
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
