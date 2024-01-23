import { React, useState } from 'react';
import { Form, Button, Container, Navbar, Card, Table } from 'react-bootstrap';
import invoiceService from '../service/invoice';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import driverService from '../service/driver';
import drivingHoursService from '../service/drivingHours';

const AddDrivingHours = () => {
	const [drivingHours, setDrivingHours] = useState({
		driver: [],
		startDrivingTime: '',
		endDrivingTime: '',
	});

	const [driver, setDriver] = useState({
		id: '',
		firstName: '',
		lastName: '',
	});

	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const handleChange = (e) => {
		const value = e.target.value;
		setDrivingHours({ ...drivingHours, [e.target.name]: value });
	};

	const handleDriverChange = (e) => {
		const value = e.target.value;
		setDriver((prevDriver) => ({ ...prevDriver, id: value }));
	};

	const handleClearMessage = () => {
		setMessage('');
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		drivingHoursService
			.saveDrivingHours(drivingHours)
			.then((res) => {
				setMessage('Hours Added Successfuly!');
				setDrivingHours({
					driver: [],
					startDrivingTime: '',
					endDrivingTime: '',
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	async function findDriver(e) {
		try {
			const driverId = e.target.value;
			const { data } = await driverService.getDriverById(driverId);

			setDriver((driver) => ({
				...driver,
				id: data.id,
				firstName: data.firstName,
				lastName: data.lastName,
			}));

			setError('');

			if (data.erro) {
				setError('Error: ' + data.error);
			}
		} catch (error) {
			setError('Error: ' + error.message);
		}
		return;
	}

	return (
		<>
			<NavbarSystem />
			<Container className="col-6 mt-4">
				<Card>
					<CardHeader className="text-center fs-4">
						Driving Hours Registration
					</CardHeader>
					<Container className="p-4">
						<Form onSubmit={handleSubmit}>

						<div className="d-flex justify-content-between">
								<Form.Group className="mb-3 col-md-1" controlId="name">
									<div className='d-flex'>
									<FontAwesomeIcon icon={faMagnifyingGlass} />
									<Form.Label>&nbsp;ID</Form.Label>
									</div>
									<Form.Control
										type="number"
										name="driver"
										onChange={handleDriverChange}
										value={driver.id}
										onBlur={findDriver}
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3 col-md-4" controlId="name">
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										name="driverName"
										onChange={handleChange}
										value={`${driver.firstName} ${driver.lastName}`}
										readOnly
									/>
								</Form.Group>
							</div>

							<div className="d-flex justify-content-between">
								<>
									<Form.Group className="col-4">
										<Form.Label>Start Time</Form.Label>
										<Form.Control
											type="datetime-local"
											name="startDrivingTime"
											value={drivingHours.startDrivingTime}
											onChange={handleChange}
										/>
									</Form.Group>

									<Form.Group className="col-4">
										<Form.Label>End Time</Form.Label>
										<Form.Control
											type="datetime-local"
											name="endDrivingTime"
											value={drivingHours.endDrivingTime}
											onChange={handleChange}
										/>
									</Form.Group>
								</>

								<Button className="col23 m-4" variant="primary" type="button">
									Create Register
								</Button>
							</div>

							<Table>
								<thead>
									<tr>
										<th>#</th>
										<th>Start Time</th>
										<th>End Time</th>
										<th>Total Hours</th>
									</tr>
								</thead>
								<tbody></tbody>
							</Table>
							<div className="d-flex justify-content-end mb-3"></div>
							<div className="d-flex justify-content-end">
								<Button variant="primary" type="submit">
									Save Table
								</Button>
							</div>
						</Form>
					</Container>
				</Card>
			</Container>
			{message && <p className="fs-4 text-center text-success">{message}</p>}
			{error ? <p className="fs-4 text-center text-danger">{error}</p> : null}
		</>
	);
};

export default AddDrivingHours;
