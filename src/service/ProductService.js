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
        return await axios.put(admin_url + `update/${this.id}`, product);
    }

    async addProduct(product) {
        return await axios.post(admin_url + `addProduct/`, product);
    }

    async deleteProduct(productId) {
        return await axios.delete(admin_url + `deleteproduct/${productId}`);
    }
}
const instance = new ProductService()
export default instance;
