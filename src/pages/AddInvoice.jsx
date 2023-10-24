import { React, useState } from 'react';
import { Form, Button, Container, Navbar, Card, Table } from 'react-bootstrap';
import invoiceService from '../service/invoice.service';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import customerService from '../service/customer.service';
import productService from '../service/product.service';

const AddInvoice = () => {
	const [invoice, setInvoice] = useState({
		number: '',
		date: '',
		issuerId: '',
		issuerName: '',
		buyerId: '',
		buyerName: '',
		items: [],
	});

	const [item, setItem] = useState({
		id: 0,
		productId: '',
		productName: '',
		quantity: '',
		unitPrice: '',
	});

	const [itemsList, setItemsList] = useState([]);
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const handleChange = (e) => {
		const value = e.target.value;
		setInvoice({ ...invoice, [e.target.name]: value });
	};

	const handleItemChange = (e) => {
		const value = e.target.value;
		setItem({ ...item, [e.target.name]: value });
	};

	const handleAddItem = () => {
		setItem({
			...item,
			id: itemsList.length + 1,
		});
		setItemsList([...itemsList, item]);
		setItem({
			productId: '',
			productName: '',
			quantity: '',
			unitPrice: '',
		});
	};

	const handleAddItems = () => {
		setInvoice({ ...invoice, items: itemsList });
	};

	const handleAddItemsInvoice = () => {
		handleAddItems();
	};

	const handleClearMessage = () => {
		setMessage('');
	}

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

	async function findIssuer(e) {
		try {
			const customerId = e.target.value;
			const { data } = await customerService.getCustomerById(customerId);

			setInvoice((invoice) => ({
				...invoice,
				issuerId: data.id,
				issuerName: data.firstName,
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
						Invoice Registration
					</CardHeader>
					<Container className="p-4">
						<Form onSubmit={handleSubmit}>
							<div className="d-flex justify-content-between">
								<Form.Group className="mb-3 col-md-5" controlId="name">
									<Form.Label>Number</Form.Label>
									<Form.Control
										type="number"
										name="number"
										onChange={handleChange}
										value={invoice.number}
										onSelect={handleClearMessage}
										required
									/>
								</Form.Group>
								<Form.Group className="mb-3 col-md-5" controlId="name">
									<Form.Label>Date</Form.Label>
									<Form.Control
										type="date"
										name="date"
										onChange={handleChange}
										value={invoice.date}
										required
									/>
								</Form.Group>
							</div>

							<div className="d-flex justify-content-between">
								<Form.Group className="mb-3 col-md-1" controlId="name">
									<FontAwesomeIcon icon={faMagnifyingGlass} />
									<Form.Label>&nbsp;Issuer ID</Form.Label>
									<Form.Control
										type="number"
										name="issuerId"
										onChange={handleChange}
										value={invoice.issuerId}
										onBlur={findIssuer}
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3 col-md-4" controlId="name">
									<Form.Label>Issuer Name</Form.Label>
									<Form.Control
										type="text"
										name="issuerName"
										onChange={handleChange}
										value={invoice.issuerName}
										readOnly
									/>
								</Form.Group>

								<Form.Group className="mb-3 col-md-1" controlId="name">
									<FontAwesomeIcon icon={faMagnifyingGlass} />
									<Form.Label>&nbsp;Buyer ID</Form.Label>
									<Form.Control
										type="number"
										name="buyerId"
										onChange={handleChange}
										value={invoice.buyerId}
										onBlur={findBuyer}
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3 col-md-4" controlId="name">
									<Form.Label>Buyer Name</Form.Label>
									<Form.Control
										type="text"
										name="buyerName"
										onChange={handleChange}
										value={invoice.buyerName}
										readOnly
										required
									/>
								</Form.Group>
							</div>

							<div className="d-flex justify-content-between">
								<>
									<Form.Group className="col-2" controlId="name">
										<FontAwesomeIcon icon={faMagnifyingGlass} />
										<Form.Label>&nbsp;Product ID</Form.Label>
										<Form.Control
											type="number"
											name="productId"
											value={item.productId}
											onChange={handleItemChange}
											onBlur={findItem}
										/>
									</Form.Group>

									<Form.Group className="col-3">
										<Form.Label>Product Name</Form.Label>
										<Form.Control
											type="text"
											name="productName"
											value={item.productName}
											onChange={handleItemChange}
											readOnly
										/>
									</Form.Group>

									<Form.Group className="col-2">
										<Form.Label>Quantity</Form.Label>
										<Form.Control
											type="number"
											name="quantity"
											value={item.quantity}
											onChange={handleItemChange}
										/>
									</Form.Group>

									<Form.Group className="col-2">
										<Form.Label>Unit Price</Form.Label>
										<Form.Control
											type="number"
											name="unitPrice"
											value={item.unitPrice}
											onChange={handleItemChange}
										/>
									</Form.Group>
								</>

								<Button
									className="col23 m-4"
									variant="primary"
									type="button"
									onClick={handleAddItem}>
									Add Item
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
									{itemsList.map((item) => (
										<tr key={item.id}>
											<td>{item.productId}</td>
											<td>{item.productName}</td>
											<td>{item.quantity}</td>
											<td>{item.unitPrice}</td>
											<td>{item.unitPrice * item.quantity}</td>
										</tr>
									))}
								</tbody>
							</Table>
							<div className="d-flex justify-content-end mb-3">
								<Button
									variant="primary"
									type="button"
									onClick={handleAddItemsInvoice}>
									Save Items
								</Button>
							</div>
							<div className="d-flex justify-content-end">
								<Button variant="primary" type="submit">
									Save Invoice
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

export default AddInvoice;