import React, { Component } from 'react'
import CartService from '../service/CartService';
import LoginService from '../service/LoginService';
import HeaderComponent from './HeaderComponent';
import '../css/cartStyle.css'
import axios from 'axios';

export default class CartList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: {},
            productlist: [],
            quantity: 0
        }
    }
    componentDidMount() {
        this.getCart();
    }

    componentDidUpdate() {
        this.getCart();
    }

    getCart() {
        CartService.getCart(LoginService.id).then(res => {
            this.setState({ cart: res.data, productlist: res.data.items });
            if (res.data.items != null) {
                this.setState({ productlist: res.data.items })
                this.setState({ quantity: res.data.items.quantity })
            }
        }
        );
    }

    cartUpdate = (e, productId) => {
        let quantity = e.target.value
        let list = this.state.productlist.map((item) => {
            if (item.product.productId === productId) {
                const updatedItem = {
                    ...item,
                    quantity: quantity,
                };

                return updatedItem;
            }

            return item;
        });

        this.setState({ productlist: list });


        CartService.updateCart(LoginService.id, productId, quantity)
    }

    deleteItem(productId) {
        CartService.deleteCartItem(LoginService.id, productId)
    }

    clearCart() {
        CartService.deleteCart(LoginService.id)
    }

    placeOrder() {
        axios.post(`http://localhost:9005/submitPaymentDetail/by2900/900/by2900`)
    }

    render() {
        return (
            <div>
                <HeaderComponent userName={LoginService.id}></HeaderComponent>

                <div className="head1" >
                    <h3>UserName : {this.state.cart.cartId}</h3>
                    <h3>Total Price : {this.state.cart.totalPrice}</h3>
                    <div className="contant1">
                        {
                            this.state.productlist.map(
                                list =>

                                    <div className="card1" key={list.product.productId}>
                                        <div className="cardBody1">
                                            <h5 className="card1-title">{list.product.productName}</h5>
                                            <h6 className="price1">${list.product.price}</h6>
                                            <h6 className="category1">Quantity :
                                                <input type="number" value={list.quantity} className="category1" min="1" name="quantity" onChange={e => this.cartUpdate(e, list.product.productId)} />
                                            </h6>
                                            <h6 className="category1" >SubTotal : {list.subTotal}</h6><br />
                                            <div className="remove2">
                                                <button className="remove1" onClick={() => this.deleteItem(list.product.productId)}>Remove</button>
                                            </div>

                                        </div>

                                    </div>
                            )}
                    </div>
                    <br />
                    <div className="remove2">
                        <button className="remove3" onClick={() => this.placeOrder()} >Order</button>

                        <button className="remove1" onClick={() => this.clearCart()}>Clear</button>
                    </div>
                </div>
            </div>
        )
    }
}
