// KNU_SEMINAR/src/components/SearchBar.js
import React, { useState } from "react";
import searchIcon from "../assets/images/돋보기.png";

import "./style.css";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        console.log("검색어:", searchTerm); // 실제 검색 기능 추가 시 여기에 로직 구현
    };

    return (
        <div className="search-bar">
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="검색어를 입력하세요."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <div className="search-button" />
            </div>
        </div>
    );
};

export default SearchBar; 