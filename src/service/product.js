import axios from "axios";

class Product {

    saveProduct = async (product) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/product`, product);
        } catch (e) {
            throw e;
        }
    }

    getAllProduct = async () => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/product`);
        } catch (e) {
            throw e;
        }
    }

    getProductById = async (id) => {
        try {
            return axios.get(`${import.meta.env.VITE_API_BASE_URL}/product/` + id);
        } catch (e) {
            throw e;
        }
    }

    deleteProduct = async (id) => {
        try {
            return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/product/` + id);
        } catch (e) {
            throw e;
        }
    }

    editProduct = async (product) => {
        try {
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/product/` + product.id, product);
        } catch (e) {
            throw e;
        }
    }

}

export default new Product;