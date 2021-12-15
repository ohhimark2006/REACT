import React, { Component } from 'react'
import { ProductConsumer } from './Context'
import { Button } from './Button';

export default class CartList extends Component {
    render() {
        let {id, img, count, total, price} = this.props.product;
        return (
            <ProductConsumer>
                 {
                     value => {
                         return (
                             <div className="row">
                                 <div className="col-md-2">
                                    <img src={img} style={{"width": "50px"}} />
                                 </div>
                                 <div className="col-md-2">
                                     <Button>+</Button>
                                 </div>
                                 <div className="col-md-2">
                                     <Button>-</Button>
                                 </div>
                                 <div className="col-md-2">
                                     Price {price}
                                 </div>
                                 <div className="col-md-2">
                                     Count {count}
                                 </div>
                                 <div className="col-md-2">
                                     Total {total}
                                 </div>
                             </div>
                         )
                     }
                 }
             </ProductConsumer>
        )
    }
}
