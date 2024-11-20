import React from "react";

const Table = () => {
  const data = [
    { id: 1, title: "세미나 제목 1", author: "홍길동", category: "진로/취업", date: "2024-11-20" },
    { id: 2, title: "세미나 제목 2", author: "이민지", category: "4차 산업", date: "2024-11-21" },
    // 추가 데이터
  ];

  return (
    <table className="w-full mt-4 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">번호</th>
          <th className="border border-gray-300 px-4 py-2">제목</th>
          <th className="border border-gray-300 px-4 py-2">작성자</th>
          <th className="border border-gray-300 px-4 py-2">카테고리</th>
          <th className="border border-gray-300 px-4 py-2">작성날짜</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="border border-gray-300 px-4 py-2 text-center">{item.id}</td>
            <td className="border border-gray-300 px-4 py-2">{item.title}</td>
            <td className="border border-gray-300 px-4 py-2">{item.author}</td>
            <td className="border border-gray-300 px-4 py-2">{item.category}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
