import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Map from '../components/Map';

const VehiclesMap = () => {
	return (
		<>
			<NavbarSystem />
			<Container className="mt-4">
				<Card>
					<div style={{ height: '50vh' }}>
						<Map />
					</div>
				</Card>
			</Container>
		</>
	);
};

export default VehiclesMap;
