import React from "react";

const FilterSection = ({ addFilter }) => {
  const filters = {
    time: ["9-10", "10-11", "11-12", "12-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6시 이후"],
    place: ["IT대", "글로벌 플라자", "경상대", "공대"],
    category: ["진로/취업", "4차 산업", "교양", "멘토링", "경진대회", "네트워킹", "창업", "전공심화", "국제 교류"],
    extra: ["식사 제공", "사전 신청", "무료", "유료"],
  };

  return (
    <div className="flex flex-col gap-4">
      {Object.entries(filters).map(([key, values]) => (
        <div key={key}>
          <h2 className="font-semibold text-lg capitalize">{key}</h2>
          <div className="flex flex-wrap gap-2">
            {values.map((value) => (
              <button
                key={value}
                className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300"
                onClick={() => addFilter(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
