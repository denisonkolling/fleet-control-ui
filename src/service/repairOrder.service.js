import axios from "axios"; 

class RepairOrderService {

    saveRepairOrder(repairOrder) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/repair-order`, repairOrder);
    }

    getAllRepairOrder() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/repair-order`);
    }

    getRepairOrderById(id) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/` + id);
    }

    deleteRepairOrder(id) {
        return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/repair-order/` + id);
    }

    editRepairOrder(repairOrder) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/repair-order/` + repairOrder.id, repairOrder);
    }

}

export default new RepairOrderService;