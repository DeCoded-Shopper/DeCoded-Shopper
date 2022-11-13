import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Wishlist from "../WishList";
import reducer, { initialState } from "../states/reducer";
import { StateProvider } from "../states/StateProvider";

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
