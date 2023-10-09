import React, { useEffect, useState } from 'react';
import tyreService from '../service/tyre.service';
import { Container, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const ListTyre = () => {
	const [tyreList, setTyreList] = useState([]);

	const [msg, setMsg] = useState('');

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		tyreService
			.getAllTyre()
			.then((res) => {
				setTyreList(res.data);
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
					<CardHeader className="text-center fs-4">Tyres List</CardHeader>
					<Container className="p-4">
						<Table>
							<thead>
								<tr>
									<th>#</th>
									<th>Size</th>
									<th>Manufacturer</th>
									<th>Model</th>
									<th>Serial</th>
									<th>Position</th>
									<th>Vehicle</th>
								</tr>
							</thead>
							<tbody>
								{tyreList.map((t) => (
									<tr key={t.id}>
										<td>{t.id}</td>
										<td>{t.size}</td>
										<td>{t.manufacturer}</td>
										<td>{t.model}</td>
										<td>{t.serial}</td>
										<td>{t.position}</td>
										<td>{t.vehicle}</td>
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

export default ListTyre;
