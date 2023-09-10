import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AddDriver from '../pages/AddDriver';
import AddVehicle from '../pages/AddVehicle';
import AddTyre from '../pages/AddTyre';

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/register-driver" element={<AddDriver />} />
				<Route exact path="/register-vehicle" element={<AddVehicle />} />
				<Route exact path="/register-tyre" element={<AddTyre />} />
				{/* <Route exact path="signup" element={<Signup />} />
				<Route path="/" element={<Login />} />
				<Route path="*" element={<Login />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesApp;
