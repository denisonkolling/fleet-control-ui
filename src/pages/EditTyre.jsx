import { React, useState, useEffect } from 'react';
import { Form, Button, Container, Navbar, Card } from 'react-bootstrap';
import tyreService from '../service/tyre';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useNavigate, useParams } from 'react-router-dom';

const EditTyre = () => {
	const [tyre, setTyre] = useState({
		vehicleId: '',
		manufacturer: '',
		serial: '',
		model: '',
		position: '',
		size: '',
		vehicle: '',
	});

	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const clearMessageError = (e) => {
		setMessage('');
		setError('');
	};

	const navigate = useNavigate();

	const { id } = useParams();

	useEffect(() => {
		tyreService
			.getTyreById(id)
			.then((res) => {
				setTyre(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleChange = (e) => {
		const value = e.target.value;
		setTyre({ ...tyre, [e.target.name]: value });
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
				setMessage('Tyre added successfully!');
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
								<Form.Group className="mb-3" controlId="name">
									<Form.Label>Manufacturer</Form.Label>
									<Form.Control
										type="text"
										name="manufacturer"
										onChange={handleChange}
										value={tyre.manufacturer}
										required
									/>
								</Form.Group>
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
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Position</Form.Label>
								<Form.Control
									type="text"
									name="position"
									onChange={handleChange}
									value={tyre.position}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="name">
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
					<p className="fs-4 mt-2 text-center text-success">{message}</p>
				)}
				{error && <p className="fs-4 mt-2 text-center text-danger">{error}</p>}
			</Container>
		</>
	);
};

export default EditTyre;
