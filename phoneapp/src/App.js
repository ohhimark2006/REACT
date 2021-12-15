import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, {Suspense} from 'react';

import './App.css';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Navbar from './components/Navbar';

const Cart = React.lazy(() =>  import('./components/Cart'));


function App() {
  return (
    <div className="App">
    
      <Suspense fallback={<h1>Loading....</h1>}>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<ProductList />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
