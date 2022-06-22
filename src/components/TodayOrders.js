import React, { Component } from 'react'
import OrderService from '../service/OrderService';
import LoginService from '../service/LoginService';
import HeaderComponent from './HeaderComponent';
import '../css/orderStyle.css'
import { Link } from 'react-router-dom';

export class TodayOrders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            order: [],
            productlist: [],
        }
    }
    componentDidMount() {
        OrderService.getUserOrder(LoginService.id).then(res => {
            console.log(res)
            this.setState({ order: res.data });
            this.setState({ productlist: res.data.items })

        }
        );
    }

    clearOrder() {
        OrderService.deleteOrder(LoginService.id)
    }



    render() {
        return (
            <div>
                <HeaderComponent userName={LoginService.id}></HeaderComponent>
                {this.state.order.map(
                    order =>

                        <div className="head2" key={order.orderId} >
                            <h3>UserName : {order.orderId}</h3>
                            <h3>Date : {order.orderDate}</h3>
                            <h3>Total Price : {order.totalPrice}</h3>
                            <h3>Order Status : {order.orderStatus}</h3>

                            <div className="contant2">
                                {
                                    order.items.map(
                                        list =>

                                            <div className="card2" key={list.product.productId}>
                                                <div className="cardBody2">
                                                    <h5 className="card1-title">{list.product.productName}</h5>
                                                    <h6 className="price2">${list.product.price}</h6>
                                                    <h6 className="category2">Quantity : {list.quantity}</h6>
                                                    <h6 className="category2" >SubTotal : {list.subTotal}</h6><br />
                                                </div>

                                            </div>
                                    )}
                            </div>
                            <br />

                        </div>
                )}
                <div className="remo">
                    <Link className="remove4" to={'/allorder'} >All Order</Link>
                </div>
            </div>

        )
    }
}


