import axios from "axios";

class Expense {

    saveExpense = async (repairOrder) => {
        try {
            return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/expense`, repairOrder);
        } catch (e) {
            throw e;
        }
    }

    getAllExpense = async () => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/expense`);
        } catch (e) {
            throw e;
        }
    }

    getExpenseById = async (id) =>  {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/` + id);
        } catch (e) {
            throw e;
        }
    }

    deleteExpense = async (id) =>  {
        try {
            return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/expense/` + id);
        } catch (e) {
            throw e;
        }
    }

    editExpense = async (repairOrder) =>  {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/expense/` + repairOrder.id, repairOrder);
        } catch (e) {
            throw e;
        }
    }

}

export default new Expense;