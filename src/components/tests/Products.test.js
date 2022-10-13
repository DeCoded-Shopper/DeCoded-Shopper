import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Products from "../Products";
import ProductCard from "../ProductCard";
import userEvent from "@testing-library/user-event";
import { CartProvider, useCart } from "react-use-cart";
import Wishlist from "../WishList";

afterEach(cleanup);
// teting the web footer
// test("Testing a add button", () => {
//   const productItem = [
//     {
//       id: 1,
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       price: 109.95,
//       description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       rating: { rate: 3.9, count: 120 },
//     },
//   ];

//   render(<ProductCard property={productItem} />, <Products />);
//   const addButtonElement = screen.getByRole("button", {
//     name: /\{ additem\(proparty\.item\); \}\} > \{" "\}/i,
//   });
//   expect(addButtonElement).toBeInTheDocument();
// });
test("testing product card", () => {
  const productItem = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
  ];
  render(
    <>
      <CartProvider>
        <ProductCard property={productItem} />
      </CartProvider>
    </>
  );
  const addButtonElement = screen.getByTestId("adding_wishlist");
  expect(addButtonElement).toBeInTheDocument();
});

test("testing wishlist clear all", () => {
  render(
    <>
      <Wishlist />
    </>
  );
  const wishClearallElement = screen.getByRole("button", {
    name: /clear wishlist/i,
  });
  expect(wishClearallElement).toBeInTheDocument();
});

test("testing wishlist item total", () => {
  render(
    <>
      <Wishlist />
    </>
  );
  const wishTotalItemElement = screen.getByTestId("wishlisttotal-items");
  expect(wishTotalItemElement).toBeInTheDocument();
});

test("testing wishlist cost total", () => {
  render(
    <>
      <Wishlist />
    </>
  );
  const wishTotalAmountElement = screen.getByTestId("wishlisttotal-amount");
  expect(wishTotalAmountElement).toBeInTheDocument();
});
