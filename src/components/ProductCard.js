import React from "react";
import "./styles/ProductCard.css";
import { useCart } from "react-use-cart";
import { useState } from "react";
import styled from "styled-components";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const ChangeIconColorOnce = styled.div`
  height: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none !important;
`;

const ProductCard = (proparty) => {
  //this will return a card that consist of a product with button to add on wishlist

  const [iconOneColor, setIconOneColor] = useState("gray");

  const RedColor = () => {
    // The constant RedColor stores a function
    setIconOneColor("red");
    // that changes the value of iconOneColor to red
  };

  const { addItem } = useCart();
  return (
    <div data-testid="wishTotal" className="CardContainer">
      <div data-testid="wishImg" className="card-body">
        <h6 data-testid="wish" className="card-title">
          {proparty.title?.substring(0, 25)}
        </h6>
        <p data-testid="pcardPrice" className="card-price">
          Price: R {proparty.price}
        </p>
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
    </div>
  );
};

export default ProductCard;