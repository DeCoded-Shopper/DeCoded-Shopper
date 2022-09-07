import React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import WishList from './components/WishList';
import Products from './components/Products';

test('test footer', () => {
  render(<Footer />);
  const FooterElement = screen.getByText(/dc shopping 2022©/i);
  expect(FooterElement).toBeInTheDocument();
  
});

test('test products loading', () => {
  render(<Products />);
  const ProductsLoadingElement = screen.getByRole('heading', { name: /loading\.\.\./i });
  expect(ProductsLoadingElement).toBeInTheDocument();
  
});

test('test products loading', () => {
  render(<Products />);
  const ProductsLoadingElement = screen.getByRole('heading', { name: /loading\.\.\./i });
  expect(ProductsLoadingElement).toBeInTheDocument();
  
});
test('test email input', () => {
  render(<Login />);
  const EmailElement = screen.getByRole('textbox', { name : /Email/i});
  userEvent.type(EmailElement, 'singo@gmail.com');
  
});

test('test register name input', () => {
  render(<Register />);
  const FullNameElement = screen.getByRole('textbox', { name : /FullName/i});
  userEvent.type(FullNameElement, 'Singo');
  
});



test('test register email input', () => {
  render(<Register />);
  const EmailElement = screen.getByRole('textbox', { name : /Email/i});
  userEvent.type(EmailElement, 'singo1@gmail.com');
  
});

test('test register phone input', () => {
  render(<Register />);
  const PhoneElement = screen.getByRole('textbox', { name : /Phone/i});
  userEvent.type(PhoneElement, '0725763430');
  
});

test('test register butoon input', () => {
  render(<Register />);
  const SignInElement = screen.getByRole('link', {
    name: /sign in/i
  });
  userEvent.click(SignInElement);
});


