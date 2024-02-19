import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaTruck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function NavbarSystem() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand to="/home"><FaTruck /> Fleet Control</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/home">Home</Nav.Link>
            
            <NavDropdown title="Vehicles" id="navbarScrollingDropdown">
              <Link to="/register-vehicle">Register Vehicle</Link>
              <NavDropdown.Divider />
              <Link to="/vehicle-list">List Vehicles</Link>
              <Link to="/vehicle-service-order">List Service Order</Link>
              <Link to="/register-service-order">Create Service Order</Link>
              <Link to="/vehicle-mileage">Mileage Control</Link>
              <Link to="/vehicles-map">Vehicles Map</Link>
            </NavDropdown>
            <NavDropdown title="Drivers" id="navbarScrollingDropdown">
              <Link to="/register-driver">Register Driver</Link>
              <Link to="/find-driver">Find Drivers</Link>
              <NavDropdown.Divider />
              <Link to="/driver-list">List Drivers</Link>
              <Link to="/register-driving-hours">Driving Hours</Link>
            </NavDropdown>
            <NavDropdown title="Tyres" id="navbarScrollingDropdown">
              <Link to="/register-tyre">Register Tyre</Link>
              <Link to="/tyre-list">List Tyres</Link>
              <NavDropdown.Divider />
              <Link to="/register-tyre-reading">Register Tyre Reading</Link>
              <Link to="/tyre-reading">List Tyre Reading</Link>
            </NavDropdown>
            <NavDropdown title="Trips" id="navbarScrollingDropdown">
              <Link to="/register-trip">Register Trip</Link>
              <Link to="/trip-list">List Trips</Link>
            </NavDropdown>
            <NavDropdown title="Expenses" id="navbarScrollingDropdown">
              <Link to="/register-expense">Register Expense</Link>
              <Link to="/expense-list">List Expenses</Link>
              <Link to="/find-expense">Expenses by Trip</Link>
            </NavDropdown>
            <NavDropdown title="Customer" id="navbarScrollingDropdown">
              <Link to="/register-customer">Register Customer</Link>
              <Link to="#action4">Find Customer</Link>
              <NavDropdown.Divider />
              <Link to="/customer-list">List Customer</Link>
            </NavDropdown>
            <NavDropdown title="Invoice" id="navbarScrollingDropdown">
              <Link to="/register-invoice">Register Invoice</Link>
              <Link to="/invoice-find">Find Invoice</Link>
              <NavDropdown.Divider />
              <Link to="/invoice-list">List Invoice</Link>
            </NavDropdown>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <Link to="/register-product">Register Products</Link>
              <Link to="#action4">Find Invoice</Link>
              <NavDropdown.Divider />
              <Link to="/product-list">List Products</Link>
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