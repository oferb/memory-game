import { render, screen } from '@testing-library/react';
import App from './App';

test('renders New game button', () => {
  render(<App />);
  const linkElement = screen.getByText(/New game/i);
  expect(linkElement).toBeInTheDocument();
});
