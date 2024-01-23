import axios from "axios"; 

class DrivingHours {

    saveDrivingHours(drivingHours) {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/driving-hours`, drivingHours);
        } catch (e) {
            throw e;
        }
    }

    getAllDrivingHours() {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/driving-hours`);
        } catch (e) {
            throw e;
        }
    }

    getDrivingHoursById(id) {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/driving-hours/` + id);
        } catch (e) {
            throw e;
        }
    }

    getDrivingHoursByDriver(driverId) {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/driving-hours/driver/` + driverId);
        } catch (e) {
            throw e;
        }
    }

    deleteDrivingHours(id) {
        try {
            return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/driving-hours/` + id);
        } catch (e) {
            throw e;
        }
    }

    editDrivingHours(drivingHours) {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/driving-hours/` + drivingHours.id, drivingHours);
        } catch (e) {
            throw e;
        }
    }

}

export default new DrivingHours;