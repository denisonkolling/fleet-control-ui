import { React, useState } from 'react';
import { Form, Button, Container, Navbar, Card, Table } from 'react-bootstrap';
import invoiceService from '../service/invoice.service';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const AddInvoice = () => {
	const [invoice, setInvoice] = useState({
		number: '',
		date: '',
		issuerId: '',
		buyerId: '',
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
			id: 0,
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

	const handleSubmit = (event) => {
		event.preventDefault();
		invoiceService
			.saveInvoice(invoice)
			.then((res) => {
				setInvoice({
					number: '',
					date: '',
					issuerId: '',
					buyerId: '',
					items: [],
				});
				setItemsList([]);
			})
			.catch((error) => {
				console.log(error);
			});
	};

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
									<Form.Label>Issuer ID</Form.Label>
									<Form.Control
										type="number"
										name="issuerId"
										onChange={handleChange}
										value={invoice.issuerId}
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3 col-md-4" controlId="name">
									<Form.Label>Issuer Name</Form.Label>
									<Form.Control
										type="number"
										name="issuerName"
										onChange={handleChange}
										value={invoice.issuerName}
										readOnly
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3 col-md-1" controlId="name">
									<Form.Label>Buyer ID</Form.Label>
									<Form.Control
										type="number"
										name="buyerId"
										onChange={handleChange}
										value={invoice.buyerId}
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3 col-md-4" controlId="name">
									<Form.Label>Buyer Name</Form.Label>
									<Form.Control
										type="number"
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
									<Form.Group className="col-2">
										<Form.Label>Product ID</Form.Label>
										<Form.Control
											type="number"
											name="productId"
											value={item.productId}
											onChange={handleItemChange}
										/>
									</Form.Group>

									<Form.Group className="col-3">
										<Form.Label>Product Name</Form.Label>
										<Form.Control
											type="text"
											name="productName"
											value={item.productName}
											onChange={handleItemChange}
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
		</>
	);
};

export default AddInvoice;
