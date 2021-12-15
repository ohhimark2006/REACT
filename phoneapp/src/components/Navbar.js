import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm  navbar-dark bg-primary">
                <Link to="/">
                    <i className="navbar-brand">
                        CISCO
                    </i>
                </Link>
                <ul className="navbar-nav align-items-center">
                <li className="nav-items ml-5">
                <Link to="/products" className="nav-link">   
                    Products
                </Link>   
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">   
                <Button cart>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus mr-2" />
                     My Cart
                    </span>
                </Button>
            </Link>
            </nav>

        );
    }
}

export default Navbar;