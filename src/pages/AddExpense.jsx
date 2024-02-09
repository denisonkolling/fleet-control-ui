import { React, useState, useEffect } from 'react';
import {
	Form,
	Button,
	Container,
	Navbar,
	Card,
	Dropdown,
} from 'react-bootstrap';
import expenseService from '../service/expense';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const AddExpense = () => {
	const [expense, setExpense] = useState({
		tripId: '',
		description: '',
		category: '',
		value: '',
		expenseDate: '',
	});

	const [options, setOptions] = useState([]);

	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		expenseService
			.getAllCategories()
			.then((res) => {
				setOptions(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const clearMessageError = (e) => {
		setMessage('');
		setError('');
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setExpense({ ...expense, [e.target.name]: value });
	};

	const handleCategorySelect = (selectedCategory) => {
		setExpense({ ...expense, category: selectedCategory });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		expenseService
			.saveExpense(expense)
			.then((res) => {
				setExpense({
					tripId: '',
					description: '',
					category: '',
					value: '',
					expenseDate: '',
				});
				setMessage('Expense added successfully!');
			})
			.catch((error) => {
				setError('Something went wrong on server!');
				console.log(error);
			});
	};

	return (
		<>
			<NavbarSystem />
			<Container className="mt-4 col-md-4">
				<Card>
					<CardHeader className="text-center fs-4">
						Expense Registration
					</CardHeader>
					<Container className="p-4">
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Date</Form.Label>
								<Form.Control
									type="date"
									name="expenseDate"
									onChange={handleChange}
									value={expense.expenseDate}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Trip Number</Form.Label>
								<Form.Control
									type="number"
									name="tripId"
									onChange={handleChange}
									value={expense.tripId}
									onBlur={clearMessageError}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Description</Form.Label>
								<Form.Control
									type="text"
									name="description"
									onChange={handleChange}
									value={expense.description}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Category</Form.Label>
								<Dropdown>
									<Dropdown.Toggle id="dropdown-basic" className="col-4">
										{' '}
										{expense.category || 'Selecionar'}
									</Dropdown.Toggle>
									<Dropdown.Menu>
										{options.map((option, index) => (
											<Dropdown.Item
												key={index}
												onClick={() => handleCategorySelect(option)}>
												{option}
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>
							</Form.Group>

							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Value</Form.Label>
								<Form.Control
									type="number"
									name="value"
									onChange={handleChange}
									value={expense.value}
									required
								/>
							</Form.Group>

							<div className="d-flex justify-content-end">
								<Button variant="primary" type="submit">
									Save
								</Button>
							</div>
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

export default AddExpense;
