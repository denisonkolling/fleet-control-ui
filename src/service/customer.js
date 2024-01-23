import axios from 'axios';

class Customer {
	saveCustomer = async (customer) => {
		try {
			return await axios.post(
				`${import.meta.env.VITE_API_BASE_URL}/customer`,
				customer
			);
		} catch (e) {
			throw e;
		}
	};

	getAllCustomer = async () => {
		try {
			return axios.get(`${import.meta.env.VITE_API_BASE_URL}/customer`);
		} catch (e) {
			throw e;
		}
	};
	async getCustomerById(id) {
		try {
			return await axios.get(
				`${import.meta.env.VITE_API_BASE_URL}/customer/` + id
			);
		} catch (e) {
			throw e;
		}
	}

	async deleteCustomer(id) {
		try {
			return await axios.delete(
				`${import.meta.env.VITE_API_BASE_URL}/customer/` + id
			);
		} catch (e) {
			throw e;
		}
	}

	async editCustomer(customer) {
		try {
			return await axios.post(
				`${import.meta.env.VITE_API_BASE_URL}/customer/` + customer.id,
				customer
			);
		} catch (e) {
			throw e;
		}
	}
}

export default new Customer();
