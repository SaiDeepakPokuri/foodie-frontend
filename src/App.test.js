import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from './App';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/welcome back/i);
  expect(linkElement).toBeInTheDocument();
});
