import React, { useEffect, useState } from 'react';
import NavbarSystem from '../components/Navbar';
import { Card, Container, Badge, Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Modal from '../components/Modal';
import AreaChart from '../components/Charts/AreaChart';
import BarChart from '../components/Charts/BarChart';
import GeoChart from '../components/Charts/GeoChart';
import DonutChart from '../components/Charts/DonutChart';
import { GiCarWheel, GiMoneyStack, GiFuelTank } from 'react-icons/gi';
import { BsFillFuelPumpFill, BsCashStack } from 'react-icons/bs';

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
					<Container className="d-flex column m-4">
						<h4 className="m-2 text-center">
							Tyres Control
							<Badge bg="secondary" className="m-2">
								<GiCarWheel /> New!
							</Badge>
						</h4>
						<p className="m-2 text-center">
							Check your fleet tyres performance
						</p>
						<h4 className="m-2 text-center">
							Trip Expenses
							<Badge bg="secondary" className="m-2">
								<BsCashStack /> New!
							</Badge>
						</h4>
						<p className="m-2 text-center">
							Control your fleet expenses by budget
						</p>
						<h4 className="m-2 text-center">
							Fuel Control{' '}
							<Badge bg="secondary" className="m-2">
								<BsFillFuelPumpFill /> New!
							</Badge>
						</h4>
						<p className="m-2 text-center">
							Measure your drivers and vehicle fuel consumption
						</p>
					</Container>

					<Container>
						<div className="d-flex flex-wrap">
							<Container className="col-6">
								<h3>Projected Cash Flow</h3>
								<AreaChart />
							</Container>
							<Container className="col-6">
								<h3>Fuel Stock</h3>
								<BarChart />
							</Container>
						</div>
					</Container>

					<Container>
						<div className="d-flex flex-wrap">
							<Container className="col-6">
								<h3>Fleet Location</h3>
								<GeoChart />
							</Container>
							<Container className="col-6">
								<h3>Fleet Status</h3>
								<DonutChart />
							</Container>
						</div>
					</Container>
				</Card>

				<Button onClick={() => handleOpenModal()} className="my-4">
					Modal Example
				</Button>
				<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
					<>
						<Container>
							<h1 className='text-center mb-0'>Fleet Location</h1>
							<GeoChart />
						</Container>
					</>
				</Modal>
			</Container>
		</>
	);
};

export default Home;
