import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Products from "../Products";
import ProductCard from "../ProductCard";
import userEvent from "@testing-library/user-event";
import { CartProvider, useCart } from "react-use-cart";
import Wishlist from "../WishList";
import { AuthProvider } from "../../context/AuthProvider";
import { Router } from "react-router-dom";

afterEach(cleanup);
test("testing product card add to cart button", () => {
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
  const addButtonElement = screen.getByTestId("wishTotal");
  expect(addButtonElement).toBeInTheDocument();
});

test("testing product card shows price", () => {
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
  const ProductCardPriceElement = screen.getByTestId("pcardPrice");
  expect(ProductCardPriceElement).toBeInTheDocument();
});

test("testing product all total", () => {
  render(<Products />);
  const productAllElement = screen.getByText(/all products/i);
  expect(productAllElement).toBeInTheDocument();
});

test("testing recomended total div", () => {
  render(<Products />);

  const recommendedDivElement = screen.getByTestId("productstotal-items");
  expect(recommendedDivElement).toBeInTheDocument();
});

test("testing products total div", () => {
  render(<Products />);

  const allproductDivElement = screen.getByTestId("allproducts-div");
  expect(allproductDivElement).toBeInTheDocument();
});
