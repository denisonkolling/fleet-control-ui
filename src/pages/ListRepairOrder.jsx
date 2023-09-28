import React, { useEffect, useState } from 'react';
import repairOrderService from '../service/repairOrder.service';
import NavbarSystem from '../components/Navbar';
import { Card, CardGroup, Container, ModalTitle } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

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
				<h1>Service Orders List</h1>
					{repairOrderList.map((o) => (
				<CardGroup className='m-2'>
        <Card>
						<tr>
							<CardHeader>Service Order Number: {o.workOrderId}</CardHeader>
							<h6>Vehicle: {o.plate}</h6>
							<span>Date: {o.openDate}</span><br/>
							<span>Service: {o.service.serviceName} U$ {o.service.servicePrice}</span>
              <br/>
							<span>Part: {o.part.partName} U$ {o.part.partPrice}</span>
						</tr>
          </Card>
				</CardGroup>
					))}
			</Container>
		</>
	);
};

export default ListRepairOrder;
