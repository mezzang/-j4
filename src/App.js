// KNU_SEMINAR/App.js
import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import SeminarList from "./components/SeminarList";

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <SearchBar />
    <FilterBar />
    <SeminarList />
  </>
);

export default App;
