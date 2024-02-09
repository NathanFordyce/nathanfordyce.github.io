import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function GetNavbar() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav>
            <Nav.Link href="/?redirect=home" className="nav-link active fs-4">Home</Nav.Link>
            <Nav.Link href="/?redirect=about" className="nav-link fs-4">About</Nav.Link>
            <Nav.Link href="/?redirect=projects" className="nav-link fs-4">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default GetNavbar;