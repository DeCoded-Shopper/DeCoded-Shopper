import Navbar from "./Navbar";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Register  from "./pages/Register";
import Products from "./pages/Products";
import WishList  from "./pages/WishList";
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