import { React, useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import productService from '../service/product';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const AddProduct = () => {
	const [product, setProduct] = useState({
		name: '',
		unitValue: '',
		weight: '',
		available: false,
	});

	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		productService
			.saveProduct(product)
			.then((res) => {
				console.log(res);
				setProduct({
					name: '',
					unitValue: '',
					weight: '',
					available: false,
				});
				setMessage('Product added successfully!');
			})
			.catch((error) => {
				setError('Something went wrong on server!');
				console.log(error);
			});
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setProduct((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;
		setProduct((prevState) => ({
			...prevState,
			[name]: checked,
		}));
	};

	return (
		<>
			<NavbarSystem />
			<Container className="mt-4 col-md-4">
				<Card>
					<CardHeader className="text-center fs-4">
						Product Registration
					</CardHeader>
					<Container className="p-4">
						<Form onSubmit={handleSubmit}>

							<Form.Group className="mb-3" controlId="formBasicName">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									name="name"
									value={product.name}
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicUnitValue">
								<Form.Label>Unit Value</Form.Label>
								<Form.Control
									type="number"
									name="unitValue"
									value={product.unitValue}
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicWeight">
								<Form.Label>Weight</Form.Label>
								<Form.Control
									type="number"
									name="weight"
									value={product.weight}
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicAvailable">
								<Form.Check
									type="checkbox"
									label="Available"
									name="available"
									checked={product.available}
									onChange={handleCheckboxChange}
								/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Container>
				</Card>
				{message && (
					<p className="fs-6 mt-2 alert alert-success">{message}</p>
				)}
				{error && <p className="fs-6 mt-2 alert alert-danger">{error}</p>}
			</Container>
		</>
	);
};

export default AddProduct;
