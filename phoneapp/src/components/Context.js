import {storeProducts} from '../data'; // later with REST api calls

import React from 'react';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
    state = {
        products : [],
        cart: []
    }   

    componentDidMount() {
        let prds = [];
        storeProducts.forEach( p => {
            prds.push({...p});
        });

        this.setState({
            products: prds
        })
    }

    addToCart = (id) =>{
        let prd = this.state.products.filter(p => p.id === id)[0];
        prd.inCart = true;
        prd.count = 1;
        prd.total = prd.price;

        let cpy = this.state.cart;
        cpy.push(prd);
        this.setState({
            cart: cpy
        })
    }

    render() {
        return <ProductContext.Provider value={{...this.state, addToCart: this.addToCart}}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductContext, ProductConsumer};

