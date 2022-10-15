import React from "react";
import { useCart } from "react-use-cart";
import "./styles/wishlist.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Wishlist = () => {
  const { isEmpty, items, totalItems, removeItem } = useCart();

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
        <p data-testid="wishlisttotal-items">
          Wishlist total items: {totalItems}
        </p>
      </div>
      <table className="wishlist__table">
        {items.map((item, index) => {
          return (
            <tbody>
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    style={{ height: "6rem", width: "6rem" }}
                    alt=""
                  ></img>
                </td>
                <td> {item.title} </td>
                <td> </td>
                <td> R {item.price} </td>
                <td> </td>
                <td>
                  {" "}
                  <DeleteOutlineIcon onClick={() => removeItem(item.id)}>
                    {" "}
                  </DeleteOutlineIcon>{" "}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div className="total__wishlist">
        <p data-testid="wishlisttotal-amount">Wishlist price total: R {sum}</p>
      </div>
      <button
        data-testid="clear_all"
        onClick={() => {
          items.forEach((item) => {
            removeItem(item.id);
          });
        }}
      >
        Clear wishlist
      </button>
    </>
  );
};
export default Wishlist;
