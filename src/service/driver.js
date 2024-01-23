import axios from 'axios';

class Driver {
	saveDriver(driver) {
		try {
			return axios.post(`${import.meta.env.VITE_API_BASE_URL}/driver`, driver);
		} catch (e) {
			throw e;
		}
	}

	getAllDriver() {
		try {
			return axios.get(`${import.meta.env.VITE_API_BASE_URL}/driver`);
		} catch (e) {
			throw e;
		}
	}

	getDriverById(id) {
		try {
			return axios.get(`${import.meta.env.VITE_API_BASE_URL}/driver/` + id);
		} catch (e) {
			throw e;
		}
	}

	getDriverByName(name) {
		try {
			return axios.get(
				`${import.meta.env.VITE_API_BASE_URL}/driver/name/` + name
			);
		} catch (e) {
			throw e;
		}
	}

	deleteDriver(id) {
		try {
			return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/driver/` + id);
		} catch (e) {
			throw e;
		}
	}

	editDriver(driver) {
		try {
			return axios.post(
				`${import.meta.env.VITE_API_BASE_URL}/driver/` + driver.id,
				driver
			);
		} catch (e) {
			throw e;
		}
	}
}

export default new Driver();
