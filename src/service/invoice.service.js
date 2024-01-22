import axios from "axios";

class InvoiceService {

    saveInvoice(invoice) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/invoice`, invoice);
    }

    getAllInvoice() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/invoice`);
    }

    getInvoiceById(id) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/invoice` + id);
    }

    getInvoiceByNumber(number) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/invoice/number/` + number);
    }

    deleteInvoice(id) {
        return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/invoice/` + id);
    }

    editInvoice(invoice) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/invoice/` + invoice.id, invoice);
    }

}

export default new InvoiceService;