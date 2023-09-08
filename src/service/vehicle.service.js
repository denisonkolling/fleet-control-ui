import axios from "axios";

const API_URL = "http://localhost:8080"; 

class VehicleService {

    saveVehicle(vehicle) {
        return axios.post(API_URL + "/vehicle", vehicle);
    }

    getAllVehicle() {
        return axios.get(API_URL + "/");
    }

    getVwhicleById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteVehicle(id) {
        return axios.delete(API_URL + "/vehicle/" + id);
    }

    editVehicle(vehicle) {
        return axios.post(API_URL + "/vehicle/" + product.id, vehicle);
    }

}

export default new VehicleService;