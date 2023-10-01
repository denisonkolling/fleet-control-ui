import axios from "axios";

const API_URL = "http://localhost:8080"; 

class ExpenseService {

    saveExpense(repairOrder) {
        return axios.post(API_URL + "/expense", repairOrder);
    }

    getAllExpense() {
        return axios.get(API_URL + "/expense");
    }

    getExpenseById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteExpense(id) {
        return axios.delete(API_URL + "/expense/" + id);
    }

    editExpense(repairOrder) {
        return axios.post(API_URL + "/expense/" + repairOrder.id, repairOrder);
    }

}

export default new ExpenseService;