import { render, screen } from '@testing-library/react';
import Archive from './page';

describe('Archive Page', () => {
  it('renders the "Edgewater Landscaping" text', () => {
    render(<Archive />);

    const text = screen.getByText(/Edgewater Landscaping/i);
    expect(text).toBeInTheDocument();
  });

  it('renders the Navbar component', () => {
    render(<Archive />);

    const logo = screen.getByAltText('BCN Logo');
    expect(logo).toBeInTheDocument();

    const archiveLink = screen.getByText(/Connect/i);
    expect(archiveLink).toBeInTheDocument();
  });
});
