import React, { useEffect, useState } from 'react';
import tyreService from '../service/tyre';
import { Button, Container, Form, Card} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import moment from 'moment';

const ListTyreReading = () => {
	const [tyreReadingList, setTyreReadingList] = useState([]);
	const [id, setId] = useState('');

	const [msg, setMsg] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		tyreService
			.getTyreReading(id)
			.then((res) => {
				setTyreReadingList(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		tyreService
			.getTyreReading()
			.then((res) => {
				setTyreReadingList(res.data);
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
					<CardHeader className="text-center fs-4">Tyre Reading</CardHeader>
					<Container className="p-4">
						<Table>
							<thead>
								<tr>
									<th>#</th>
									<th>Date</th>
									<th>Inside</th>
									<th>Midle</th>
									<th>Outside</th>
								</tr>
							</thead>
							<tbody>
								{tyreReadingList.map((r) => (
									<tr key={r.id}>
										<td>{r.id}</td>
										<td>{moment(r.readingDate).format('DD/MM/YYYY')}</td>
										<td>{r.insideTread} mm</td>
										<td>{r.midleTread} mm</td>
										<td>{r.outsideTread} mm</td>
									</tr>
								))}
							</tbody>
						</Table>


						
							
							<Form onSubmit={handleSubmit} className=''>
								<Form.Label>
									Tyre ID
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

export default ListTyreReading;
