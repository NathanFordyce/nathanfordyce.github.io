import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function GetNavbar() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav>
            <Nav.Link href="/?redirect=home" className="nav-link active fs-4 px-3">Home</Nav.Link>
            <Nav.Link href="/?redirect=cv" className="nav-link fs-4 px-3">CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default GetNavbar;