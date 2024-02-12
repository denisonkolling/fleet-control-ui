import React, { useState } from 'react';
import {
	FaFacebook,
	FaGoogle,
	FaTwitter,
	FaGithub,
	FaTruck,
} from 'react-icons/fa';

const Login = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		subscribe: false,
	});

	const handleInputChange = (event) => {
		const { name, value, type, checked } = event.target;
		const newValue = type === 'checkbox' ? checked : value;

		setFormData({
			...formData,
			[name]: newValue,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Lógica de envio do formulário para o servidor.
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
									A melhor maneira
									<br />
									<span className="text-primary">de controlar sua frota!</span>
								</h1>
								<p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
									Realize a gestão da operação logística de forma eficiente!
									Acesse suas informações de qualquer dispositivo e acompanhe em
									tempo real os indicadores da operação.
								</p>
							</div>

							<div className="col-lg-6 mb-5 mb-lg-0">
								<div className="card">
									<div className="card-body py-5 px-md-5">
										<form onSubmit={handleSubmit}>
											<div className="row">
												<div className="mb-4">
													<div className="d-flex">
														<FaTruck size={50} />
														<h1>&nbsp;Fleet Control</h1>
													</div>
													<p className="fw-lighter fs-4">
														Para acessar sua conta realize o login
													</p>
												</div>
											</div>

											<div className="form-outline mb-4">
												<input
													type="email"
													id="form3Example3"
													name="email"
													className="form-control"
													value={formData.email}
													onChange={handleInputChange}
													placeholder="Endereço de email"
												/>
											</div>

											<div className="form-outline mb-4">
												<input
													type="password"
													id="form3Example4"
													name="password"
													className="form-control"
													value={formData.password}
													onChange={handleInputChange}
													placeholder="Senha"
												/>
											</div>
											<div className="d-flex">
												<button
													type="submit"
													className="btn btn-primary btn-block mb-4 w-100 mt-3">
													Entrar
												</button>
											</div>
											<div className="text-center">
												<p>ou acesse com:</p>
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

export default Login;
