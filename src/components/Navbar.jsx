import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarSystem() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand to="/home">Fleet Control</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            
            <NavDropdown title="Vehicles" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/register-vehicle">Register Vehicle</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Find Vehicle</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/vehicle-list">List Vehicles</NavDropdown.Item>
              <NavDropdown.Item href="/vehicle-service-order">Service Order Control</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Drivers" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/register-driver">Register Driver</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Find Drivers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">List Drivers</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Hours Control</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tyres" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/register-tyre">Register Tyre</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Find Tyre</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tyre-list">List Tyres</NavDropdown.Item>
              <NavDropdown.Item href="/tyre-reading">Tyre Reading</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Trips" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/register-trip">Register Trip</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Find Trip</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">List Trips</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Expenses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/expense-list">List Expenses</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Find Trip</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">List Trips</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Customer" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/register-customer">Register Customer</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Find Customer</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">List Customer</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Invoice" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/register-invoice">Register Invoice</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Find Invoice</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/invoice-list">List Invoice</NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSystem;