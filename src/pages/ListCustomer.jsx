import React, { useEffect, useState } from 'react';
import customerService from '../service/customer.service';
import { Button, Container, Form, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const ListCustomer = () => {
	const [customerList, setCustomerList] = useState([]);

	const [msg, setMsg] = useState('');

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		customerService
			.getAllCustomer()
			.then((res) => {
				setCustomerList(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<NavbarSystem />
			<Container className="mt-4 col-md-6">
				<Card>
					<CardHeader className="text-center fs-4">Customer List</CardHeader>
					<Container className="p-4">
						<Table>
							<thead>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Email</th>
									<th>Phone</th>
									<th>City</th>
									<th>Country</th>
								</tr>
							</thead>
							<tbody>
								{customerList.map((c) => (
									<tr key={c.id}>
										<td>{c.id}</td>
										<td>{c.firstName}</td>
										<td>{c.email}</td>
										<td>{c.phone}</td>
										<td>{c.address.city}</td>
										<td>{c.address.country}</td>
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

export default ListCustomer;
