import React, { useEffect, useState } from 'react';
import NavbarSystem from '../components/Navbar';
import { Card, Container, Badge, Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Modal from '../components/Modal';

const Home = () => {
	const [modalOpened, setModalOpened] = useState(false);
	const [productId, setProductId] = useState(null);

	function handleOpenModal() {
		setModalOpened(true);
	}

	return (
		<>
			<NavbarSystem />
			<Container>
				<Card className="mt-3 col-12">
					<CardHeader className="text-center">
						Welcome to Fleet Control Management System!
					</CardHeader>
					<h4 className="m-2">
						Tyres Control <Badge bg="secondary">New!</Badge>
					</h4>
					<p className="ms-2">Check your fleet tyres performance</p>
					<h4 className="m-2">
						Tip Expenses Control <Badge bg="secondary">New!</Badge>
					</h4>
					<p className="ms-2">Control your fleet expenses by budget</p>
					<h4 className="m-2">
						Fuel Control <Badge bg="secondary">New!</Badge>
					</h4>
					<p className="ms-2">
						Measure your drivers and vehicle fuel consumption
					</p>
				</Card>
				<Button onClick={() => handleOpenModal()}>Modal</Button>
				<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
					<>
						<h5>Modal Text</h5>
					</>
				</Modal>
			</Container>
		</>
	);
};

export default Home;
