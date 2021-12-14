import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<ProductList />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
