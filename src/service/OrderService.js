import axios from 'axios'

class OrderService {
    constructor() {
        this.id = null;
    }
    orderId = (id) => {
        if (!id) return this.id;
        this.id = id;
    }
    async addOrder(username) {
        return await axios.post(`http://localhost:8079/api/order/user/addOrder/${username}`)
    }
    async updateOrder(orderId) {
        axios.put(`http://localhost:9004/user/updateOrder/${orderId}`)
    }
    async getOrder(orderId) {
        return await axios.get(`http://localhost:8079/api/order/user/getByOrderId/${orderId}`)
    }
    async getUserOrder(username) {
        return await axios.get(`http://localhost:8079/api/order/user/getTodaysOrders/${username}`)
    }
    async getUserAllOrder(username) {
        return await axios.get(`http://localhost:8079/api/order/user/getOrder/${username}`)
    }


}

export default new OrderService();
