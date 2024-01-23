import { React, useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import vehicleService from '../service/vehicle';
import NavbarSystem from '../components/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const AddVehicle = () => {
	const [vehicle, setVehicle] = useState({
		plate: '',
		model: '',
		driver: '',
		mileage: '',
		year: '',
	});

	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const [checked, setChecked] = useState(false);
	const [radioValue, setRadioValue] = useState('1');

	const radios = [
		{ name: 'Diesel', value: '1' },
		{ name: 'Gasoline', value: '2' },
		{ name: 'Eletric', value: '3' },
	];

	const handleChange = (e) => {
		const value = e.target.value;
		setVehicle({ ...vehicle, [e.target.name]: value });
	};

	const clearMessageError = (e) => {
		setMessage('');
		setError('');
	}
	const handleSubmit = (e) => {
		e.preventDefault();

		vehicleService
			.saveVehicle(vehicle)
			.then((res) => {
				setVehicle({ plate: '', model: '', driver: '', mileage: '', year: '' });
				setMessage('Vehicle added successfully!');
			})
			.catch((error) => {
				setError('Something went wrong on server!');
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
									onBlur={clearMessageError}
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

							<Form.Label>Fuel</Form.Label>
							<br></br>
							<ButtonGroup>
								{radios.map((radio, idx) => (
									<ToggleButton
										key={idx}
										id={`radio-${idx}`}
										type="radio"
										variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
										name="radio"
										value={radio.value}
										checked={radioValue === radio.value}
										onChange={(e) => setRadioValue(e.currentTarget.value)}>
										{radio.name}
									</ToggleButton>
								))}
							</ButtonGroup>

							<div className="d-flex justify-content-end mt-4">
								<Button variant="primary" type="submit">
									Save
								</Button>
							</div>
						</Form>
					</Container>
				</Card>
				{message && <p className="fs-4 mt-2 text-center text-success">{message}</p>}
				{error && <p className="fs-4 mt-2 text-center text-danger">{error}</p>}
			</Container>
		</>
	);
};

export default AddVehicle;
