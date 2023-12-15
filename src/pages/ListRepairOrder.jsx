import React, { useEffect, useState } from 'react';
import repairOrderService from '../service/repairOrder.service';
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
					{repairOrderList.map((o) => (
						<CardGroup key={o.workOrderId} className="m-2">
							<Card style={{backgroundColor: "#F8F9FA"}}>
								<div>
									<div className="d-flex justify-content-between align-items-baseline fw-normal mb-3 m-2">
										<Card.Title className="">Service Order {o.workOrderId}</Card.Title>
										<h5 className="">{o.plate}</h5>
									</div>
									<div className='m-2'>
									<span>Open Date {moment(o.openDate).format("DD/MM/YYYY HH:mm")}</span>
									<br />
									<span>
										Service {o.service.serviceName} U$ {o.service.servicePrice}
									</span>
									<br />
									<span>
										Part {o.part.partName} U$ {o.part.partPrice}
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
