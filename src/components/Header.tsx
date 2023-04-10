import { Navbar, Container } from "react-bootstrap";
import  ThemeSwitcher  from "./ThemeSwitcher";

const Header = () => {
  return (
    <Navbar collapseOnSelect={true} expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Container>
          <Navbar.Brand href="/">Ivan Arriola - Portfolio</Navbar.Brand>
          <ThemeSwitcher />
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
