import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import WishList from "./components/WishList";
import Products from "./components/Products";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

afterEach(cleanup);

test("Testing back to homepage buton", () => {
  render(
    <Router>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </Router>
  );
  const NavbarHomebuttonElement = screen.getByText(/decoded shopper/i);
  expect(NavbarHomebuttonElement).toBeInTheDocument();
  fireEvent.click(NavbarHomebuttonElement);
  const reloadHomepage = screen.getByText(/decoded shopper/i);
  expect(reloadHomepage).toBeInTheDocument();
});

test("Testing recomanded", () => {
  render(<Products />);

  const recomendedElement = screen.getByText(/recomanded products/i);
  expect(recomendedElement).toBeInTheDocument();
});

// teting the web footer
test("test footer", () => {
  render(<Footer />);
  const FooterElement = screen.getByText(/dc shopping 2022©/i);
  expect(FooterElement).toBeInTheDocument();
});

// teting the products loader
test("test search and category div ", () => {
  render(<Products />);
  const SearchDivElement = screen.getByTestId("search-manager");
  expect(SearchDivElement).toBeInTheDocument();
});

test("test products search by category", () => {
  render(<Products />);
  const SearchCategotyElement = screen.getByRole("combobox");
  expect(SearchCategotyElement).toBeInTheDocument();
});

test("test products search", () => {
  render(<Products />);
  const ProductsSearchElement = screen.getByRole("textbox");
  expect(ProductsSearchElement).toBeInTheDocument();
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

// // teting the Login email input

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

// teting the register name input
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

// teting the register email input

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

// teting the register phone input

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

// teting the register butoon input

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

test("test profile page", () => {
  render(
    <Router>
      <AuthProvider>
        <ProfilePage />
      </AuthProvider>
    </Router>
  );
  const profileHeaderElement = screen.getByRole("heading", {
    name: /please log in first/i,
  });
  expect(profileHeaderElement).toBeInTheDocument();
});
