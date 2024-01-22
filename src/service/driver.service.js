import axios from "axios";

class DriverService {

    saveDriver(driver) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/driver`, driver);
    }

    getAllDriver() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/driver`);
    }

    getDriverById(id) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/driver/` + id);
    }

    getDriverByName(name) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/driver/name/` + name);
    }

    deleteDriver(id) {
        return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/driver/` + id);
    }

    editDriver(driver) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/driver/` + driver.id, driver);
    }

}

export default new DriverService;