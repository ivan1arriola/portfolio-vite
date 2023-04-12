import { Container, Nav } from "react-bootstrap";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "../styledcomponents/Logo";
import { HeaderContainer, HeaderBrand, HeaderLink } from "../styledcomponents/HeaderStyles";
import { useState } from "react";
import goToElement from "../utils/goToComponent";

import { Offcanvas, OffcanvasHeader, OffcanvasTitle, OffcanvasBody } from "../styledcomponents/OffcanvasStyles";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const LinksHeader = () => {
  return (<>
    <HeaderLink onClick={() => goToElement("about")}>About</HeaderLink>
    <HeaderLink onClick={() => goToElement("projects")}>Projects</HeaderLink>
  </>
  );
};

function Header({ darkMode, setDarkMode }: HeaderProps): JSX.Element {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <HeaderContainer expand="md">
      <Container fluid>
        <HeaderBrand href="/">
          <Logo />
        </HeaderBrand>
        <Offcanvas show={show} onHide={handleClose}>
          <OffcanvasHeader closeButton>
            <OffcanvasTitle>Menu</OffcanvasTitle>
          </OffcanvasHeader>
          <OffcanvasBody>
            <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
            <Nav className="flex-column">
              <LinksHeader />
            </Nav>
          </OffcanvasBody>
        </Offcanvas>
        <Nav className="ml-auto d-none d-md-flex">
          <LinksHeader />
          <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
        </Nav>
        <Nav className="ml-auto d-flex d-md-none">
          <HeaderLink onClick={handleShow}>Menu</HeaderLink>
        </Nav>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
