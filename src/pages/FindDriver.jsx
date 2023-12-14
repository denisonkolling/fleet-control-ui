import { React, useState } from 'react';
import { Form, Button, Container, Navbar, Card } from 'react-bootstrap';
import driverService from '../service/driver.service';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const FindDriver = () => {

	const [driver, setDriver] = useState({
		firstName: '',
		lastName: '',
		birthday: '',
		licenseId: '',
		licenseClass: '',
		expiryDate: '',
	});

  const [search, setSearch] = useState('')

	const [msg, setMsg] = useState('');


	const handleChange = (e) => {
		const value = e.target.value;
		setDriver({ ...driver, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		driverService
			.getDriverByName(search)
      .then((res) => {
				setDriver(res.data);
			})
			.catch((error) => {
				setError('Error: ' + error.message);
			});
	};

	return (
		<>
			<NavbarSystem />
			<Container className="mt-4 col-md-4">
				<Card>
					<CardHeader className="text-center fs-4">Find Driver</CardHeader>
					<Container className="p-4">
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									name="firstName"
									onChange={handleChange}
									value={driver.firstName}
									readOnly
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="text"
									name="lastName"
									onChange={handleChange}
									value={driver.lastName}
									readOnly
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Birthday</Form.Label>
								<Form.Control
									type="date"
									name="birthday"
									onChange={handleChange}
									value={moment(driver.birthday).format('L')}
									readOnly
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>License Id</Form.Label>
								<Form.Control
									type="text"
									name="licenseId"
									onChange={handleChange}
									value={driver.licenseId}
									readOnly
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>License Class</Form.Label>
								<Form.Control
									type="text"
									name="licenseClass"
									onChange={handleChange}
									value={driver.licenseClass}
									readOnly
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Expiry Date</Form.Label>
								<Form.Control
									type="date"
									name="expiryDate"
									onChange={handleChange}
									value={moment(driver.expiryDate).format('L')}
									readOnly
								/>
							</Form.Group>
						</Form>

						<Form onSubmit={handleSubmit} className="">
							<Form.Label>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
								&nbsp;Driver Name
								<Form.Control
									type="text"
									value={search}
									onChange={(event) => setSearch(event.target.value)}
								/>
							</Form.Label>

							<Button variant="primary" type="submit" className="ms-2">
								Search
							</Button>
              
						</Form>
					</Container>
				</Card>
			</Container>
		</>
	);
};

export default FindDriver;
