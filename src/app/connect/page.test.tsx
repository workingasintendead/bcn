import { render, screen } from '@testing-library/react';
import Connect from './page';

describe('Connect Page', () => {
  it('renders the "Connect" text', () => {
    render(<Connect />);

    const ConnectText = screen.getByText(/CONNECT PAGE/i);
    expect(ConnectText).toBeInTheDocument();
  });

  it('renders the Navbar component', () => {
    render(<Connect />);

    const logo = screen.getByAltText('BCN Logo');
    expect(logo).toBeInTheDocument();

    const archiveLink = screen.getByText(/Mission/i);
    expect(archiveLink).toBeInTheDocument();
  });
});
