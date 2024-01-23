import React, { useEffect, useState } from 'react';
import repairOrderService from '../service/repairOrder';
import NavbarSystem from '../components/Navbar';
import { Card, CardGroup, Container, ModalTitle } from 'react-bootstrap';
import moment from 'moment';

const ListRepairOrder = () => {
	const [repairOrderList, setRepairOrderList] = useState([]);

	const [msg, setMsg] = useState('');
	useEffect(() => {
		init();
	}, []);

	const init = () => {
		repairOrderService
			.getAllRepairOrder()
			.then((res) => {
				setRepairOrderList(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<NavbarSystem />
			<Container>
				<h1>Service Orders</h1>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
						gap: '1rem',
						alignItems: 'flex-start',
					}}>
					{repairOrderList.map((serviceOrder) => (
						<CardGroup key={serviceOrder.id} className="m-2">
							<Card style={{ backgroundColor: '#F8F9FA' }}>
								<div>
									<div className="d-flex justify-content-between align-items-baseline fw-normal mb-3 m-2">
										<Card.Title className="">
											Service Order {serviceOrder.id}
										</Card.Title>
										<h5 className="">{serviceOrder.plate}</h5>
									</div>
									<div className="m-2">
										<span>
											Open Date{' '}
											{moment(serviceOrder.openDate).format('DD/MM/YYYY HH:mm')}
										</span>
										<br />
										<span>
											Service
											{serviceOrder.services.map((services) => (
												<>
													<span>{services.name}</span>
													<span>U$ {services.unitPrice}</span>
												</>
											))}
										</span>
										<br />
										<span>
											Part
											{serviceOrder.parts.map((parts) => (
												<>
													<span>{parts.name}</span>
													<span>U$ {parts.unitPrice}</span>
												</>
											))} 
											</span>
									</div>
								</div>
							</Card>
						</CardGroup>
					))}
				</div>
			</Container>
		</>
	);
};

export default ListRepairOrder;
