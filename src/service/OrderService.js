import axios from 'axios'

class OrderService {
    async addOrder(username) {
        return await axios.post(`http://localhost:8079/api/order/user/addOrder/${username}`)
    }
    async updateOrder(orderId) {
        axios.put(`http://localhost:9004/user/updateOrder/${orderId}`)
    }

}

export default new OrderService();
