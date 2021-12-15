import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { ProductConsumer } from './Context';

export default class Product extends Component {
    render() {
        let {id, img, inCart} = this.props.product;
        return (
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="card my-2">
                    <div className="img-container">
                        <Link to={`/details/${id}`}>
                             <img src={img} className="card-img-top"/>
                        </Link>
                        <ProductConsumer>
                            {
                                value => {
                                    return (
                                    inCart ? <Button className="cart-btn">InCart</Button> :
                                    <Button 
                                    onClick={() => value.addToCart(id)}
                                    className="cart-btn fa fa-cart-plus"></Button>)
                                }
                            }
                         </ProductConsumer>
                    </div>
                 </div>
            </div>
        )
    }
}
