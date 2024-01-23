import axios from "axios";

class Vehicle {

    saveVehicle = async (vehicle) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/vehicle`, vehicle);
        } catch (e) {
            throw e;
        }
    }

    getAllVehicle = async () => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/vehicle`);
        } catch (e) {
            throw e;
        }
    }

    getVehicleById = async (id) => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/vehicle/` + id);
        } catch (e) {
            throw e;
        }
    }

    getVehicleByPlate = async (plate) => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/vehicle/plate/` + plate);
        } catch (e) {
            throw e;
        }
    }

    deleteVehicle = async (id) => {
        try {
            return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/vehicle/` + id);
        } catch (e) {
            throw e;
        }
    }

    editVehicle = async (vehicle) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/vehicle-edit/` + vehicle.id, vehicle);
        } catch (e) {
            throw e;
        }
    }
}

export default new Vehicle();
