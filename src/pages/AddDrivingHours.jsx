import { React, useState } from 'react';
import { Form, Button, Container, Navbar, Card, Table } from 'react-bootstrap';
import invoiceService from '../service/invoice.service';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import driverService from '../service/driver.service';
import drivingHoursService from '../service/drivingHours.service';

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
		birthday: '',
		licenseId: '',
		expiryDate: '',
		licenseClass: '',
	});

	const [itemsList, setItemsList] = useState([]);
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const handleChange = (e) => {
		const value = e.target.value;
		setDrivingHours({ ...drivingHours, [e.target.name]: value });
	};

	const handleDriverChange = (e) => {
		const value = e.target.value;
		setDriver({ ...driver, [e.target.name]: value });
	};

	// const handleAddItem = () => {
	// 	setItem({
	// 		...item,
	// 		id: itemsList.length + 1,
	// 	});
	// 	setItemsList([...itemsList, item]);
	// 	setItem({
	// 		productId: '',
	// 		productName: '',
	// 		quantity: '',
	// 		unitPrice: '',
	// 	});
	// };

	// const handleAddItemsInvoice = () => {
	// 	setInvoice({ ...invoice, items: itemsList });
	// };

	const handleClearMessage = () => {
		setMessage('');
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		invoiceService
			.saveInvoice(invoice)
			.then((res) => {
				setMessage('Invoice Added Successfuly!');
				setInvoice({
					number: '',
					date: '',
					issuerId: '',
					issuerName: '',
					buyerId: '',
					buyerName: '',
					items: [],
				});
				setItemsList([]);
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
				birthday: data.birthday,
				licenseId: data.licenseId,
				expiryDate: data.expiryDate,
				licenseClass: data.licenseClass,
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
			<Container className="mt-4">
				<Card>
					<CardHeader className="text-center fs-4">
						Driving Hours Registration
					</CardHeader>
					<Container className="p-4">
						<Form onSubmit={handleSubmit}>
							<div className="d-flex justify-content-between">
								<Form.Group className="mb-3 col-md-1" controlId="name">
									<FontAwesomeIcon icon={faMagnifyingGlass} />
									<Form.Label>&nbsp;Driver ID</Form.Label>
									<Form.Control
										type="number"
										name="driverId"
										onChange={handleChange}
										value={drivingHours.driver}
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
										value={drivingHours.driver.firstName}
										readOnly
									/>
								</Form.Group>

								{/* <Form.Group className="mb-3 col-md-2" controlId="name">
									<FontAwesomeIcon icon={faMagnifyingGlass} />
									<Form.Label>&nbsp;Date</Form.Label>
									<Form.Control
										type="date"
										name="date"
										onChange={handleChange}
										value={invoice.date}
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3 col-md-4" controlId="name">
									<Form.Label>Vehicle</Form.Label>
									<Form.Control
										type="text"
										name="buyerName"
										onChange={handleChange}
										value={invoice.buyerName}
										readOnly
										required
									/>
								</Form.Group> */}
							</div>

							<div className="d-flex justify-content-between">
								<>
									{/* <Form.Group className="col-2" controlId="name">
										<FontAwesomeIcon icon={faMagnifyingGlass} />
										<Form.Label>&nbsp;ID</Form.Label>
										<Form.Control
											type="number"
											name="productId"
											value={item.productId}
											onChange={handleItemChange}
											onBlur={findItem}
										/>
									</Form.Group> */}

									<Form.Group className="col-3">
										<Form.Label>Start Time</Form.Label>
										<Form.Control
											type="date"
											name="startDrivingTime"
											value={drivingHours.startDrivingTime}
											onChange={handleChange}
										/>
									</Form.Group>

									<Form.Group className="col-2">
										<Form.Label>End Time</Form.Label>
										<Form.Control
											type="date"
											name="startDrivingTime"
											value={drivingHours.startDrivingTime}
											onChange={handleChange}
										/>
									</Form.Group>
								</>

								<Button
									className="col23 m-4"
									variant="primary"
									type="button"
									// onClick={handleAddItem}
									>
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
								<tbody>
									{/* {itemsList.map((item) => (
										<tr key={item.id}>
											<td>{item.productId}</td>
											<td>{item.productName}</td>
											<td>{item.quantity}</td>
											<td>{item.unitPrice}</td>
											<td>{item.unitPrice * item.quantity}</td>
										</tr>
									))} */}
								</tbody>
							</Table>
							<div className="d-flex justify-content-end mb-3">
								{/* <Button
									variant="primary"
									type="button"
									onClick={handleAddItemsInvoice}>
									Save Registers
								</Button> */}
							</div>
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
