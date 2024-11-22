import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #edbcbc;
  background-color: #fffbf6;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #fffbf6;
  }
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #edbcbc;
`;

const seminars = [
  {
    id: 192,
    title: "소프트웨어 재난 연구센터 11월 초청 세미나 안내",
    author: "이민지",
    category: "4차산업, 교양",
    date: "2024.11.11.",
  },
];

const SeminarList = () => (
  <Table>
    <thead>
      <TableRow>
        <TableHeader>번호</TableHeader>
        <TableHeader>제목</TableHeader>
        <TableHeader>작성자</TableHeader>
        <TableHeader>카테고리</TableHeader>
        <TableHeader>작성날짜</TableHeader>
      </TableRow>
    </thead>
    <tbody>
      {seminars.map((seminar) => (
        <TableRow key={seminar.id}>
          <TableData>{seminar.id}</TableData>
          <TableData>{seminar.title}</TableData>
          <TableData>{seminar.author}</TableData>
          <TableData>{seminar.category}</TableData>
          <TableData>{seminar.date}</TableData>
        </TableRow>
      ))}
    </tbody>
  </Table>
);

export default SeminarList;
