import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";

import WishList from "./components/WishList";
import ProfilePage from "./components/ProfilePage";
import { AuthProvider } from "./context/AuthProvider";

import { CartProvider } from "react-use-cart";
import "./index.css";

import { Route, Routes } from "react-router-dom";
import { StateProvider } from "./components/states/StateProvider";
import reducer, { initialState } from "./components/states/reducer";

function App() {
  return (
    <>
      {/* <CartProvider> */}
      <StateProvider initialState={initialState} reducer={reducer}>
        <AuthProvider>
          <Navbar />

          <div className="container">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/profilepage" element={<ProfilePage />} />
            </Routes>
          </div>

          <Footer />
        </AuthProvider>
      </StateProvider>
      {/* </CartProvider> */}
    </>
  );
}

export default App;
