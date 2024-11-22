import React from "react";
import SeminarItem from "./SeminarItem";

function SeminarList() {
  const seminars = [
    {
      id: 192,
      title: "소프트웨어 재난 연구센터 11월 초청 세미나 안내",
      author: "이민지",
      category: "4차산업, 교양",
      date: "2024.11.11.",
    },
  ];

  return (
    <div className="seminar-list">
      <div className="seminar-header">
        <div>번호</div>
        <div>제목</div>
        <div>작성자</div>
        <div>카테고리</div>
        <div>작성날짜</div>
      </div>
      {seminars.map((seminar) => (
        <SeminarItem key={seminar.id} {...seminar} />
      ))}
    </div>
  );
}

export default SeminarList;
