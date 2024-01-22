import axios from "axios";

class VehicleService {

    saveVehicle(vehicle) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/vehicle`, vehicle);
    }

    getAllVehicle() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/vehicle`);
    }

    getVehicleById(id) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/vehicle/` + id);
    }

    getVehicleByPlate(plate) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/vehicle/plate/` + plate);
    }

    deleteVehicle(id) {
        return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/vehicle/` + id);
    }

    editVehicle(vehicle) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/vehicle-edit/` + vehicle.id, vehicle);
    }

}

export default new VehicleService;