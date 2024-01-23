import axios from "axios";

class Mileage {

    saveMileage = async (mileage) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/mileage`, mileage);
        } catch (e) {
            throw e;
        }
    }

    getAllMileage = async () => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/mileage`);
        } catch (e) {
            throw e;
        }
    }

    getMileageById = async (id) => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/mileage-reading/vehicle-id/` + id);
        } catch (e) {
            throw e;
        }
    }

    deleteMileage = async (id) => {
        try {
            return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/mileage/` + id);
        } catch (e) {
            throw e;
        }
    }

    editMileage = async (mileage) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/mileage/` + mileage.id, mileage);
        } catch (e) {
            throw e;
        }
    }

    getMileageReading = async (id) => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/mileage-reading/` + id);
        } catch (e) {
            throw e;
        }
    }
}

export default new Mileage;