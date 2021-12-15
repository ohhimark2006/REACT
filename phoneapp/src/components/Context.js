import {storeProducts} from '../data'; // later with REST api calls

import React from 'react';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
    state = {
        products : []
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

    render() {
        return <ProductContext.Provider value={{...this.state}}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductContext, ProductConsumer};

