import { React, useState } from 'react';
import { Form, Button, Container, Navbar, Card } from 'react-bootstrap';
import customerService from '../service/customer';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const AddCustomer = () => {

	const [customer, setCustomer] = useState(
		{
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			address: {
				street: '',
				zip: '',
				city: '',
				state: '',
				number: '',
				country: '',
			},
		},
	);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCustomer({
      ...customer,
      [name]: value,
    });
  };

	const handleAddressChange = (e) => {
		const { name, value } = e.target;
		setCustomer({
			...customer,
			address: {
				...customer.address,
				[name]: value,
			},
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		customerService
			.saveCustomer(customer)
			.then((res) => {
				setCustomer({
					firstName: '',
					lastName: '',
					email: '',
					phone: '',
					address: {
						street: '',
						zip: '',
						city: '',
						state: '',
						number: '',
						country: '',
					},
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<NavbarSystem />
			<Container className="mt-4 col-md-4">
				<Card>
					<CardHeader className="text-center fs-4">
						Customer Registration
					</CardHeader>
					<Container className="p-4">
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									name="firstName"
									onChange={handleChange}
									value={customer.firstName}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="text"
									name="lastName"
									onChange={handleChange}
									value={customer.lastName}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									name="email"
									onChange={handleChange}
									value={customer.email}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Phone</Form.Label>
								<Form.Control
									type="phone"
									name="phone"
									onChange={handleChange}
									value={customer.phone}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Street</Form.Label>
								<Form.Control
									type="text"
									name="street"
									onChange={handleAddressChange}
									value={customer.address.street}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Number</Form.Label>
								<Form.Control
									type="text"
									name="number"
									onChange={handleAddressChange}
									value={customer.address.number}
									required
								/>
							</Form.Group>
              <Form.Group className="mb-3" controlId="name">
								<Form.Label>City</Form.Label>
								<Form.Control
									type="text"
									name="city"
									onChange={handleAddressChange}
									value={customer.address.city}
									required
								/>
							</Form.Group>
              
              <Form.Group className="mb-3" controlId="name">
								<Form.Label>State</Form.Label>
								<Form.Control
									type="text"
									name="state"
									onChange={handleAddressChange}
									value={customer.address.state}
									required
								/>
							</Form.Group>

              <Form.Group className="mb-3" controlId="name">
								<Form.Label>Country</Form.Label>
								<Form.Control
									type="text"
									name="country"
									onChange={handleAddressChange}
									value={customer.address.country}
									required
								/>
							</Form.Group>

              <Form.Group className="mb-3" controlId="name">
								<Form.Label>Zip Code</Form.Label>
								<Form.Control
									type="text"
									name="zip"
									onChange={handleAddressChange}
									value={customer.address.zip}
									required
								/>
							</Form.Group>
              
							<div className="d-flex justify-content-end">
								<Button variant="primary" type="submit">
									Save
								</Button>
							</div>
						</Form>
					</Container>
				</Card>
			</Container>
		</>
	);
};

export default AddCustomer;


