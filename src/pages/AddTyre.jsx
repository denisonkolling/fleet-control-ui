import { React, useState } from 'react';
import {
	Form,
	Button,
	Container,
	Navbar,
	Card,
	ButtonGroup,
	ToggleButton,
	Dropdown
} from 'react-bootstrap';
import tyreService from '../service/tyre';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const AddTyre = () => {

	const [tyre, setTyre] = useState({
		vehicleId: '',
		manufacturer: '',
		serial: '',
		model: '',
		position: '',
		size: '',
		vehicle: '',
	});

	const [manufacturers, setManufacturers] = useState([
		'Bridgestone',
		'Goodyear',
		'Pirelli',
		'Michelin'
	]);

	const radios = [
		{ name: 'Front Right', value: 'FR' },
		{ name: 'Front Left', value: 'FL' },
		{ name: 'Rear Right', value: 'RR' },
		{ name: 'Rear Left', value: 'RL' },
	];

	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const [checked, setChecked] = useState(false);
	const [radioValue, setRadioValue] = useState('1');

	const clearMessageError = (e) => {
		setMessage('');
		setError('');
	};

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
	
		if (name === 'position') {
			setRadioValue(value);
			setTyre({ ...tyre, position: value });
		} else {
			setTyre({ ...tyre, [name]: value });
		}
	};

	const handleManufacturerSelect = (selectedManufacturer) => {
		setTyre({ ...tyre, manufacturer: selectedManufacturer });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		tyreService
			.saveTyre(tyre)
			.then((res) => {
				setTyre({
					vehicleId: '',
					manufacturer: '',
					serial: '',
					model: '',
					size: '',
					position: '',
					vehicle: '',
				});
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
						Tyre Registration
					</CardHeader>
					<Container className="p-4">
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Serial</Form.Label>
								<Form.Control
									type="text"
									name="serial"
									onChange={handleChange}
									value={tyre.serial}
									onBlur={clearMessageError}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Manufacturer</Form.Label>
								<Dropdown>
									<Dropdown.Toggle id="dropdown-basic" className="col-4">
										{' '}
										{tyre.manufacturer || 'Select'}
									</Dropdown.Toggle>
									<Dropdown.Menu>
										{manufacturers.map((manufacturer, index) => (
											<Dropdown.Item
												key={index}
												onClick={() => handleManufacturerSelect(manufacturer)}>
												{manufacturer}
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>
							</Form.Group>

							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Model</Form.Label>
								<Form.Control
									type="text"
									name="model"
									onChange={handleChange}
									value={tyre.model}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Size</Form.Label>
								<Form.Control
									type="text"
									name="size"
									onChange={handleChange}
									value={tyre.size}
									required
								/>
							</Form.Group>

							<Form.Label>Position</Form.Label>
							<br></br>
							<ButtonGroup className=''>
								{radios.map((radio, idx) => (
									<ToggleButton
										key={idx}
										id={`radio-${idx}`}
										type="radio"
										variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
										name="position"
										value={radio.value}
										checked={radioValue === radio.value}
										onChange={handleChange}>
										{radio.name}
									</ToggleButton>
								))}
							</ButtonGroup>
							
							<Form.Group className="mb-3" controlId="name">
							<br></br>
								<Form.Label>Vehicle</Form.Label>
								<Form.Control
									type="text"
									name="vehicle"
									onChange={handleChange}
									value={tyre.vehicle}
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
				{message && (
					<p className="fs-6 mt-2 alert alert-success">{message}</p>
				)}
				{error && <p className="fs-6 mt-2 alert alert-danger">{error}</p>}
			</Container>
		</>
	);
};

export default AddTyre;
