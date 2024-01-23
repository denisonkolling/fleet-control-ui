import React, { useEffect, useState } from 'react';
import vehicleService from '../service/vehicle';
import { Container, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import NavbarSystem from '../components/Navbar';
import { Link } from 'react-router-dom';

const ListVehicle = () => {
	const [vehicleList, setVehicleList] = useState([]);

	const [msg, setMsg] = useState('');
	useEffect(() => {
		init();
	}, []);

	const init = () => {
		vehicleService
			.getAllVehicle()
			.then((res) => {
				setVehicleList(res.data);
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
					<CardHeader className="text-center fs-4">Vehicle List</CardHeader>
					<Container className="p-4">
						<Table>
							<thead>
								<tr>
									<th>#</th>
									<th>Register Plate</th>
									<th>Driver</th>
									<th>Model</th>
									<th>Year</th>
									<th>Mileage</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{vehicleList.map((v) => (
									<tr key={v.id}>
										<td>{v.id}</td>
										<td>{v.plate}</td>
										<td>{v.driver}</td>
										<td>{v.model}</td>
										<td>{v.year}</td>
										<td>{v.mileage}</td>
										<td>
											<Link
												to={`/vehicle-edit/${v.id}`}
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

export default ListVehicle;
