import { render, screen, fireEvent } from '@testing-library/react';
import Landing from './page';
import '@testing-library/jest-dom';

describe('Landing Page', () => {
  it('renders the logo image', () => {
    render(<Landing />);
    const logo = screen.getByAltText('BCN Logo');
    expect(logo).toBeInTheDocument();
  });

  it('applies hover effect to logo', () => {
    render(<Landing />);

    const logo = screen.getByAltText('BCN Logo');

    expect(logo).toHaveClass('object-contain');

    fireEvent.mouseOver(logo);

    expect(logo).toHaveClass('hover:opacity-70');
  });
});
