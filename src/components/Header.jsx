import React from "react";
import styled from "styled-components";

const Title = styled.div`
  position: absolute;
  width: 1002px;
  height: 191px;
  top: 277px;
  left: 244px;
  z-index: 3; /* 항상 최상단 */
`;

const Image = styled.img`
  position: absolute;
  width: 121px;
  height: 150px;
  top: 26px;
  left: 146px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 461px;
  height: 117px;
  top: 23px;
  left: 277px;
`;

const TextWrapper24 = styled.div`
  width: 461px;
  -webkit-text-stroke: 2px #a64040;
  font-family: "Jersey 20-Regular", Helvetica, sans-serif;
  font-weight: 400;
  color: #f9f235;
  font-size: 105px;
  white-space: nowrap;
`;

const TextWrapper25 = styled.div`
  width: 62px;
  font-family: "Jaro-Regular", Helvetica, sans-serif;
  font-weight: 400;
  color: #de0404;
  font-size: 30px;
  white-space: nowrap;
`;

const TextWrapper26 = styled.div`
  width: 211px;
  font-family: "Ink Free-Regular", Helvetica, sans-serif;
  font-weight: 400;
  color: #fd2323;
  font-size: 25px;
`;

function Header() {
  return (
    <Title>
      <Image src="호반우.png" alt="호반우" />
      <OverlapGroup>
        <TextWrapper24>Seminar.zip</TextWrapper24>
        <div className="KNU-MARK">
          <TextWrapper25>KNU</TextWrapper25>
        </div>
      </OverlapGroup>
      <TextWrapper26>for knu_it students</TextWrapper26>
    </Title>
  );
}

export default Header;
