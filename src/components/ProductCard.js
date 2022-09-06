import React from "react";
import "../Card.css";
import { useCart } from "react-use-cart";

const ProductCard = (proparty) =>{

    const { addItem } = useCart();
    return(
            <div class="CardContainer">
                <div class="card-body">
                    <h6 class="card-title">{proparty.title}</h6>
                    <h6 class="card-text">{proparty.category}</h6>   
                </div>
                <div>
                    <img src={proparty.img} class="card-img-top"/>
                </div>
                <button class="btn-success" onClick={() => addItem(proparty.item)}>Add to wishlist</button>
            </div>
    )
}

export default ProductCard;