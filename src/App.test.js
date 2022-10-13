import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

import Navbar from "./components/Navbar";
import WishList from "./components/WishList";
import Products from "./components/Products";

import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";

import ProfilePage from "./components/ProfilePage";

afterEach(cleanup);

// testing the web footer
test("test footer", () => {
  render(<Footer />);
  const FooterElement = screen.getByText(/dc shopping 2022©/i);
  expect(FooterElement).toBeInTheDocument();
});

// testing the products loader

test("test products loading", () => {
  render(<Products />);
  const ProductsLoadingElement = screen.getByRole("heading", {
    name: /loading\.\.\./i,
  });
  expect(ProductsLoadingElement).toBeInTheDocument();
});

// testing the search product bar
test("test products search", () => {
  render(<Products />);
  const ProductsSearchElement = screen.getByRole("textbox");
  expect(ProductsSearchElement).toBeInTheDocument();
});

//testing the navigation bar header
test("test Navbar header", () => {
  render(

    <Router>
      <AuthProvider>
        
        <Navbar />

      </AuthProvider>
    </Router>

  );

  const NavbarHeadElement = screen.getByText(/decoded shopper/i);
  expect(NavbarHeadElement).toBeInTheDocument();
});

test("test Navbar list", () => {
  render(
    
    <Router>
      <AuthProvider>
        
        <Navbar />

      </AuthProvider>
    </Router>

  );

  const NavbarListElement = screen.getByRole("list");
  expect(NavbarListElement).toBeInTheDocument();
});

// testing the Login email input

test("test email input", async () => {
  render(
    
    <Router>
      <AuthProvider>
        
        <Login />

      </AuthProvider>
    </Router>

  );

  const EmailElement = screen.getByRole("textbox", { name: /Email/i });
  userEvent.type(EmailElement, "singo@gmail.com");
});

// testing the register name input
test("test register name input", () => {
  render(
    
    <Router>
      <AuthProvider>
        
        <Register />

      </AuthProvider>
    </Router>

  );

  const FullNameElement = screen.getByRole("textbox", { name: /FullName/i });
  userEvent.type(FullNameElement, "Singo");
});

// testing the register email input

test("test register email input", () => {
  render(
    
    <Router>
      <AuthProvider>
        
        <Register />

      </AuthProvider>
    </Router>

  );
  const EmailElement = screen.getByRole("textbox", { name: /Email/i });
  userEvent.type(EmailElement, "singo1@gmail.com");
});

// testing the register phone input

test("test register phone input", () => {
  render(
    
    <Router>
      <AuthProvider>
        
        <Register />

      </AuthProvider>
    </Router>

  );

  const PhoneElement = screen.getByRole("textbox", { name: /Phone/i });
  userEvent.type(PhoneElement, "0725763430");
});

// testing the register butoon input
test("test register butoon input", () => {
  render(

    <Router>
      <AuthProvider>
        
        <Register />

      </AuthProvider>
    </Router>

  );
  
  const SignInElement = screen.getByRole("link", {
    name: /sign in/i,
  });
  userEvent.click(SignInElement);
});
