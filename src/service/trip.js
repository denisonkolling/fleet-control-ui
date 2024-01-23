import axios from "axios";

class Trip {

    saveTrip = async (trip) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/trip`, trip);
        } catch (e) {
            throw e;
        }
    }

    getAllTrip = async () => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/trip`);
        } catch (e) {
            throw e;
        }
    }

    getTripById = async (id) => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/trip/` + id);
        } catch (e) {
            throw e;
        }
    }

    deleteTrip = async (id) => {
        try {
            return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/trip/` + id);
        } catch (e) {
            throw e;
        }
    }

    editTrip = async (trip) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/trip/` + trip.id, trip);
        } catch (e) {
            throw e;
        }
    }

    getTripReading = async (id) => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/trip-reading/` + id);
        } catch (e) {
            throw e;
        }
    }
}

export default new Trip;