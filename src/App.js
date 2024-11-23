// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ChosenTag from "./components/ChosenTag";
import SeminarList from "./components/SeminarList";
import Footer from "./components/Footer";

function App() {
  const [selectedTags, setSelectedTags] = useState([]);

  // 태그 선택 핸들러
  const handleTagSelect = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  };

  // 태그 삭제 핸들러
  const handleRemoveTag = (tag) => {
    setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

  return (
    <div className="desktop">
      <div className="frame">
        <Header />
        <SearchBar />
        <Filters onTagSelect={handleTagSelect} />
        <ChosenTag tags={selectedTags} onRemove={handleRemoveTag} />
        <SeminarList selectedTags={selectedTags} />
        <Footer />
      </div>
    </div>
  );
}

export default App;

