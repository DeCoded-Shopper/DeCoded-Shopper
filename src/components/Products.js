import React, { useState, useEffect } from "react";
import "../Product.css";
import ProductCard from "./ProductCard";
import axios from "axios";


const Products = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

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
    <div className="products-container">
      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )}
        {data.map((item, index) =>{
            return(
                <ProductCard title={item.title} category={item.category} img={item.image} item={item} key={index} />
            )
        })}
                
    </div>
    );
};

export default Products;
