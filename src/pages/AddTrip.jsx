import { React, useState } from 'react';
import { Form, Button, Container, Navbar, Card } from 'react-bootstrap';
import tripService from '../service/trip';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const AddTrip = () => {
	const [trip, setTrip] = useState({
		vehicle: '',
		origin: '',
		destination: '',
		distance: '',
	});

	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const clearMessageError = (e) => {
		setMessage('');
		setError('');
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setTrip({ ...trip, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		tripService
			.saveTrip(trip)
			.then((res) => {
				setTrip({
					vehicle: '',
					origin: '',
					destination: '',
					distance: '',
				});
				setMessage('Trip added successfully!');
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
						Trip Registration
					</CardHeader>
					<Container className="p-4">
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Vehicle</Form.Label>
								<Form.Control
									type="text"
									name="vehicle"
									onChange={handleChange}
									value={trip.vehicle}
									onBlur={clearMessageError}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Origin</Form.Label>
								<Form.Control
									type="text"
									name="origin"
									onChange={handleChange}
									value={trip.origin}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Destination</Form.Label>
								<Form.Control
									type="text"
									name="destination"
									onChange={handleChange}
									value={trip.destination}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Distance</Form.Label>
								<Form.Control
									type="number"
									name="distance"
									onChange={handleChange}
									value={trip.distance}
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
					<p className="fs-4 mt-2 text-center text-success">{message}</p>
				)}
				{error && <p className="fs-4 mt-2 text-center text-danger">{error}</p>}
			</Container>
		</>
	);
};

export default AddTrip;
