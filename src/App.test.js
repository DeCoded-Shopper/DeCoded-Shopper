import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Login from './Login';

test('test email input', () => {
  render(<Login />);
  const EmailElement = screen.getByRole('textbox', { name : /Email/i});
  userEvent.type(EmailElement, 'singo1@gmail.com');
  
});


