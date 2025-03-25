import { render, screen } from '@testing-library/react';
import Gateway from './page';

describe('Gateway Page', () => {
  it('renders the "Gateway" text', () => {
    render(<Gateway />);

    const GatewayText = screen.getByText(/GATEWAY PAGE/i);
    expect(GatewayText).toBeInTheDocument();
  });

  it('renders the Navbar component', () => {
    render(<Gateway />);

    const logo = screen.getByAltText('BCN Logo');
    expect(logo).toBeInTheDocument();

    const archiveLink = screen.getByText(/Archive/i);
    expect(archiveLink).toBeInTheDocument();
  });
});
