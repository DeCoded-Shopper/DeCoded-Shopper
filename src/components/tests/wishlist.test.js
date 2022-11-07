import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Products from "../Products";
import ProductCard from "../ProductCard";
import userEvent from "@testing-library/user-event";
import { CartProvider, useCart } from "react-use-cart";
import Wishlist from "../WishList";
import { AuthProvider } from "../../context/AuthProvider";
import { Router } from "react-router-dom";

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

test("testing wishlist cost total", () => {
  render(
    <>
      <Wishlist />
    </>
  );
  const wishTotalAmountElement = screen.getByTestId("wishlisttotal-amount");
  expect(wishTotalAmountElement).toBeInTheDocument();
});

test("testing wishlist cost total", () => {
  render(
    <>
      <Wishlist />
    </>
  );
  const tableElement = screen.getByTestId("wishlisttotal-itemsTable");
  expect(tableElement).toBeInTheDocument();
});
