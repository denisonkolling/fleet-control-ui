import axios from "axios";

class CustomerService {

    saveCustomer(customer) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/customer`, customer);
    }

    getAllCustomer() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/customer`);
    }

    getCustomerById(id) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/customer/` + id);
    }

    deleteCustomer(id) {
        return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/customer/` + id);
    }

    editCustomer(customer) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/customer/` + customer.id, customer);
    }

}

export default new CustomerService;