// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ChosenTag from "./components/ChosenTag.jsx";
import SeminarList from "./components/SeminarList";
import Footer from "./components/Footer";

function App() {
  const [selectedTags, setSelectedTags] = useState(["진로/취업", "식사 제공"]);

  // 태그 삭제 함수
  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  return (
    <div className="desktop">
      <div className="rectangle">
        <div className="frame">
          <Header />
          <SearchBar />
          <Filters />
          {/* 선택된 태그를 보여주는 컴포넌트 */}
          <ChosenTag tags={selectedTags} onRemove={handleRemoveTag} />
          <SeminarList />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
