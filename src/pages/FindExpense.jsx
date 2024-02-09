import React, { useState } from 'react';
import { Button, Container, Form, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import expenseService from '../service/expense';
import moment from 'moment';

const FindExpense = () => {
	const [expensesList, setExpensesList] = useState([]);
	const [id, setId] = useState('');

	const [msg, setMsg] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		expenseService
			.getAllExpenseByTripId(id)
			.then((res) => {
				setExpensesList(res.data);
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
					<CardHeader className="text-center fs-4">Expenses by Trip</CardHeader>
					<Container className="p-4">
						<Table>
							<thead>
								<tr>
									<th>#</th>
									<th>Date</th>
									<th>Description</th>
									<th>Category</th>
									<th>Amount</th>
								</tr>
							</thead>
							<tbody>
								{expensesList.map((e) => (
									<tr key={e.id}>
										<td>{e.id}</td>
										<td>{moment(e.expenseDate).format('DD/MM/YYYY')}</td>
										<td>{e.description}</td>
										<td>{e.category}</td>
										<td >$ {e.value.toFixed(2)}</td>
									</tr>
								))}
								<tr>
									<td colSpan="4" className="text-end fw-semibold">
										Total
									</td>
									<td className="text-start fw-semibold">
										${' '}
										{expensesList.reduce((total, e) => total + e.value, 0).toFixed(2)}
									</td>
								</tr>
							</tbody>
						</Table>

						<Form onSubmit={handleSubmit} className="">
							<Form.Label>
								Trip Number:
								<Form.Control
									type="number"
									value={id}
									onChange={(event) => setId(event.target.value)}
								/>
							</Form.Label>
							<Button variant="primary" type="submit" className="ms-2">
								Search
							</Button>
						</Form>
					</Container>
				</Card>
			</Container>
		</>
	);
};

export default FindExpense;
