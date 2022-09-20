import React from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register  from "./components/Sign_Up/Register";
import Products from "./components/Products";
import WishList  from "./components/WishList";
import { CartProvider } from 'react-use-cart';
import "./index.css";
import { AuthProvider } from './context/AuthProvider';

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <CartProvider>
    <Navbar />
      <AuthProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
      </AuthProvider>
      <Footer/>
    </CartProvider>
      
    </>
  )
}

export default App