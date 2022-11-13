import React, { useState, useEffect } from "react";
import "./styles/Product.css";

import ProductCard from "./ProductCard";
import axios from "axios";

import Select from "react-select";
import { database } from "./init-firebase";
import { onValue, ref } from "firebase/database";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);

  const options = [
    { value: "electronics", label: "electronics" },
    { value: "jewelery", label: "jewelery" },
    { value: "men's clothing", label: "men's clothing" },
    { value: "women's clothing", label: "women's clothing" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  // let dataUrl = "https://fakestoreapi.com/products/";
  const dbRef = ref(database, "products/");

  // useEffect(() => {
  //   onValue(dbRef, (DataSnapshot) => {
  //     setDatas(DataSnapshot.val());
  //   });
  // }, []);

  // this will get all items from an API
  useEffect(() => {
    // getProducts();
    setLoading(true);

    // axios({
    //   // method: "GET",
    //   url: dbRef,
    // })
    //   .then((res) => {
    //     setData(res.data);
    //   })
    //   .catch((e) => console.log(e))

    onValue(dbRef, (DataSnapshot) => {
      setDatas(DataSnapshot.val());
    });
    setLoading(false);
  }, []);
  return (
    // loading all the product items in a products saying
    <>
      <div data-testid="search-manager" className="flitter__bar">
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
          <input
            id="searchInput"
            type="text"
            placeholder="Search Product..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <p>Recomanded Products</p>
        <div
          data-testid="productstotal-items"
          className="recomanded__container"
        >
          {datas
            .filter((val) => {
              if (val.rating.rate > 4.6) {
                return val;
              }
            })

            .map((val) => {
              return (
                <ProductCard
                  id={val.id}
                  img={val.image}
                  price={val.price}
                  title={val.title}
                  category={val.category}
                />
              );
            })}
        </div>
      </div>
      <div>
        <p>All Products</p>
        <div data-testid="allproducts-div" className="products__container">
          {datas
            .filter((val) => {
              if (selectedOption == null) {
                return val;
              } else if (val.category === selectedOption.value) {
                return val;
              }
            })

            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <ProductCard
                  // title={val.title}
                  // price={val.price}
                  // category={val.category}
                  // img={val.image}
                  // item={val}
                  // key={val}

                  id={val.id}
                  img={val.image}
                  price={val.price}
                  title={val.title}
                  category={val.category}
                />
              );
            })}

          {/* <div className="">
            {loading && (
              <div>
                {" "}
                <h1>Loading...</h1>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Products;
