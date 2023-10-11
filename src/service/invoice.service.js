import axios from "axios";

const API_URL = "http://localhost:8080"; 

class InvoiceService {

    saveInvoice(invoice) {
        console.log(invoice);
        return axios.post(API_URL + "/invoice", invoice);
    }

    getAllInvoice() {
        return axios.get(API_URL + "/invoice");
    }

    getInvoiceById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteInvoice(id) {
        return axios.delete(API_URL + "/invoice/" + id);
    }

    editInvoice(invoice) {
        return axios.post(API_URL + "/invoice/" + invoice.id, invoice);
    }

}

export default new InvoiceService;