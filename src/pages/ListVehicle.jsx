import React, { useEffect, useState } from 'react';
import vehicleService from '../service/vehicle.service';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import NavbarSystem from '../components/Navbar';

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
			<Container>
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Register Plate</th>
							<th>Driver</th>
							<th>Model</th>
							<th>Year</th>
							<th>Mileage</th>
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
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</>
	);
};

export default ListVehicle;