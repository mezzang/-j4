// Header.jsx
import React from "react";
import styled from "styled-components";

const Title = styled.div`
  position: absolute;
  width: 1002px;
  height: 191px;
  top: 77px;
  left: 50%; /* 부모의 50% */
  transform: translateX(-50%); /* 가운데 정렬 */
  z-index: 3; /* 항상 최상단 */
`;

const Image = styled.img`
  position: absolute;
  width: 121px;
  height: 150px;
  top: 50px;
  left: 146px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 461px;
  height: 117px;
  top: 43px;
  left: 277px;
`;

const Name = styled.div`
  width: 461px;
  -webkit-text-stroke: 2px #a64040;
  font-family: "Jersey 20-Regular", Helvetica, sans-serif;
  font-weight: 400;
  color: #f9f235;
  font-size: 105px;
  white-space: nowrap;
`;

const Knumark = styled.div`
  width: 211px;
  font-family: "Ink Free-Regular", Helvetica, sans-serif;
  font-weight: 400;
  color: #de0404;
  font-size: 25px;
`;

const Subtitle = styled.div`
  width: 62px;
  font-family: "Jaro-Regular", Helvetica, sans-serif;
  font-weight: 400;
  color: #fd2323;
  font-size: 30px;
  white-space: nowrap;
`;

function Header() {
  return (
    // 전체 헤더를 감싸는 컨테이너
    <Title>
      <Image src="호반우.png" alt="호반우" />
      <OverlapGroup>
        <Knumark>KNU</Knumark>
        <Name>Seminar.zip</Name>
        <div className="KNU-MARK">
          <Subtitle>for knu_it students</Subtitle>
        </div>
      </OverlapGroup>
    </Title>
  );
}

export default Header;
