import axios from "axios";

class TyreService {

    saveTyre(tyre) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/tyre`, tyre);
    }

    getAllTyre() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/tyre`);
    }

    getTyreById(id) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/` + id);
    }

    deleteTyre(id) {
        return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/tyre/` + id);
    }

    editTyre(tyre) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/tyre/` + tyre.id, tyre);
    }

    getTyreReading(id){
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/tyre-reading/` + id);
    }
}

export default new TyreService;