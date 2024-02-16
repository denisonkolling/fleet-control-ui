import React, { useEffect, useState } from 'react';
import driverService from '../service/driver';
import { Container, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import NavbarSystem from '../components/Navbar';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import { FaRegEdit, FaTrash  } from "react-icons/fa";

const ListDriver = () => {
	const [driverList, setDriverList] = useState([]);

	const [msg, setMsg] = useState('');
	useEffect(() => {
		init();
	}, []);

	const init = () => {
		driverService
			.getAllDriver()
			.then((res) => {
				setDriverList(res.data);
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
									<th>Name</th>
									<th>Birthday</th>
									<th>License ID</th>
									<th>Expiry Date</th>
									<th>Class</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{driverList.map((d) => (
									<tr key={d.id}>
										<td>{d.id}</td>
										<td>
											{d.firstName} {d.lastName}
										</td>
										<td>{moment(d.birthday).format('L')}</td>
										<td>{d.licenseId}</td>
										<td>{moment(d.expiryDate).format('L')}</td>
										<td>{d.licenseClass}</td>
										<td>
											<Link
												to={`/driver-edit/${d.id}`}
												className="mx-1">
												<FaRegEdit />
											</Link>
										<Link
												to={`/driver-edit/${d.id}`}
												className="text-danger mx-2">
												<FaTrash />
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

export default ListDriver;
