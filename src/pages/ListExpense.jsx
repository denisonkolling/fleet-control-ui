import React, { useEffect, useState } from 'react';
import expenseService from '../service/expense.service';
import { Container, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const ListExpense = () => {
	const [expenseList, setExpenseList] = useState([]);

	const [msg, setMsg] = useState('');
	
	useEffect(() => {
		init();
	}, []);

	const init = () => {
		expenseService
			.getAllExpense()
			.then((res) => {
				setExpenseList(res.data);
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
					<CardHeader className="text-center fs-4">Expense List</CardHeader>
					<Container className="p-4">
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Description</th>
							<th>Category</th>
							<th>Value</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{expenseList.map((e) => (
							<tr key={e.id}>
								<td>{e.id}</td>
								<td>{e.description}</td>
								<td>{e.category}</td>
								<td>{e.value}</td>
								<td>{e.date}</td>
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

export default ListExpense;