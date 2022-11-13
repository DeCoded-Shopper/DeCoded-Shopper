import React, { useContext } from "react";
import "./styles/ProductCard.css";
import { useCart } from "react-use-cart";
import { useState } from "react";
import styled from "styled-components";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useStateValue } from "./states/StateProvider";
import { push, ref, set } from "firebase/database";
import { database } from "./init-firebase";
import AuthContext from "../context/AuthProvider";

const ChangeIconColorOnce = styled.div`
  height: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none !important;
`;

const ProductCard = (proparty) => {
  //this will return a card that consist of a product with button to add on wishlist
  const title = proparty.title;
  const price = proparty.price;
  const img = proparty.img;
  const id = proparty.id;
  const category = proparty.category;

  const [iconOneColor, setIconOneColor] = useState("gray");
  const [{ wishList }, dispatch] = useStateValue();
  // const { currentUser, logout } = useContext(AuthContext);

  const RedColor = () => {
    // The constant RedColor stores a function
    setIconOneColor("red");
    // that changes the value of iconOneColor to red
  };
  // const dbRef = ref(database, "wishlist/");

  // console.log("current user is ", currentUser);
  // const { addItem } = useCart();

  const addToWishList = () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      item: {
        id: id,
        title: title,
        price: price,
        img: img,
        category: category,
      },
    });
  };

  // const addToData = () => {
  //   if (currentUser != null) {
  //     push(dbRef, {
  //       //item: {
  //       // id: id,
  //       // title: title,
  //       // price: price,
  //       // img: img,
  //       // category: category,
  //       //wishList,
  //       // },
  //       user: currentUser.uid,
  //     });
  //   }
  // };

  return (
    <div data-testid="wishTotal" className="CardContainer">
      <div data-testid="wishImg" className="card-body">
        <h6 data-testid="wish" className="card-title">
          {title ? title.substring(0, 25) : ""}
        </h6>
        <p data-testid="pcardPrice" className="card-price">
          Price: R {price > 0 ? price.toFixed(2) : 0}
        </p>
        {/* <h6 class="card-text">{proparty.category}</h6> */}
      </div>
      <div>
        <img src={img} className="card-img-top" alt="" />
      </div>
      <ChangeIconColorOnce>
        <button
          data-testid="adding_towishlist"
          style={{
            color: iconOneColor,
            backgroundColor: "transparent",
            border: "0",
          }}
          onClick={RedColor}
        >
          <FavoriteOutlinedIcon
            data-testid="adding_wishlist"
            onClick={() => {
              // addItem(proparty.item);
              addToWishList();
              // addToData();
            }}
          >
            {" "}
          </FavoriteOutlinedIcon>
        </button>
      </ChangeIconColorOnce>
    </div>
  );
};

export default ProductCard;
