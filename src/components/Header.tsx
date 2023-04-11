import styled from "styled-components";
import { Navbar, Container } from "react-bootstrap";
import  ThemeSwitcher  from "./ThemeSwitcher";
import Logo from "../styledcomponents/Logo";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const HeaderContainer = styled(Navbar) `
  background-color: ${(props) => props.theme.colors.navbarBackground};
  color: ${(props) => props.theme.colors.white};
  padding: 20px;
  margin: 10px;
  border-radius: 100px;
  justify-content: space-between;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  border-radius: 105px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
`;

const HeaderBrand = styled(Navbar.Brand)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <HeaderContainer collapseOnSelect={true} expand="lg">
        <Container fluid className="d-flex justify-content-between" >
          <HeaderBrand href="/">
            <Logo />
          </HeaderBrand>
          <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
        </Container>
    </HeaderContainer>
  );
};

export default Header;
