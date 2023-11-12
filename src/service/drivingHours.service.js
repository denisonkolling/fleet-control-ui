import axios from "axios";

const API_URL = "http://localhost:8080"; 

class DrivingHoursService {

    saveDrivingHours(drivingHours) {
        return axios.post(API_URL + "/driving-hours", drivingHours);
    }

    getAllDrivingHours() {
        return axios.get(API_URL + "/driving-hours");
    }

    getDrivingHoursById(id) {
        return axios.get(API_URL + "/driving-hours" + id);
    }

    getDrivingHoursByDriver(driverId) {
        return axios.get(API_URL + "/driving-hours/driver/" + driverId);
    }

    deleteDrivingHours(id) {
        return axios.delete(API_URL + "/driving-hours/" + id);
    }

    editDrivingHours(drivingHours) {
        return axios.post(API_URL + "/driving-hours/" + drivingHours.id, drivingHours);
    }

}

export default new DrivingHoursService;