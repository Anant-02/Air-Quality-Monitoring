import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{fontSize:30}}>
            Air Quality
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;