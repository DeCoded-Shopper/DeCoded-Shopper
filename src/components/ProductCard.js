import React from "react";
import "./styles/ProductCard.css";
import { useCart } from "react-use-cart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";
import { useState } from "react";
import styled from "styled-components";
import { border } from "@mui/system";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const ProductCard = (proparty) => {
  //this will return a card that consist of a product with button to add on wishlist

  const ChangeIconColorOnce = styled.div`
    height: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none !important;
  `;

  const [iconOneColor, setIconOneColor] = useState("gray");

  const RedColor = () => {
    // The constant RedColor stores a function
    setIconOneColor("red");
    // that changes the value of iconOneColor to red
  };

  const { addItem } = useCart();
  return (
    <div class="CardContainer">
      <div class="card-body">
        <h6 class="card-title">{proparty.title}</h6>
        {/* <h6 class="card-text">{proparty.category}</h6> */}
      </div>
      <div>
        <img src={proparty.img} class="card-img-top" alt="" />
      </div>
      <ChangeIconColorOnce>
        <button
          style={{
            color: iconOneColor,
            backgroundColor: "transparent",
            border: "0",
          }}
          onClick={RedColor}
        >
          <FavoriteOutlinedIcon
            onClick={() => {
              addItem(proparty.item);
            }}
          >
            {" "}
          </FavoriteOutlinedIcon>
        </button>
      </ChangeIconColorOnce>

      {/* <FavoriteBorderIcon
        sx={{ color: red[500] }}
        onClick={() => {
          addItem(proparty.item);
        }}
      >
        {" "}
      </FavoriteBorderIcon> */}
    </div>
  );
};

export default ProductCard;
