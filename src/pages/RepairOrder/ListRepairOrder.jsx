import React, { useEffect, useState } from 'react';
import repairOrderService from '../../service/repairOrder';
import NavbarSystem from '../../components/Navbar';
import { Card, CardGroup, Container, ModalTitle } from 'react-bootstrap';
import moment from 'moment';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaClockRotateLeft, FaRoadBarrier, FaRegClock, FaArrowRightToBracket, FaRoad  } from "react-icons/fa6";




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
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-xl-3 my-2">
							<div className="card bg-info-subtle">
								<div className="card-block m-2">
									<h6 className="m-2 fs-5 fw-bold">Open Orders</h6>
									<div className="d-flex justify-content-between mx-3">
										<h2>
										<FaArrowRightToBracket />
										</h2>
										<h2 className="text-end fs-1">
											<span>26</span>
										</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-xl-3 my-2">
							<div className="card bg-success-subtle ">
								<div className="card-block m-2">
									<h6 className="m-2 fs-5 fw-bold">On Time</h6>
									<div className="d-flex justify-content-between mx-3">
										<h2>
										<FaRoad />
										</h2>
										<h2 className="text-end fs-1">
											<span>19</span>
										</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-xl-3">
							<div className="card bg-warning-subtle my-2">
								<div className="card-block m-2">
									<h6 className="m-2 fs-5 fw-bold">Delaied</h6>
									<div className="d-flex justify-content-between mx-3">
										<h2>
										<FaClockRotateLeft />
										</h2>
										<h2 className="text-end fs-1">
											<span>5</span>
										</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-xl-3">
							<div className="card bg-danger-subtle my-2">
								<div className="card-block m-2">
									<h6 className="m-2 fs-5 fw-bold">Blocked</h6>
									<div className="d-flex justify-content-between mx-3">
										<h2>
										<FaRoadBarrier />
										</h2>
										<h2 className="text-end fs-1">
											<span>2</span>
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(305px, 1fr))',
						gap: '1rem',
						alignItems: 'flex-start',
					}}>
					{repairOrderList.map((serviceOrder) => (
						<CardGroup key={serviceOrder.id} className="m-2">
							<Card style={{ backgroundColor: '#F8F9FA' }}>
								<div>
									<div className="d-flex justify-content-between align-items-baseline fw-normal m-3">
										<Card.Title className="">
											Service Order {serviceOrder.id}
										</Card.Title>
										<h5 className="">{serviceOrder.plate}</h5>
									</div>
									<div className="mx-3">
										<div className=" d-grid">
											<span className='my-2 mx-2'>
												<FaRegClock />
												<span>
													&emsp; Open Date{' '}
													{moment(serviceOrder.openDate).format(
														'DD/MM/YYYY HH:mm'
													)}
												</span>
											</span>
											<span className="btn btn-sm btn-success disabled">
												On time
											</span>
										</div>

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
										<div className="text-end">
											<p>
												<Link to={`/driver-edit/`} className="mx-1">
													<FaRegEdit />
												</Link>
												<Link to={`/driver-edit/`} className="text-danger mx-2">
													<FaTrash />
												</Link>
											</p>
										</div>
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
