import styled from "styled-components";
import { Navbar, Container } from "react-bootstrap";
import  ThemeSwitcher  from "./ThemeSwitcher";

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
`;

const HeaderBrand = styled(Navbar.Brand)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <HeaderContainer collapseOnSelect={true} expand="lg">
      <Navbar.Toggle aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Container fluid className="d-flex justify-content-between" >
          <HeaderBrand href="/">Ivan Arriola - Portfolio</HeaderBrand>
          <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
        </Container>
      </Navbar.Collapse>
    </HeaderContainer>
  );
};

export default Header;
