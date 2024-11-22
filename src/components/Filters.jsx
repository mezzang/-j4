import React from "react";

function Filters() {
  const categories = [
    "국제 교류",
    "전공심화",
    "창업",
    "네트워킹",
    "경진대회",
    "멘토링",
    "교양",
    "4차 산업",
    "진로/취업",
  ];
  const etcOptions = ["식사 제공", "사전 신청", "무료", "유료"];
  const locations = ["IT대", "글로벌 플라자", "경상대", "공대"];
  const times = ["9-10", "10-11", "11-12", "12-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6시 이후"];

  return (
    <div className="filters">
      <FilterSection title="카테고리" tags={categories} />
      <FilterSection title="기타" tags={etcOptions} />
      <FilterSection title="장소" tags={locations} />
      <FilterSection title="시간" tags={times} />
    </div>
  );
}

function FilterSection({ title, tags }) {
  return (
    <div className="filter-section">
      <h3>{title}</h3>
      <div className="tags">
        {tags.map((tag, index) => (
          <button key={index} className="tag">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filters;
