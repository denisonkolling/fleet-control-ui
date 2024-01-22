import axios from "axios";

class ExpenseService {

    saveExpense(repairOrder) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/expense`, repairOrder);
    }

    getAllExpense() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/expense`);
    }

    getExpenseById(id) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/` + id);
    }

    deleteExpense(id) {
        return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/expense/` + id);
    }

    editExpense(repairOrder) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/expense/` + repairOrder.id, repairOrder);
    }

}

export default new ExpenseService;