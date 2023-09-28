import React from 'react';
import NavbarSystem from '../components/Navbar';
import { Card, Container, Badge } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const Home = () => {
	return (
		<>
			<NavbarSystem />
			<Container>
				<Card className="mt-3 col-4">
					<CardHeader className="text-center">
						Welcome to Fleet Control Management System!
					</CardHeader>
					<h4 className='m-2'>
						Tyres Control <Badge bg="secondary">New</Badge>
					</h4>
					<h4 className='m-2'>
						Tip Expenses Control <Badge bg="secondary">New</Badge>
					</h4>
					<h4 className='m-2'>
						Fuel Control <Badge bg="secondary">New</Badge>
					</h4>
				</Card>
			</Container>
		</>
	);
};

export default Home;
