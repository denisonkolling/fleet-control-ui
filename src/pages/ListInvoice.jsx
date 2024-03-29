import React, { useEffect, useState } from 'react';
import invoiceService from '../service/invoice';
import NavbarSystem from '../components/Navbar';
import { Card, CardGroup, Container, ModalTitle } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Table from 'react-bootstrap/Table';

const ListInvoice = () => {
	const [invoice, setInvoiceList] = useState([]);

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		invoiceService
			.getAllInvoice()
			.then((res) => {
				setInvoiceList(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	console.log(invoice);

	return (
		<>
			<NavbarSystem />
			<Container className="mt-4 col-md-6">
				<Card>
					<CardHeader className="text-center fs-4">Invoice List</CardHeader>
					<Container className="p-4">
						<Table>
							<thead>
								<tr>
									<th>#</th>
									<th>Number</th>
									<th>Date</th>
									<th>Issuer</th>
									<th>Buyer</th>
									<th>Total Value</th>
								</tr>
							</thead>
							<tbody>
								{invoice.map((d) => (
									<tr key={d.id}>
										<td>{d.id}</td>
										<td>{d.number}</td>
										<td>{d.date}</td>
										<td>{d.issuer.firstName}</td>
										<td>{d.buyer.firstName}</td>
										<td>{d.invoiceTotalValue}</td>
									</tr>
								))}
							</tbody>
						</Table>
					</Container>
				</Card>
			</Container>
		</>
	);
};

export default ListInvoice;
