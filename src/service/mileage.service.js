import axios from "axios";

const API_URL = "http://localhost:8080"; 

class MileageService {

    saveMileage(mileage) {
        return axios.post(API_URL + "/mileage", mileage);
    }

    getAllMileage() {
        return axios.get(API_URL + "/mileage");
    }

    getMileageById(id) {
        return axios.get(API_URL + "/mileage-reading/vehicle-id/" + id);
    }

    deleteMileage(id) {
        return axios.delete(API_URL + "/mileage/" + id);
    }

    editMileage(mileage) {
        return axios.post(API_URL + "/mileage/" + mileage.id, mileage);
    }

    getMileageReading(id){
        return axios.get(API_URL + "/mileage-reading/" + id);
    }
}

export default new MileageService;