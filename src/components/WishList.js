import React from "react";
import { Form } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./styles/wishlist.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Wishlist = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    removeItem,
  } = useCart();

  //this massage will display if the wishlist is empth

  let sum = 0;
  if (isEmpty)
    return <h1 className="text-center">Your shopping wishlist is empty </h1>;

  if (!isEmpty) {
    items.map((item) => {
      sum += item.price;
    });
  }

  console.log(sum);
  return (
    // this will return table of all items in wishlist
    <>
      <table className="wishlist__table">
        {items.map((item, index) => {
          return (
            (<h1></h1>),
            (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    style={{ height: "6rem", width: "6rem" }}
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
            )
          );
        })}
      </table>
      <div className="total__wishlist">
        <p>Wishlist price total: R {sum}</p>
      </div>
      <button
        onClick={() => {
          items.map((item) => {
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
