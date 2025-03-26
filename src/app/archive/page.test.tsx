import { render, screen } from '@testing-library/react';
import Archive from './page';

describe('Archive Page', () => {
  it('renders the Navbar component', () => {
    render(<Archive />);

    const logo = screen.getByAltText('BCN Logo');
    expect(logo).toBeInTheDocument();

    const archiveLink = screen.getByText(/Connect/i);
    expect(archiveLink).toBeInTheDocument();
  });

  it('renders at least one section with "project" text', () => {
    render(<Archive />);

    const sections = screen.getAllByText(/project/i);

    expect(sections.length).toBeGreaterThan(0);
  });
});
