import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AddDriver from '../pages/AddDriver';
import AddVehicle from '../pages/AddVehicle';
import AddTyre from '../pages/AddTyre';
import AddCustomer from '../pages/AddCustomer';
import AddInvoice from '../pages/AddInvoice';
import ListRepairOrder from '../pages/RepairOrder/ListRepairOrder';
import ListVehicle from '../pages/ListVehicle';
import ListExpense from '../pages/ListExpense';
import ListTyre from '../pages/ListTyre';
import ListInvoice from '../pages/ListInvoice';
import ListCustomer from '../pages/ListCustomer';
import ListTyreReading from '../pages/ListTyreReading';
import ListMileage from '../pages/ListMileage';
import ListProducts from '../pages/ListProduct';
import ListDriver from '../pages/ListDriver';
import AddProduct from '../pages/AddProduct';
import EditVehicle from '../pages/EditVehicle';
import EditTyre from '../pages/EditTyre';
import FindInvoice from '../pages/FindInvoice';
import FindDriver from '../pages/FindDriver';
import EditDriver from '../pages/EditDriver';
import AddDrivingHours from '../pages/AddDrivingHours';
import AddServiceOrder from '../pages/AddServiceOrder';
import AddTrip from '../pages/AddTrip';
import ListTrip from '../pages/ListTrip';
import AddExpense from '../pages/AddExpense';
import AddTyreReading from '../pages/AddTyreReading';
import FindExpense from '../pages/FindExpense';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import VehiclesMap from '../pages/VehiclesMap';
import { Fragment } from 'react';

const Private = ({ Page }) => {
	const { isLogged } = useState();
	return !!isLogged ? <Page /> : <Signin />;
};

const RoutesApp = () => {
	return (
		<BrowserRouter>
		<Fragment>
			<Routes>
				<Route path="/" element={<Signin />} />
				<Route path="*" element={<Signin />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/home" element={<Private Page={Home} />} />
				<Route exact path="/register-driver" element={<Private Page={AddDriver} />} />
				<Route exact path="/register-customer" element={<Private Page={AddCustomer} />} />
				<Route exact path="/register-vehicle" element={<Private Page={AddVehicle} />} />
				<Route exact path="/register-tyre" element={<Private Page={AddTyre} />} />
				<Route exact path="/register-invoice" element={<Private Page={AddInvoice} />} />
				<Route exact path="/register-product" element={<Private Page={AddProduct} />} />
				<Route exact path="/register-driving-hours" element={<Private Page={AddDrivingHours} />} />
				<Route exact path="/register-service-order" element={<Private Page={AddServiceOrder} />} />
				<Route exact path="/register-expense" element={<Private Page={AddExpense} />} />
				<Route exact path="/register-trip" element={<Private Page={AddTrip} />} />
				<Route exact path="/register-tyre-reading" element={<Private Page={AddTyreReading} />} />
				<Route exact path="/vehicle-service-order" element={<Private Page={ListRepairOrder} />} />
				<Route exact path="/vehicle-list" element={<Private Page={ListVehicle} />} />
				<Route exact path="/vehicle-edit/:id" element={<Private Page={EditVehicle} />} />
				<Route exact path="/driver-edit/:id" element={<Private Page={EditDriver} />} />
				<Route exact path="/tyre-edit/:id" element={<Private Page={EditTyre} />} />
				<Route exact path="/expense-list" element={<Private Page={ListExpense} />} />
				<Route exact path="/tyre-list" element={<Private Page={ListTyre} />} />
				<Route exact path="/tyre-reading" element={<Private Page={ListTyreReading} />} />
				<Route exact path="/invoice-list" element={<Private Page={ListInvoice} />} />
				<Route exact path="/customer-list" element={<Private Page={ListCustomer} />} />
				<Route exact path="/vehicle-mileage" element={<Private Page={ListMileage} />} />
				<Route exact path="/product-list" element={<Private Page={ListProducts} />} />
				<Route exact path="/driver-list" element={<Private Page={ListDriver} />} />
				<Route exact path="/trip-list" element={<Private Page={ListTrip} />} />
				<Route exact path="/find-driver" element={<Private Page={FindDriver} />} />
				<Route exact path="/find-expense" element={<Private Page={FindExpense} />} />
				<Route exact path="/invoice-find" element={<Private Page={FindInvoice} />} />
				<Route exact path="/vehicles-map" element={<Private Page={VehiclesMap} />} />
			</Routes>
			</Fragment>
		</BrowserRouter>
	);
};

export default RoutesApp;
