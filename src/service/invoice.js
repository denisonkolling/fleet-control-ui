import axios from "axios";

class Invoice {

    saveInvoice = async (invoice) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/invoice`, invoice);
        } catch (e) {
            throw e;
        }
    }

    getAllInvoice = async () => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/invoice`);
        } catch (e) {
            throw e;
        }
    }

    getInvoiceById = async (id) => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/invoice` + id);
        } catch (e) {
            throw e;
        }
    }

    getInvoiceByNumber = async (number) => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/invoice/number/` + number);
        } catch (e) {
            throw e;
        }
    }

    deleteInvoice = async (id) => {
        try {
            return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/invoice/` + id);
        } catch (e) {
            throw e;
        }
    }

    editInvoice = async (invoice) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/invoice/` + invoice.id, invoice);
        } catch (e) {
            throw e;
        }
    }

}

export default new Invoice;