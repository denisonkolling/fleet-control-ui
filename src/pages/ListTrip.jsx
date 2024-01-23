import React, { useEffect, useState } from 'react';
import tripService from '../service/trip';
import { Container, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import NavbarSystem from '../components/Navbar';
import { Link } from 'react-router-dom';

const ListTrip = () => {
	const [tripList, setTripList] = useState([]);

	const [msg, setMsg] = useState('');
	useEffect(() => {
		init();
	}, []);

	const init = () => {
		tripService
			.getAllTrip()
			.then((res) => {
				setTripList(res.data);
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
					<CardHeader className="text-center fs-4">Trip List</CardHeader>
					<Container className="p-4">
						<Table>
							<thead>
								<tr>
									<th>#</th>
									<th>Vehicle</th>
									<th>Origin</th>
									<th>Destination</th>
									<th>Distance</th>
									<th>Invoice</th>
									<th>Total Expenses</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{tripList.map((t) => (
									<tr key={t.id}>
										<td>{t.id}</td>
										<td>{t.vehicle}</td>
										<td>{t.origin}</td>
										<td>{t.destination}</td>
										<td>{t.distance}</td>
										<td>{t.invoice}</td>
										<td>{t.totalExpenses}</td>
										<td>
											<Link
												to={`/trip-edit/${t.id}`}
												className="btn btn-sm btn-primary px-4 m-1">
												Edit
											</Link>
										</td>
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

export default ListTrip;
