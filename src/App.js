import React from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register  from "./components/Sign_Up/Register";
import Products from "./components/Products";
import WishList  from "./components/WishList";
import { AuthProvider } from './context/AuthProvider';

import { CartProvider } from 'react-use-cart';
import "./index.css";
import { AuthProvider } from './context/AuthProvider';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from './components/Homepage';

function App() {
  return (
    <>
    <CartProvider>
    <AuthProvider>
    <Navbar />
      <AuthProvider>
      <div className="container">
        
          <Routes>
            <Route path="/Homepage" element={<Homepage/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/register" element={<Register/>}/>
            <Route path='/products' element={<Products/>}/>
          </Routes>
        
      </div>
      </AuthProvider>
      <Footer/>
      </AuthProvider>
    </CartProvider>
      
    </>
  )
}

export default App