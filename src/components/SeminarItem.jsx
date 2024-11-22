import React from "react";

function SeminarItem({ id, title, author, category, date }) {
  return (
    <div className="seminar-item">
      <div className="seminar-id">{id}</div>
      <div className="seminar-title">{title}</div>
      <div className="seminar-author">{author}</div>
      <div className="seminar-category">{category}</div>
      <div className="seminar-date">{date}</div>
    </div>
  );
}

export default SeminarItem;
