import { React, useState } from 'react';
import { Form, Button, Container, Navbar, Card, Table } from 'react-bootstrap';
import invoiceService from '../service/invoice';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import customerService from '../service/customer';
import productService from '../service/product';
import vehicleService from '../service/vehicle';
import repairOrder from '../service/repairOrder';

const AddServiceOrder = () => {
	const [serviceOrder, setServiceOrder] = useState({
		plate: '',
		openDate: '',
		services: [],
		parts: [],
	});

	const [vehicle, setVehicle] = useState({
		id: '',
		plate: '',
		model: '',
		driver: '',
		mileage: '',
		year: '',
	});

	const [part, setPart] = useState({
		partId: '',
		name: '',
		quantity: '',
		unitPrice: '',
	});

	const [service, setService] = useState({
		serviceId: '',
		name: '',
		quantity: '',
		unitPrice: '',
	});

	const [partList, setPartList] = useState([]);
	const [serviceList, setServiceList] = useState([]);

	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const handleInputChange = (target, setState) => (e) => {
		const value = e.target.value;
		setState({ ...target, [e.target.name]: value });
	};

	const handleServiceOrderChange = handleInputChange(
		serviceOrder,
		setServiceOrder
	);
	const handleServiceChange = handleInputChange(service, setService);
	const handlePartChange = handleInputChange(part, setPart);
	const handleVehicleChange = handleInputChange(vehicle, setVehicle);

	const handleAddService = () => {
		setService({
			...service,
			id: serviceList.length + 1,
		});
		setServiceList([...serviceList, service]);
		setService({
			serviceId: '',
			name: '',
			quantity: '',
			unitPrice: '',
		});
	};

	const handleAddPart = () => {
		setPart({
			...part,
			id: partList.length + 1,
		});
		setPartList([...partList, part]);
		setPart({
			partId: '',
			name: '',
			quantity: '',
			unitPrice: '',
		});
	};

	const handleAddServiceOrderItems = () => {
		setServiceOrder({
			...serviceOrder,
			services: serviceList,
			parts: partList,
		});
	};

	const handleClearMessage = () => {
		setMessage('');
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handleAddServiceOrderItems();
		repairOrder
			.saveRepairOrder(serviceOrder)
			.then((res) => {
				setServiceOrder({
					plate: '',
					openDate: '',
					services: [],
					parts: [],
				});
				setMessage('Service Order added successfuly!');
				setServiceList([]);
				setPartList([]);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	async function findVehicle(e) {
		try {
			const vehiclePlate = e.target.value;
			const { data } = await vehicleService.getVehicleByPlate(vehiclePlate);

			setVehicle(data);

			setError('');

			if (data.erro) {
				setError('Error: ' + data.error);
			}
		} catch (error) {
			setError('Error: ' + error.message);
		}
		return;
	}

	async function findBuyer(e) {
		try {
			const customerId = e.target.value;
			const { data } = await customerService.getCustomerById(customerId);

			setInvoice((invoice) => ({
				...invoice,
				buyerId: data.id,
				buyerName: data.firstName,
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

	async function findItem(e) {
		try {
			const itemId = e.target.value;
			const { data } = await productService.getProductById(itemId);

			setItem((item) => ({
				...item,
				productId: data.id,
				productName: data.name,
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
						Create Service Order
					</CardHeader>
					<Container className="p-4">
						<Form onSubmit={handleSubmit}>
							<div className="d-flex justify-content-between">
								<Form.Group className="mb-3 col-md-3" controlId="name">
									<FontAwesomeIcon icon={faMagnifyingGlass} />
									<Form.Label>&nbsp;Plate</Form.Label>
									<Form.Control
										type="text"
										name="plate"
										onChange={handleVehicleChange}
										value={vehicle.plate}
										onBlur={findVehicle}
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3 col-md-5 mx-2" controlId="name">
									<Form.Label>Date</Form.Label>
									<Form.Control
										type="date"
										name="openDate"
										onChange={handleServiceOrderChange}
										value={serviceOrder.openDate}
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3 col-md-4" controlId="name">
									<Form.Label>Driver</Form.Label>
									<Form.Control
										type="text"
										name="driverName"
										value={vehicle.driver}
										readOnly
									/>
								</Form.Group>
							</div>

							<div>
								<div className="d-flex justify-content-between">
									<>
										<Form.Group className="col-2" controlId="name">
											<FontAwesomeIcon icon={faMagnifyingGlass} />
											<Form.Label>&nbsp;Service ID</Form.Label>
											<Form.Control
												type="number"
												name="serviceId"
												value={service.serviceId}
												onChange={handleServiceChange}
												// onBlur={findItem}
											/>
										</Form.Group>

										<Form.Group className="col-3">
											<Form.Label>Service Name</Form.Label>
											<Form.Control
												type="text"
												name="name"
												value={service.name}
												onChange={handleServiceChange}
												// readOnly
											/>
										</Form.Group>

										<Form.Group className="col-2">
											<Form.Label>Quantity</Form.Label>
											<Form.Control
												type="number"
												name="quantity"
												value={service.quantity}
												onChange={handleServiceChange}
											/>
										</Form.Group>

										<Form.Group className="col-2">
											<Form.Label>Unit Price</Form.Label>
											<Form.Control
												type="number"
												name="unitPrice"
												value={service.unitPrice}
												onChange={handleServiceChange}
											/>
										</Form.Group>
									</>

									<Button
										className="col23 m-4"
										variant="primary"
										type="button"
										onClick={handleAddService}>
										Add Service
									</Button>
								</div>

								<Table>
									<thead>
										<tr>
											<th>#</th>
											<th>Name</th>
											<th>Quantity</th>
											<th>Unit Value</th>
											<th>Total</th>
										</tr>
									</thead>
									<tbody>
										{serviceList.map((service) => (
											<tr key={service.id}>
												<td>{service.serviceId}</td>
												<td>{service.name}</td>
												<td>{service.quantity}</td>
												<td>$ {parseFloat(service.unitPrice).toFixed(2)}</td>
												<td>
													${' '}
													{parseFloat(
														service.unitPrice * service.quantity
													).toFixed(2)}
												</td>
											</tr>
										))}
									</tbody>
								</Table>
							</div>

							<div className="d-flex justify-content-between">
								<>
									<Form.Group className="col-2" controlId="name">
										<FontAwesomeIcon icon={faMagnifyingGlass} />
										<Form.Label>&nbsp;Part ID</Form.Label>
										<Form.Control
											type="number"
											name="partId"
											value={part.partId}
											onChange={handlePartChange}
											// onBlur={findItem}
										/>
									</Form.Group>

									<Form.Group className="col-3">
										<Form.Label>Part Name</Form.Label>
										<Form.Control
											type="text"
											name="name"
											value={part.name}
											onChange={handlePartChange}
											// readOnly
										/>
									</Form.Group>

									<Form.Group className="col-2">
										<Form.Label>Quantity</Form.Label>
										<Form.Control
											type="number"
											name="quantity"
											value={part.quantity}
											onChange={handlePartChange}
										/>
									</Form.Group>

									<Form.Group className="col-2">
										<Form.Label>Unit Price</Form.Label>
										<Form.Control
											type="number"
											name="unitPrice"
											value={part.unitPrice}
											onChange={handlePartChange}
										/>
									</Form.Group>
								</>

								<Button
									className="col23 m-4"
									variant="primary"
									type="button"
									onClick={handleAddPart}>
									Add Part
								</Button>
							</div>

							<Table>
								<thead>
									<tr>
										<th>#</th>
										<th>Name</th>
										<th>Quantity</th>
										<th>Unit Value</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{partList.map((part) => (
										<tr key={part.id}>
											<td>{part.partId}</td>
											<td>{part.name}</td>
											<td>{part.quantity}</td>
											<td>$ {parseFloat(part.unitPrice).toFixed(2)}</td>
											<td>
												${' '}
												{parseFloat(part.unitPrice * part.quantity).toFixed(2)}
											</td>
										</tr>
									))}
								</tbody>
							</Table>
							<div className="d-flex justify-content-end mb-3"></div>
							<div className="d-flex justify-content-end">
								<Button variant="primary" type="submit">
									Save Service Order
								</Button>
							</div>
						</Form>
					</Container>
				</Card>
			</Container>
			{message && <p className="fs-6 mt-2 alert alert-success">{message}</p>}
			{error && <p className="fs-6 mt-2 alert alert-danger">{error}</p>}
		</>
	);
};

export default AddServiceOrder;
