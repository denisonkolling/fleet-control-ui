import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import invoiceService from '../service/invoice.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const FindInvoice = () => {
	const [invoice, setInvoice] = useState({
		id: '',
		number: '',
		date: '',
		items: [],
		invoiceTotalValue: '',
		issuer: {
			id: '',
			firstName: '',
			lastName: '',
		},
		buyer: {
			id: '',
			firstName: '',
			lastName: '',
		},
	});

	const [number, setNumber] = useState('');

	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		invoiceService
			.getInvoiceByNumber(number)
			.then((res) => {
				setInvoice(res.data);
				setError('');
			})
			.catch((error) => {
				setError('Error: ' + error.message);
			});
	};

	return (
		<>
			<NavbarSystem />
			<Container className="mt-4">
				<Card>
					<CardHeader className="text-center fs-4">Find Invoice</CardHeader>
					<Container className="p-4">
						<Form onSubmit={handleSubmit}>
							<div className="d-flex justify-content-between">
								<Form.Group className="mb-3 col-md-5" controlId="name">
									<Form.Label>Number</Form.Label>
									<Form.Control
										type="number"
										name="number"
										value={invoice.number}
										readOnly
									/>
								</Form.Group>
								<Form.Group className="mb-3 col-md-5" controlId="name">
									<Form.Label>Date</Form.Label>
									<Form.Control
										type="date"
										name="date"
										value={invoice.date}
										readOnly
									/>
								</Form.Group>
							</div>

							<div className="d-flex justify-content-between">
								<Form.Group className="mb-3 col-md-1" controlId="name">
									<FontAwesomeIcon icon={faMagnifyingGlass} />
									<Form.Label>&nbsp;Issuer ID</Form.Label>
									<Form.Control
										type="number"
										name="id"
										value={invoice.issuer.id}
										readOnly
									/>
								</Form.Group>

								<Form.Group className="mb-3 col-md-4" controlId="name">
									<Form.Label>Issuer Name</Form.Label>
									<Form.Control
										type="text"
										name="firstName"
										value={invoice.issuer.firstName}
										readOnly
									/>
								</Form.Group>

								<Form.Group className="mb-3 col-md-1" controlId="name">
									<FontAwesomeIcon icon={faMagnifyingGlass} />
									<Form.Label>&nbsp;Buyer ID</Form.Label>
									<Form.Control
										type="number"
										name="invoiceBuyerId"
										value={invoice.buyer.id}
										readOnly
									/>
								</Form.Group>

								<Form.Group className="mb-3 col-md-4" controlId="name">
									<Form.Label>Buyer Name</Form.Label>
									<Form.Control
										type="text"
										name="firstName"
										value={invoice.buyer.firstName}
										readOnly
									/>
								</Form.Group>
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
									{invoice.items?.map((item) => (
										<tr key={item.id}>
											<td>{item.product.id}</td>
											<td>{item.product.name}</td>
											<td>{item.quantity}</td>
											<td>{item.unitPrice}</td>
											<td>{item.unitPrice * item.quantity}</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Form>
						<Form onSubmit={handleSubmit} className="">
							<Form.Label>
								Invoice number:
								<Form.Control
									type="number"
									value={number}
									onChange={(event) => setNumber(event.target.value)}
								/>
							</Form.Label>
							<Button variant="primary" type="submit" className="ms-2">
								Search
							</Button>
						</Form>
					</Container>
				</Card>
			</Container>
			{message && <p className="fs-4 text-center text-success">{message}</p>}
			{error ? <p className="fs-4 text-center text-danger">{error}</p> : null}
		</>
	);
};

export default FindInvoice;
