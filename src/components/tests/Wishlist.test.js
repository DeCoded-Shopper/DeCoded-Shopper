import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Wishlist from "../WishList";
import reducer, { initialState } from "../states/reducer";
import { StateProvider } from "../states/StateProvider";
import ProductCard from "../ProductCard";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

test("testing wishlist clear all", () => {
  render(
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Wishlist />
      </StateProvider>
    </>
  );
  const wishClearallElement = screen.getByRole("button", {
    name: /clear wishlist/i,
  });
  expect(wishClearallElement).toBeInTheDocument();
});

test("testing wishlist delete all item button", () => {
  const productItem = [
    {
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      category: "men's clothing",
    },
  ];

  render(
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Wishlist />
        <ProductCard property={productItem} />
      </StateProvider>
    </>
  );

  const addButtonElement = screen.getByTestId("adding_wishlist");
  userEvent.click(addButtonElement);

  const wishDeletetAllBtnItemElement = screen.getByTestId("clear_all");
  userEvent.click(wishDeletetAllBtnItemElement);
  const wishTotalItemValueElement = screen.getByTestId(
    "wishlisttotalvalue__totalitem"
  );
  expect(wishTotalItemValueElement).toHaveTextContent("0");
});

test("testing wishlist delete item button", () => {
  const productItem = [
    {
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      category: "men's clothing",
    },
  ];

  render(
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Wishlist />
        <ProductCard property={productItem} />
      </StateProvider>
    </>
  );

  const addButtonElement = screen.getByTestId("adding_wishlist");
  userEvent.click(addButtonElement);

  const wishDeletetBtnItemElement = screen.getByTestId("wish__deleteItem");
  userEvent.click(wishDeletetBtnItemElement);
  const wishTotalItemValueElement = screen.getByTestId(
    "wishlisttotalvalue__totalitem"
  );
  expect(wishTotalItemValueElement).toHaveTextContent("0");
});

test("testing wishlist item price", () => {
  const productItem = [
    {
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      category: "men's clothing",
    },
  ];

  render(
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Wishlist />
        <ProductCard property={productItem} />
      </StateProvider>
    </>
  );

  const addButtonElement = screen.getByTestId("adding_wishlist");
  userEvent.click(addButtonElement);

  const wishItemPriceValueElement = screen.getByTestId("wishlist__price");
  expect(wishItemPriceValueElement).toHaveTextContent("R");
});

test("testing wishlist item total", () => {
  render(
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Wishlist />
      </StateProvider>
    </>
  );
  const wishTotalItemElement = screen.getByTestId("wishlisttotal-items");
  expect(wishTotalItemElement).toBeInTheDocument();
});

test("testing wishlist cost total", () => {
  render(
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Wishlist />
      </StateProvider>
    </>
  );
  const wishTotalAmountElement = screen.getByTestId("wishlisttotal-amount");
  expect(wishTotalAmountElement).toBeInTheDocument();
});

test("testing wishlist cost total", () => {
  render(
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Wishlist />
      </StateProvider>
    </>
  );
  const wishTotalAmountElement = screen.getByTestId("wishlisttotal-amount");
  expect(wishTotalAmountElement).toBeInTheDocument();
});
