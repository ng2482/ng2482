import axios from 'axios';

const cart_url = "http://localhost:8079/api/cart/user/";
class CartService {
    async getCart(cartId) {
        return axios.get(cart_url + `getcart/${cartId}`);
    }
    addToCart(username, productId) {
        axios.post(cart_url + `additem/${username}/${productId}`)
    }

    updateCart(username, productId, quantity) {
        axios.put(cart_url + `updateitem/${username}/${productId}/${quantity}`)
    }

    deleteCartItem(username, productId) {
        axios.delete(cart_url + `deleteitem/${username}/${productId}`)
    }

    deleteCart(username) {
        axios.delete(cart_url + `deletecart/${username}`)
    }
}

export default new CartService();