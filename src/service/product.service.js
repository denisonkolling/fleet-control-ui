import axios from "axios";

class ProductService {

    saveProduct(product) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/product`, product);
    }

    getAllProduct() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/product`);
    }

    getProductById(id) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/product/` + id);
    }

    deleteProduct(id) {
        return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/product/` + id);
    }

    editProduct(product) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/product/` + product.id, product);
    }

}

export default new ProductService;