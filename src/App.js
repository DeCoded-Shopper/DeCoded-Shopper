import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register  from "./components/Register";
import Products from "./components/Products";
import WishList  from "./components/WishList";
import "./index.css";

import { Route, Routes } from "react-router-dom"

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

export default App