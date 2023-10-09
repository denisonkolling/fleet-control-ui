import React, { useEffect, useState } from 'react';
import tyreService from '../service/tyre.service';
import { Button, Container, Form, Card} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import mileageService from '../service/mileage.service';

const ListMileage = () => {
	const [mileageReadingList, setMileageReadingList] = useState([]);
	const [id, setId] = useState('');

	const [msg, setMsg] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		mileageService
			.getMileageById(id)
			.then((res) => {
				setMileageReadingList(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		// tyreService
		// 	.getTyreReading()
		// 	.then((res) => {
		// 		setTyreReadingList(res.data);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	};

	return (
		<>
			<NavbarSystem />
			<Container className="mt-4 col-md-6">
				<Card>
					<CardHeader className="text-center fs-4">Mileage Control</CardHeader>
					<Container className="p-4">
						<Table>
							<thead>
								<tr>
									<th>#</th>
									<th>Date</th>
									<th>Miles</th>
									<th>Plate</th>
								</tr>
							</thead>
							<tbody>
								{mileageReadingList.map((m) => (
									<tr key={m.id}>
										<td>{m.id}</td>
										<td>{m.readingDate}</td>
										<td>{m.readingMiles}</td>
										<td>{m.vehicle.plate}</td>
									</tr>
								))}
							</tbody>
						</Table>


						
							
							<Form onSubmit={handleSubmit} className=''>
								<Form.Label>
									Vehicle Fleet Number:
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

export default ListMileage;
