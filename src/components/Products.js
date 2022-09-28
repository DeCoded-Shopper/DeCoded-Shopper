import React, { useState, useEffect } from "react";
import "../Product.css";
import ProductCard from "./ProductCard";
import axios from "axios";
import Select from 'react-select';


const Products = () => {


      const [searchTerm, setSearchTerm] = useState("");
      const [loading, setLoading] = useState(false);
      const [data, setData] = useState([]);

      const options = [
        { value: 'electronics', label: 'electronics' },
        { value: 'jewelery', label: 'jewelery' },
        { value: "men's clothing", label: "men's clothing" },
        {value:"women's clothing",label:"women's clothing"}
      ];
      const [selectedOption, setSelectedOption] = useState(null);

      

    // this will get all items from a nAPI
    useEffect(() => {
        setLoading(true);
        axios({
        method: "GET",
        url: "https://fakestoreapi.com/products/",

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
            <Select
          className="select"
          classNamePrefix="Category"
          isClearable={true}
          isSearchable={true}
          colour="Black"
          name="Category"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
    
      <div className="searchInput_Container">
        <input id="searchInput" type="text" placeholder="Search Product..." onChange={(event) => {
          setSearchTerm(event.target.value);
        }} />

      </div>
      <div className="products-container">
          
        {
          data 
            .filter((val) => {

              if(selectedOption==null){
                return val;
                
              }
              else if(val.category==selectedOption.value){
                console.log(selectedOption.value);
                return val;
              }
            })
            .filter((val)=>{
              if(searchTerm == ""){
                return val;
              }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            })
            .map((val) => {
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

export default Products;