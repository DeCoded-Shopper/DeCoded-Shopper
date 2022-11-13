import React, { useEffect, useState } from "react";
// import { useCart } from "react-use-cart";
import "./styles/wishlist.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useStateValue } from "./states/StateProvider";
import { WishListTotalPrice } from "./states/reducer";
// import { database } from "./init-firebase";
// import { onValue, ref } from "firebase/database";

const Wishlist = () => {
  // const {
  //   isEmpty,
  //   items,
  //   totalItems,
  //   totalUniqueItems,
  //   removeItem,
  // } = useCart();

  const [{ wishList }, dispatch] = useStateValue();
  const [w, setW] = useState();

  // const dbRef = ref(database, "wishlist/");

  //this massage will display if the wishlist is empth

  let sum = 0;
  // if (isEmpty) {
  //   return <h1 className="text-center">Your shopping wishlist is empty </h1>;
  // }

  // useEffect(() => {
  //   onValue(dbRef, (DataSnapshot) => {
  //     setW(DataSnapshot.val());
  //   });
  // }, []);

  const RemoveFromWishList = (id) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id: id,
    });
  };

  // console.log(w);
  // const RemoveAllFromWishList = (id) => {
  //   dispatch({
  //     type: "REMOVE_FROM_WISHLIST",
  //   });
  // };
  // if (wishList.length > 0) {
  //   items.forEach((item) => {
  //     sum += item.price;
  //   });
  // }
  // sum = sum.toFixed(2);
  return (
    // this will return table of all items in wishlist
    <>
      <div className="totalitem__wishlist">
        <p data-testid="wishlisttotal-items">Wishlist total items:</p>
        <p
          data-testid="wishlisttotalvalue__totalitem"
          className="wishlistCard__totalitem"
        >
          {wishList.length > 0 ? wishList.length : 0}
        </p>
      </div>
      {/* <div data-testid="wishlisttotal-itemsTable" className="wishlist__table"> */}
      {wishList.map((item, index) => {
        return (
          <div key={index} className="product__wishCard">
            <div className="wishlistCard__image">
              <img
                src={item.img}
                style={{ height: "6rem", width: "6rem" }}
                alt=""
              ></img>
            </div>
            <p className="wishlistCard__name">
              {item.title ? item.title.substring(0, 25) : ""}
            </p>
            <p className="wishlistCard__price">
              R {item.price > 0 ? item.price.toFixed(2) : 0}
            </p>
            <div className="wishlistCard__deleteButton">
              <DeleteOutlineIcon
                onClick={() => RemoveFromWishList(item.id)}
              ></DeleteOutlineIcon>
            </div>
          </div>
        );
      })}
      {/* </div> */}
      <div className="total__wishlist">
        <p data-testid="wishlisttotal-amount">Wishlist price total: </p>
        <p className="wishlistCard__totalprice">
          <strong>R {WishListTotalPrice(wishList).toFixed(2)}</strong>
        </p>
        <button
          className="wishlistCard__clearall"
          data-testid="clear_all"
          onClick={() => {
            wishList.map((item) => {
              RemoveFromWishList(item.id);
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
