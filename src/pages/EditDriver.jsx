import { React, useEffect, useState } from 'react';
import { Form, Button, Container, Navbar, Card } from 'react-bootstrap';
import driverService from '../service/driver.service';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

const EditDriver = () => {
	const [driver, setDriver] = useState({
		firstName: '',
		lastName: '',
		birthday: '',
		licenseId: '',
		licenseClass: '',
		expiryDate: '',
	});

	const navigate = useNavigate();

	const { id } = useParams();

	const [msg, setMsg] = useState('');

	useEffect(() => {
		driverService
			.getDriverById(id)
			.then((res) => {
				setDriver(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleChange = (e) => {
		const value = e.target.value;
		setDriver({ ...driver, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		driverService
			.saveDriver(driver)
			.then((res) => {
				setDriver({
					firstName: '',
					lastName: '',
					birthday: '',
					licenseId: '',
					licenseClass: '',
					expiryDate: '',
				});
			})
			.catch((error) => {
				setError('Error: ' + error.message);
			});
	};

	return (
		<>
			<NavbarSystem />
			<Container className='mt-4 col-md-4'>
				<Card>
				<CardHeader className='text-center fs-4'>Driver Registration</CardHeader>
				<Container className='p-4'>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>First Name</Form.Label>
						<Form.Control
							type="text"
							name="firstName"
							onChange={handleChange}
							value={driver.firstName}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Last Name</Form.Label>
						<Form.Control
							type="text"
							name="lastName"
							onChange={handleChange}
							value={driver.lastName}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Birthday</Form.Label>
						<Form.Control
							type="date"
							name="birthday"
							onChange={handleChange}
							value={moment(driver.birthday).format('L')}
							
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>License Id</Form.Label>
						<Form.Control
							type="text"
							name="licenseId"
							onChange={handleChange}
							value={driver.licenseId}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>License Class</Form.Label>
						<Form.Control
							type="text"
							name="licenseClass"
							onChange={handleChange}
							value={driver.licenseClass}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Expiry Date</Form.Label>
						<Form.Control
							type="date"
							name="expiryDate"
							onChange={handleChange}
							value={moment(driver.expiryDate).format('L')}
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

export default EditDriver;
