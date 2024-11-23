// SeminarList.jsx
import React from "react";
import styled from "styled-components";
import SeminarItem from "./SeminarItem";

// Styled Components for SeminarList
const ListContainer = styled.div`
  position: absolute; /* 위치 지정 */
  width: 1250px;
  height: 1200px;
  top: 735px; /* 화면 위쪽에서의 거리 */
  left: 50%; /* 가로 방향 중앙 정렬 */
  transform: translateX(-50%); /* 정확한 중앙 정렬 */
  border-radius: 15px;
  overflow: hidden;
  background-color: #fffbf6;
  overflow-y: auto; /* 콘텐츠가 넘칠 경우 세로 스크롤 추가 */
  border: 2px solid #edbdbd;
  box-shadow: 0px 6px 4px #d8baa4;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 13px; /* 스크롤바 너비 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d8baa4; /* 스크롤바 색상 */
    border-radius: 5px; /* 스크롤바 모서리 둥글게 */
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  background-color: #fffbf6;
  border-bottom: 2px solid #edbcbc;
  height: 56px;

  position: sticky; /* 스크롤 시 고정 */
  top: 0; /* 스크롤 컨테이너의 맨 위에 고정 */
  z-index: 1; /* 스크롤 내용 위에 표시되도록 설정 */
`;

const HeaderCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "SUITE-Regular", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  flex: ${({ flex }) => flex || 1};
`;

// Mock Data for SeminarList
const seminars = [
  { id: 192, title: "소프트웨어 재난 연구센터 11월 초청 세미나 안내", category: "4차산업, 교양", date: "2024.11.11." },
  { id: 193, title: "AI와 머신러닝의 현재와 미래", category: "4차산업, 네트워킹", date: "2024.11.12." },
  { id: 194, title: "웹 개발 트렌드 2024", category: "IT, 창업", date: "2024.11.13." },
  { id: 195, title: "글로벌 인턴십 설명회", category: "국제 교류", date: "2024.11.14." },
  { id: 196, title: "UI/UX 디자인의 이해", category: "멘토링, 교양", date: "2024.11.15." },
  { id: 197, title: "2024 스타트업 성공 전략", category: "창업, 네트워킹", date: "2024.11.16." },
  { id: 198, title: "데이터 분석을 통한 비즈니스 혁신", category: "4차산업", date: "2024.11.17." },
  { id: 199, title: "학부생 연구 발표대회", category: "경진대회", date: "2024.11.18." },
  { id: 200, title: "교환학생 프로그램 소개", category: "국제 교류", date: "2024.11.19." },
  { id: 201, title: "블록체인 기술의 새로운 가능성", category: "4차산업, IT", date: "2024.11.20." },
  { id: 202, title: "머신러닝을 활용한 데이터 분석", category: "4차산업", date: "2024.11.21." },
  { id: 203, title: "소프트웨어 개발 트렌드 2024", category: "IT, 창업", date: "2024.11.22." },
  { id: 204, title: "국제 협력 세미나", category: "국제 교류", date: "2024.11.23." },
  { id: 205, title: "경진대회 참가 전략", category: "경진대회", date: "2024.11.24." },
  { id: 206, title: "프론트엔드 최신 기술 소개", category: "IT", date: "2024.11.25." },
  { id: 207, title: "AI와 윤리의 상호작용", category: "4차산업", date: "2024.11.26." },
  { id: 208, title: "네트워크 보안의 현재와 미래", category: "네트워킹", date: "2024.11.27." },
  { id: 209, title: "멘토링 프로그램 발표회", category: "멘토링", date: "2024.11.28." },
  { id: 210, title: "해외 취업 설명회", category: "진로/취업", date: "2024.11.29." },
  { id: 211, title: "스타트업 성공 사례 분석", category: "창업", date: "2024.11.30." },
  { id: 212, title: "글로벌 시장에서의 소프트웨어", category: "국제 교류", date: "2024.12.01." },
  { id: 213, title: "데이터 시각화 기법 소개", category: "4차산업", date: "2024.12.02." },
  { id: 214, title: "소프트웨어와 IoT", category: "4차산업, 네트워킹", date: "2024.12.03." },
  { id: 215, title: "디자인 씽킹과 창업", category: "멘토링, 창업", date: "2024.12.04." },
  { id: 216, title: "기계 학습의 미래", category: "4차산업", date: "2024.12.05." },
  { id: 217, title: "UX/UI 디자인 전략", category: "멘토링, 교양", date: "2024.12.06." },
  { id: 218, title: "가상현실과 증강현실", category: "IT, 창업", date: "2024.12.07." },
  { id: 219, title: "국제 비즈니스 전략", category: "국제 교류", date: "2024.12.08." },
  { id: 220, title: "블록체인 적용 사례", category: "4차산업, IT", date: "2024.12.09." },
  { id: 221, title: "클라우드 컴퓨팅의 미래", category: "IT", date: "2024.12.10." },
  { id: 222, title: "스마트 시티 기술", category: "4차산업", date: "2024.12.11." },
  { id: 223, title: "AI 기반 분석 도구", category: "멘토링, 네트워킹", date: "2024.12.12." },
  { id: 224, title: "소프트웨어 품질 관리", category: "IT", date: "2024.12.13." },
  { id: 225, title: "국제 학생 교류 프로그램", category: "국제 교류", date: "2024.12.14." },
  { id: 226, title: "미래 직업 탐구", category: "진로/취업", date: "2024.12.15." },
  { id: 227, title: "창업 아이디어 경진대회", category: "경진대회", date: "2024.12.16." },
  { id: 228, title: "AI와 자연어 처리", category: "4차산업", date: "2024.12.17." },
  { id: 229, title: "스마트 기술 적용", category: "IT", date: "2024.12.18." },
  { id: 230, title: "모바일 앱 설계", category: "멘토링", date: "2024.12.19." },
  { id: 231, title: "데이터 보안과 암호화", category: "IT", date: "2024.12.20." },
  { id: 232, title: "신재생 에너지 세미나", category: "4차산업", date: "2024.12.21." },
];

function SeminarList({ selectedTags, searchTerm }) {
  const filteredSeminars = seminars.filter((seminar) => {
    const matchesSearch = seminar.title.toLowerCase().includes(searchTerm);
    const matchesTags =
      selectedTags.length === 0 || selectedTags.every((tag) => seminar.category.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <ListContainer>
      <HeaderRow>
        <HeaderCell flex="0.5">번호</HeaderCell>
        <HeaderCell flex="4">제목</HeaderCell>
        <HeaderCell flex="2">카테고리</HeaderCell>
        <HeaderCell flex="1.5">작성날짜</HeaderCell>
      </HeaderRow>
      {filteredSeminars.map((seminar) => (
        <SeminarItem key={seminar.id} {...seminar} />
      ))}
    </ListContainer>
  );
}

export default SeminarList;
