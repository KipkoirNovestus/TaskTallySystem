import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Homelogo from "./images/Homelogo.svg";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="#">
          <img className="d-block w-70" src={Homelogo} alt="Home Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/tracking">Tracking</Nav.Link>
            <Nav.Link href="/templates">Templates</Nav.Link>
            <Nav.Link href="/agencies">Agencies</Nav.Link>
            <Nav.Link href="/bookDemo">BookDemo</Nav.Link>
            <Nav.Link href="/views">Views</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
