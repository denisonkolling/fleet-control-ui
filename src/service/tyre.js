import axios from "axios";

class Tyre {

    saveTyre = async (tyre) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/tyre`, tyre);
        } catch (e) {
            throw e;
        }
    }

    getAllTyre = async () => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/tyre`);
        } catch (e) {
            throw e;
        }
    }

    getTyreById = async (id) => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/tyre/` + id);
        } catch (e) {
            throw e;
        }
    }

    deleteTyre = async (id) => {
        try {
            return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/tyre/` + id);
        } catch (e) {
            throw e;
        }
    }

    editTyre = async (tyre) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/tyre/` + tyre.id, tyre);
        } catch (e) {
            throw e;
        }
    }

    getTyreReading = async (id) => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/tyre-reading/` + id);
        } catch (e) {
            throw e;
        }
    }

    saveTyreReading = async (tyreReading) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/tyre-reading`, tyreReading);
        } catch (e) {
            throw e;
        }
    }

}

export default new Tyre;