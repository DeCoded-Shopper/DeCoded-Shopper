import React from "react";
import { useCart } from "react-use-cart";
import "./styles/wishlist.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Wishlist = () => {
  const {
    isEmpty,
    items,
    totalItems,
    totalUniqueItems,
    removeItem,
  } = useCart();

  //this massage will display if the wishlist is empth

  let sum = 0;
  // if (isEmpty) {
  //   return <h1 className="text-center">Your shopping wishlist is empty </h1>;
  // }

  if (!isEmpty) {
    items.forEach((item) => {
      sum += item.price;
    });
  }
  sum = sum.toFixed(2);
  return (
    // this will return table of all items in wishlist
    <>
      <div className="totalitem__wishlist">
        <p data-testid="wishlisttotal-items">Wishlist total items:</p>
        <p className="wishlistCard__totalitem">{totalUniqueItems}</p>
      </div>
      <table data-testid="wishlisttotal-itemsTable" className="wishlist__table">
        {items.map((item, index) => {
          return (
            <div className="product__wishCard">
              <div className="wishlistCard__image">
                <img
                  src={item.image}
                  style={{ height: "6rem", width: "6rem" }}
                  alt=""
                ></img>
              </div>
              <p className="wishlistCard__name">
                {item.title.substring(0, 25)}
              </p>
              <p className="wishlistCard__price">R {item.price}</p>
              <div className="wishlistCard__deleteButton">
                <DeleteOutlineIcon
                  onClick={() => removeItem(item.id)}
                ></DeleteOutlineIcon>
              </div>
            </div>
          );
        })}
      </table>
      <div className="total__wishlist">
        <p data-testid="wishlisttotal-amount">Wishlist price total: </p>
        <p className="wishlistCard__totalprice">R {sum}</p>
        <button
          className="wishlistCard__clearall"
          data-testid="clear_all"
          onClick={() => {
            items.forEach((item) => {
              removeItem(item.id);
            });
          }}
        >
          Clear wishlist
        </button>
      </div>
    </>
  );
};
export default Wishlist;
