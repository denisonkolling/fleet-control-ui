import { React, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import vehicleService from '../service/vehicle.service';
import NavbarSystem from '../components/Navbar';

const AddVehicle = () => {
	const [vehicle, setVehicle] = useState({
		plate: '',
		model: '',
		driver: '',
		mileage: '',
		year: '',
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setVehicle({ ...vehicle, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		vehicleService
			.saveVehicle(vehicle)
			.then((res) => {
				setVehicle({ plate: '', model: '', driver: '', mileage: '', year: '' });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<NavbarSystem />
			<Container>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Registration Number</Form.Label>
						<Form.Control
							type="text"
							name="plate"
							onChange={handleChange}
							value={vehicle.plate}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Model</Form.Label>
						<Form.Control
							type="text"
							name="model"
							onChange={handleChange}
							value={vehicle.model}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Driver</Form.Label>
						<Form.Control
							type="text"
							name="driver"
							onChange={handleChange}
							value={vehicle.driver}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Mileage</Form.Label>
						<Form.Control
							type="number"
							name="mileage"
							onChange={handleChange}
							value={vehicle.mileage}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Year</Form.Label>
						<Form.Control
							type="number"
							name="year"
							onChange={handleChange}
							value={vehicle.year}
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
		</>
	);
};

export default AddVehicle;
