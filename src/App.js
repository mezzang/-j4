import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import SeminarList from "./components/SeminarList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Filters />
      <SeminarList />
      <Footer />
    </div>
  );
}

export default App;
