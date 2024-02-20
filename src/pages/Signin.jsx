import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import {
	FaFacebook,
	FaGoogle,
	FaTwitter,
	FaGithub,
	FaTruck,
} from 'react-icons/fa';

const Signin = () => {

	const { login, checkEmail, checkPassword } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const handleLogin = () => {
		if (!checkEmail(email)) {
			setMessage('Insert a valid email');
			return;
		}

		const response = login(email, password);

		if (response) {
			setMessage(response);
			return;
		}

		navigate('/home');
	};

	return (
		<>
			<section className="">
				<div
					className="px-4 py-5 px-md-5 text-center text-lg-start vh-100"
					style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
					<div className="container mt-5">
						<div className="row gx-lg-5 align-items-center">
							<div className="col-lg-6 mb-5 mb-lg-0">
								<div className="d-flex">
									<FaTruck size={50} />
									<h1>&nbsp;Fleet Control</h1>
								</div>

								<h1 className="mb-5 display-3 fw-bold ls-tight">
									The best way
									<br />
									<span className="text-primary">to control your fleet!</span>
								</h1>
								<h4 className='fw-light' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
									Manage logistics operations efficiently! Access your
									information from any device and track it in real time
									operation indicators.
								</h4>
							</div>

							<div className="col-lg-6 mb-5 mb-lg-0">
								<div className="card">
									<div className="card-body py-5 px-md-5">
										<form onSubmit={handleLogin}>
											<div className="row">
												<div className="mb-4">
													<div className="text-center">
														<div className="d-flex justify-content-center">
															<h1>Login</h1>
														</div>
													</div>
													<p className="fw-lighter fs-4 text-center">
														To access your account log in
													</p>
												</div>
											</div>

											<div className="form-outline mb-4">
												<input
													type="email"
													id="form3Example3"
													name="email"
													className="form-control"
													value={email}
													onChange={(e) => [setEmail(e.target.value), setMessage('')]}
													placeholder="Email"
												/>
											</div>

											<div className="form-outline mb-4">
												<input
													type="password"
													name="password"
													className="form-control"
													value={password}
													onChange={(e) => [setPassword(e.target.value), setMessage('')]}
													placeholder="Password"
												/>
											</div>
											<div className="d-flex">
												<button
													type="submit"
													className="btn btn-primary btn-block mb-4 w-100 mt-3">
													Login
												</button>
											</div>
											<div>
											<p>{message}</p>
											</div>
											<div className="text-center">
												<p>
													Don't have a registration?
													<a> Register.</a>
												</p>
												<button
													type="button"
													className="btn btn-link btn-floating mx-1">
													<FaFacebook
														className="bi me-2"
														width="30"
														height="30"></FaFacebook>
												</button>

												<button
													type="button"
													className="btn btn-link btn-floating mx-1">
													<FaGoogle
														className="bi me-2"
														width="30"
														height="30"></FaGoogle>
												</button>

												<button
													type="button"
													className="btn btn-link btn-floating mx-1">
													<FaTwitter
														className="bi me-2"
														width="30"
														height="30"></FaTwitter>
												</button>

												<button
													type="button"
													className="btn btn-link btn-floating mx-1">
													<FaGithub
														className="bi me-2"
														width="30"
														height="30"></FaGithub>
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Signin;
