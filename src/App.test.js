import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from './components/Footer';

test('render text', () => {
  render(<App />);
  const text = screen.getByRole("navbar")
  expect(text).toBeInTheDocument();
});

test('testing footer ', () => {
  render(<Footer />);
  const text = screen.getByRole("paragraph")
  expect(text).toBeInTheDocument();
});
