import styled from "styled-components";

const HeaderContainer = styled.div`
  position: absolute;
  width: 1002px;
  height: 191px;
  top: 277px;
  left: 244px;
`;

const Logo = styled.img`
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

const Title = styled.div`
  font-size: 105px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.header};
  -webkit-text-stroke: 2px #a64040;
`;

const Subtitle = styled.div`
  font-size: 25px;
  color: #fd2323;
  font-family: "Ink Free-Regular", Helvetica, sans-serif;
  position: absolute;
  top: 144px;
  left: 404px;
`;

const Header = () => (
  <HeaderContainer>
    <Logo src="image.png" alt="Logo" />
    <OverlapGroup>
      <Title>Seminar.zip</Title>
      <Subtitle>for knu_it students</Subtitle>
    </OverlapGroup>
  </HeaderContainer>
);

export default Header;
