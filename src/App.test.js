import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Login from './Login';
import Register from './Register';

test('test email input', () => {
  render(<Login />);
  const EmailElement = screen.getByRole('textbox', { name : /Email/i});
  userEvent.type(EmailElement, 'singo1@gmail.com');
  
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

test('test footer', () => {
  render(<Footer />);
  const FooterElement = screen.getByText(/dc shopping 2022©/i);
  expect(FooterElement).toBeInTheDocument();
  
});

test('test Navbar', () => {
  render(<Navbar />);
  const NavbarElement = screen.getByRole('heading', {
    name: /dc shopping/i
  });
  expect(NavbarElement).toBeInTheDocument();
  
});
