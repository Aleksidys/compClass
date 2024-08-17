import { render, screen } from '@testing-library/react';
import ShopItemclass from './ShopItemclass';

test('renders learn react link', () => {
  render(<ShopItemclass />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

