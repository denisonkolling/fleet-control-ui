import axios from "axios";

const API_URL = "http://localhost:8080"; 

class RepairOrderService {

    saveRepairOrder(repairOrder) {
        return axios.post(API_URL + "/repair-order", repairOrder);
    }

    getAllRepairOrder() {
        return axios.get(API_URL + "/repair-order");
    }

    getRepairOrderById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteRepairOrder(id) {
        return axios.delete(API_URL + "/repair-order/" + id);
    }

    editRepairOrder(repairOrder) {
        return axios.post(API_URL + "/repair-order/" + repairOrder.id, repairOrder);
    }

}

export default new RepairOrderService;