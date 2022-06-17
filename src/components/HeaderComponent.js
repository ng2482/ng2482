import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/HeaderFooter.css';


class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: 'profile'
        }
        
    }

    componentDidMount(){
        this.setState({user : this.props.userName})
    }


    render() {
        return (
            <div>
                <div className="fixed-header">
                    <div className="container">  
                        <nav>
                            <span className="logo"> E-ShoppingZone</span>
                            <Link to={'/'} >Home</Link>
                            <Link to={'/'} >Cart</Link>
                            <Link to={'/'} >Order</Link>
                            <Link to={'/profile'} >{this.state.user}</Link>
                            <Link to={'/login'}>login</Link>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;