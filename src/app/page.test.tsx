import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders the logo image', () => {
    render(<Home />);

    const logo = screen.getByAltText('BCN logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the ENGAGE button', () => {
    render(<Home />);

    const button = screen.getByText(/ENGAGE/i);
    expect(button).toBeInTheDocument();
  });
});
