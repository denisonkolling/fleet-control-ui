import React from 'react';
import NavbarSystem from '../components/Navbar';
import { Card, Container } from 'react-bootstrap';

const Home = () => {
	return (
		<>
			<NavbarSystem />
			<Container>
				<Card>
					<h1>Bem vindo!</h1>
				</Card>
			</Container>
		</>
	);
};

export default Home;
