import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const BarraDeNavegacion = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='barra'>
        <Container>
          <Navbar.Brand href="/">
            Ivan Arriola - Portfolio
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  );
}

export default BarraDeNavegacion;