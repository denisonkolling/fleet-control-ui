import { React, useState } from 'react';
import {
	Form,
	Button,
	Container,
	Navbar,
	Card,
	ButtonGroup,
	ToggleButton,
	Dropdown,
} from 'react-bootstrap';
import tyreService from '../service/tyre';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const AddTyreReading = () => {

	const [tyre, setTyre] = useState({
		tyreId: '',
		insideTread: '',
		midleTread: '',
		outsideTread: '',
    date: '',
    pressure: '',
    vehicleMileage: '',
	});

	const radios = [
		{ name: '90 PSI', value: '90' },
		{ name: '110 PSI', value: '110' },
	];

	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const [radioValue, setRadioValue] = useState('90');

	const clearMessageError = (e) => {
		setMessage('');
		setError('');
	};

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		if (name === 'pressure') {
			setRadioValue(value);
			setTyre({ ...tyre, pressure: value });
		} else {
			setTyre({ ...tyre, [name]: value });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		tyreService
			.saveTyreReading(tyre)
			.then((res) => {
				setTyre({
					tyreId: '',
					insideTread: '',
					midleTread: '',
					outsideTread: '',
				});
				setMessage('Tyre reading added successfully!');
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
						Tyre Tread Depth Registration
					</CardHeader>
					<Container className="p-4">
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3 col-md-5" controlId="name">
								<Form.Label>Date</Form.Label>
								<Form.Control
									type="date"
									name="date"
									onChange={handleChange}
									value={tyre.date}
                  onClick={clearMessageError}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Serial Number</Form.Label>
								<Form.Control
									type="text"
									name="tyreId"
									onChange={handleChange}
									value={tyre.tyreId}
                  onClick={clearMessageError}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Inside Tread</Form.Label>
								<Form.Control
									type="number"
									name="insideTread"
									onChange={handleChange}
									value={tyre.insideTread}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Midle Tread</Form.Label>
								<Form.Control
									type="number"
									name="midleTread"
									onChange={handleChange}
									value={tyre.midleTread}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Outside Tread</Form.Label>
								<Form.Control
									type="number"
									name="outsideTread"
									onChange={handleChange}
									value={tyre.outsideTread}
									required
								/>
							</Form.Group>

							<Form.Label>Pressure</Form.Label>
							<br></br>
							<ButtonGroup className="">
								{radios.map((radio, idx) => (
									<ToggleButton
										key={idx}
										id={`radio-${idx}`}
										type="radio"
										variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
										name="pressure"
										value={radio.value}
										checked={radioValue === radio.value}
										onChange={handleChange}>
										{radio.name}
									</ToggleButton>
								))}
							</ButtonGroup>

							<Form.Group className="mb-3" controlId="name">
								<br></br>
								<Form.Label>Vehicle Mileage</Form.Label>
								<Form.Control
									type="text"
									name="vehicleMileage"
									onChange={handleChange}
									value={tyre.vehicleMileage}
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
				{message && <p className="fs-6 mt-2 alert alert-success">{message}</p>}
				{error && <p className="fs-6 mt-2 alert alert-danger">{error}</p>}
			</Container>
		</>
	);
};

export default AddTyreReading;
