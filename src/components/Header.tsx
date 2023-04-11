import { Container } from "react-bootstrap";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "../styledcomponents/Logo";
import { HeaderContainer, HeaderBrand, HeaderLink } from "../styledcomponents/HeaderStyles";
import goToElement from "../utils/goToComponent";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}



const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <HeaderContainer collapseOnSelect={true} expand="lg">
      <Container fluid className="d-flex justify-content-between" >
        <HeaderBrand href="/">
          <Logo />
        </HeaderBrand>
        <HeaderLink onClick={() => goToElement("about")}>About</HeaderLink>
        <HeaderLink onClick={() => goToElement("projects")}>Projects</HeaderLink>
        <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
