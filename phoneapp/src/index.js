import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from './components/Context';

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>
  ,
  document.getElementById('root')
);
 
reportWebVitals();
