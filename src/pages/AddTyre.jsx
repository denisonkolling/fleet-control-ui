import { React, useState } from 'react';
import { Form, Button, Container, Navbar } from 'react-bootstrap';
import tyreService from '../service/tyre.service';
import NavbarSystem from '../components/Navbar';

const AddTyre = () => {
	const [tyre, setTyre] = useState({
		vehicleId: '',
		manufacturer: '',
		serial: '',
		model: '',
		size: '',
		vehicle: '',
	});

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
					vehicle: '',
				});
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
						<Form.Label>Vehicle Id</Form.Label>
						<Form.Control
							type="number"
							name="fvehicleId"
							onChange={handleChange}
							value={tyre.fvehicleId}
							required
						/>
					</Form.Group>
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
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Serial</Form.Label>
						<Form.Control
							type="date"
							name="serial"
							onChange={handleChange}
							value={tyre.serial}
							required
						/>
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
							type="date"
							name="position"
							onChange={handleChange}
							value={tyre.position}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Vehicle</Form.Label>
						<Form.Control
							type="date"
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
		</>
	);
};

export default AddTyre;
