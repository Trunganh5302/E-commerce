import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import '../Header/Header.css'

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className='Header'>
        <Navbar.Brand href="#home">KidPear</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#home">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            <FontAwesomeIcon icon={faBell} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
