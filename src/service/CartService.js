import axios from 'axios';

const cart_url = "http://localhost:8079/api/cart/user/";
class CartService {
    async getCart(cartId) {
        return axios.get(cart_url + `getcart/${cartId}`);
    }
    addToCart(username, productId) {
        axios.post(`http://localhost:8079/api/cart/user/additem/${username}/${productId}`)
    }

    updateCart(username, productId, quantity) {
        axios.put(`http://localhost:9003/user/updateitem/${username}/${productId}/${quantity}`)
    }

    deleteCartItem(username, productId) {
        axios.delete(`http://localhost:9003/user/deleteitem/${username}/${productId}`)
    }

    deleteCart(username) {
        axios.delete(`http://localhost:9003/user/deletecart/${username}`)
    }
}

export default new CartService();