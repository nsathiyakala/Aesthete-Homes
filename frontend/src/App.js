
import './App.css';
import Home from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './pages/productDetails';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from 'react';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/cart';
import Products from './pages/products';
import AllProductDetails from './pages/allproductsDetail';

function App() {

  const [cartItem, setCartItems]=useState([])

  return (
    <div>
      
      <Router>
        <div>
          <ToastContainer position="top-center" theme="light" hideProgressBar={true} ></ToastContainer>
          <Header cartItem={cartItem}/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/featuredproducts/:id" element={<ProductDetails  cartItem={cartItem} setCartItems={setCartItems} />}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product/:id" element={<AllProductDetails cartItem={cartItem} setCartItems={setCartItems}/>}/>

            <Route path='/cart' element={<Cart cartItem={cartItem} setCartItems={setCartItems} />}/>
          </Routes> 
        </div>
      </Router>
      
      <Footer/>
    </div>
  );
}

export default App;
