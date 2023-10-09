import { React, useState } from 'react';
import { Form, Button, Container, Navbar, Card } from 'react-bootstrap';
import invoiceService from '../service/invoice.service';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const AddInvoice = () => {
	const [invoice, setInvoice] = useState({
		number: '',
		date: '',
		issuer: '',
		buyer: '',
		items: [],
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setInvoice({ ...invoice, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		invoiceService
			.saveInvoice(invoice)
			.then((res) => {
				setInvoice({
					number: '',
					date: '',
					issuer: '',
					buyer: '',
					items: [],
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<NavbarSystem />
			//TODO:Implementar Formulário de inclusão de Invoice
		</>
	);
};

export default AddInvoice;
