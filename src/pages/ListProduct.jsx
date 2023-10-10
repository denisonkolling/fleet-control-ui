import React, { useEffect, useState } from 'react';
import productService from '../service/product.service';
import { Container, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import NavbarSystem from '../components/Navbar';

const ListProducts = () => {
	const [productList, setProductList] = useState([]);

	const [msg, setMsg] = useState('');
	useEffect(() => {
		init();
	}, []);

	const init = () => {
		productService
			.getAllProduct()
			.then((res) => {
				setProductList(res.data);
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
					<CardHeader className="text-center fs-4">Mileage Control</CardHeader>
					<Container className="p-4">
						<Table>
							<thead>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Unit Value</th>
									<th>Weight</th>
									<th>Available</th>
								</tr>
							</thead>
							<tbody>
								{productList.map((product) => (
									<tr key={product.id}>
										<td>{product.id}</td>
										<td>{product.name}</td>
										<td>{product.unitValue}</td>
										<td>{product.weight}</td>
										<td>{product.available ? 'Yes' : 'No'}</td>
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

export default ListProducts;
