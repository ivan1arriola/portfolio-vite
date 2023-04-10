import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Ivan Arriola - Portfolio</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
