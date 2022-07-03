import axios from 'axios'

const order_url = "http://localhost:8079/api/order/user/";
class OrderService {
    constructor() {
        this.id = null;
    }
    orderId = (id) => {
        if (!id) return this.id;
        this.id = id;
    }
    async addOrder(username) {
        return await axios.post(order_url + `addOrder/${username}`)
    }
    async updateOrder(orderId) {
        axios.put(order_url + `updateOrder/${orderId}`)
    }
    async getOrder(orderId) {
        return await axios.get(order_url + `getByOrderId/${orderId}`)
    }
    async getUserOrder(username) {
        return await axios.get(order_url + `getTodaysOrders/${username}`)
    }
    async getUserAllOrder(username) {
        return await axios.get(order_url + `getOrder/${username}`)
    }


}

export default new OrderService();
