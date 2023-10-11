import axios from "axios";

const API_URL = "http://localhost:8080"; 

class CustomerService {

    saveCustomer(customer) {
        return axios.post(API_URL + "/customer", customer);
    }

    getAllCustomer() {
        return axios.get(API_URL + "/customer");
    }

    getCustomerById(id) {
        return axios.get(API_URL + "/customer/" + id);
    }

    deleteCustomer(id) {
        return axios.delete(API_URL + "/customer/" + id);
    }

    editCustomer(customer) {
        return axios.post(API_URL + "/customer/" + customer.id, customer);
    }

}

export default new CustomerService;