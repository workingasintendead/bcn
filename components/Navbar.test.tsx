import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders the logo image', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('BCN Logo');
    expect(logo).toBeInTheDocument();
  });

  it('applies hover effect to logo', () => {
    render(<Navbar />);

    const logo = screen.getByAltText('BCN Logo');

    expect(logo).toHaveClass('object-contain');

    fireEvent.mouseOver(logo);

    expect(logo).toHaveClass('hover:opacity-70');
  });

  it('renders the navbar links', () => {
    render(<Navbar />);

    screen.getByText(/Archive/i);

    screen.getByText(/Mission/i);

    screen.getByText(/Connect/i);
  });
});
