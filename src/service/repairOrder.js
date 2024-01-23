import axios from "axios"; 

class RepairOrder {

    saveRepairOrder = async (repairOrder) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/repair-order`, repairOrder);
        } catch (e) {
            throw e;
        }
    }

    getAllRepairOrder = async () => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/repair-order`);
        } catch (e) {
            throw e;
        }
    }

    getRepairOrderById = async (id) => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/` + id);
        } catch (e) {
            throw e;
        }
    }

    deleteRepairOrder = async (id) => {
        try {
            return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/repair-order/` + id);
        } catch (e) {
            throw e;
        }
    }

    editRepairOrder = async (repairOrder) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/repair-order/` + repairOrder.id, repairOrder);
        } catch (e) {
            throw e;
        }
    }

}

export default new RepairOrder;