import React from "react";
import "./styles/ProductCard.css";
import { useCart } from "react-use-cart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = (proparty) => {
  //this will return a card that consist of a product with button to add on wishlist

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
      <FavoriteBorderIcon onClick={() => addItem(proparty.item)}>
        {" "}
      </FavoriteBorderIcon>
    </div>
  );
};

export default ProductCard;
