import React from 'react';
import NavbarSystem from '../components/Navbar';
import { Card, Container, Badge } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const Home = () => {
	return (
		<>
			<NavbarSystem />
			<Container>
				<Card className="mt-3 col-12">
					<CardHeader className="text-center">
						Welcome to Fleet Control Management System!
					</CardHeader>
					<h4 className='m-2'>
						Tyres Control <Badge bg="secondary">New!</Badge>
					</h4>
					<p className='ms-2'>Check your fleet tyres performance</p>
					<h4 className='m-2'>
						Tip Expenses Control <Badge bg="secondary">New!</Badge>
					</h4>
					<p className='ms-2'>Control your fleet expenses by budget</p>
					<h4 className='m-2'>
						Fuel Control <Badge bg="secondary">New!</Badge>
					</h4>
					<p className='ms-2'>Measure your drivers and vehicle fuel consumption</p>
				</Card>
			</Container>
		</>
	);
};

export default Home;
