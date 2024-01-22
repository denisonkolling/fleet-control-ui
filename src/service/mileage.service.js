import axios from "axios";

class MileageService {

    saveMileage(mileage) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/mileage`, mileage);
    }

    getAllMileage() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/mileage`);
    }

    getMileageById(id) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/mileage-reading/vehicle-id/` + id);
    }

    deleteMileage(id) {
        return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/mileage/` + id);
    }

    editMileage(mileage) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/mileage/` + mileage.id, mileage);
    }

    getMileageReading(id){
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/mileage-reading/` + id);
    }
}

export default new MileageService;