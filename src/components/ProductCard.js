import React from "react";
import "./styles/ProductCard.css";
import { useCart } from "react-use-cart";
import { useState } from "react";
import styled from "styled-components";
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

  const RedColor = () => 
  {
    // The constant RedColor stores a function
    setIconOneColor("red");
    // that changes the value of iconOneColor to red
  };

  const { addItem } = useCart();
  return (
    <div className="CardContainer">
      <div className="card-body">
        <h6 className="card-title">{proparty.title}</h6>
        {/* <h6 class="card-text">{proparty.category}</h6> */}
      </div>
      <div>
        <img src={proparty.img} className="card-img-top" alt="" />
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
