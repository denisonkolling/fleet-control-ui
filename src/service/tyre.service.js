import axios from "axios";

const API_URL = "http://localhost:8080"; 

class TyreService {

    saveTyre(tyre) {
        return axios.post(API_URL + "/tyre", tyre);
    }

    getAllTyre() {
        return axios.get(API_URL + "/");
    }

    getTyreById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteTyre(id) {
        return axios.delete(API_URL + "/tyre/" + id);
    }

    editTyre(tyre) {
        return axios.post(API_URL + "/tyre/" + tyre.id, tyre);
    }

}

export default new TyreService;