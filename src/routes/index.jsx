import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AddDriver from '../pages/AddDriver';
import AddVehicle from '../pages/AddVehicle';
import AddTyre from '../pages/AddTyre';
import AddCustomer from '../pages/AddCustomer';
import ListRepairOrder from '../pages/ListRepairOrder';
import ListVehicle from '../pages/ListVehicle';
import ListExpense from '../pages/ListExpense';

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
			  <Route path="/" element={<Home />} />
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/register-driver" element={<AddDriver />} />
				<Route exact path="/register-customer" element={<AddCustomer />} />
				<Route exact path="/register-vehicle" element={<AddVehicle />} />
				<Route exact path="/register-tyre" element={<AddTyre />} />
				<Route exact path="/vehicle-service-order" element={<ListRepairOrder />} />
				<Route exact path="/vehicle-list" element={<ListVehicle />} />
				<Route exact path="/expense-list" element={<ListExpense />} />
				{/* <Route exact path="signup" element={<Signup />} />
				<Route path="/" element={<Login />} />
				<Route path="*" element={<Login />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesApp;
