// App.js
import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import SeminarList from "./components/SeminarList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="desktop">
        <div className = "rectangle">
            <div className = "frame">
                <Header />
                <SearchBar />
                <Filters />
                <SeminarList />
                <Footer />
            </div>
        </div>
    </div>
  );
}

export default App;