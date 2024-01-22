import axios from "axios"; 

class DrivingHoursService {

    saveDrivingHours(drivingHours) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/driving-hours`, drivingHours);
    }

    getAllDrivingHours() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/driving-hours`);
    }

    getDrivingHoursById(id) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/driving-hours/` + id);
    }

    getDrivingHoursByDriver(driverId) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/driving-hours/driver/` + driverId);
    }

    deleteDrivingHours(id) {
        return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/driving-hours/` + id);
    }

    editDrivingHours(drivingHours) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/driving-hours/` + drivingHours.id, drivingHours);
    }

}

export default new DrivingHoursService;