import Navbar from "./Navbar";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Register  from "./pages/Register";
import Products from "./pages/Products";
import WishList  from "./pages/WishList";
import "./index.css";
import React, { Component } from "react";

import { Route, Routes } from "react-router-dom"
import { geolocated } from "react-geolocated";

class App extends Component{
  render(){
        // Check geolocation supported in
    // browser or not
    return this.props.isGeolocationAvailable ? (
 
      // Check location is enable in
      // browser or not
      this.props.isGeolocationEnabled ? (
 
        // Check coordinates of current
        // location is available or not
        this.props.coords ? (
          <div>
            <h1 style={{ color: "green" }}>GeeksForGeeks</h1>
            <h3 style={{ color: "red" }}>
              Current latitude and longitude of the user is
            </h3>
            <ul>
              <li>latitude - {this.props.coords.latitude}</li>
              <li>longitude - {this.props.coords.longitude}</li>
            </ul>
          </div>
        ) : (
          <h1>Getting the location data</h1>
        )
      ) : (
        <h1>Please enable location on your browser</h1>
      )
    ) : (
      <h1>Please, update your or change the browser </h1>
    );
  }
}

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}
export default geolocated()(App);
