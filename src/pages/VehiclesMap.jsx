import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import NavbarSystem from '../components/Navbar';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Map from '../components/Map';

const data = [
	{
		vehicle: 'Volvo FH',
		plate: 'ABC-123',
		start: 'Florianópolis',
		destination: 'Chapecó',
		driver: 'Marcos Silva',
		status: 'In Transit',
		customer: 'Tozzo Distribuidora',
		speed: '73',
		ignition: 'On',
	},
	{
		vehicle: 'Volvo FH',
		plate: 'ABC-123',
		start: 'Florianópolis',
		destination: 'Chapecó',
		driver: 'Marcos Silva',
		status: 'In Transit',
		customer: 'Tozzo Distribuidora',
		speed: '73',
		ignition: 'On',
	},
	{
		vehicle: 'Volvo FH',
		plate: 'DEF-456',
		start: 'São Paulo',
		destination: 'Rio de Janeiro',
		driver: 'Ana Souza',
		status: 'In Transit',
		customer: 'Supermercado XYZ',
		speed: '65',
		ignition: 'Off',
},
{
		vehicle: 'Scania R450',
		plate: 'GHI-789',
		start: 'Porto Alegre',
		destination: 'Curitiba',
		driver: 'José Santos',
		status: 'Stopped',
		customer: 'Indústria ABC',
		speed: '0',
		ignition: 'Off',
}
];

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
				{data.map((t)=>(
				<Card className="my-2 bg-body-secondary">
					<div className="d-flex justify-content-between">
						<div className="flex-column p-2">
							<p className='mb-0 fw-bold fs-5'>{t.plate}</p>
							<span className='fw-light fs-6'>{t.vehicle}</span>
						</div>
						<div className="flex-column p-2">
							<p className='mb-0 fs-5 fw-bold'>{t.start}</p>
							<span>Start</span>
						</div>
						<div className="flex-column p-2">
						<p className='mb-0 fs-5 fw-bold'>{t.destination}</p>
							<span>Destination</span>
						</div>
						<div className="flex-column p-2">
						<p className='mb-0 fs-5 fw-bold'>{t.driver}</p>
							<span>Driver</span>
						</div>
						<div className="flex-column p-2">
							<p className="mt-2 btn btn-success">{t.status}</p>
						</div>
						<div className="flex-column p-2 ">
						<p className='mb-0  fs-5 fw-bold'>{t.customer}</p>
							<span>Customer</span>
						</div>
						<div className="flex-column p-2">
						<p className='mb-0 fs-5 fw-bold'>{t.speed} Km/h</p>
							<span>Velocidade</span>
						</div>
						<div className="flex-column p-2">
						<p className='mb-0 fs-5 fw-bold'>{t.ignition}</p>
							<span>Ignition</span>
						</div>
					</div>
				</Card>
				))}
			</Container>
		</>
	);
};

export default VehiclesMap;
