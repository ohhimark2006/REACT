import React, { Component } from 'react'
import { ProductConsumer } from './Context'
import CartList from './CartList';
import {ProductContext} from './Context';

// export default class Cart extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <ProductConsumer>
//                     {
//                         value => {
//                             return value.cart.map(p => <CartList product={p} key={p.id} />)
//                         }
//                     }
//                 </ProductConsumer>
//             </div>
//         )
//     }
// }


export default Cart = function() {
    let Context = React.useContext(ProductContext);
    let {cart} = Context;
    return (
                      <div className="container">
                       {
                          cart.map(p => <CartList product={p} key={p.id} />)       
                        }
                     </div>
                  )

}