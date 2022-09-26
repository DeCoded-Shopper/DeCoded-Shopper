import React, { useState, useEffect } from "react";
import "../Product.css";
import ProductCard from "./ProductCard";
import axios from "axios";


const Homepage = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    // this will get all items from a nAPI
    useEffect(() => {
        setLoading(true);
        axios({
        method: "GET",
        url: "https://fakestoreapi.com/products?limit=2",
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
    <>
      <div className="products-container">
          
        {
          data.map((val) => {
              return(
                <ProductCard title={val.title} category={val.category} img={val.image} item={val} key={val} />
              )
            })
        }
        <div className="">
      {loading && (
        <div>
        {" "}
        <h1>Loading...</h1>
      </div>
    )}
      </div>
    </div>
  </>
  );


     
};

export default Homepage;
