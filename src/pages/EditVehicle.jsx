import { React, useEffect, useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import vehicleService from '../service/vehicle.service';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useNavigate, useParams } from 'react-router-dom';

const EditVehicle = () => {
	const [vehicle, setVehicle] = useState({
		id: '',
		plate: '',
		model: '',
		driver: '',
		mileage: '',
		year: '',
	});

	const navigate = useNavigate();

	const { id } = useParams();

	const [msg, setMsg] = useState('');

	useEffect(() => {
		vehicleService
			.getVehicleById(id)
			.then((res) => {
				setVehicle(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

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
				setMsg('Vehicle updated successfully!');
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
						Vehicle Registration
					</CardHeader>
					<Container className="p-4">
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

							<div className="d-flex justify-content-end mt-4">
								<Button variant="primary" type="submit">
									Save
								</Button>
							</div>
						</Form>
					</Container>
				</Card>
        {msg && <p className="fs-4 mt-2 text-center text-success">{msg}</p>}
			</Container>
		</>
	);
};

export default EditVehicle;
