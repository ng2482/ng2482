import axios from 'axios';

const productList_url = "http://localhost:8079/api/product/user/getAll";
const admin_url = "http://localhost:8079/api/product/admin/";
class ProductService {
    constructor() {
        this.id = null;

    }
    productId = (id) => {
        if (!id) return this.id;
        this.id = id;
    }
    getProducts() {
        return axios.get(productList_url);
    }

    async getByProductId(productId) {
        return await axios.get(admin_url + `getById/${productId}`);
    }

    async updateProduct(product) {
        return await axios.put(`http://localhost:9002/admin/update/${this.id}`, product);
    }

    async addProduct(product) {
        return await axios.post(`http://localhost:9002/admin/addProduct/`, product);
    }

    async deleteProduct(productId) {
        return await axios.delete(`http://localhost:9002/admin/deleteproduct/${productId}`);
    }
}
const instance = new ProductService()
export default instance;
