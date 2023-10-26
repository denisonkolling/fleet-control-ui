import axios from "axios";

const API_URL = "http://localhost:8080"; 

class DriverService {

    saveDriver(driver) {
        return axios.post(API_URL + "/driver", driver);
    }

    getAllDriver() {
        return axios.get(API_URL + "/driver");
    }

    getDriverById(id) {
        return axios.get(API_URL + "/driver/" + id);
    }

    deleteDriver(id) {
        return axios.delete(API_URL + "/driver/" + id);
    }

    editDriver(driver) {
        return axios.post(API_URL + "/driver/" + driver.id, driver);
    }

}

export default new DriverService;