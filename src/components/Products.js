import React, { useState, useEffect } from "react";
import "../Product.css";
import ProductCard from "./ProductCard";
import axios from "axios";


const Products = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    // this will get all items from a nAPI
    useEffect(() => {
        setLoading(true);
        axios({
        method: "GET",
        url: "https://fakestoreapi.com/products",
        })
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }, []);

    return(

      // loading all the product items in a products saying
    <div className="products-container">
      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )}
                
    </div>
    );
};

export default Products;
